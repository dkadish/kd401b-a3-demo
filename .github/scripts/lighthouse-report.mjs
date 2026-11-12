// Turns Lighthouse results into a Markdown report (report/README.md).
import fs from 'fs';

const dir = '.lighthouseci';
const files = fs.readdirSync(dir).filter(f => f.startsWith('lhr-') && f.endsWith('.json')).sort();
const cats = [['performance', 'Performance'], ['accessibility', 'Accessibility'], ['best-practices', 'Best practices'], ['seo', 'SEO']];
const icon = s => (s >= 0.9 ? '🟢' : s >= 0.5 ? '🟠' : '🔴');
const skip = ['informative', 'manual', 'notApplicable'];

let md = `# Lighthouse report\n\nGenerated ${new Date().toISOString().slice(0, 16).replace('T', ' ')} UTC from commit \`${(process.env.GITHUB_SHA || '').slice(0, 7)}\`.\n\n`;
md += '| Page | ' + cats.map(c => c[1]).join(' | ') + ' |\n|' + '---|'.repeat(cats.length + 1) + '\n';
const details = [];

for (const f of files) {
  const r = JSON.parse(fs.readFileSync(`${dir}/${f}`, 'utf8'));
  const page = new URL(r.finalDisplayedUrl || r.finalUrl || r.requestedUrl).pathname;
  md += `| ${page} | ` + cats.map(([id]) => {
    const s = r.categories[id]?.score;
    return s == null ? '–' : `${icon(s)} ${Math.round(s * 100)}`;
  }).join(' | ') + ' |\n';
  const issues = Object.values(r.audits)
    .filter(a => a.score !== null && a.score < 0.9 && !skip.includes(a.scoreDisplayMode))
    .map(a => `- **${a.title}**${a.displayValue ? ` (${a.displayValue})` : ''}`);
  details.push(`## ${page}\n\n${issues.length ? issues.join('\n') : 'No issues found. 🎉'}\n`);
}

md += '\n🟢 90–100 good · 🟠 50–89 needs improvement · 🔴 0–49 poor\n\n';
md += 'For full explanations and advice, download **lighthouse-html-reports** from the workflow run in the Actions tab.\n\n';
md += details.join('\n');

fs.mkdirSync('report', { recursive: true });
fs.writeFileSync('report/README.md', md);
