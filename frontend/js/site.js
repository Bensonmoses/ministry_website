/* ============================================================
   HOLY SPIRIT PRAYER HOUSE — Shared Site Components
   Injects header, footer, WhatsApp button on every page
   ============================================================ */

// Mark HTML so CSS knows JS loaded — must be first line so
// [data-reveal] elements get opacity:0 before any paint
document.documentElement.classList.add('js');

const SITE = {
  phone:     '+919848315170',
  phoneDisplay: '+91 98483 15170',
  email:     'pastorpmoses2014@gmail.com',
  address:   '4-92, Kotha Colony, Oduru, Penumantra Mandal, West Godavari - 534126, AP, India',
  youtube:   'https://www.youtube.com/@pastorpmoses',
  instagram: 'https://www.instagram.com/hsph_oduru/',
  facebook:  'https://www.facebook.com/holy.jesus132',
  whatsapp:  'https://wa.me/919848315170'
};

// ── Language ──────────────────────────────────────────────
function toggleLanguage(lang) {
  localStorage.setItem('hsph_lang', lang);
  document.body.className = lang;
  document.querySelectorAll('.lang-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === lang)
  );
}

// ── Active nav link ───────────────────────────────────────
function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

// ── Header HTML ───────────────────────────────────────────
function renderHeader() {
  return `
<div class="top-bar">
  <div class="top-bar__contact">
    <span>✉ <a href="mailto:${SITE.email}">${SITE.email}</a></span>
    <span>📞 <a href="tel:${SITE.phone}">${SITE.phoneDisplay}</a></span>
    <span>📍 Oduru, West Godavari, AP</span>
  </div>
  <div style="display:flex;gap:0.4rem;">
    <button class="lang-btn active" data-lang="english" onclick="toggleLanguage('english')">English</button>
    <button class="lang-btn" data-lang="telugu" onclick="toggleLanguage('telugu')">తెలుగు</button>
  </div>
</div>

<header id="mainHeader">
  <div class="header-container">
    <a href="index.html" class="logo">
      <img src="images/logo.webp" alt="Holy Spirit Prayer House">
      <div class="logo-text">
        <strong>
          <span class="english-text">Holy Spirit Prayer House</span>
          <span class="telugu-text">హోలీ స్పిరిట్ మందిరం</span>
        </strong>
        <span>
          <span class="english-text">Faith · Hope · Love</span>
          <span class="telugu-text">విశ్వాసం · ఆశ · ప్రేమ</span>
        </span>
      </div>
    </a>
    <nav class="desktop-nav">
      <ul class="nav-links">
        <li><a href="index.html"><span class="english-text">Home</span><span class="telugu-text">హోమ్</span></a></li>
        <li><a href="about.html"><span class="english-text">About</span><span class="telugu-text">గురించి</span></a></li>
        <li><a href="sermons.html"><span class="english-text">Sermons</span><span class="telugu-text">ప్రసంగాలు</span></a></li>
        <li><a href="ministries.html"><span class="english-text">Ministries</span><span class="telugu-text">సేవలు</span></a></li>
        <li><a href="orphanage.html"><span class="english-text">Orphanage</span><span class="telugu-text">అనాథాశ్రమం</span></a></li>
        <li><a href="events.html"><span class="english-text">Events</span><span class="telugu-text">ఈవెంట్స్</span></a></li>
        <li><a href="contact.html"><span class="english-text">Contact</span><span class="telugu-text">సంప్రదించండి</span></a></li>
        <li><a href="volunteer.html"><span class="english-text">Get Involved</span><span class="telugu-text">చేరడం</span></a></li>
        <li><a href="donate.html" class="nav-donate"><span class="english-text">Donate</span><span class="telugu-text">దానం</span></a></li>
      </ul>
    </nav>
    <button class="mobile-menu-button" id="menuButton" aria-label="Open Menu">&#9776;</button>
  </div>
  <div class="mobile-overlay" id="mobileOverlay"></div>
  <nav class="mobile-nav" id="mobileNav">
    <button class="mobile-close" id="mobileClose">&times;</button>
    <ul class="nav-links">
      <li><a href="index.html"><span class="english-text">Home</span><span class="telugu-text">హోమ్</span></a></li>
      <li><a href="about.html"><span class="english-text">About</span><span class="telugu-text">గురించి</span></a></li>
      <li><a href="sermons.html"><span class="english-text">Sermons</span><span class="telugu-text">ప్రసంగాలు</span></a></li>
      <li><a href="ministries.html"><span class="english-text">Ministries</span><span class="telugu-text">సేవలు</span></a></li>
      <li><a href="orphanage.html"><span class="english-text">Orphanage</span><span class="telugu-text">అనాథాశ్రమం</span></a></li>
      <li><a href="events.html"><span class="english-text">Events</span><span class="telugu-text">ఈవెంట్స్</span></a></li>
      <li><a href="contact.html"><span class="english-text">Contact</span><span class="telugu-text">సంప్రదించండి</span></a></li>
      <li><a href="volunteer.html"><span class="english-text">Get Involved</span><span class="telugu-text">చేరడం</span></a></li>
      <li><a href="donate.html" class="nav-donate"><span class="english-text">Donate Now</span><span class="telugu-text">దానం చేయండి</span></a></li>
    </ul>
  </nav>
</header>`;
}

