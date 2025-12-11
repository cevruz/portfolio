const fs = require('fs');
const path = require('path');
let pdf = require('pdf-parse');
if (pdf && typeof pdf !== 'function' && pdf.default) pdf = pdf.default;

const pdfPath = path.join(__dirname, 'assets', 'cv_ciro_luca_cozzolino.pdf');

if (!fs.existsSync(pdfPath)) {
  console.error('CV PDF not found:', pdfPath);
  process.exit(1);
}

const dataBuffer = fs.readFileSync(pdfPath);

pdf(dataBuffer).then(function(data) {
  const text = data.text;
  // Try to find sections that mention Esami/Exams
  const examsMatches = [];

  // Look for lines with "Esami", "Esami principali", "Esami sostenuti", or "Exams"
  const regex = /(Esami principali|Esami sostenuti|Esami|Exams)[\s:\-]*([\s\S]{0,500}?)(?=\n\s*\n|\r\n\s*\r\n|$)/gi;
  let m;
  while ((m = regex.exec(text)) !== null) {
    const header = m[1];
    let block = m[2].trim();
    // Clean up multiple newlines
    block = block.replace(/\r?\n/g, ' ').replace(/\s+/g, ' ').trim();
    examsMatches.push({ header, block });
  }

  if (examsMatches.length === 0) {
    console.log('No exams section automatically found. Printing small text excerpt for manual copy:');
    console.log(text.slice(0, 2000));
    process.exit(0);
  }

  // Save first match as exams_it.txt
  const out = examsMatches[0].block;
  const outPath = path.join(__dirname, 'assets', 'exams_extracted.txt');
  fs.writeFileSync(outPath, out, 'utf8');
  console.log('Extracted exams saved to', outPath);
  console.log('\n---\n', out);
}).catch(err => {
  console.error('Failed to parse PDF:', err);
  process.exit(1);
});
