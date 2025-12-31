import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { domains } from '../src/data/domains.js';

const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function ingest() {
    let chunks = [];

    // 1. Process domains.js data
    console.log("Processing structured domain data...");
    if (domains && Array.isArray(domains)) {
        for (const d of domains) {
            const text = `
Domain: ${d.title}
About: ${d.about}
Description: ${d.description}
Tools: ${d.toolsText}
Roadmap: ${d.roadmap ? d.roadmap.join('\n') : ''}
Projects: ${d.miniProjects ? d.miniProjects.join(', ') : 'N/A'}
            `.trim();

            chunks.push({
                id: `domain-${d.id}`,
                text: text,
                metadata: { type: 'structured', title: d.title }
            });
        }
    } else {
        console.warn("No domains found in domains.js");
    }

    // 2. Process PDFs
    const pdfDir = path.resolve(__dirname, '../public/road_map');
    if (fs.existsSync(pdfDir)) {
        const files = fs.readdirSync(pdfDir).filter(f => f.endsWith('.pdf'));
        for (const file of files) {
            console.log(`Processing PDF: ${file}`);
            const filePath = path.join(pdfDir, file);
            const dataBuffer = fs.readFileSync(filePath);
            try {
                const data = await pdf(dataBuffer);
                const text = data.text;

                // Chunking logic
                const rawParagraphs = text.split(/\n\s*\n/);
                let i = 0;

                for (const p of rawParagraphs) {
                    const cleanText = p.replace(/\s+/g, ' ').trim();
                    if (cleanText.length > 50) { // Lower threshold
                        chunks.push({
                            id: `pdf-${file}-${i++}`,
                            text: `Source Document: ${file}\nContent: ${cleanText}`,
                            metadata: { type: 'pdf', title: file }
                        });
                    }
                }
            } catch (err) {
                console.error(`Failed to parse ${file}:`, err.message);
            }
        }
    } else {
        console.warn(`PDF Directory not found: ${pdfDir}`);
    }

    // Save to JSON
    const outputPath = path.join(__dirname, 'knowledge.json');
    fs.writeFileSync(outputPath, JSON.stringify(chunks, null, 2));
    console.log(`✅ Validated and Saved ${chunks.length} chunks to knowledge.json`);
}

ingest().catch(err => console.error("Fatal Error:", err));
