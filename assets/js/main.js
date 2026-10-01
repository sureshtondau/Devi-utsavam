/* ============================================================
   Navaratri & Bathukamma 2026 — main.js
   Edit CONFIG below to plug in real dates, form links & contacts.
   ============================================================ */==

const CONFIG = {
  // Countdown target — first day of celebrations (local time)
  startDate: "2026-10-10T06:30:00+05:30",
  endDate:   "2026-10-21T23:59:00+05:30",

  // The "Open the donation form" buttons link out to this Google Form.
  donationForm: "https://forms.gle/cHXwShS6KLeuc6Xo7",

  // The "Check your entry" buttons link out to this read-only Google Sheet.
  // NOTE: set the Sheet's sharing to "Anyone with the link — Viewer" (not Editor).
  sheetView: "https://docs.google.com/spreadsheets/d/1ask1IZ_sqfHxdlepjbzwIwkuzgyoCmHDINTxuOcFozY/edit?gid=0#gid=0",

  // Registration/sign-up Google Forms. Add URLs as they become available;
  // leave "" to show a "Coming soon" state on the site.
  forms: {
    puja:        "https://docs.google.com/forms/d/1hjG7SERfYpe-bsAd390Tc81OUy17O3Ah5KqxGmOCg6E",  // Puja registration
    sponsorship: "https://forms.gle/CxWpn7DH7vDnDooVA",  // Prasadam Sponsor Form
    saree:       "https://forms.gle/LpLTjft4r9fSfd1QA",  // Saree Sponsor Form
    nomination:  "https://forms.gle/WMw1PiNAGpcsrWMc8",  // Sponsor Nomination Form
    cultural:    "",                                     // Cultural activity form
  },

  // Replace with your real WhatsApp link
  links: {
    whatsapp: "#",        // WhatsApp community invite link
  },
};

/* ---------- DATA ---------- */

// Sharad Navratri 2026 — nine forms of Durga, official dates & day-colours.
const NAVADURGA = [
  { day: "Day 1", date: "11 Oct · Sun", name: "Shailaputri",   color: "Orange",       hex: "#ff7a1a", accent: "#e85d04", desc: "Daughter of the mountains — beginnings, purity and grounding." },
  { day: "Day 2", date: "12 Oct · Mon", name: "Brahmacharini", color: "White",        hex: "#f4efe6", accent: "#b98a2a", desc: "The devout ascetic — penance, peace and inner strength." },
  { day: "Day 3", date: "13 Oct · Tue", name: "Chandraghanta", color: "Red",          hex: "#d21f3c", accent: "#d21f3c", desc: "The warrior with the crescent bell — courage and grace." },
  { day: "Day 4", date: "14 Oct · Wed", name: "Kushmanda",     color: "Royal Blue",   hex: "#1f5fd2", accent: "#1f5fd2", desc: "Creator of the cosmic egg — energy, health and light." },
  { day: "Day 5", date: "15 Oct · Thu", name: "Skandamata",    color: "Yellow",       hex: "#f2c14e", accent: "#c9970a", desc: "Mother of Skanda — nurturing, prosperity and wisdom." },
  { day: "Day 6", date: "16 Oct · Fri", name: "Katyayani",     color: "Green",        hex: "#2fa36b", accent: "#12805a", desc: "The fierce protector — new growth and fulfilment of wishes." },
  { day: "Day 7", date: "17 Oct · Sat", name: "Kalaratri",     color: "Grey",         hex: "#6b6f76", accent: "#4a4e55", desc: "Destroyer of darkness — fearlessness and protection." },
  { day: "Day 8", date: "18 Oct · Sun", name: "Mahagauri",     color: "Purple",       hex: "#7a1eb4", accent: "#7a1eb4", desc: "The radiant one — serenity, forgiveness and hope. (Durgashtami)" },
  { day: "Day 9", date: "19 Oct · Mon", name: "Siddhidatri",   color: "Peacock Green",hex: "#0f9b8e", accent: "#0a7a5c", desc: "Giver of siddhis — perfection, blessings and grace. (Mahanavami)" },
  { day: "Dussehra", date: "20 Oct · Tue", name: "Vijayadashami", color: "Victory Gold", hex: "#e0a326", accent: "#c9970a", desc: "Celebration of victory — Devi's triumph over evil.", finale: true },
];

