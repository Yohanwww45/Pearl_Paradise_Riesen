// Scroll reveal (simple, runs once)
document.querySelectorAll('.reveal').forEach((el, i) => {
  const obs = new IntersectionObserver(([e], o) => {
    if (e.isIntersecting) { el.style.animationDelay = `${i * 60}ms`; el.classList.add('show'); o.disconnect(); }
  }, { threshold: .2 });
  obs.observe(el);
});

document.addEventListener('DOMContentLoaded', function() {
        const faqButtons = document.querySelectorAll('.faq-q');
            
        faqButtons.forEach(button => {
            button.addEventListener('click', () => {
                const answer = button.nextElementSibling;
                const isOpen = answer.classList.contains('open');
                    
                // Close all answers
                document.querySelectorAll('.faq-a').forEach(item => {
                      item.classList.remove('open');
                });
                    
                document.querySelectorAll('.faq-q').forEach(item => {
                      item.classList.remove('open');
                });
                    
                // Open clicked answer if it wasn't already open
                  if (!isOpen) {
                    button.classList.add('open');
                    answer.classList.add('open');
                }
            });
        });
    });


//contact form with EmailJS
const contactForm  = document.getElementById('contactForm');
const contactResult = document.getElementById('formResult');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  contactResult.textContent = 'Sende Ihre Nachricht …';

  const data = Object.fromEntries(new FormData(contactForm).entries());

  const params = {
    name:    data.name || '',
    email:   data.email || '',
    phone:   data.phone || '',
    subject: data.subject || '',
    message: data.message || ''
  };

  try {
    await emailjs.send(
      'service_2wxmu4a',        // e.g. service_rchy4il
      'template_wvaorap',       // e.g. template_abcd123
      params
    );

    contactResult.textContent = 'Danke! Wir haben Ihre Nachricht erhalten und melden uns bald.';
    contactForm.reset();

  } catch (err) {
    console.error(err);
    contactResult.textContent = 'Leider gab es ein Problem beim Senden. Bitte versuchen Sie es erneut.';
  }
});


