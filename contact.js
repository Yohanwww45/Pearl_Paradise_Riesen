// Scroll reveal (simple, runs once)
document.querySelectorAll('.reveal').forEach((el, i) => {
  const obs = new IntersectionObserver(([e], o) => {
    if (e.isIntersecting) { el.style.animationDelay = `${i * 60}ms`; el.classList.add('show'); o.disconnect(); }
  }, { threshold: .2 });
  obs.observe(el);
});

// FAQ accordion
document.querySelectorAll('.faq-q').forEach((btn) => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const isOpen = answer.style.maxHeight && parseInt(answer.style.maxHeight) > 0;
    document.querySelectorAll('.faq-a').forEach(a => { a.style.maxHeight = null; a.classList.remove('open'); });
    if (!isOpen) { answer.style.maxHeight = answer.scrollHeight + 'px'; answer.classList.add('open'); }
  });
});

// Submit form
const form = document.getElementById('contactForm');
const prefsForm = document.getElementById('prefsForm');
const result = document.getElementById('formResult');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  result.textContent = 'Sende Anfrage …';

  // build payload (merge prefs into contact payload)
  const formData = new FormData(form);
  const prefs = Object.fromEntries(new FormData(prefsForm).entries());
  formData.append('preferences', JSON.stringify({
    ...prefs,
    // interests is multi-select -> add array
    interests: [...(prefsForm.querySelector('[name="interests"]')).selectedOptions].map(o => o.value)
  }));

  try {
    // --- OPTION A: your own backend endpoint (recommended) ---
    // const res = await fetch('/api/contact', { method:'POST', body: formData });
    // const json = await res.json();

    // --- OPTION B: Formspree (quick, no backend) ---
    // 1) Create a Formspree form, replace YOUR_FORM_ID below.
    // 2) Uncomment:
    // const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', { method:'POST', body: formData, headers: { 'Accept': 'application/json' }});
    // const json = await res.json();

    // Demo only (remove in production):
    await new Promise(r => setTimeout(r, 700));
    const json = { ok: true };

    if (json.ok || json.success) {
      result.textContent = 'Danke! Wir haben Ihre Anfrage erhalten und melden uns in Kürze.';
      form.reset();
      // also reset multi-select visually
      prefsForm.reset();
    } else {
      throw new Error(json.error || 'Senden fehlgeschlagen');
    }
  } catch (err) {
    console.error(err);
    result.textContent = 'Leider gab es ein Problem beim Senden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns per Telefon/WhatsApp.';
  }
});
