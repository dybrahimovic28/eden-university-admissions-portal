const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const BASE_URL = 'https://www.edenuniversityapplication.com';
const GSC_VERIFICATION = 'your-google-site-verification-code';
const BING_VERIFICATION = 'your-bing-site-verification-code';
const YANDEX_VERIFICATION = 'your-yandex-verification-code';

const rootHtmlFiles = fs.readdirSync(__dirname).filter(f => f.endsWith('.html') && !f.includes('seo_updater'));

const semanticText = `
<div style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;" class="seo-semantic-content">
  <h2>Official Admissions Support</h2>
  <p>This portal provides official Eden University application and admissions assistance services for prospective students. Applicants can receive guidance on programme selection, admission requirements, application submission, and enrollment procedures.</p>
</div>
`;

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const $ = cheerio.load(content);
  const filename = path.basename(filePath);
  const canonicalUrl = `${BASE_URL}/${filename === 'index.html' ? '' : filename}`;

  // Ensure title and description exist
  let titleText = $('title').text().trim();
  if (!titleText || titleText === 'Document') {
    titleText = `Eden University Application Zambia | Official Admissions`;
  }
  
  // Make titles more compelling
  if (filename === 'index.html') titleText = 'Eden University Application Zambia | Official Admissions Portal';
  if (filename === 'contact.html') titleText = 'Eden University WhatsApp & Contact | Admissions Support';
  if (filename === 'apply.html') titleText = 'Eden University Online Application Form 2026 | Apply Now';
  if (filename === 'faq.html') titleText = 'Eden University Admission FAQ | Fees, Intake & Requirements';
  
  $('title').text(titleText);

  let descText = $('meta[name="description"]').attr('content');
  if (!descText) {
    descText = `Apply for Eden University in Zambia. View admission requirements, semester fees, and career opportunities. Official admissions support.`;
  }
  if (filename === 'index.html') descText = 'Official Eden University admissions portal. Get application assistance, view admission requirements, check January/July intakes, and apply online today.';

  $('meta[name="description"]').remove();
  $('head').append(`\n  <meta name="description" content="${descText}">`);

  // Verification tags
  $('meta[name="google-site-verification"]').remove();
  $('meta[name="msvalidate.01"]').remove();
  $('meta[name="yandex-verification"]').remove();
  $('head').append(`\n  <meta name="google-site-verification" content="${GSC_VERIFICATION}" />`);
  $('head').append(`\n  <meta name="msvalidate.01" content="${BING_VERIFICATION}" />`);
  $('head').append(`\n  <meta name="yandex-verification" content="${YANDEX_VERIFICATION}" />`);

  // Canonical
  $('link[rel="canonical"]').remove();
  $('head').append(`\n  <link rel="canonical" href="${canonicalUrl}">`);

  // Open Graph & Twitter
  $('meta[property^="og:"]').remove();
  $('meta[name^="twitter:"]').remove();
  
  $('head').append(`\n  <meta property="og:title" content="${titleText}">`);
  $('head').append(`\n  <meta property="og:description" content="${descText}">`);
  $('head').append(`\n  <meta property="og:url" content="${canonicalUrl}">`);
  $('head').append(`\n  <meta property="og:type" content="website">`);
  $('head').append(`\n  <meta name="twitter:card" content="summary_large_image">`);
  $('head').append(`\n  <meta name="twitter:title" content="${titleText}">`);
  $('head').append(`\n  <meta name="twitter:description" content="${descText}">`);

  // Image alt tags
  $('img').each((i, el) => {
    let alt = $(el).attr('alt');
    if (!alt || alt.length < 3) {
      $(el).attr('alt', 'Eden University Online Application Zambia');
    }
  });

  // Footer copyright fix to "Application Portal"
  const footerCopyright = $('.footer-bottom p').first();
  if (footerCopyright.length > 0) {
     let text = footerCopyright.text();
     text = text.replace('Eden University.', 'Eden University Application Portal.');
     text = text.replace('Optimized for Official Admission Portal', 'Official Admissions Support');
     footerCopyright.text(text);
  }

  // Inject semantic content into body
  $('.seo-semantic-content').remove(); // remove if exists
  if ($('.footer-bottom').length > 0) {
    $('.footer-bottom').append(semanticText);
  } else {
    $('body').append(semanticText);
  }

  // WhatsApp click-to-chat update text
  $('a[href^="https://wa.me/"]').each((i, el) => {
     let text = $(el).text();
     if (text.includes('WhatsApp') && !text.includes('Eden University')) {
         $(el).text('Chat on Eden University Admissions WhatsApp');
     }
  });

  // Inject JSON-LD
  $('script[type="application/ld+json"].seo-schema').remove();

  let schemas = [];
  
  // Basic WebPage
  schemas.push({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": titleText,
    "url": canonicalUrl
  });

  // Index and Contact Specific
  if (filename === 'index.html' || filename === 'contact.html') {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Eden University Application Portal",
      "url": BASE_URL,
      "logo": `${BASE_URL}/eden-university-application-logo.png`,
      "sameAs": [
        "https://maps.app.goo.gl/i9aXQ1ngP681k9LaA",
        "https://wa.me/260779934886"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+260-779-934-886",
        "contactType": "Admissions Support",
        "availableLanguage": "English"
      }
    });
    schemas.push({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Eden University Application Portal",
      "image": `${BASE_URL}/eden-university-application-logo.png`,
      "telephone": "+260779934886",
      "url": BASE_URL,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lusaka",
        "addressCountry": "Zambia"
      }
    });
  }

  // FAQ Page specific
  if (filename === 'faq.html') {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I apply to Eden University?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can apply to Eden University entirely online through our application portal. Simply select your programme, check the entry requirements, and click Apply Online."
          }
        },
        {
          "@type": "Question",
          "name": "What are Eden University admission requirements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally, you need a minimum of 5 O-Level credits including English, Mathematics, and Science for degree programmes. Diplomas require 3 to 4 credits."
          }
        },
        {
          "@type": "Question",
          "name": "How much are Eden University fees?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fees vary by programme. For example, Nursing is typically ZMW 10,160 per semester, and Clinical Medicine is ZMW 10,300 per semester. Please check the specific programme page."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Eden University WhatsApp number?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Eden University Admissions WhatsApp number for application assistance is +260 779 934 886."
          }
        }
      ]
    });
  }

  if (filename === 'testimonials.html') {
     schemas.push({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Eden University Admissions Support",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "154"
      }
    });
  }

  schemas.forEach(schema => {
    $('head').append(`\n  <script type="application/ld+json" class="seo-schema">${JSON.stringify(schema, null, 2)}</script>`);
  });

  fs.writeFileSync(filePath, $.html());
  console.log(`Updated ${filename}`);
}

rootHtmlFiles.forEach(f => processFile(path.join(__dirname, f)));
console.log('Done updating root HTML files.');
