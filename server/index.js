import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("Starting server...");
console.log("__dirname:", __dirname);

try {
    dotenv.config({ path: path.resolve(__dirname, "../.env") });
    console.log("Dotenv configured.");
} catch (e) {
    console.error("Dotenv error:", e);
}

const app = express();
const PORT = process.env.PORT || 5000;

console.log("Express app created.");

// Allow requests from local dev and production domains
const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:3000",
    process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            // Optional: allow unknown origins for now if debugging, 
            // but best practice is to restrict. 
            // For simplicity in this demo, let's allow all if strict check fails 
            // or just log it.
            console.log("Request from origin:", origin);
            callback(null, true);
        }
    }
}));
app.use(express.json());

const api_key = process.env.GROQ_API_KEY;

if (!api_key) {
    console.error("❌ NO GROQ API KEY FOUND. Check .env path!");
}

const groq = new Groq({ apiKey: api_key || "gsk_skipped" }); // Prevent crash on init if key is missing

// Load Knowledge Base
let knowledgeBase = [];
try {
    const kbPath = path.join(__dirname, "knowledge.json");
    if (fs.existsSync(kbPath)) {
        const data = fs.readFileSync(kbPath, "utf8");
        knowledgeBase = JSON.parse(data);
        console.log(`✅ Loaded ${knowledgeBase.length} chunks from knowledge base.`);
    } else {
        console.warn("⚠️ knowledge.json not found. RAG will not function until ingested.");
    }
} catch (err) {
    console.error("❌ Failed to load knowledge base:", err.message);
}

// Simple Retrieval Function (TF-IDF style / Keyword Overlap)
function retrieveContext(query) {
    if (!knowledgeBase.length) return "";

    // Normalize query
    const terms = query.toLowerCase()
        .replace(/[^\w\s]/g, '')
        .split(/\s+/)
        .filter(t => t.length > 2); // Ignore short words

    if (terms.length === 0) return "";

    const scores = knowledgeBase.map(chunk => {
        const text = chunk.text.toLowerCase();
        let score = 0;

        // Term Frequency boosting
        terms.forEach(term => {
            // Count occurrences
            const regex = new RegExp(`\\b${term}\\b`, 'g');
            const count = (text.match(regex) || []).length;
            if (count > 0) {
                score += count * 10; // High weight for exact word matches
            } else if (text.includes(term)) {
                score += 1; // Low weight for partial matches
            }
        });

        return { chunk, score };
    });

    // Sort by score desc
    scores.sort((a, b) => b.score - a.score);

    // Take top 3 most relevant chunks
    const topChunks = scores.slice(0, 3).filter(s => s.score > 0);

    // Log for debugging
    if (topChunks.length > 0) {
        console.log(`🔍 RAG Retrieved top chunk: ${topChunks[0].chunk.id} (Score: ${topChunks[0].score})`);
    }

    return topChunks.map(s => s.chunk.text).join("\n\n---\n\n");
}

app.post("/chat", async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: "Message required" });
        }

        // Retrieve relevant context
        const context = retrieveContext(message);
        const hasContext = context.length > 0;

        const systemPrompt = `
You are DomainDetector, a friendly and enthusiastic career mentor. 
Think of yourself as a supportive senior peer or a knowledgeable friend helping someone find their path in tech.

${hasContext ? `I have some specific info from our roadmap to help you:
${context}` : "I'll use my general tech knowledge to help you."}

How to chat:
1. **Be Human**: Use a natural, conversational tone. It's okay to use simple language and be encouraging.
2. **Be Helpful**: If the context above has specific tools or steps, definitely share them, but explain *why* they matter.
3. **Be Concise but Warm**: specific answers are good, but don't just dump a list. Wrap it in a friendly explanation. keep it under 300 words.
4. **Format Nicely**: Use **bold** for key terms and lists (bullet points) for steps or tools. Avoid long walls of text.
5. **Engage**: Ask a relevant follow-up question to keep the conversation going (e.g., "Does that sound interesting to you?" or "Have you tried any of these before?").
6. **Honesty**: If you don't know something, just say it plainly like a human would ("I'm not sure about that specific one, but usually...").

Your goal is to make the user feel confident and excitement about their future career!
        `;

        const chatCompletion = await groq.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: systemPrompt,
                },
                {
                    role: "user",
                    content: message,
                },
            ],
            // Use Llama 3 8B or 70B if available. 8B is faster.
            model: "llama-3.1-8b-instant",
            temperature: 0.7,
            max_tokens: 1024,
        });

        const reply = chatCompletion.choices[0]?.message?.content || "";

        res.json({ reply });

    } catch (err) {
        console.error("❌ Groq Error:", err.message);
        res.status(500).json({ error: err.message });
    }
});

// Health Check
app.get("/", (req, res) => {
    res.send("DomainDetector RAG Server is Running");
});

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT} with RAG enabled`);
});