// Nine days of Bathukamma with names, dates & naivedyam
const BATHUKAMMA = [
  { day: 1, name: "Engili Pula Bathukamma", date: "10 Oct", note: "The first arrangement, made at home on Mahalaya Amavasya." },
  { day: 2, name: "Atukula Bathukamma",     date: "11 Oct", note: "Naivedyam of flattened rice (atukulu) with jaggery and milk." },
  { day: 3, name: "Muddapappu Bathukamma",  date: "12 Oct", note: "Offering of soft dal, milk and jaggery." },
  { day: 4, name: "Nanabiyyam Bathukamma",  date: "13 Oct", note: "Soaked rice with milk and jaggery is offered." },
  { day: 5, name: "Atla Bathukamma",        date: "14 Oct", note: "Naivedyam of dosas (atlu) — a much-loved day." },
  { day: 6, name: "Aligina Bathukamma",     date: "15 Oct", note: "A quiet day of rest — no arrangement or offering." },
  { day: 7, name: "Vepakayala Bathukamma",  date: "16 Oct", note: "Flower-shaped fried rice-flour offerings (vepakayalu)." },
  { day: 8, name: "Vennamuddala Bathukamma",date: "17 Oct", note: "Naivedyam of butter (venna) and sesame." },
  { day: 9, name: "Saddula Bathukamma",     date: "18 Oct", note: "The grand finale — five kinds of saddi (rice), song, dance and immersion.", finale: true },
];

// Full schedule (10–21 Oct 2026). type => pooja | bathukamma | cultural | special
const SCHEDULE = [
  { d: 10, m: "Oct", w: "Sat", type: "bathukamma", title: "Bathukamma begins · Engili Pula Bathukamma",
    items: ["Mahalaya · pitru tarpanam", "Engili Pula Bathukamma at home", "Community welcome · 6:00 PM"] },
  { d: 11, m: "Oct", w: "Sun", type: "pooja", title: "Navratri Day 1 · Ghatasthapana — Maa Shailaputri (Orange)",
    items: ["Kalash / Ghatasthapana · 6:30 AM", "Deep Prajwalana · 7:00 AM", "Atukula Bathukamma · 6:00 PM", "Evening aarti · 7:00 PM"] },
  { d: 12, m: "Oct", w: "Mon", type: "pooja", title: "Day 2 · Maa Brahmacharini (White)",
    items: ["Lalitha Sahasranama · 5:30 PM", "Muddapappu Bathukamma · 6:00 PM", "Evening aarti · 7:00 PM"] },
  { d: 13, m: "Oct", w: "Tue", type: "pooja", title: "Day 3 · Maa Chandraghanta (Red)",
    items: ["Nanabiyyam Bathukamma · 6:00 PM", "Couples pooja · 7:00 PM"] },
  { d: 14, m: "Oct", w: "Wed", type: "cultural", title: "Day 4 · Maa Kushmanda (Royal Blue) · Garba Night",
    items: ["Atla Bathukamma · 6:00 PM", "Devi pooja · 7:00 PM", "Garba & Dandiya · 8:00 PM"] },
  { d: 15, m: "Oct", w: "Thu", type: "pooja", title: "Day 5 · Maa Skandamata (Yellow)",
    items: ["Aligina Bathukamma (rest day)", "Devi pooja · 7:00 PM", "Bhajans by residents · 7:30 PM"] },
  { d: 16, m: "Oct", w: "Fri", type: "special", title: "Day 6 · Maa Katyayani (Green) · Lalitha Kumkumarchana",
    items: ["Lalitha Kumkumarchana · 6:30 PM", "Vepakayala Bathukamma · 6:00 PM", "Evening aarti · 7:30 PM"] },
  { d: 17, m: "Oct", w: "Sat", type: "cultural", title: "Day 7 · Maa Kalaratri (Grey) · Dandiya Finale",
    items: ["Vennamuddala Bathukamma · 6:00 PM", "Grand Garba & Dandiya · 8:00 PM"] },
  { d: 18, m: "Oct", w: "Sun", type: "special", title: "Day 8 · Durgashtami — Maa Mahagauri (Purple) · Saddula Bathukamma",
    items: ["Durgashtami Homam · 9:00 AM", "Ashtami pooja · 7:00 PM", "Saddula (Pedda) Bathukamma finale · 6:00 PM", "Immersion procession · 8:30 PM"] },
  { d: 19, m: "Oct", w: "Mon", type: "special", title: "Day 9 · Mahanavami — Maa Siddhidatri (Peacock Green)",
    items: ["Chandi Homam · 8:00 AM", "Ayudha Pooja · 6:00 PM", "Kids Saraswati Pooja · 7:00 PM"] },
  { d: 20, m: "Oct", w: "Tue", type: "special", title: "Vijayadashami · Dussehra — Celebration of Victory",
    items: ["Vijayadashami pooja · 8:00 AM", "Shami Pooja · 6:00 PM", "Ravana Dahan & victory celebration · 7:30 PM"] },
];

