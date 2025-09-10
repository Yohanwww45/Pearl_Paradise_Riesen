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

// simple form handler (no backend)
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  document.getElementById('formResult').textContent =
    `Danke, ${data.name || 'Reisefan'}! Wir melden uns per E-Mail.`;
  form.reset();
});

// helper
function scrollToId(id){
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 10, behavior: 'smooth' });
}


const villaSlider = document.getElementById('villaSlider');
const villaImages = villaSlider.querySelectorAll('img');
let villaIndex = 0;

function slideVillaGallery() {
  villaIndex = (villaIndex + 1) % villaImages.length;
  villaSlider.style.transform = `translateX(-${villaIndex * 100}%)`;
}

setInterval(slideVillaGallery, 2000); // every 2 seconds


