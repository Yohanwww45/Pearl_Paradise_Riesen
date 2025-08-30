// mobile menu
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
hamburger.addEventListener('click', () => {
  const show = menu.style.display === 'flex';
  if (!show) {
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

// simple testimonial scroller on small screens
const scroller = document.getElementById('testi');
const prev = document.querySelector('.t-arrow.prev');
const next = document.querySelector('.t-arrow.next');

function scrollAmount() {
  // scroll one card width
  const card = scroller.querySelector('.t-card');
  return card ? card.getBoundingClientRect().width + 14 : 300;
}

prev.addEventListener('click', () => {
  scroller.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
});
next.addEventListener('click', () => {
  scroller.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
});