const CULTURALS = [
  { d: 14, m: "Oct", t: "8:00 PM", title: "Community Garba Night", desc: "Garba circles for all ages under the lights." },
  { d: 15, m: "Oct", t: "7:30 PM", title: "Bhajan Sandhya", desc: "Devotional singing led by residents at the Mandapam." },
  { d: 17, m: "Oct", t: "8:00 PM", title: "Grand Garba & Dandiya Finale", desc: "The biggest dance night — dress code: nine colours." },
  { d: 19, m: "Oct", t: "7:00 PM", title: "Kids Saraswati Pooja & Talent Night", desc: "A pooja for the children, followed by young performers." },
  { d: 20, m: "Oct", t: "7:30 PM", title: "Vijayadashami · Ravana Dahan", desc: "Shami pooja, victory celebration and community photograph." },
];

// Per-block collectors. Replace collector/phone/upi with real details.
const BLOCKS = [
  { b: "A", collector: "Rakesh Kessari",   phone: "7815920402", upi: "7815920402-4@ybl" },
  { b: "B", collector: "Mrityunjay",        phone: "7845148919", upi: "mrityunjay.ranjan.kumar@okhdfcbank" },
  { b: "C", collector: "Rajashekar Peddi", phone: "9491005500", upi: "rajashekar.peddi@hsbc" },
  { b: "D", collector: "Sureka Sanjay",    phone: "9949959775", upi: "Sureka.sannjay123@okicici" },
  { b: "E", collector: "Kranthi",           phone: "9885255667", upi: "kranthiy81-2@okicici" },
  { b: "F", collector: "Soujanya Koppula",  phone: "9885945421", upi: "soujanya.koppula1@okaxis" },
  { b: "G", collector: "Srikanth Vitta",    phone: "",           upi: "srikanthvitta@ybl" },
  { b: "H", collector: "Rakesh Kessari",    phone: "7815920402", upi: "7815920402-4@ybl" },
  { b: "I", collector: "Bharat Kumar Kaja", phone: "9886841048", upi: "bharatkaza@axl" },
];

const GALLERY = [
  // 2025 ambience — Navaratri 
  { src: "assets/img/2025-day5.jpg",  cap: "2025 · Day 5 · Maa Skandamata — yellow silk &amp; marigolds", wide: true },
  { src: "assets/img/2025-day8.jpg",  cap: "2025 · Durgashtami · Maa Mahagauri in golden green" },
  { src: "assets/img/2025-day11.jpg", cap: "2025 · Grand finale — olive-green alankaram" },
  { src: "assets/img/2025-day1.jpg",  cap: "2025 · Day 1 · Maa Shailaputri — blue saree &amp; marigold garland" },
  { src: "assets/img/2025-day2.jpg",  cap: "2025 · Day 2 · Maa Brahmacharini — Bathukamma flower tower" },
  { src: "assets/img/2025-day3.jpg",  cap: "2025 · Day 3 · Maa Chandraghanta — puja mandapam", wide: true },
  { src: "assets/img/2025-day4.jpg",  cap: "2025 · Day 4 · Maa Kushmanda — grey-blue saree &amp; pooja thali" },
  { src: "assets/img/2025-day6.jpg",  cap: "2025 · Day 6 · Maa Katyayani — red &amp; green alankaram" },
  { src: "assets/img/2025-day7.jpg",  cap: "2025 · Day 7 · Maa Kalaratri — deep blue &amp; maroon" },
  { src: "assets/img/2025-day8b.jpg", cap: "2025 · Durgashtami — wide-angle view with full puja spread" },
  { src: "assets/img/2025-day9.jpg",  cap: "2025 · Mahanavami · Maa Siddhidatri — pink &amp; gold", wide: true },
  { src: "assets/img/2025-day10.jpg", cap: "2025 · Vijayadashami · Maa in deep red — Dussehra darshan" },
  // 2024 memories
  { src: "assets/img/2024-idol-bathukamma.jpg", cap: "2024 · Our very first Devi &amp; Bathukamma", wide: true },
  { src: "assets/img/2024-devi-closeup.jpg",    cap: "2024 · Maa's darshan" },
  { src: "assets/img/2024-puja.jpg",            cap: "2024 · Our first community puja" },
];

