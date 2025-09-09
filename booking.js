// ------------ Config ------------
const BOOKING_API_URL = 'https://your-backend.example.com/api/booking'; // <- set to your deployed Express endpoint
// If you don't have it yet, comment the fetch() below and use the simulated success.

// ------------ Helpers ------------
const $ = (sel) => document.querySelector(sel);
const params = new URLSearchParams(location.search);

// Read context from URL (?type=tour|villa&title=...&route=...&from=YYYY-MM-DD&to=YYYY-MM-DD)
function fillContextFromURL(){
  const type = params.get('type') || 'Paket';
  const title = params.get('title') || 'Ausgewähltes Paket';
  const route = params.get('route') || '–';
  const from = params.get('from');
  const to = params.get('to');

  $('#bkType').textContent = type === 'villa' ? 'Villa-Buchung' : 'Tour-Buchung';
  $('#bkTypeShort').textContent = type === 'villa' ? 'Villa' : 'Tour';
  $('#bkTitle').textContent = title;
  $('#bkRoute').textContent = route;

  let full = '–';
  if (from && to) full = `${from} – ${to}`;
  else if (from) full = `ab ${from}`;
  $('#bkDates').textContent = `Reisedaten: ${full}`;
  $('#bkDatesShort').textContent = full;

  // Prefill form dates if provided
  if (from) $('input[name="dateFrom"]').value = from;
  if (to) $('input[name="dateTo"]').value = to;
}
fillContextFromURL();

// Simple reveal timing
document.querySelectorAll('.bk-reveal').forEach((el, i) => {
  el.style.animationDelay = `${i * 80}ms`;
});

// Intent buttons
let currentIntent = 'confirm'; // 'confirm' | 'enquire'
$('#enquireBtn').addEventListener('click', () => {
  currentIntent = 'enquire';
  $('#confirmBtn').click(); // submit the form with enquire intent
});

// Submit
const form = $('#bookingForm');
const result = $('#bkResult');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  result.textContent = 'Sende Ihre Buchungsdaten …';

  // Validate basic fields
  if (!form.checkValidity()) {
    result.textContent = 'Bitte alle Pflichtfelder korrekt ausfüllen.';
    form.reportValidity();
    currentIntent = 'confirm'; // reset
    return;
  }

  // gather raw form fields
  const data = Object.fromEntries(new FormData(form).entries());

  // OPTIONAL: include context in the submission so it lands in your email too
  // (uncomment if you want title/route/dates in the email payload)
  // data.__context = JSON.stringify({
  //   type: $('#bkTypeShort').textContent,
  //   title: $('#bkTitle').textContent,
  //   route: $('#bkRoute').textContent,
  //   dates: $('#bkDatesShort').textContent,
  //   intent: currentIntent
  // });

  try {
    // --- FORMSPREE API CALL ---
    const res = await fetch("https://formspree.io/f/mblawlgg", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });

    if (!res.ok) throw new Error("Send error");

    // Success UI → hide form, show success screen with bank details
    document.getElementById('bookingCard').hidden = true;
    document.getElementById('successScreen').hidden = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    result.textContent = '';

  } catch (err) {
    console.error(err);
    result.textContent = 'Leider gab es ein Problem beim Senden. Bitte versuchen Sie es erneut.';
  }
});


const fromEl = document.querySelector('input[name="dateFrom"]');
const toEl   = document.querySelector('input[name="dateTo"]');
function updateDatesChip() {
  const from = fromEl.value;
  const to   = toEl.value;
  const full = (from && to) ? `${from} – ${to}` : (from ? `ab ${from}` : '–');
  document.getElementById('bkDates').textContent = `Travel dates: ${full}`;
  document.getElementById('bkDatesShort').textContent = full;
}
[fromEl, toEl].forEach(el => el.addEventListener('change', updateDatesChip));
