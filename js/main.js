// Okinawa Off-Base Guide — shared site scripts

// Google Analytics 4: paste your Measurement ID (G-XXXXXXXXXX) to enable.
var GA_MEASUREMENT_ID = '';

if (GA_MEASUREMENT_ID) {
  var gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
  document.head.appendChild(gaScript);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID);
}

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      var expanded = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  }

  // Affiliate click tracking: every affiliate link goes through /go/<slug>
  // (see affiliates.json). Reported to GA4 as "affiliate_click".
  document.querySelectorAll('a[href^="/go/"]').forEach(function (a) {
    a.addEventListener('click', function () {
      if (typeof window.gtag !== 'function') return;
      window.gtag('event', 'affiliate_click', {
        link_slug: a.getAttribute('href').replace('/go/', ''),
        page_path: window.location.pathname,
        transport_type: 'beacon'
      });
    });
  });

  // Set current year in footer
  document.querySelectorAll('.current-year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
});
