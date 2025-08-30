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

  // Build payload
  const data = Object.fromEntries(new FormData(form).entries());
  const payload = {
    intent: currentIntent,                           // "confirm" or "enquire"
    context: {
      type: $('#bkTypeShort').textContent,
      title: $('#bkTitle').textContent,
      route: $('#bkRoute').textContent,
      dates: $('#bkDatesShort').textContent
    },
    customer: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      nationality: data.nationality || ''
    },
    party: {
      adults: Number(data.adults || 0),
      children: Number(data.children || 0)
    },
    travel: {
      from: data.dateFrom,
      to: data.dateTo
    },
    special: data.special || ''
  };

  try {
    // ---- LIVE: send to your backend to email site owner ----
    // const res = await fetch(BOOKING_API_URL, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    //   body: JSON.stringify(payload)
    // });
    // const json = await res.json();
    // if (!res.ok || !(json.ok || json.success)) throw new Error(json.error || 'Senden fehlgeschlagen');

    // ---- DEMO: no backend yet? Simulate network ----
    await new Promise(r => setTimeout(r, 700));

    // Success UI
    $('#bookingCard').hidden = true;
    $('#successScreen').hidden = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    result.textContent = '';
  } catch (err) {
    console.error(err);
    result.textContent = 'Leider gab es ein Problem beim Senden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns per Telefon/WhatsApp.';
  } finally {
    currentIntent = 'confirm'; // reset
  }
});
