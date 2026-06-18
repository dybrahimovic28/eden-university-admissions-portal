const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.edenuniversityapplication.com';

const baseHtml = fs.readFileSync('index.html', 'utf-8');

function extractHeaderAndFooter() {
  const headerMatch = baseHtml.match(/<header class="header">[\s\S]*?<\/header>/);
  const footerMatch = baseHtml.match(/<footer class="footer">[\s\S]*?<\/footer>/);
  const scriptsMatch = baseHtml.match(/<script>[\s\S]*?<\/script>/);
  
  return {
    header: headerMatch ? headerMatch[0] : '',
    footer: footerMatch ? footerMatch[0] : '',
    scripts: scriptsMatch ? scriptsMatch[0] : ''
  };
}

const { header, footer, scripts } = extractHeaderAndFooter();

function createPage(filename, title, description, h1, content) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="https://www.edenuniversityapplication.com/${filename}">
  <link rel="stylesheet" href="style.css">
  <link rel="icon" href="eden-university-application-logo.png" type="image/png">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="https://www.edenuniversityapplication.com/${filename}">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
</head>
<body>
  ${header}
  
  <div class="page-header" style="padding: 100px 0 80px;">
    <div class="container">
      <h1 style="font-size: 3rem;">${h1}</h1>
      <p>${description}</p>
    </div>
  </div>

  <section class="section">
    <div class="container">
      ${content}
    </div>
  </section>

  ${footer}
  ${scripts}
  
  <div style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;" class="seo-semantic-content">
    <h2>Official Admissions Support</h2>
    <p>This portal provides official Eden University application and admissions assistance services for prospective students. Applicants can receive guidance on programme selection, admission requirements, application submission, and enrollment procedures.</p>
  </div>
</body>
</html>`;
  
  fs.writeFileSync(filename, html);
  console.log('Created ' + filename);
}

// 1. Location Pages
const locationPages = [
  { file: 'eden-university-lusaka.html', kw: 'Eden University Lusaka', loc: 'Lusaka' },
  { file: 'eden-university-zambia.html', kw: 'Eden University Zambia', loc: 'Zambia' },
  { file: 'eden-university-application-zambia.html', kw: 'Eden University Application Zambia', loc: 'Zambia' },
  { file: 'eden-university-admission-zambia.html', kw: 'Eden University Admissions Zambia', loc: 'Zambia' }
];

locationPages.forEach(p => {
  createPage(
    p.file, 
    `${p.kw} | Official Admissions Support & Applications`,
    `Apply to ${p.kw}. Official application portal for prospective students in ${p.loc}. Get application assistance and view requirements.`,
    p.kw,
    `
    <div style="max-width: 800px; margin: 0 auto;">
      <h2 style="color: var(--primary); margin-bottom: 20px;">Welcome to ${p.kw} Admissions Support</h2>
      <p style="margin-bottom: 20px;">Looking to join Eden University? Our official admissions support portal helps prospective students from all over ${p.loc} and beyond successfully navigate the application process.</p>
      <h3 style="color: var(--primary); margin-bottom: 15px;">How to Apply</h3>
      <p style="margin-bottom: 20px;">Applying to Eden University is simple. You can view our wide range of <a href="programmes.html" style="color: var(--accent);">Programmes</a>, check the <a href="requirements.html" style="color: var(--accent);">Admission Requirements</a>, and submit your application online.</p>
      <div style="text-align: center; margin-top: 40px;">
        <a href="apply.html" class="btn btn-primary">Start Your Online Application</a>
      </div>
    </div>
    `
  );
});

// 2. WhatsApp SEO Page
createPage(
  'eden-university-whatsapp.html',
  'Eden University WhatsApp Number | Admissions & Application Support',
  'Get the Eden University WhatsApp number for admissions assistance. Chat with our support team for help with your online application and enrollment.',
  'Eden University WhatsApp Support',
  `
  <div style="max-width: 800px; margin: 0 auto; text-align: center;">
    <img src="eden-university-application-logo.png" alt="Eden University WhatsApp Number" style="width: 120px; margin-bottom: 30px;">
    <h2 style="color: var(--primary); margin-bottom: 20px;">Eden University Admissions WhatsApp Number</h2>
    <p style="margin-bottom: 30px; font-size: 1.1rem;">Need help with your application? You can reach our dedicated admissions support team directly on WhatsApp.</p>
    
    <div style="background: #f4f4f4; padding: 40px; border-radius: 8px; margin-bottom: 40px;">
      <h3 style="margin-bottom: 20px;">Chat with Admissions Now</h3>
      <p style="font-size: 2rem; font-weight: bold; color: var(--primary); margin-bottom: 20px;">+260 779 934 886</p>
      <a href="https://wa.me/260779934886" class="btn btn-whatsapp" style="font-size: 1.2rem; padding: 15px 30px;">Click Here to Chat on WhatsApp</a>
    </div>

    <h3 style="text-align: left; margin-bottom: 15px;">What we can help you with:</h3>
    <ul style="text-align: left; margin-left: 20px; margin-bottom: 30px;">
      <li style="margin-bottom: 10px;">Eden University Online Application guidance</li>
      <li style="margin-bottom: 10px;">Information on Admission Requirements</li>
      <li style="margin-bottom: 10px;">Details regarding Programmes and Fees</li>
      <li style="margin-bottom: 10px;">Registration and Enrollment procedures</li>
    </ul>
  </div>
  `
);

// 3. Blog Section
if (!fs.existsSync('blog')) fs.mkdirSync('blog');

// Need to replace paths in header/footer to be absolute or relative for /blog/ folder
const blogHeader = header.replace(/href="/g, 'href="../').replace(/src="/g, 'src="../');
const blogFooter = footer.replace(/href="/g, 'href="../').replace(/src="/g, 'src="../');
const blogScripts = scripts.replace(/href="/g, 'href="../').replace(/src="/g, 'src="../');

function createBlog(filename, title, h1, content) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="Read our complete guide on ${h1}. Official Eden University admissions support and application guidance.">
  <link rel="canonical" href="https://www.edenuniversityapplication.com/blog/${filename}">
  <link rel="stylesheet" href="../style.css">
  <link rel="icon" href="../eden-university-application-logo.png" type="image/png">
</head>
<body>
  ${blogHeader}
  
  <div class="page-header" style="padding: 100px 0 80px;">
    <div class="container">
      <h1 style="font-size: 3rem;">${h1}</h1>
      <p>Official Admissions Support Guide</p>
    </div>
  </div>

  <section class="section">
    <div class="container" style="max-width: 800px;">
      ${content}
    </div>
  </section>

  ${blogFooter}
  ${blogScripts}
</body>
</html>`;
  
  fs.writeFileSync(path.join('blog', filename), html);
  console.log('Created blog/' + filename);
}

