/* ================================================================
   APPLEGATE CHRISTIAN SCHOOLS — Main JavaScript
   applegateschool.sc.ke — v2.0 Production
   ================================================================ */

(function () {
  'use strict';

  /* ============================================================
     1. CUSTOM CURSOR
     ============================================================ */
  const isTouch = matchMedia('(hover:none),(pointer:coarse)').matches;
  const dot  = document.getElementById('cdot');
  const ring = document.getElementById('cring');

  if (!isTouch && dot && ring) {
    let rx = innerWidth / 2, ry = innerHeight / 2, mx = rx, my = ry;

    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top  = my + 'px';
    });

    (function tick() {
      rx += (mx - rx) * 0.13;
      ry += (my - ry) * 0.13;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      requestAnimationFrame(tick);
    })();
  }

  function addCursorHovers() {
    if (isTouch) return;
    document.querySelectorAll(
      'a, button, .tier-c, .testi, .staff-c, .val-i, .why-i, .od-c, .ev-c, .cocurr-i, .pillar, .faq-q, [role="button"]'
    ).forEach(el => {
      el.addEventListener('mouseenter', () => { dot.classList.add('h'); ring.classList.add('h'); });
      el.addEventListener('mouseleave', () => { dot.classList.remove('h'); ring.classList.remove('h'); });
    });
  }

  /* ============================================================
     2. PAGE ROUTING (SPA-style)
     ============================================================ */
  function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const pg = document.getElementById('page-' + id);
    if (pg) {
      pg.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    document.querySelectorAll('[data-page]').forEach(a => a.classList.remove('act'));
    const lnk = document.querySelector('[data-page="' + id + '"]');
    if (lnk) lnk.classList.add('act');
    setTimeout(initSR, 60);
    addCursorHovers();
  }

  /* Expose globally so inline onclick handlers can call it */
  window.showPage = showPage;

  /* ============================================================
     3. STICKY NAV + BACK TO TOP
     ============================================================ */
  const nav = document.getElementById('mainNav');
  const btt = document.getElementById('btt');

  window.addEventListener('scroll', () => {
    if (nav) nav.classList.toggle('scrolled', scrollY > 20);
    if (btt) btt.classList.toggle('show', scrollY > 400);
  }, { passive: true });

  /* ============================================================
     4. MOBILE NAV
     ============================================================ */
  const tog = document.getElementById('navTog');
  const mob = document.getElementById('mobNav');
  const mc  = document.getElementById('mobClose');

  function closeMob() {
    if (tog) tog.classList.remove('open');
    if (mob) mob.classList.remove('open');
    document.body.style.overflow = '';
  }
  window.closeMob = closeMob;

  if (tog && mob) {
    tog.addEventListener('click', () => {
      tog.classList.toggle('open');
      mob.classList.toggle('open');
      document.body.style.overflow = mob.classList.contains('open') ? 'hidden' : '';
    });
  }
  if (mc) mc.addEventListener('click', closeMob);

  /* ============================================================
     5. SCROLL REVEAL (IntersectionObserver)
     ============================================================ */
  function initSR() {
    /* Reveal animations */
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' });

    document.querySelectorAll('.sr:not(.in)').forEach(el => io.observe(el));

    /* Animated counters */
    const co = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el    = e.target;
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suf || '';
        let current = 0;
        const step = Math.ceil(target / 60);
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = current + suffix;
          if (current >= target) clearInterval(timer);
        }, 18);
        co.unobserve(el);
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-count]:not(.counted)').forEach(el => {
      co.observe(el);
      el.classList.add('counted');
    });
  }

  /* ============================================================
     6. FAQ ACCORDION
     ============================================================ */
  function toggleFaq(el) {
    const item = el.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
    el.setAttribute('aria-expanded', !isOpen);
  }
  window.toggleFaq = toggleFaq;

  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleFaq(q); }
    });
  });

  /* ============================================================
     7. RADIO GROUP (Contact form enquiry type)
     ============================================================ */
  function selRad(lbl) {
    document.querySelectorAll('.radio-o').forEach(l => l.classList.remove('sel'));
    lbl.classList.add('sel');
  }
  window.selRad = selRad;

  /* ============================================================
     8. CONTACT FORM — Web3Forms (real email delivery)
     ============================================================ */
  window.submitForm = async function () {
    const n   = document.getElementById('pname')?.value.trim();
    const e   = document.getElementById('femail')?.value.trim();
    const p   = document.getElementById('fphone')?.value.trim();
    const g   = document.getElementById('fgrade')?.value;
    const s   = document.getElementById('fstart')?.value;
    const m   = document.getElementById('fmsg')?.value.trim();
    const enq = document.querySelector('.radio-o.sel')?.textContent.trim() || 'General';

    if (!n || !e || !p) {
      alert('Please fill in your name, email, and phone number.');
      return;
    }

    const btn = document.querySelector('.form-wrap .btn-pu');
    if (btn) { btn.textContent = 'Sending…'; btn.disabled = true; }

    try {
      /*
        Web3Forms — FREE, no backend needed.
        1. Go to https://web3forms.com
        2. Enter admin@applegateschool.sc.ke to get your access key
        3. Replace YOUR_WEB3FORMS_ACCESS_KEY below with the real key
      */
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key:          'YOUR_WEB3FORMS_ACCESS_KEY',
          subject:             `Applegate Schools Enquiry — ${enq} from ${n}`,
          from_name:           'Applegate Schools Website',
          replyto:             e,
          to:                  'admin@applegateschool.sc.ke',
          name:                n,
          email:               e,
          phone:               p,
          enquiry_type:        enq,
          grade_applying_for:  g  || 'Not specified',
          intended_start:      s  || 'Not specified',
          message:             m  || 'No message provided',
          botcheck:            ''
        })
      });

      const data = await res.json();

      if (data.success) {
        const emailSpan = document.getElementById('fSuccessEmail');
        if (emailSpan) emailSpan.textContent = e;
        const successDiv = document.getElementById('fSuccess');
        if (successDiv) {
          successDiv.classList.add('show');
          successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        if (btn) btn.style.display = 'none';
      } else {
        if (btn) { btn.textContent = 'Send Message'; btn.disabled = false; }
        alert('There was an issue sending your message. Please call us directly on 0750 788 257.');
      }
    } catch (err) {
      if (btn) { btn.textContent = 'Send Message'; btn.disabled = false; }
      alert('Connection error. Please try again or call 0750 788 257.');
    }
  };

  /* ============================================================
     9. INIT
     ============================================================ */
  initSR();
  addCursorHovers();

})();
