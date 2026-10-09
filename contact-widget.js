/**
 * Eden University Admissions & Application Portal
 * Global Floating Contact Widget
 * Features:
 * - Circular WhatsApp floating action button (closed state)
 * - Smoothly expanding pill menu: WhatsApp, Phone Call, Contact Us
 * - Click-outside & Escape key dismissal
 * - Deep linking for WhatsApp (wa.me) and mobile phone dialer (tel:)
 * - Subdirectory awareness for relative links
 */

(function () {
  function initContactWidget() {
    // Prevent duplicate widget
    if (document.getElementById('floatingContactWidget')) {
      bindEvents(document.getElementById('floatingContactWidget'));
      return;
    }

    var isSubdir = window.location.pathname.indexOf('/programmes/') !== -1 || window.location.pathname.indexOf('/blog/') !== -1;
    var contactHref = isSubdir ? '../contact.html' : 'contact.html';

    var widget = document.createElement('div');
    widget.className = 'floating-contact-widget';
    widget.id = 'floatingContactWidget';
    widget.setAttribute('aria-label', 'Admissions Contact Assistant');

    widget.innerHTML = [
      '<div class="contact-menu-popup" id="contactMenuPopup" role="dialog" aria-label="Admissions Contact Options" aria-hidden="true">',
      '  <a href="https://wa.me/260779934886" class="contact-pill-btn btn-wa" target="_blank" rel="noopener noreferrer" aria-label="Chat with Admissions Support on WhatsApp">',
      '    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">',
      '      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>',
      '    </svg>',
      '    <span>WhatsApp</span>',
      '  </a>',
      '  <a href="tel:+260779934886" class="contact-pill-btn btn-phone" aria-label="Call Eden University Admissions Office">',
      '    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">',
      '      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
      '    </svg>',
      '    <span>Phone Call</span>',
      '  </a>',
      '  <a href="' + contactHref + '" class="contact-pill-btn btn-contact-page" aria-label="Visit Eden University Contact Us page">',
      '    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">',
      '      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
      '    </svg>',
      '    <span>CONTACT US</span>',
      '  </a>',
      '</div>',
      '<button class="floating-contact-trigger" id="floatingContactTrigger" aria-label="Admissions Contact Options" aria-expanded="false" type="button">',
      '  <svg class="icon-whatsapp" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">',
      '    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>',
      '  </svg>',
      '  <svg class="icon-close" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">',
      '    <line x1="18" y1="6" x2="6" y2="18"></line>',
      '    <line x1="6" y1="6" x2="18" y2="18"></line>',
      '  </svg>',
      '</button>'
    ].join('\n');

    document.body.appendChild(widget);
    bindEvents(widget);
  }

  function bindEvents(widget) {
    var trigger = widget.querySelector('#floatingContactTrigger');
    var popup = widget.querySelector('#contactMenuPopup');
    if (!trigger || !popup) return;

    function toggleMenu(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      var isOpen = widget.classList.toggle('open');
      trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      popup.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    }

    function closeMenu() {
      if (widget.classList.contains('open')) {
        widget.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
        popup.setAttribute('aria-hidden', 'true');
      }
    }

    trigger.addEventListener('click', toggleMenu);

    // Close on outside tap / click
    document.addEventListener('click', function (e) {
      if (!widget.contains(e.target)) {
        closeMenu();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' || e.key === 'Esc') {
        closeMenu();
      }
    });

    // Close menu when a link inside it is clicked
    var links = popup.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function () {
        // Small delay so navigation / deep-link starts
        setTimeout(closeMenu, 150);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactWidget);
  } else {
    initContactWidget();
  }
})();
