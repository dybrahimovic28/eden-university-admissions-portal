const fs = require('fs');
const path = require('path');

const dir = './';
const newNavHTML = `        <a href="index.html"{HOME_ACTIVE}>Home</a>
        <a href="programmes.html"{PROG_ACTIVE}>Programmes</a>
        <a href="schools.html"{SCHOOLS_ACTIVE}>Schools & Faculties</a>
        <a href="international-relations.html"{INT_ACTIVE}>International Relations</a>
        <a href="requirements.html"{REQ_ACTIVE}>Admission Requirements</a>
        <a href="apply.html" class="nav-cta{APPLY_ACTIVE}">Apply Online</a>
        <a href="contact.html"{CONTACT_ACTIVE}>Contact</a>`;

const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && f !== 'international-relations.html');

for (const file of files) {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');
  
  // Find the block between <nav class="nav-links"> and </nav>
  const navRegex = /<nav class="nav-links">([\s\S]*?)<\/nav>/;
  const match = content.match(navRegex);
  
  if (match) {
    let currentNavHtml = newNavHTML;
    currentNavHtml = currentNavHtml.replace('{HOME_ACTIVE}', file === 'index.html' ? ' class="active"' : '');
    currentNavHtml = currentNavHtml.replace('{PROG_ACTIVE}', file === 'programmes.html' ? ' class="active"' : '');
    currentNavHtml = currentNavHtml.replace('{SCHOOLS_ACTIVE}', file === 'schools.html' ? ' class="active"' : '');
    currentNavHtml = currentNavHtml.replace('{INT_ACTIVE}', file === 'international-relations.html' ? ' class="active"' : '');
    currentNavHtml = currentNavHtml.replace('{REQ_ACTIVE}', file === 'requirements.html' ? ' class="active"' : '');
    currentNavHtml = currentNavHtml.replace('{APPLY_ACTIVE}', file === 'apply.html' ? ' active' : '');
    currentNavHtml = currentNavHtml.replace('{CONTACT_ACTIVE}', file === 'contact.html' ? ' class="active"' : '');
    
    content = content.replace(navRegex, `<nav class="nav-links">\n${currentNavHtml}\n      </nav>`);
    fs.writeFileSync(path.join(dir, file), content, 'utf8');
    console.log(`Updated ${file}`);
  }
}

// Update build.js template
let buildContent = fs.readFileSync('build.js', 'utf8');
const buildNavRegex = /<nav class="nav-links">([\s\S]*?)<\/nav>/;
let buildNavHtml = `        <a href="../index.html">Home</a>
        <a href="../programmes.html">Programmes</a>
        <a href="../schools.html">Schools & Faculties</a>
        <a href="../international-relations.html">International Relations</a>
        <a href="../requirements.html">Admission Requirements</a>
        <a href="../apply.html?prog=\${p.slug}" class="nav-cta">Apply Online</a>
        <a href="../contact.html">Contact</a>`;
if(buildNavRegex.test(buildContent)) {
  buildContent = buildContent.replace(buildNavRegex, `<nav class="nav-links">\n${buildNavHtml}\n      </nav>`);
  fs.writeFileSync('build.js', buildContent, 'utf8');
  console.log(`Updated build.js`);
}