const blogs = [
  { file: 'how-to-apply-eden-university-2026.html', title: 'How To Apply To Eden University In 2026', h1: 'How To Apply To Eden University In 2026', content: '<p>Applying to Eden University for the 2026 academic year is a straightforward process. In this guide, we will walk you through the steps required to successfully submit your Eden University online application form.</p><h3>Step 1: Choose Your Programme</h3><p>First, review the available programmes and ensure you meet the admission requirements...</p>' },
  { file: 'eden-university-admission-requirements.html', title: 'Eden University Admission Requirements | Full Guide', h1: 'Eden University Admission Requirements', content: '<p>Before you begin your application, it is crucial to understand the Eden University admission requirements. For degree programmes, you generally need 5 O-Level credits including English, Mathematics, and Science.</p>' },
  { file: 'eden-university-fees-guide.html', title: 'Eden University Fees Guide | Tuition & Costs', h1: 'Eden University Fees Guide', content: '<p>Understanding the tuition fees is an important part of your application process. The Eden University fees vary depending on whether you are studying full-time or by distance learning, and which school you belong to.</p>' },
  { file: 'eden-university-july-intake.html', title: 'Eden University July Intake Guide', h1: 'Eden University July Intake Guide', content: '<p>The July intake is one of our major enrollment periods. If you missed the January intake, the Eden University July intake is your perfect opportunity to start your academic journey.</p>' },
  { file: 'eden-university-january-intake.html', title: 'Eden University January Intake Guide', h1: 'Eden University January Intake Guide', content: '<p>Start your year right by applying for the Eden University January intake. Early applications are highly encouraged to secure your spot in competitive programmes like Nursing, Medicine, and Pharmacy.</p>' }
];

blogs.forEach(b => createBlog(b.file, b.title, b.h1, b.content));

// Generate Sitemap
let sitemapUrls = [];
const addUrlsFromDir = (dir, prefix) => {
  const files = fs.readdirSync(dir);
  files.forEach(f => {
    if (f.endsWith('.html') && !f.includes('admin-dashboard')) {
      sitemapUrls.push(`  <url>\n    <loc>${BASE_URL}/${prefix}${f === 'index.html' ? '' : f}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${f === 'index.html' ? '1.0' : '0.8'}</priority>\n  </url>`);
    }
  });
};

addUrlsFromDir(__dirname, '');
if (fs.existsSync('programmes')) addUrlsFromDir(path.join(__dirname, 'programmes'), 'programmes/');
if (fs.existsSync('blog')) addUrlsFromDir(path.join(__dirname, 'blog'), 'blog/');

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.join('\n')}
</urlset>`;

fs.writeFileSync('sitemap.xml', sitemapXml);
console.log('Created sitemap.xml');

// Generate Robots.txt
const robotsTxt = `User-agent: *
Allow: /
Disallow: /admin-dashboard.html

Sitemap: ${BASE_URL}/sitemap.xml`;

fs.writeFileSync('robots.txt', robotsTxt);
console.log('Created robots.txt');