/* ---------- HELPERS ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
function copyText(text) {
  // best-effort, non-blocking copy (never awaited so UI feedback is instant)
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(() => legacyCopy(text));
      return;
    }
  } catch (_) {}
  legacyCopy(text);
}
function legacyCopy(text) {
  const t = document.createElement("textarea");
  t.value = text; t.style.position = "fixed"; t.style.opacity = "0";
  document.body.appendChild(t); t.select();
  try { document.execCommand("copy"); } catch (_) {}
  t.remove();
}

// Telugu names + saree color hex for inline grid (matches saree-day1..10 images)
const SAREE_META = [
  { deviTe: "శ్రీ బాలా త్రిపురసుందరీ దేవి", colorHex: "#E87722", colorTe: "కాషాయం" },
  { deviTe: "శ్రీ గాయత్రీ దేవి",             colorHex: "#1565C0", colorTe: "నీలం" },
  { deviTe: "శ్రీ అన్నపూర్ణా దేవి",           colorHex: "#F5C518", colorTe: "పసుపు" },
  { deviTe: "శ్రీ మహాచండీ దేవి",              colorHex: "#C62828", colorTe: "ఎరుపు" },
  { deviTe: "శ్రీ లలితా త్రిపురసుందరీ దేవి",  colorHex: "#D81B60", colorTe: "గులాబీ" },
  { deviTe: "శ్రీ సరస్వతీ దేవి",              colorHex: "#888888", colorTe: "తెలుపు" },
  { deviTe: "శ్రీ మహాలక్ష్మీ దేవి",           colorHex: "#2E7D32", colorTe: "ఆకుపచ్చ" },
  { deviTe: "శ్రీ దుర్గా దేవి",               colorHex: "#B71C1C", colorTe: "ఎరుపు" },
  { deviTe: "శ్రీ మహిషాసురమర్దినీ దేవి",      colorHex: "#6D1B35", colorTe: "మెరూన్" },
  { deviTe: "శ్రీ రాజరాజేశ్వరీ దేవి",         colorHex: "#1B5E20", colorTe: "ఆకుపచ్చ" },
];

/* ---------- BUILD: Inline Saree Color Grid ---------- */
function buildSareeGrid() {
  const grid = $("#sareeInlineGrid");
  if (!grid) return;
  const today = new Date();
  NAVADURGA.forEach((n, i) => {
    const sm = SAREE_META[i];
    const cardDate = new Date(2026, 9, 11 + i); // Oct = month 9
    const isToday = today.toDateString() === cardDate.toDateString();
    const isPast = today > cardDate && !isToday;
    const accentColor = sm.colorHex === '#E8E8E8' ? '#888' : sm.colorHex;
    const card = el("div", "sic reveal" + (isToday ? " today" : "") + (isPast ? " past" : ""));
    card.style.setProperty("--sic-accent", accentColor);
    card.style.transitionDelay = (i % 5) * 50 + "ms";
    card.innerHTML = `
      <div class="sic-img">
        <img src="assets/img/saree-day${i + 1}.jpg" alt="${n.name}" loading="lazy" />
        <div class="sic-devi-te">${sm.deviTe}</div>
        ${isToday ? '<span class="sic-today-badge">✨ Today</span>' : ''}
      </div>
      <div class="sic-body">
        <div class="sic-date">${n.date}</div>
        <div class="sic-name">${n.name}</div>
        <div class="sic-desc">${n.desc}</div>
        <div class="sic-badge">
          <span class="sic-dot" style="background:${sm.colorHex};border-color:rgba(0,0,0,.15)"></span>
          <span class="sic-color-name">${n.color}</span>
          <span class="sic-color-te">(${sm.colorTe})</span>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

/* ---------- BUILD: Navadurga ---------- */
function buildNavadurga() {
  const grid = $("#durgaGrid");
  if (!grid) return;
  NAVADURGA.forEach((n, i) => {
    const card = el("div", "durga-card reveal" + (n.finale ? " finale" : ""));
    card.style.transitionDelay = (i % 3) * 60 + "ms";
    card.innerHTML = `
      <div class="durga-swatch" data-day="${n.day}" style="background:linear-gradient(160deg, ${n.hex}, ${n.accent})"></div>
      <div class="durga-body">
        <span class="durga-date">${n.date}</span>
        <h3>${n.name}</h3>
        <span class="durga-color">${n.color}</span>
        <p>${n.desc}</p>
      </div>`;
    card.addEventListener("click", () => applyTheme(n, card));
    grid.appendChild(card);
  });
}

function applyTheme(n, card) {
  const root = document.documentElement.style;
  root.setProperty("--accent", n.hex);
  root.setProperty("--accent-2", n.accent);
  $$(".durga-card").forEach(c => c.classList.remove("active"));
  card.classList.add("active");
  document.querySelector('meta[name="theme-color"]').setAttribute("content", n.accent);
}

/* ---------- BUILD: Bathukamma ---------- */
function buildBathukamma() {
  const list = $("#bathuTimeline");
  if (!list) return;
  BATHUKAMMA.forEach((b, i) => {
    const li = el("li", "bathu-day reveal" + (b.finale ? " finale" : ""));
    li.style.transitionDelay = (i % 2) * 80 + "ms";
    li.innerHTML = `
      <span class="bd-num">${b.day}</span>
      <div class="bd-body">
        <h4>${b.name}</h4>
        <span class="bd-date">${b.date}${b.finale ? " · Finale 🌺" : ""}</span>
        <p>${b.note}</p>
      </div>`;
    list.appendChild(li);
  });
}

/* ---------- BUILD: Schedule ---------- */
function buildSchedule() {
  const list = $("#scheduleList");
  if (!list) return;
  SCHEDULE.forEach((s, i) => {
    const item = el("div", "sched-item reveal");
    item.dataset.type = s.type;
    item.style.transitionDelay = (i % 3) * 50 + "ms";
    item.innerHTML = `
      <div class="sched-date">
        <span class="d">${s.d}</span>
        <span class="m">${s.m}</span>
        <span class="w">${s.w}</span>
      </div>
      <div class="sched-body">
        <span class="sched-tag tag-${s.type}">${s.type}</span>
        <h4>${s.title}</h4>
        <ul>${s.items.map(it => `<li>${it}</li>`).join("")}</ul>
      </div>`;
    list.appendChild(item);
  });

  $$(".filter-bar .chip").forEach(chip => {
    chip.addEventListener("click", () => {
      $$(".filter-bar .chip").forEach(c => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      const f = chip.dataset.filter;
      $$(".sched-item").forEach(it => {
        it.classList.toggle("hide", f !== "all" && it.dataset.type !== f);
      });
    });
  });
}

/* ---------- BUILD: Culturals ---------- */
function buildCulturals() {
  const grid = $("#culturalsList");
  if (!grid) return;
  CULTURALS.forEach((c, i) => {
    const card = el("div", "cult-card reveal");
    card.style.transitionDelay = (i % 2) * 70 + "ms";
    card.innerHTML = `
      <div class="cult-when">
        <span class="cd">${c.d}</span>
        <span class="cm">${c.m}</span>
        <span class="ct">${c.t}</span>
      </div>
      <div>
        <h4>${c.title}</h4>
        <p>${c.desc}</p>
      </div>`;
    grid.appendChild(card);
  });
}

/* ---------- BUILD: Forms & sign-ups ---------- */
function buildForms() {
  const grid = $("#formsGrid");
  if (!grid) return;
  const FORMS = [
    { icon: "🪔", title: "Puja Registration",  desc: "Daily &amp; special poojas, couples pooja and kids Saraswati pooja.", url: CONFIG.forms.puja },
    { icon: "🙏", title: "Prasadam Sponsor",    desc: "Sponsor prasadam, annadanam, flowers, homam and decorations.",       url: CONFIG.forms.sponsorship },
    { icon: "🥻", title: "Saree Sponsor",      desc: "Sponsor sarees for the community — dress-code coordination.",         url: CONFIG.forms.saree },
    { icon: "🏆", title: "Sponsor Nomination", desc: "Nominate a sponsor for prasadam, decorations or cultural events.",     url: CONFIG.forms.nomination },
    { icon: "🎭", title: "Cultural Activity",  desc: "Perform on stage — dance, music, drama, Garba &amp; Dandiya.",        url: CONFIG.forms.cultural },
  ];
  FORMS.forEach((f, i) => {
    const card = el("article", "feature-card reveal");
    card.style.transitionDelay = (i % 4) * 50 + "ms";
    const live = f.url && f.url !== "#";
    const cta = live
      ? `<a class="btn btn-primary" href="${f.url}" target="_blank" rel="noopener">Open form ↗</a>`
      : `<span class="soon-badge">Coming soon</span>`;
    card.innerHTML = `<div class="fc-icon">${f.icon}</div><h3>${f.title}</h3><p>${f.desc}</p>${cta}`;
    grid.appendChild(card);
  });
}

/* ---------- BUILD: Blocks ---------- */
function buildBlocks() {
  const grid = $("#blocksGrid");
  if (!grid) return;
  BLOCKS.forEach((blk, i) => {
    const pill = el("button", "block-pill reveal");
    pill.type = "button";
    pill.setAttribute("aria-expanded", "false");
    pill.innerHTML = `<span class="bl">${blk.b}</span><span class="bn">Block ${blk.b}</span>`;
    pill.addEventListener("click", () => showBlock(i, pill));
    grid.appendChild(pill);
  });
}

function showBlock(i, pill) {
  const blk = BLOCKS[i];
  const detail = $("#blockDetail");
  const isActive = pill.classList.contains("active");
  $$(".block-pill").forEach(p => { p.classList.remove("active"); p.setAttribute("aria-expanded", "false"); });

  if (isActive) { detail.hidden = true; detail.innerHTML = ""; return; } // toggle off

  pill.classList.add("active");
  pill.setAttribute("aria-expanded", "true");
  detail.hidden = false;
  detail.innerHTML = `
    <div class="bd-head">Block ${blk.b} · Collector</div>
    <div class="bd-name">${blk.collector}</div>
    <div class="bd-actions">
      <a class="btn btn-primary" href="tel:${blk.phone.replace(/\s+/g, "")}">📞 Call</a>
      <button class="btn btn-outline" type="button" id="bdCopy">UPI: ${blk.upi} ⧉</button>
    </div>
    <p class="bd-copied" id="bdCopied" hidden>UPI copied ✓</p>`;

  $("#bdCopy").addEventListener("click", () => {
    copyText(blk.upi);
    const msg = $("#bdCopied"); msg.hidden = false;
    setTimeout(() => { msg.hidden = true; }, 1800);
  });

  detail.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/* ---------- BUILD: Gallery + Lightbox ---------- */
let lbIndex = 0;
function buildGallery() {
  const grid = $("#galleryGrid");
  if (!grid) return;
  GALLERY.forEach((g, i) => {
    const item = el("div", "gallery-item reveal" + (g.wide ? " wide" : ""));
    item.style.transitionDelay = (i % 3) * 50 + "ms";
    item.innerHTML = `<img src="${g.src}" alt="${g.cap}" loading="lazy" /><span class="gallery-item-caption">${g.cap}</span>`;
    item.addEventListener("click", () => openLightbox(i));
    grid.appendChild(item);
  });
}
function openLightbox(i) {
  lbIndex = i;
  const g = GALLERY[i];
  $("#lbImg").src = g.src;
  $("#lbImg").alt = g.cap;
  $("#lbCaption").textContent = g.cap;
  $("#lightbox").classList.add("open");
  $("#lightbox").setAttribute("aria-hidden", "false");
}
function closeLightbox() { $("#lightbox").classList.remove("open"); $("#lightbox").setAttribute("aria-hidden", "true"); }
function stepLightbox(dir) { openLightbox((lbIndex + dir + GALLERY.length) % GALLERY.length); }

function initLightbox() {
  $("#lbClose").addEventListener("click", closeLightbox);
  $("#lbPrev").addEventListener("click", () => stepLightbox(-1));
  $("#lbNext").addEventListener("click", () => stepLightbox(1));
  $("#lightbox").addEventListener("click", e => { if (e.target.id === "lightbox") closeLightbox(); });
  document.addEventListener("keydown", e => {
    if (!$("#lightbox").classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") stepLightbox(-1);
    if (e.key === "ArrowRight") stepLightbox(1);
  });
}

/* ---------- Countdown ---------- */
function initCountdown() {
  const start = new Date(CONFIG.startDate).getTime();
  const end = new Date(CONFIG.endDate).getTime();
  const note = $("#countdownNote");
  const set = (k, v) => { const n = $(`[data-cd="${k}"]`); if (n) n.textContent = String(v).padStart(2, "0"); };

  function tick() {
    const now = Date.now();
    let target = start, prefix = "until the festivities begin";
    if (now >= start && now <= end) { target = end; prefix = "of celebration remaining"; }
    else if (now > end) {
      set("days", 0); set("hours", 0); set("minutes", 0); set("seconds", 0);
      note.textContent = "Jai Mata Di! 🌺 See you next year.";
      return;
    }
    let diff = Math.max(0, target - now);
    const d = Math.floor(diff / 864e5); diff -= d * 864e5;
    const h = Math.floor(diff / 36e5); diff -= h * 36e5;
    const m = Math.floor(diff / 6e4); diff -= m * 6e4;
    const s = Math.floor(diff / 1e3);
    set("days", d); set("hours", h); set("minutes", m); set("seconds", s);
    note.textContent = prefix;
  }
  tick();
  setInterval(tick, 1000);
}

/* ---------- Animated counters ---------- */
function animateCount(elm) {
  const target = +elm.dataset.count;
  const suffix = elm.dataset.suffix || "";
  const dur = 1400, t0 = performance.now();
  function frame(t) {
    const p = Math.min(1, (t - t0) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    elm.textContent = Math.floor(eased * target).toLocaleString("en-IN") + (p === 1 ? suffix : "");
    if (p < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

/* ---------- Reveal + counters via IntersectionObserver ---------- */
function initObservers() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  $$(".reveal").forEach(r => io.observe(r));

  const countIo = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { animateCount(e.target); countIo.unobserve(e.target); } });
  }, { threshold: 0.5 });
  $$(".stat-num").forEach(n => countIo.observe(n));
}

/* ---------- Header, nav, scroll progress, back-to-top ---------- */
function initChrome() {
  const header = $("#siteHeader");
  const toggle = $("#navToggle");
  const menu = $("#navMenu");
  const progress = $("#scrollProgress");
  const toTop = $("#toTop");

  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("scrolled", y > 40);
    toTop.classList.toggle("show", y > 600);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  $$("#navMenu a").forEach(a => a.addEventListener("click", () => {
    menu.classList.remove("open"); toggle.setAttribute("aria-expanded", "false");
  }));
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ---------- Config links ---------- */
function wireLinks() {
  // WhatsApp buttons
  $$('[data-form="whatsapp"]').forEach(a => {
    if (CONFIG.links.whatsapp && CONFIG.links.whatsapp !== "#") {
      a.href = CONFIG.links.whatsapp; a.target = "_blank"; a.rel = "noopener";
    }
  });
  // "Open the donation form" → Google Form
  if (CONFIG.donationForm) $$(".js-donate-form").forEach(a => { a.href = CONFIG.donationForm; });
  // "Check your entry" → read-only Google Sheet
  if (CONFIG.sheetView) $$(".js-view-sheet").forEach(a => { a.href = CONFIG.sheetView; });
  // "Register for a pooja" → registration Google Form
  if (CONFIG.forms.puja && CONFIG.forms.puja !== "#")
    $$(".js-register").forEach(a => { a.href = CONFIG.forms.puja; a.target = "_blank"; a.rel = "noopener"; });
}

/* ---------- Floating petals ---------- */
function initPetals() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const layer = $(".fx-layer");
  const emojis = ["🌺", "🌼", "🌸", "🪔", "🏵️"];
  const count = window.innerWidth < 640 ? 3 : 5;
  for (let i = 0; i < count; i++) {
    const p = el("span", "petal", emojis[i % emojis.length]);
    p.style.left = Math.random() * 100 + "vw";
    p.style.fontSize = (0.9 + Math.random() * 1.2) + "rem";
    p.style.animationDuration = (11 + Math.random() * 12) + "s";
    p.style.animationDelay = (-Math.random() * 20) + "s";
    layer.appendChild(p);
  }
}

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  buildSchedule();
  buildCulturals();
  buildForms();
  buildBlocks();
  buildGallery();
  initLightbox();
  initCountdown();
  initObservers();
  initChrome();
  wireLinks();
  initPetals();
});
