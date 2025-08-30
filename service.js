// mobile menu
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
hamburger.addEventListener('click', () => {
  const open = menu.style.display === 'flex';
  if (!open) {
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

// tabs
const tabs = document.querySelectorAll('.tab');
const panels = {
  tourpakete: document.getElementById('tourpakete'),
  villapakete: document.getElementById('villapakete'),
};
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const target = tab.dataset.target;
    for (const key in panels) {
      if (key === target) {
        panels[key].hidden = false;
        panels[key].classList.add('show');
      } else {
        panels[key].hidden = true;
        panels[key].classList.remove('show');
      }
    }
    // scroll to cards
    const top = document.getElementById(target).offsetTop - 8;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});


  document.addEventListener("DOMContentLoaded", function () {
    const hash = window.location.hash;

    if (hash === "#villapakete") {
      const villaSection = document.getElementById("villapakete");
      if (villaSection) {
        villaSection.removeAttribute("hidden");

        // Optional: hide other sections if part of tab system
        document.querySelectorAll('[role="tabpanel"]').forEach(el => {
          if (el.id !== "villapakete") el.setAttribute("hidden", true);
        });

        // Optional: scroll into view
        villaSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  });

