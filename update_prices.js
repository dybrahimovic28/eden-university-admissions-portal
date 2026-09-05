const fs = require('fs');
let content = fs.readFileSync('programmes_data.js', 'utf8');

content = content.replace(
  /\"name\": \"Diploma in Clinical Medicine\",[\s\S]*?\"fees\": \[\s*7760,\s*7090,\s*8090,\s*7590,\s*7000,\s*0\s*\]/,
  '\"name\": \"Diploma in Clinical Medicine\",\n    \"school\": \"School Of Medicine\",\n    \"level\": \"Diploma\",\n    \"mode\": \"Full-Time\",\n    \"duration\": \"3 YEARS\",\n    \"fees\": [\n      7760,\n      7090,\n      8090,\n      7590,\n      7000,\n      7000\n    ]'
);

content = content.replace(
  /\"name\": \"Bachelor of Medicine & Bachelor of Surgery\",[\s\S]*?\"fees\": \[\s*10300,\s*10300,\s*13300,\s*15790,\s*15790,\s*0\s*\]/,
  '\"name\": \"Bachelor of Medicine & Bachelor of Surgery\",\n    \"school\": \"School Of Medicine\",\n    \"level\": \"Degree\",\n    \"mode\": \"Full-Time\",\n    \"duration\": \"6 YEARS\",\n    \"fees\": [\n      10300,\n      10300,\n      13300,\n      15790,\n      15790,\n      15790\n    ]'
);

content = content.replace(
  /\"name\": \"BSc\. Clinical Medicine\",[\s\S]*?\"mode\": \"Distance\",[\s\S]*?\"fees\": \[\s*8490,\s*8290,\s*0,\s*0,\s*0,\s*0\s*\]/,
  '\"name\": \"BSc. Clinical Medicine\",\n    \"school\": \"School Of Medicine\",\n    \"level\": \"Degree\",\n    \"mode\": \"Distance\",\n    \"duration\": \"3 YEARS\",\n    \"fees\": [\n      8490,\n      8290,\n      8290,\n      8290,\n      8290,\n      8290\n    ]'
);

content = content.replace(
  /\"name\": \"BSc\. Environmental Health\",[\s\S]*?\"mode\": \"Distance\",[\s\S]*?\"fees\": \[\s*8490,\s*8290,\s*0,\s*0,\s*0,\s*0\s*\]/,
  '\"name\": \"BSc. Environmental Health\",\n    \"school\": \"School Of Medicine\",\n    \"level\": \"Degree\",\n    \"mode\": \"Distance\",\n    \"duration\": \"3 YEARS\",\n    \"fees\": [\n      8490,\n      8290,\n      8290,\n      8290,\n      8290,\n      8290\n    ]'
);

content = content.replace(
  /\"name\": \"BSc Nursing\",[\s\S]*?\"mode\": \"Distance\",[\s\S]*?\"fees\": \[\s*8490,\s*8290,\s*0,\s*0,\s*0,\s*0\s*\]/,
  '\"name\": \"BSc Nursing\",\n    \"school\": \"School of Nursing & Midwifery\",\n    \"level\": \"Degree\",\n    \"mode\": \"Distance\",\n    \"duration\": \"2 YEARS\",\n    \"fees\": [\n      8490,\n      8290,\n      8290,\n      8290,\n      0,\n      0\n    ]'
);

fs.writeFileSync('programmes_data.js', content);
console.log('Done');