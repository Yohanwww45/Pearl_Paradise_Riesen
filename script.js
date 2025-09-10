// mobile menu
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
hamburger.addEventListener('click', () => {
  const visible = menu.style.display === 'flex';
  if (!visible) {
    menu.style.display = 'flex';
    menu.style.flexDirection = 'column';
    menu.style.position = 'absolute';
    menu.style.top = '64px';
    menu.style.right = '1rem';
    menu.style.gap = '10px';
    menu.style.background = '#fff';
    menu.style.padding = '12px';
    menu.style.border = '1px solid #e5e7eb';
    menu.style.borderRadius = '12px';
    menu.style.boxShadow = '0 12px 24px rgba(0,0,0,.12)';
  } else {
    menu.style.display = 'none';
  }
});

// smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      window.scrollTo({ top: el.offsetTop - 10, behavior: 'smooth' });
      if (window.innerWidth < 860) menu.style.display = 'none';
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('villaSlider');
  if (!slider) return;

  const slides = slider.querySelectorAll('img');
  if (slides.length <= 1) return; // nothing to slide

  let idx = 0;
  let timer;

  function go() {
    idx = (idx + 1) % slides.length;
    slider.style.transform = `translateX(-${idx * 100}%)`;
  }

  function start() { timer = setInterval(go, 3000); }
  function stop() { clearInterval(timer); }

  // start + pause on hover
  start();
  slider.parentElement.addEventListener('mouseenter', stop);
  slider.parentElement.addEventListener('mouseleave', start);

  // (optional) jump to first on resize
  window.addEventListener('resize', () => {
    slider.style.transform = 'translateX(0)';
    idx = 0;
  });
});


