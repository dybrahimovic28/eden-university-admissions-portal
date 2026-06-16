const fs = require('fs');
const path = require('path');

const data = [
  {
    "name": "Diploma in Clinical Medicine",
    "school": "School Of Medicine",
    "level": "Diploma",
    "mode": "Full-Time",
    "duration": "3 YEARS",
    "fees": [
      7760,
      7090,
      8090,
      7590,
      7000,
      0
    ]
  },
  {
    "name": "Diploma in Environmental Health",
    "school": "School Of Medicine",
    "level": "Diploma",
    "mode": "Full-Time",
    "duration": "3 YEARS",
    "fees": [
      7210,
      7140,
      7140,
      7140,
      7140,
      7140
    ]
  },
  {
    "name": "Diploma in Biomedical Sciences",
    "school": "School Of Medicine",
    "level": "Diploma",
    "mode": "Full-Time",
    "duration": "3 YEARS",
    "fees": [
      7300,
      7300,
      7300,
      7300,
      7300,
      7300
    ]
  },
  {
    "name": "Diploma in Occupational Health and Safety",
    "school": "School Of Medicine",
    "level": "Diploma",
    "mode": "Full-Time",
    "duration": "3 YEARS",
    "fees": [
      7300,
      7300,
      7300,
      7300,
      7300,
      7300
    ]
  },
  {
    "name": "BSc. Clinical Medicine",
    "school": "School Of Medicine",
    "level": "Degree",
    "mode": "Full-Time",
    "duration": "5 YEARS",
    "fees": [
      10300,
      10300,
      9910,
      9910,
      10340,
      10340
    ]
  },
  {
    "name": "BSc in Biomedical Sciences",
    "school": "School Of Medicine",
    "level": "Degree",
    "mode": "Full-Time",
    "duration": "4 YEARS",
    "fees": [
      10300,
      10300,
      9910,
      9910,
      10340,
      10340
    ]
  },
  {
    "name": "BSc in Public Health",
    "school": "School Of Medicine",
    "level": "Degree",
    "mode": "Full-Time",
    "duration": "4 YEARS",
    "fees": [
      8300,
      8300,
      8300,
      8300,
      8800,
      8800
    ]
  },
  {
    "name": "BSc in Occupational Health and Safety",
    "school": "School Of Medicine",
    "level": "Degree",
    "mode": "Full-Time",
    "duration": "4 YEARS",
    "fees": [
      8300,
      8300,
      8300,
      8300,
      8800,
      8800
    ]
  },
  {
    "name": "BSc. Environmental Health",
    "school": "School Of Medicine",
    "level": "Degree",
    "mode": "Full-Time",
    "duration": "5 YEARS",
    "fees": [
      10300,
      10300,
      7860,
      7790,
      8290,
      8290
    ]
  },
  {
    "name": "Bachelor of Medicine & Bachelor of Surgery",
    "school": "School Of Medicine",
    "level": "Degree",
    "mode": "Full-Time",
    "duration": "6 YEARS",
    "fees": [
      10300,
      10300,
      13300,
      15790,
      15790,
      0
    ]
  },
  {
    "name": "BSc. Clinical Medicine",
    "school": "School Of Medicine",
    "level": "Degree",
    "mode": "Distance",
    "duration": "3 YEARS",
    "fees": [
      8490,
      8290,
      0,
      0,
      0,
      0
    ]
  },
  {
    "name": "BSc. Environmental Health",
    "school": "School Of Medicine",
    "level": "Degree",
    "mode": "Distance",
    "duration": "3 YEARS",
    "fees": [
      8490,
      8290,
      0,
      0,
      0,
      0
    ]
  },
  {
    "name": "Diploma in Nursing",
    "school": "School Of Nursing & Midwifery",
    "level": "Diploma",
    "mode": "Full-Time",
    "duration": "3 YEARS",
    "fees": [
      10160,
      8540,
      10160,
      8540,
      9540,
      7790
    ]
  },
  {
    "name": "Diploma in Midwifery",
    "school": "School Of Nursing & Midwifery",
    "level": "Diploma",
    "mode": "Full-Time",
    "duration": "3 YEARS",
    "fees": [
      10160,
      8540,
      10160,
      8540,
      9540,
      7790
    ]
  },
  {
    "name": "Diploma in Public Health Nursing",
    "school": "School Of Nursing & Midwifery",
    "level": "Diploma",
    "mode": "Full-Time",
    "duration": "3 YEARS",
    "fees": [
      10160,
      8540,
      10160,
      8540,
      9540,
      7790
    ]
  },
  {
    "name": "BSc Midwifery",
    "school": "School Of Nursing & Midwifery",
    "level": "Degree",
    "mode": "Full-Time",
    "duration": "4 YEARS",
    "fees": [
      10300,
      10300,
      9360,
      9590,
      9290,
      9090
    ]
  },
  {
    "name": "BSc Nursing",
    "school": "School Of Nursing & Midwifery",
    "level": "Degree",
    "mode": "Full-Time",
    "duration": "4 YEARS",
    "fees": [
      10300,
      10300,
      9360,
      9590,
      9290,
      9090
    ]
  },
  {
    "name": "BSc Nursing",
    "school": "School Of Nursing & Midwifery",
    "level": "Degree",
    "mode": "Distance",
    "duration": "2 YEARS",
    "fees": [
      8490,
      8290,
      0,
      0,
      0,
      0
    ]
  },
  {
    "name": "Diploma in Pharmacy",
    "school": "School Of Pharmacy",
    "level": "Diploma",
    "mode": "Full-Time",
    "duration": "3 YEARS",
    "fees": [
      9565,
      9495,
      9495,
      9495,
      5200,
      9495
    ]
  },
  {
    "name": "BSc Pharmacy",
    "school": "School Of Pharmacy",
    "level": "Degree",
    "mode": "Full-Time",
    "duration": "5 YEARS",
    "fees": [
      10300,
      10300,
      10470,
      10400,
      10400,
      10400
    ]
  },
  {
    "name": "Bachelor of Science in Chemistry",
    "school": "School Of Natural Sciences",
    "level": "Degree",
    "mode": "Full-Time",
    "duration": "4 YEARS",
    "fees": [
      10300,
      10300,
      7560,
      7490,
      8100,
      8100
    ]
  },
  {
    "name": "Bachelor of Science in Biology",
    "school": "School Of Natural Sciences",
    "level": "Degree",
    "mode": "Full-Time",
    "duration": "4 YEARS",
    "fees": [
      10300,
      10300,
      7560,
      7490,
      8100,
      8100
    ]
  },
  {
    "name": "BSc in Ecology & Conservation Biology",
    "school": "School Of Natural Sciences",
    "level": "Degree",
    "mode": "Full-Time",
    "duration": "4 YEARS",
    "fees": [
      10300,
      10300,
      7560,
      7490,
      8100,
      8100
    ]
  },
  {
    "name": "Fire Engineering & Rescue Management",
    "school": "School Of Natural Sciences",
    "level": "Degree",
    "mode": "Distance",
    "duration": "4 YEARS",
    "fees": [
      6500,
      6500,
      6500,
      6500,
      6500,
      6500
    ]
  },
  {
    "name": "Secondary Degree",
    "school": "School Of Education",
    "level": "Degree",
    "mode": "Full-Time",
    "duration": "4 YEARS",
    "fees": [
      5320,
      5320,
      5320,
      5320,
      5320,
      5320
    ]
  },
  {
    "name": "Secondary Diploma",
    "school": "School Of Education",
    "level": "Diploma",
    "mode": "Full-Time",
    "duration": "3 YEARS",
    "fees": [
      4920,
      4920,
      4920,
      4920,
      4920,
      4920
    ]
  },
  {
    "name": "Primary Degree",
    "school": "School Of Education",
    "level": "Degree",
    "mode": "Full-Time",
    "duration": "4 YEARS",
    "fees": [
      5320,
      5320,
      5320,
      5320,
      5320,
      5320
    ]
  },
  {
    "name": "Primary Diploma",
    "school": "School Of Education",
    "level": "Diploma",
    "mode": "Full-Time",
    "duration": "3 YEARS",
    "fees": [
      4125,
      4125,
      4125,
      4125,
      4125,
      4125
    ]
  },
  {
    "name": "Diploma in Early Childhood",
    "school": "School Of Education",
    "level": "Diploma",
    "mode": "Full-Time",
    "duration": "3 YEARS",
    "fees": [
      3350,
      3350,
      3350,
      3350,
      3350,
      3350
    ]
  },
  {
    "name": "Secondary Degree",
    "school": "School Of Education",
    "level": "Degree",
    "mode": "Distance",
    "duration": "3 YEARS",
    "fees": [
      4315,
      4315,
      4315,
      4315,
      4315,
      4315
    ]
  },
  {
    "name": "Diploma in Early Childhood",
    "school": "School Of Education",
    "level": "Diploma",
    "mode": "Distance",
    "duration": "3 YEARS",
    "fees": [
      2550,
      2550,
      2550,
      2550,
      2550,
      2550
    ]
  },
  {
    "name": "Primary Degree",
    "school": "School Of Education",
    "level": "Degree",
    "mode": "Distance",
    "duration": "4 YEARS",
    "fees": [
      4015,
      4015,
      4015,
      4015,
      4015,
      4015
    ]
  },
  {
    "name": "Secondary Diploma",
    "school": "School Of Education",
    "level": "Diploma",
    "mode": "Distance",
    "duration": "3 YEARS",
    "fees": [
      3220,
      3220,
      3220,
      3220,
      3220,
      3220
    ]
  },
  {
    "name": "Primary Diploma",
    "school": "School Of Education",
    "level": "Diploma",
    "mode": "Distance",
    "duration": "3 YEARS",
    "fees": [
      3220,
      3220,
      3220,
      3220,
      3220,
      3220
    ]
  },
  {
    "name": "Diploma in Teaching Methodology",
    "school": "School Of Education",
    "level": "Diploma",
    "mode": "Distance",
    "duration": "1 YEAR",
    "fees": [
      4120,
      4120,
      0,
      0,
      0,
      0
    ]
  },
  {
    "name": "Diploma in ICT",
    "school": "School Of Humanities & Social Sciences",
    "level": "Diploma",
    "mode": "Full-Time",
    "duration": "3 YEARS",
    "fees": [
      5690,
      5620,
      5620,
      5620,
      5620,
      5620
    ]
  },
  {
    "name": "Diploma in Social Work",
    "school": "School Of Humanities & Social Sciences",
    "level": "Diploma",
    "mode": "Full-Time",
    "duration": "3 YEARS",
    "fees": [
      5690,
      5620,
      5620,
      5620,
      5620,
      5620
    ]
  },
  {
    "name": "Diploma in Guidance & Counselling",
    "school": "School Of Humanities & Social Sciences",
    "level": "Diploma",
    "mode": "Full-Time",
    "duration": "3 YEARS",
    "fees": [
      5690,
      5620,
      5620,
      5620,
      5620,
      5620
    ]
  },
  {
    "name": "Bachelor of Science ICT",
    "school": "School Of Humanities & Social Sciences",
    "level": "Degree",
    "mode": "Full-Time",
    "duration": "4 YEARS",
    "fees": [
      8760,
      8760,
      8760,
      8760,
      8760,
      8760
    ]
  },
  {
    "name": "Bachelor of Science in Psychology",
    "school": "School Of Humanities & Social Sciences",
    "level": "Degree",
    "mode": "Full-Time",
    "duration": "4 YEARS",
    "fees": [
      8760,
      8760,
      8760,
      8760,
      8760,
      8760
    ]
  },
  {
    "name": "Bachelor of Arts in Public Administration & International Relations",
    "school": "School Of Humanities & Social Sciences",
    "level": "Degree",
    "mode": "Full-Time",
    "duration": "4 YEARS",
    "fees": [
      8760,
      8760,
      8760,
      8760,
      8760,
      8760
    ]
  },
  {
    "name": "Bachelor of Arts in Guidance & Counselling",
    "school": "School Of Humanities & Social Sciences",
    "level": "Degree",
    "mode": "Full-Time",
    "duration": "4 YEARS",
    "fees": [
      8760,
      8760,
      8760,
      8760,
      8760,
      8760
    ]
  },
  {
    "name": "Bachelor of Arts in Development Studies",
    "school": "School Of Humanities & Social Sciences",
    "level": "Degree",
    "mode": "Full-Time",
    "duration": "4 YEARS",
    "fees": [
      8760,
      8760,
      8760,
      8760,
      8760,
      8760
    ]
  },
  {
    "name": "Bachelor of Arts in Social Work",
    "school": "School Of Humanities & Social Sciences",
    "level": "Degree",
    "mode": "Full-Time",
    "duration": "4 YEARS",
    "fees": [
      8760,
      8760,
      8760,
      8760,
      8760,
      8760
    ]
  },
  {
    "name": "Bachelor of Science ICT",
    "school": "School Of Humanities & Social Sciences",
    "level": "Degree",
    "mode": "Distance",
    "duration": "4 YEARS",
    "fees": [
      7960,
      7890,
      7890,
      7890,
      7890,
      7890
    ]
  },
  {
    "name": "Bachelor of Art in Guidance & Counselling",
    "school": "School Of Humanities & Social Sciences",
    "level": "Degree",
    "mode": "Distance",
    "duration": "4 YEARS",
    "fees": [
      7960,
      7890,
      7890,
      7890,
      7890,
      7890
    ]
  },
  {
    "name": "Bachelor of Art in Social Work",
    "school": "School Of Humanities & Social Sciences",
    "level": "Degree",
    "mode": "Distance",
    "duration": "4 YEARS",
    "fees": [
      7960,
      7890,
      7890,
      7890,
      7890,
      7890
    ]
  },
  {
    "name": "Bachelor of Law",
    "school": "School Of Law & Business",
    "level": "Degree",
    "mode": "Full-Time",
    "duration": "4 YEARS",
    "fees": [
      9560,
      9490,
      9490,
      9490,
      9490,
      9490
    ]
  },
  {
    "name": "BSc in Business Management (BSCBM)",
    "school": "School Of Law & Business",
    "level": "Degree",
    "mode": "Full-Time",
    "duration": "4 YEARS",
    "fees": [
      7870,
      7800,
      7800,
      7800,
      7800,
      7800
    ]
  },
  {
    "name": "BSc in Accounting and Finance (BSCAF)",
    "school": "School Of Law & Business",
    "level": "Degree",
    "mode": "Full-Time",
    "duration": "4 YEARS",
    "fees": [
      7870,
      7800,
      7800,
      7800,
      7800,
      7800
    ]
  },
  {
    "name": "BSc in Banking and Finance (BSCBF)",
    "school": "School Of Law & Business",
    "level": "Degree",
    "mode": "Full-Time",
    "duration": "4 YEARS",
    "fees": [
      7870,
      7800,
      7800,
      7800,
      7800,
      7800
    ]
  },
  {
    "name": "BSc in Human Resources Management (BSCHRM)",
    "school": "School Of Law & Business",
    "level": "Degree",
    "mode": "Full-Time",
    "duration": "4 YEARS",
    "fees": [
      7870,
      7800,
      7800,
      7800,
      7800,
      7800
    ]
  },
  {
    "name": "BSc in Economics and Finance (BSCEF)",
    "school": "School Of Law & Business",
    "level": "Degree",
    "mode": "Full-Time",
    "duration": "4 YEARS",
    "fees": [
      7870,
      7800,
      7800,
      7800,
      7800,
      7800
    ]
  },
  {
    "name": "BSc in Purchasing and Chain Management (BSCPCM)",
    "school": "School Of Law & Business",
    "level": "Degree",
    "mode": "Full-Time",
    "duration": "4 YEARS",
    "fees": [
      7870,
      7800,
      7800,
      7800,
      7800,
      7800
    ]
  },
  {
    "name": "BSc in Marketing (BSCMKT)",
    "school": "School Of Law & Business",
    "level": "Degree",
    "mode": "Full-Time",
    "duration": "4 YEARS",
    "fees": [
      7870,
      7800,
      7800,
      7800,
      7800,
      7800
    ]
  }
];

