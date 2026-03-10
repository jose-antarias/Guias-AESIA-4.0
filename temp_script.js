const fs = require('fs');

function processGuide(guideId, filePath) {
    let code = fs.readFileSync('lib/data/es.ts', 'utf8');
    const txt = fs.readFileSync(filePath, 'utf8');

    const apiResponse = JSON.parse(txt);
    const answerText = apiResponse.answer;

    const jsonStrMatch = answerText.match(/```json\n([\s\S]+?)\n```/);
    let data;
    try {
        if (!jsonStrMatch) {
            data = JSON.parse(answerText);
        } else {
            data = JSON.parse(jsonStrMatch[1]);
        }
    } catch (e) { console.error("JSON parse failed for id", guideId); return; }

    // Convert correctAnswer if needed
    if (data.quiz) {
        data.quiz.forEach(q => {
            if (q.answer !== undefined) {
                q.correctAnswer = q.options.indexOf(q.answer);
                if (q.correctAnswer === -1) q.correctAnswer = 0;
                delete q.answer;
            }
        });
    }

    const startIdx = code.indexOf(`"id": "${guideId}"`);
    let nextId = (parseInt(guideId) + 1).toString().padStart(2, '0');
    const endIdx = code.indexOf(`"id": "${nextId}"`);

    const blockStart = code.lastIndexOf('{', startIdx);
    let blockEnd = code.length;
    if (endIdx !== -1) {
        blockEnd = code.lastIndexOf('{', endIdx);
        while (code[blockEnd] !== ',' && blockEnd > blockStart) {
            blockEnd--;
        }
    } else {
        // Last guide (shouldn't happen here but safe)
        blockEnd = code.lastIndexOf(']') - 1;
    }

    // Preserve the original outline by just replacing the missing fields
    // Extract existing summary, title, pdfUrl
    const oldBlock = code.substring(blockStart, blockEnd);
    const titleMatch = oldBlock.match(/"title":\s*"(.*?)"/);
    const summaryMatch = oldBlock.match(/"summary":\s*"(.*?)"/);
    const pdfMatch = oldBlock.match(/"pdfUrl":\s*"(.*?)"/);

    const newGuide = {
        id: guideId,
        title: titleMatch ? titleMatch[1] : `Guía ${guideId}`,
        summary: summaryMatch ? summaryMatch[1] : "Resumen no disponible.",
        contentIndex: data.contentIndex,
        flashcards: data.flashcards,
        quiz: data.quiz,
        pdfUrl: pdfMatch ? pdfMatch[1] : undefined,
        glossary: data.glossary
    };

    const replacement = JSON.stringify(newGuide, null, 4).replace(/\n/g, '\n  ');
    const newCode = code.substring(0, blockStart) + replacement + code.substring(blockEnd);
    fs.writeFileSync('lib/data/es.ts', newCode);
    console.log(`Replaced guide ${guideId} successfully.`);
}

const steps = [
    { id: '15', path: 'C:\\Users\\lombi\\.gemini\\antigravity\\brain\\a618b211-2cc2-431b-9dec-df3a995b4408\\.system_generated\\steps\\2854\\output.txt' },
    { id: '16', path: 'C:\\Users\\lombi\\.gemini\\antigravity\\brain\\a618b211-2cc2-431b-9dec-df3a995b4408\\.system_generated\\steps\\2855\\output.txt' }
];

for (const step of steps) {
    processGuide(step.id, step.path);
}
