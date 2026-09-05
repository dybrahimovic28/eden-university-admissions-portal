const fs = require('fs');
const path = require('path');
const tag = '<meta name="google-site-verification" content="UNnOLAxCH5Sq6M1OhcmAzu4K60C8LLVww4OCD-LQqwI" />';

function processDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    if (file === 'node_modules') return;
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (file.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      
      const regex = /<meta\s+name=["']google-site-verification["']\s+content=["'][^"']*["']\s*\/?>/gi;
      
      if (regex.test(content)) {
        content = content.replace(regex, tag);
        fs.writeFileSync(fullPath, content);
        console.log('Replaced tag in', fullPath);
      } else {
        content = content.replace('</head>', `  ${tag}\n</head>`);
        fs.writeFileSync(fullPath, content);
        console.log('Added tag to', fullPath);
      }
    }
  });
}

processDir(__dirname);