// Helper to make slugs
function makeSlug(name, mode) {
  let base = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  if (mode === "Distance") base += "-distance";
  return base;
}

// Write the JS data file for frontend
fs.writeFileSync('programmes_data.js', 'const programmesData = ' + JSON.stringify(data.map(p => ({...p, slug: makeSlug(p.name, p.mode)})), null, 2) + ';');

// Write the SEO HTML pages
if (!fs.existsSync('programmes')) fs.mkdirSync('programmes');

data.forEach(p => {
  const slug = makeSlug(p.name, p.mode);
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${p.name} (${p.mode}) | Eden University Zambia</title>
  <meta name="description" content="Apply for the ${p.name} at Eden University Zambia. View entry requirements, fees, and career opportunities.">
  <link rel="stylesheet" href="../style.css">
  <link rel="icon" href="../eden-university-application-logo.png" type="image/png">
</head>
<body>

  <header class="header">
    <div class="container nav-container">
      <a href="../index.html" class="logo">
        <img src="../eden-university-application-logo.png" alt="Eden University Logo" class="logo-img">
        <div class="logo-text">EDEN UNIVERSITY<span>OFFICIAL ADMISSIONS PORTAL</span></div>
      </a>
      <button class="nav-toggle" id="nav-toggle">☰</button>
      <nav class="nav-links">
        <a href="../index.html">Home</a>
        <a href="../programmes.html">Programmes</a>
        <a href="../schools.html">Schools & Faculties</a>
        <a href="../international-relations.html">International Relations</a>
        <a href="../requirements.html">Admission Requirements</a>
        <a href="../apply.html?prog=${p.slug}" class="nav-cta">Apply Online</a>
        <a href="../contact.html">Contact</a>
      </nav>
    </div>
  </header>

  <div class="page-header" style="padding: 100px 0 80px;">
    <div class="container">
      <span style="background: rgba(255,255,255,0.2); padding: 6px 12px; border-radius: 4px; font-weight: 600; font-size: 0.85rem; letter-spacing: 1px; margin-bottom: 20px; display: inline-block; text-transform: uppercase;">SCHOOL OF ${p.school}</span>
      <h1 style="font-size: 3rem;">${p.name}</h1>
      <p>Advance your career with our rigorous academic programme.</p>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <div class="grid-2">
        <div>
          <h2 style="color: var(--primary); margin-bottom: 20px;">Programme Overview</h2>
          <p style="color: var(--text-muted); margin-bottom: 30px;">The ${p.name} is meticulously designed to provide a comprehensive understanding in its respective field. Students develop critical thinking and practical skills required for a successful career.</p>
          
          <h3 style="color: var(--primary); margin-bottom: 15px;">Minimum Entry Requirements</h3>
          <ul style="list-style: disc; margin-left: 20px; color: var(--text-muted); margin-bottom: 20px;">
            ${p.level === 'Masters' ? 
              '<li style="margin-bottom: 8px;">A recognized Bachelor&apos;s Degree in a related field</li><li style="margin-bottom: 8px;">Updated Curriculum Vitae (CV)</li>' : 
              p.level === 'Diploma' ? 
              '<li style="margin-bottom: 8px;">Minimum of Three (3) to Four (4) Grade 12 / O-Level Credits</li><li style="margin-bottom: 8px;">English Language is mandatory</li>' :
              '<li style="margin-bottom: 8px;">Five (5) Grade 12 / O-Level Credits or better</li><li style="margin-bottom: 8px;">Must include <strong>English Language</strong></li><li style="margin-bottom: 8px;">Must include <strong>Mathematics</strong></li><li style="margin-bottom: 8px;">Must include <strong>Science</strong></li>'
            }
          </ul>
          
          <div style="background: rgba(247, 147, 30, 0.1); padding: 15px; border-left: 4px solid var(--accent); margin-bottom: 30px;">
            <h4 style="color: var(--primary-dark); font-size: 1rem; margin-bottom: 8px;">Conditional Admission</h4>
            <p style="color: var(--text-muted); font-size: 0.9rem;">Applicants who do not fully meet the standard entry requirements may still be considered for conditional admission after review by the admissions team. We encourage all prospective students to submit their applications for assessment.</p>
          </div>
        </div>
        <div>
          <div class="widget-card" style="position: sticky; top: 120px;">
            <h3 style="border-bottom: 1px solid #eee; padding-bottom: 15px; margin-bottom: 20px; color: var(--primary);">Key Information</h3>
            <div style="margin-bottom: 15px;"><span style="color: var(--text-muted); font-size: 0.9rem; display: block;">Duration</span><strong>${p.duration}</strong></div>
            <div style="margin-bottom: 15px;"><span style="color: var(--text-muted); font-size: 0.9rem; display: block;">Study Mode</span><strong>${p.mode}</strong></div>
            <div style="margin-bottom: 15px;"><span style="color: var(--text-muted); font-size: 0.9rem; display: block;">Year 1 Semester 1 Fee</span><strong>ZMW ${p.fees[0].toLocaleString()}</strong></div>
            <a href="../apply.html?prog=${slug}" class="btn btn-primary" style="width: 100%; margin-bottom: 15px;">Apply Now</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <a href="../index.html" class="logo" style="margin-bottom: 24px;">
            <div style="width: 50px; height: 50px; background: white; margin-right: 15px; border-radius: 4px; display: flex; align-items: center; justify-content: center; padding: 4px;">
              <img src="../eden-university-application-logo.png" alt="Eden University Logo" style="max-width: 100%; max-height: 100%; object-fit: contain;">
            </div>
            <div class="logo-text" style="color: white;">
              EDEN UNIVERSITY
              <span style="color: var(--accent);">ADMISSIONS</span>
            </div>
          </a>
          <p style="color: rgba(255,255,255,0.7);">Dedicated to academic excellence. Secure your future with our streamlined online application system.</p>
        </div>
        <div>
          <h4>Admissions</h4>
          <ul class="footer-links">
            <li><a href="../programmes.html">Find a Programme</a></li>
            <li><a href="../requirements.html">Entry Requirements</a></li>
            <li><a href="../fees.html">Fees & Funding</a></li>
            <li><a href="../apply.html">Apply Online</a></li>
          </ul>
        </div>
        <div>
          <h4>University Links</h4>
          <ul class="footer-links">
            <li><a href="../schools.html">Our Schools</a></li>
            <li><a href="../testimonials.html">Student Success</a></li>
            <li><a href="../faq.html">FAQ</a></li>
            <li><a href="../contact.html">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact Admissions</h4>
          <p style="color: rgba(255,255,255,0.7); margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>
            Lusaka, Zambia
          </p>
          <p style="color: rgba(255,255,255,0.7); margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.394.33.92.036 1.32l-1.611 2.228a11.511 11.511 0 0 0 5.244 5.244l2.228-1.611c.4-.294.926-.293 1.32.036l2.306 1.795a1.745 1.745 0 0 1 .163 2.61l-1.31 1.31c-.48.48-1.12.77-1.802.77C5.074 16 0 10.926 0 4.195c0-.68.29-1.32.77-1.802l1.31-1.31z"/></svg>
            +260 779 934 886
          </p>
          <p style="color: rgba(255,255,255,0.7); margin-bottom: 20px; display: flex; align-items: center; gap: 8px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/></svg>
            admissions@edenuniversity.edu.zm
          </p>
          <a href="https://wa.me/260779934886" class="btn btn-whatsapp" style="width: 100%;">Chat on WhatsApp</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 Eden University. All Rights Reserved. | Optimized for Official Admission Portal</p>
      </div>
    </div>
  </footer>

  <script>
    const navToggle = document.getElementById('nav-toggle');
    const navDrawer = document.getElementById('nav-drawer');
    const navOverlay = document.getElementById('nav-overlay');
    if(navToggle) {
      navToggle.addEventListener('click', () => { navDrawer.classList.add('open'); navOverlay.classList.add('open'); });
    }
  </script>
</body>
</html>`;
  fs.writeFileSync(path.join('programmes', `${slug}.html`), html);
});

console.log("Successfully generated programmes_data.js and " + data.length + " SEO HTML pages.");
