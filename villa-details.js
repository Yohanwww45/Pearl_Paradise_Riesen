(function () {
  // ---- Villa data ----
  const VILLAS = [
    {
      slug: "suedkueste-villa",
      title: "Luxusvilla an der Südküste",
      hero: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
      location: "Weligama • Südküste",
      summary: "Privater Pool, tropischer Garten und Gehweite zum Strand. Ideal für Familien oder kleine Gruppen.",
      badges: ["Privater Pool", "Koch auf Anfrage", "Meerblick", "Bis 8 Gäste"],
      rooms: [
        { type: "Master Suite", size: "38 m²", occupancy: "2 Erw. + 1 Kind", amenities: "Kingsize-Bett, Bad en Suite, Terrasse" },
        { type: "Doppelzimmer", size: "24 m²", occupancy: "2 Erw.", amenities: "Queensize-Bett, Bad en Suite" },
        { type: "Twin Zimmer", size: "22 m²", occupancy: "2 Erw.", amenities: "2 Einzelbetten, Gemeinschaftsbad" }
      ],
      meals: {
        plan: "Frühstück inklusive (à la carte). Halbpension oder Vollpension optional.",
        notes: [
          "Privater Koch buchbar (lokale & westliche Küche).",
          "Veggie/Vegan/Glutenfrei auf Anfrage."
        ]
      },
      prices: [
        { season: "Nebensaison (Mai–Jun, Sep–Nov)", board: "B&B", rate: "ab USD 280 / Nacht (bis 6 Pers.)" },
        { season: "Hochsaison (Dez–Apr, Jul–Aug)", board: "B&B", rate: "ab USD 360 / Nacht (bis 6 Pers.)" },
        { season: "Weihnachten/Neujahr", board: "B&B", rate: "auf Anfrage" }
      ],
      offers: [
        "Stay 7 pay 6 – 1 Nacht gratis in der Nebensaison",
        "Kostenloser Flughafentransfer bei Buchung ab 5 Nächten",
        "10% Rabatt für Wiederholer"
      ]
    },
    {
      slug: "sigiriya-dschungellodge",
      title: "Dschungel-Lodge bei Sigiriya",
      hero: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?q=80&w=1600&auto=format&fit=crop",
      location: "Sigiriya • Zentrales Hochland",
      summary: "Nachhaltige Eco-Lodge mitten im Grün – Ruhe pur, Vogelgesang inklusive. Perfekt für Naturfreunde.",
      badges: ["Eco", "Privatveranda", "Naturpfade", "Bis 6 Gäste"],
      rooms: [
        { type: "Cabana Deluxe", size: "30 m²", occupancy: "2 Erw.", amenities: "Kingsize-Bett, Außendusche, Ventilator" },
        { type: "Familien-Cabana", size: "36 m²", occupancy: "2 Erw. + 2 Kinder", amenities: "Queensize-Bett + Twin, Außendusche" }
      ],
      meals: {
        plan: "Halbpension (Frühstück & Abendessen).",
        notes: [
          "Hausgemachte srilankische Küche, Zutaten vom eigenen Garten.",
          "Lunch-Boxen für Ausflüge möglich."
        ]
      },
      prices: [
        { season: "Ganzjährig", board: "HP", rate: "ab USD 140 / Nacht (2 Pers.)" },
        { season: "Peak (Dez–Feb)", board: "HP", rate: "ab USD 170 / Nacht (2 Pers.)" }
      ],
      offers: [
        "Kostenlose 1-stündige Dschungel-Naturführung",
        "20% Rabatt auf mehr als 4 Nächte"
      ]
    },
    {
      slug: "galle-boutique",
      title: "Boutique Villa im Galle Fort",
      hero: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
      location: "Galle • Altstadt (UNESCO)",
      summary: "Stilvolle Zimmer in historischem Stadthaus – Cafés, Boutiquen & Sonnenuntergänge vor der Haustür.",
      badges: ["Zentral", "Klimatisiert", "Butler-Service", "Bis 10 Gäste"],
      rooms: [
        { type: "Courtyard Room", size: "20 m²", occupancy: "2 Erw.", amenities: "Queensize, En-suite, AC" },
        { type: "Heritage Suite", size: "34 m²", occupancy: "2 Erw. + 1 Kind", amenities: "King, En-suite, Balkon" },
        { type: "Terrace Suite", size: "32 m²", occupancy: "2 Erw.", amenities: "King, En-suite, Dachterrasse" }
      ],
      meals: {
        plan: "Frühstück inklusive; Afternoon Tea täglich.",
        notes: ["Dinner als Set-Menü (optional)", "Empfehlungen/Reservierungen in Galle Fort"]
      },
      prices: [
        { season: "Nebensaison", board: "B&B", rate: "ab USD 220 / Nacht (2 Pers.)" },
        { season: "Hochsaison", board: "B&B", rate: "ab USD 290 / Nacht (2 Pers.)" }
      ],
      offers: [
        "Early-Bird 12% (≥60 Tage vorher)",
        "Kostenlose Fort-Walking-Tour (45 Min.)"
      ]
    }
  ];

  // ---- Render helpers ----
  function renderTableRows(rows) {
    return rows.map(r => `
      <tr>
        <td><strong>${r.type}</strong></td>
        <td>${r.size}</td>
        <td>${r.occupancy}</td>
        <td>${r.amenities}</td>
      </tr>
    `).join('');
  }

  function renderPrices(prices){
    return `
      <table class="vd-table">
        <thead><tr><th>Saison</th><th>Verpflegung</th><th>Preis</th></tr></thead>
        <tbody>
          ${prices.map(p=>`<tr><td>${p.season}</td><td>${p.board}</td><td>${p.rate}</td></tr>`).join('')}
        </tbody>
      </table>
    `;
  }

  function renderVilla(v) {
    const el = document.createElement('section');
    el.className = 'vd-villa';
    el.id = 'villa-' + v.slug;
    el.innerHTML = `
      <div class="vd-villa-head">
        <img src="${v.hero}" alt="">
        <div>
          <h2>${v.title}</h2>
          <div class="vd-meta"><span class="pin"></span>${v.location}</div>
          <p class="vd-summary">${v.summary}</p>
          <div class="vd-badges">${v.badges.map(b=>`<span>${b}</span>`).join('')}</div>
        </div>
      </div>

      <div class="vd-villa-body">
        <div class="vd-block">
          <h3>Zimmer & Ausstattung</h3>
          <table class="vd-table">
            <thead>
              <tr><th>Zimmer</th><th>Größe</th><th>Belegung</th><th>Ausstattung</th></tr>
            </thead>
            <tbody>${renderTableRows(v.rooms)}</tbody>
          </table>

          <h3>Mahlzeiten</h3>
          <p><strong>Plan:</strong> ${v.meals.plan}</p>
          ${v.meals.notes?.length ? `<ul class="vd-offers">${v.meals.notes.map(n=>`<li>${n}</li>`).join('')}</ul>` : ''}

          <h3 class="vd-mt">Preise</h3>
          ${renderPrices(v.prices)}
        </div>

        <div class="vd-block">
          <h3>Besondere Angebote</h3>
          <ul class="vd-offers">
            ${v.offers.map(o=>`<li>${o}</li>`).join('')}
          </ul>

          <div class="vd-kv" style="margin-top:10px">
            <b>Hinweis</b><span>Endpreise abhängig von Reisedaten, Belegung & Saison. Bitte Anfrage senden.</span>
          </div>

          <div class="vd-cta-row">
            <button class="vd-btn vd-btn-ghost" data-print="${v.slug}">Drucken</button>
            <a class="vd-btn vd-btn-teal" href="index.html#kontakt">Jetzt anfragen</a>
          </div>
        </div>
      </div>
    `;

    el.querySelector(`[data-print="${v.slug}"]`).addEventListener('click', () => printVilla(v));
    return el;
  }

  function printVilla(v){
    const w = window.open('', '_blank');
    const style = `
      <style>
        body{font-family:Inter,system-ui,Segoe UI,Roboto,Arial;line-height:1.5;padding:20px;color:#111}
        h2,h3{margin:0 0 8px}
        img{max-width:100%;height:auto;border-radius:8px}
        table{width:100%;border-collapse:collapse;margin:8px 0;border:1px solid #ddd}
        th,td{border-bottom:1px solid #ddd;padding:8px;text-align:left}
        ul{padding-left:18px}
      </style>`;
    w.document.write(`
      ${style}
      <h2>${v.title}</h2>
      <img src="${v.hero}" alt="">
      <p><b>Ort:</b> ${v.location}</p>
      <p>${v.summary}</p>
      <h3>Zimmer & Ausstattung</h3>
      <table><thead><tr><th>Zimmer</th><th>Größe</th><th>Belegung</th><th>Ausstattung</th></tr></thead>
      <tbody>${v.rooms.map(r=>`<tr><td>${r.type}</td><td>${r.size}</td><td>${r.occupancy}</td><td>${r.amenities}</td></tr>`).join('')}</tbody></table>
      <h3>Mahlzeiten</h3>
      <p><b>Plan:</b> ${v.meals.plan}</p>
      ${v.meals.notes?.length ? `<ul>${v.meals.notes.map(n=>`<li>${n}</li>`).join('')}</ul>` : ''}
      <h3>Preise</h3>
      <table><thead><tr><th>Saison</th><th>Verpflegung</th><th>Preis</th></tr></thead>
      <tbody>${v.prices.map(p=>`<tr><td>${p.season}</td><td>${p.board}</td><td>${p.rate}</td></tr>`).join('')}</tbody></table>
      <h3>Angebote</h3>
      <ul>${v.offers.map(o=>`<li>${o}</li>`).join('')}</ul>
    `);
    w.document.close(); w.focus(); w.print();
  }

  function init(){
    const list = document.getElementById('vd-list');
    list.append(...VILLAS.map(renderVilla));

    const params = new URLSearchParams(location.search);
    const slug = params.get('villa');
    if(slug){
      const target = document.getElementById('villa-'+slug);
      if(target){ target.scrollIntoView({behavior:'smooth', block:'start'}); }
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();
