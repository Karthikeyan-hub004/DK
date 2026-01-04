import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// --------------------
// Setup __dirname
// --------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("Starting server...");
console.log("__dirname:", __dirname);

// --------------------
// Load environment variables
// --------------------
// NOTE: On Render, env vars come from dashboard.
// This is ONLY for local development.
dotenv.config();

// --------------------
// Express app
// --------------------
const app = express();
const PORT = process.env.PORT || 5000;

console.log("Express app created.");

// --------------------
// CORS
// --------------------
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("Request from origin:", origin);
        callback(null, true); // allow for demo
      }
    },
  })
);

app.use(express.json());

// --------------------
// Groq setup
// --------------------
const api_key = process.env.GROQ_API_KEY;

if (!api_key) {
  console.error("❌ GROQ_API_KEY not found in environment variables");
}

const groq = new Groq({
  apiKey: api_key || "dummy-key", // prevent crash if missing
});

// --------------------
// Load Knowledge Base
// --------------------
let knowledgeBase = [];

try {
  const kbPath = path.join(__dirname, "knowledge.json");
  if (fs.existsSync(kbPath)) {
    const data = fs.readFileSync(kbPath, "utf8");
    knowledgeBase = JSON.parse(data);
    console.log(`✅ Loaded ${knowledgeBase.length} chunks from knowledge base.`);
  } else {
    console.warn("⚠️ knowledge.json not found.");
  }
} catch (err) {
  console.error("❌ Failed to load knowledge base:", err.message);
}

// --------------------
// RAG Retrieval
// --------------------
function retrieveContext(query) {
  if (!knowledgeBase.length) return "";

  const terms = query
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/)
    .filter((t) => t.length > 2);

  if (!terms.length) return "";

  const scored = knowledgeBase.map((chunk) => {
    let score = 0;
    const text = chunk.text.toLowerCase();

    terms.forEach((term) => {
      const regex = new RegExp(`\\b${term}\\b`, "g");
      const count = (text.match(regex) || []).length;
      score += count > 0 ? count * 10 : text.includes(term) ? 1 : 0;
    });

    return { chunk, score };
  });

  scored.sort((a, b) => b.score - a.score);

  const top = scored.slice(0, 3).filter((s) => s.score > 0);

  return top.map((s) => s.chunk.text).join("\n\n---\n\n");
}

// --------------------
// API Routes
// --------------------
app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message required" });
    }

    const context = retrieveContext(message);

    const systemPrompt = `
You are DomainDetector, a friendly career mentor.

${context ? `Context:\n${context}` : "Use general tech knowledge."}

Be helpful, concise, friendly, under 300 words.
`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      temperature: 0.7,
      max_tokens: 1024,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
    });

    const reply = completion.choices[0]?.message?.content || "";
    res.json({ reply });
  } catch (err) {
    console.error("❌ Groq error:", err.message);
    res.status(500).json({ error: "Chat failed" });
  }
});

app.get("/api/health", (req, res) => {
  res.json({ status: "Backend working" });
});

// --------------------
// Serve React build
// --------------------
app.use(express.static(path.join(__dirname, "../dist")));

// ✅ SPA fallback — SAFE FOR NODE 22
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

// --------------------
// Start server
// --------------------
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