// ── Footer HTML ───────────────────────────────────────────
function renderFooter() {
  return `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="logo" style="margin-bottom:1rem;">
          <img src="images/logo.webp" alt="Holy Spirit Prayer House">
          <div class="logo-text">
            <strong style="color:#fff;">
              <span class="english-text">Holy Spirit Prayer House</span>
              <span class="telugu-text">హోలీ స్పిరిట్ మందిరం</span>
            </strong>
          </div>
        </a>
        <p><span class="english-text">A beacon of faith, hope, and love in Oduru, West Godavari, Andhra Pradesh. Serving the community for over 20 years.</span><span class="telugu-text">ఒదురులో విశ్వాసం, ఆశ మరియు ప్రేమ యొక్క దీపస్తంభం. 20 సంవత్సరాలకు పైగా సమాజానికి సేవ చేస్తున్నాం.</span></p>
        <div class="footer-social">
          <a href="${SITE.youtube}" target="_blank" class="social-btn" aria-label="YouTube">▶</a>
          <a href="${SITE.instagram}" target="_blank" class="social-btn" aria-label="Instagram">📷</a>
          <a href="${SITE.facebook}" target="_blank" class="social-btn" aria-label="Facebook">f</a>
          <a href="${SITE.whatsapp}" target="_blank" class="social-btn" aria-label="WhatsApp">💬</a>
        </div>
      </div>
      <div class="footer-col">
        <h4><span class="english-text">Quick Links</span><span class="telugu-text">లింక్‌లు</span></h4>
        <ul>
          <li><a href="about.html"><span class="english-text">About Us</span><span class="telugu-text">మా గురించి</span></a></li>
          <li><a href="sermons.html"><span class="english-text">Sermons</span><span class="telugu-text">ప్రసంగాలు</span></a></li>
          <li><a href="ministries.html"><span class="english-text">Ministries</span><span class="telugu-text">సేవలు</span></a></li>
          <li><a href="orphanage.html"><span class="english-text">Orphanage</span><span class="telugu-text">అనాథాశ్రమం</span></a></li>
          <li><a href="events.html"><span class="english-text">Events</span><span class="telugu-text">ఈవెంట్స్</span></a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4><span class="english-text">Get Involved</span><span class="telugu-text">చేరండి</span></h4>
        <ul>
          <li><a href="volunteer.html"><span class="english-text">Volunteer</span><span class="telugu-text">స్వచ్ఛంద సేవ</span></a></li>
          <li><a href="donate.html"><span class="english-text">Donate</span><span class="telugu-text">దానం</span></a></li>
          <li><a href="contact.html"><span class="english-text">Contact Us</span><span class="telugu-text">సంప్రదించండి</span></a></li>
          <li><a href="${SITE.youtube}" target="_blank"><span class="english-text">YouTube Channel</span><span class="telugu-text">YouTube ఛానల్</span></a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4><span class="english-text">Contact</span><span class="telugu-text">సంప్రదించండి</span></h4>
        <ul class="footer-contact">
          <li><span>📍</span><span><span class="english-text">Oduru, West Godavari, Andhra Pradesh, India</span><span class="telugu-text">ఒదురు, పశ్చిమ గోదావరి, ఆంధ్రప్రదేశ్</span></span></li>
          <li><span>📞</span><span><a href="tel:${SITE.phone}" style="color:inherit;">${SITE.phoneDisplay}</a></span></li>
          <li><span>✉</span><span><a href="mailto:${SITE.email}" style="color:var(--gold);">${SITE.email}</a></span></li>
          <li><span>💬</span><span><a href="${SITE.whatsapp}" target="_blank" style="color:#25D366;">WhatsApp Us</a></span></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2025 Holy Spirit Prayer House. <span class="english-text">All Rights Reserved.</span><span class="telugu-text">అన్ని హక్కులు పరిరక్షించబడినవి.</span></span>
      <span><span class="english-text">Made with ❤️ for God's Glory</span><span class="telugu-text">దేవుని మహిమ కోసం ❤️తో</span></span>
    </div>
  </div>
</footer>

<!-- WhatsApp Floating Button -->
<a href="${SITE.whatsapp}" target="_blank" class="whatsapp-float" aria-label="Chat on WhatsApp">
  <span class="whatsapp-icon">💬</span>
  <span class="whatsapp-label"><span class="english-text">WhatsApp Us</span><span class="telugu-text">WhatsApp చేయండి</span></span>
</a>

<!-- Chatbot Floating Button -->
<button id="chatbot-toggle" class="chatbot-button" aria-label="Chat with us">
  <img src="images/founder.jpg" alt="Chat">
  <span class="english-text">Ask Us</span>
  <span class="telugu-text">అడగండి</span>
</button>
<div id="chatbot-popup" class="chatbot-popup hidden">
  <div class="chatbot-header">
    <span>💬 <span class="english-text">Chat with Us</span><span class="telugu-text">మాతో చాట్ చేయండి</span></span>
    <button id="close-chatbot" class="close-button">&times;</button>
  </div>
  <div style="padding:1.5rem;text-align:center;color:#666;font-size:0.9rem;">
    <p style="margin-bottom:1rem;"><span class="english-text">Hello! How can we help you?</span><span class="telugu-text">నమస్కారం! మేము మీకు ఎలా సహాయం చేయగలం?</span></p>
    <a href="${SITE.whatsapp}" target="_blank" class="btn btn-primary" style="font-size:0.85rem;padding:0.6rem 1.2rem;">
      <span class="english-text">💬 Chat on WhatsApp</span><span class="telugu-text">💬 WhatsApp లో మాట్లాడండి</span>
    </a>
  </div>
</div>`;
}

// ── Scroll-reveal (IntersectionObserver) ──────────────
function initReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;

  // Fallback: if observer never fires (layout edge-case), reveal all after 800ms
  const fallback = setTimeout(() => {
    els.forEach(el => el.classList.add('is-visible'));
  }, 800);

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
    // Cancel fallback once observer fires at least once
    clearTimeout(fallback);
  }, { threshold: 0, rootMargin: '0px 0px -30px 0px' });

  els.forEach(el => io.observe(el));
}

// ── Init ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Inject header
  const headerEl = document.getElementById('site-header');
  if (headerEl) headerEl.innerHTML = renderHeader();

  // Inject footer
  const footerEl = document.getElementById('site-footer');
  if (footerEl) footerEl.innerHTML = renderFooter();

  // Language
  const lang = localStorage.getItem('hsph_lang') || 'english';
  toggleLanguage(lang);

  // Active nav
  setActiveNav();

  // Mobile menu
  const menuBtn   = document.getElementById('menuButton');
  const mobileNav = document.getElementById('mobileNav');
  const overlay   = document.getElementById('mobileOverlay');
  const closeBtn  = document.getElementById('mobileClose');

  if (menuBtn) {
    const open  = () => { mobileNav.classList.add('active');  overlay.classList.add('active');  document.body.style.overflow='hidden'; };
    const close = () => { mobileNav.classList.remove('active'); overlay.classList.remove('active'); document.body.style.overflow=''; };
    menuBtn.addEventListener('click', open);
    if (closeBtn)  closeBtn.addEventListener('click', close);
    if (overlay)   overlay.addEventListener('click', close);
  }

  // Chatbot
  const toggle = document.getElementById('chatbot-toggle');
  const popup  = document.getElementById('chatbot-popup');
  const closeC = document.getElementById('close-chatbot');
  if (toggle && popup && closeC) {
    toggle.addEventListener('click', () => popup.classList.toggle('hidden'));
    closeC.addEventListener('click', () => popup.classList.add('hidden'));
  }

  // Scroll shadow on header + progress bar
  window.addEventListener('scroll', () => {
    const h = document.getElementById('mainHeader');
    if (h) h.style.boxShadow = window.scrollY > 60
      ? '0 4px 32px rgba(0,0,0,0.55)' : '0 2px 24px rgba(0,0,0,0.45)';
  }, { passive: true });

  // Scroll-reveal
  initReveal();
});
