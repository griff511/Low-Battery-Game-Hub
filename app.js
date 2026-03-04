/* ===== TRUNK SALE TOUR '26 — STOP DATA ===== */
const stops = [
  {
    id: 1,
    city: 'Raleigh',
    state: 'North Carolina',
    date: 'February 7, 2026',
    location: 'City-wide',
    lat: 35.7796,
    lng: -78.6382,
    story: 'Ground zero. The day after The Fall-Off dropped, Cole hit the streets of his home state — no press release, no venue, just a black Honda Civic and an album he needed people to hold in their hands. The first person who walked up didn\'t even know what they were buying.',
    flavor: [
      { name: 'Glenwood South', detail: 'Raleigh\'s most electric strip — restaurants, bars, and the kind of sidewalk energy where a trunk sale makes perfect sense.' },
      { name: 'Trophy Brewing', detail: 'Local institution on Maywood Ave. The spot Cole-types drink when they\'re celebrating or just need to think.' }
    ]
  },
  {
    id: 2,
    city: 'Chapel Hill',
    state: 'North Carolina',
    date: 'February 7–8, 2026',
    location: 'Franklin Street & UNC campus',
    lat: 35.9132,
    lng: -79.0558,
    story: 'Franklin Street has watched a lot of careers begin. Cole walked the strip that helped shape him, letting students and locals who had no idea they\'d run into a living legend stumble across The Fall-Off in real time. No stage — just the sidewalk.',
    flavor: [
      { name: 'He\'s A Keeper', detail: 'Coffee and community on Franklin St. The kind of corner shop that feels like it belongs to everybody.' },
      { name: 'Cat\'s Cradle', detail: 'In nearby Carrboro — one of the best small music venues in the South, where legends quietly begin.' }
    ]
  },
  {
    id: 3,
    city: 'Greensboro',
    state: 'North Carolina',
    date: 'February 8, 2026',
    location: 'NC A&T State University',
    lat: 36.0726,
    lng: -79.7921,
    story: 'The first HBCU stop set the tone for the whole tour. On campus at A&T, Cole met a student whose talent stopped him cold. He gave the campus a moment to remember — proof that the Trunk Sale was as much about listening as it was about selling.',
    flavor: [
      { name: 'Alma Nove', detail: 'Upscale Southern dining near campus — the kind of dinner a graduating senior takes their family to.' },
      { name: 'Guilford Courthouse', detail: 'A national military park five minutes from A&T. Quiet, historic, and often overlooked by people who haven\'t been.' }
    ]
  },
  {
    id: 4,
    city: 'Charlotte',
    state: 'North Carolina',
    date: 'February 8–9, 2026',
    location: 'Various spots across Charlotte',
    lat: 35.2271,
    lng: -80.8431,
    story: 'The Queen City has watched Cole grow from regional legend to once-in-a-generation artist. This stop felt like a homecoming — the kind where the city claims you back before you\'ve even parked the car.',
    flavor: [
      { name: 'NoDa Arts District', detail: 'Charlotte\'s creative heartbeat — murals, galleries, record shops, and venues all stacked on top of each other.' },
      { name: 'Amélie\'s French Bakery', detail: 'Open 24 hours on N. Tryon. One of Charlotte\'s most beloved spots — coffee and pastries at any hour.' }
    ]
  },
  {
    id: 5,
    city: 'Greenville',
    state: 'South Carolina',
    date: 'February 9–10, 2026',
    location: 'Downtown Greenville',
    lat: 34.8526,
    lng: -82.3940,
    story: 'Not every stop was a major market. Greenville proved Cole was serious about reaching everyone — not just cities with arenas. The crowd that assembled was unexpectedly massive, the kind that forms when word spreads faster than expected.',
    flavor: [
      { name: 'Falls Park on the Reedy', detail: 'A stunning waterfall in the heart of downtown — one of the most underrated urban parks in the Southeast.' },
      { name: 'Swamp Rabbit Trail', detail: 'Twenty-two miles of paved trail along the Reedy River. The city\'s best-kept secret, until it wasn\'t.' }
    ]
  },
  {
    id: 6,
    city: 'Atlanta',
    state: 'Georgia',
    date: 'February 10–11, 2026',
    location: 'Various locations',
    lat: 33.7490,
    lng: -84.3880,
    story: 'The rap capital of the South met Cole with the respect that\'s been there all along. Dreamville and ATL share DNA — producers, collaborators, energy. The Trunk Sale here wasn\'t a visit; it was a reunion.',
    flavor: [
      { name: 'Sweet Auburn Curb Market', detail: 'Atlanta\'s oldest public market on Edgewood Ave — vendors, soul food, and the living history of Black commerce in the city.' },
      { name: 'West End', detail: 'One of Atlanta\'s most storied Black neighborhoods. Community murals, local businesses, and the kind of block that produces artists.' }
    ]
  },
  {
    id: 7,
    city: 'Hampton',
    state: 'Virginia',
    date: 'February 12, 2026',
    location: 'Hampton University',
    lat: 37.0269,
    lng: -76.3428,
    story: 'Hampton University — one of the oldest HBCUs in the country — hosted Cole\'s second campus stop. Students lined up to buy a physical album in an era when most people stream. The gesture hit different when the artist hands it to you himself.',
    flavor: [
      { name: 'Virginia Air & Space Center', detail: 'On Settler\'s Landing Road — one of the most underrated science museums on the East Coast, overlooking Hampton Roads.' },
      { name: 'Buckroe Beach', detail: 'Ten minutes from campus. A local beach that feels nothing like a tourist destination, in the best possible way.' }
    ]
  },
  {
    id: 8,
    city: 'Washington',
    state: 'D.C.',
    date: 'February 13, 2026',
    location: 'Howard University, Georgia Ave NW',
    lat: 38.9219,
    lng: -77.0198,
    story: 'The Washington Post ran a full feature on this stop. At Howard — arguably the most storied HBCU in America — the Trunk Sale took on a different weight entirely. Cole\'s visit felt less like a pop-up and more like an event future students will read about.',
    flavor: [
      { name: 'Ben\'s Chili Bowl', detail: 'U Street NW institution open since 1958. Half-smokes, chili dogs, and a wall of famous faces — everyone stops at Ben\'s.' },
      { name: 'The Howard Theatre', detail: 'Steps from campus. Opened in 1910, it\'s hosted everyone from Duke Ellington to Marvin Gaye. The history is in the walls.' }
    ]
  },
  {
    id: 9,
    city: 'Silver Spring',
    state: 'Maryland',
    date: 'February 13–14, 2026',
    location: 'Downtown Silver Spring',
    lat: 38.9907,
    lng: -77.0261,
    story: 'Just outside D.C., Silver Spring\'s diverse community showed up the way the DMV always does — loud, proud, and deep. Veterans Plaza filled with people who\'d heard about the Trunk Sale and made the trip. The ripple from Howard hadn\'t stopped yet.',
    flavor: [
      { name: 'Busboys and Poets', detail: 'On Colesville Road — the iconic bookstore-restaurant-bar that\'s become a DMV cultural institution. More than a meal.' },
      { name: 'AFI Silver Theatre', detail: 'A restored art deco movie palace showing films you won\'t find at the multiplex. The right place to see anything.' }
    ]
  },
  {
    id: 10,
    city: 'Queens',
    state: 'New York',
    date: 'February 14, 2026',
    location: 'Local deli, Jamaica area',
    lat: 40.7068,
    lng: -73.7996,
    story: 'Valentine\'s Day. Cole pulled up to a Queens deli — no announcement, no security cordon — and started greeting people like he had nowhere else to be. Clips went viral within the hour. The deli had never been so famous, and Cole looked like he was having the time of his life.',
    flavor: [
      { name: 'Jamaica Avenue', detail: 'One of NYC\'s most vibrant commercial corridors — sneaker shops, food spots, barbershops, and the heartbeat of the borough.' },
      { name: 'Queens Night Market', detail: 'Flushing Meadows-Corona Park (seasonal) — 100+ vendors, 50+ countries, zero pretension. Peak Queens.' }
    ]
  },
  {
    id: 11,
    city: 'Queens',
    state: 'New York — St. John\'s',
    date: 'February 14, 2026',
    location: 'St. John\'s University, Jamaica, Queens',
    lat: 40.7214,
    lng: -73.7946,
    story: 'Same day, different Queens energy. After the deli, Cole went back to his alma mater — the campus where his rap career quietly began before anyone was paying attention. Students lined up to buy the album from the man who once sat in the same seats. It closed a loop that took decades to close.',
    flavor: [
      { name: 'Jamaica Ave food strip', detail: 'The stretch near St. John\'s is all local — Jamaican bakeries, Chinese takeout, halal carts, and dollar pizza. The real campus cafeteria.' },
      { name: 'Queens Botanical Garden', detail: 'Five minutes from campus. Forty-nine acres of unexpected quiet in the middle of New York City.' }
    ]
  },
  {
    id: 12,
    city: 'Phoenix',
    state: 'Arizona',
    date: 'February 23, 2026',
    location: 'Auto mechanic shop',
    lat: 33.4484,
    lng: -112.0740,
    story: 'En route to Los Angeles, the Honda Civic finally said enough. The car broke down, Cole and his team pulled into a mechanic shop in Phoenix, and what could have been a frustrating day became one of the most iconic moments of the whole tour. Cole filmed the "Old Dog" music video at the shop, signed albums for the mechanics, and by the time the car was fixed, hundreds of fans had lined up down the street. Even breakdowns were content.',
    flavor: [
      { name: 'Camelback Mountain', detail: 'Phoenix\'s iconic peak — a two-hour hike with panoramic views of the entire valley. Worth the climb, every time.' },
      { name: 'The Van Buren', detail: 'Grand Ave venue with 1,900 capacity. The right size for artists who haven\'t hit arenas yet — and for legends who want the room intimate.' }
    ]
  }
];

/* ===== MAP INIT ===== */
const map = L.map('map', {
  center: [37.5, -90.5],
  zoom: 5,
  zoomControl: true,
  attributionControl: true
});

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);

/* ===== ROUTE LINE ===== */
const routeCoords = stops.map(s => [s.lat, s.lng]);
L.polyline(routeCoords, {
  color: '#F5C518',
  weight: 1.5,
  opacity: 0.35,
  dashArray: '5, 9'
}).addTo(map);

/* ===== MARKERS ===== */
let activeStopId = null;
const markerElements = {};
const leafletMarkers = {};

function createMarkerHtml(stop, isActive) {
  return `<div class="trunk-marker${isActive ? ' is-active' : ''}" aria-label="Stop ${stop.id}: ${stop.city}">${stop.id}</div>`;
}

stops.forEach(stop => {
  const icon = L.divIcon({
    html: createMarkerHtml(stop, false),
    className: '',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -20]
  });

  const marker = L.marker([stop.lat, stop.lng], { icon, title: `Stop ${stop.id}: ${stop.city}` }).addTo(map);

  marker.on('click', () => selectStop(stop.id));

  leafletMarkers[stop.id] = marker;
});

/* ===== STOP LIST ===== */
const stopItemsList = document.getElementById('stop-items');

stops.forEach(stop => {
  const li = document.createElement('li');
  li.className = 'stop-item';
  li.setAttribute('role', 'button');
  li.setAttribute('tabindex', '0');
  li.setAttribute('aria-label', `Stop ${stop.id}: ${stop.city}, ${stop.state}, ${stop.date}`);
  li.dataset.stopId = stop.id;
  li.innerHTML = `
    <span class="stop-item-num">${String(stop.id).padStart(2, '0')}</span>
    <div class="stop-item-info">
      <div class="stop-item-city">${stop.city}</div>
      <div class="stop-item-date">${stop.date}</div>
    </div>
  `;
  li.addEventListener('click', () => {
    selectStop(stop.id);
    closeStopList();
  });
  li.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      selectStop(stop.id);
      closeStopList();
    }
  });
  stopItemsList.appendChild(li);
});

/* ===== CITY GUIDE RENDER ===== */
function renderGuide(stop) {
  const numStr = String(stop.id).padStart(2, '0');
  return `
    <div class="guide-stop-num">Stop ${numStr} of ${stops.length}</div>
    <div class="guide-city-block">
      <h2 class="guide-city-name">${stop.city}</h2>
      <p class="guide-state">${stop.state}</p>
    </div>
    <div class="guide-meta">
      <div class="meta-item">
        <span class="meta-label">Date</span>
        <span class="meta-value">${stop.date}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Location</span>
        <span class="meta-value">${stop.location}</span>
      </div>
    </div>
    <div class="guide-accent-bar"></div>
    <div class="guide-section">
      <p class="guide-section-label">The Story</p>
      <p class="guide-story-text">${stop.story}</p>
    </div>
    <div class="guide-section">
      <p class="guide-section-label">Local Flavor</p>
      <ul class="guide-flavor-list">
        ${stop.flavor.map(f => `
          <li class="guide-flavor-item">
            <span class="flavor-dot" aria-hidden="true"></span>
            <span class="flavor-text"><span class="flavor-name">${f.name}</span> — ${f.detail}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `;
}

/* ===== SELECT STOP ===== */
function selectStop(id) {
  const stop = stops.find(s => s.id === id);
  if (!stop) return;

  // Update active marker states
  if (activeStopId !== null) {
    const prevMarker = leafletMarkers[activeStopId];
    prevMarker.setIcon(L.divIcon({
      html: createMarkerHtml(stops.find(s => s.id === activeStopId), false),
      className: '',
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    }));
  }

  leafletMarkers[id].setIcon(L.divIcon({
    html: createMarkerHtml(stop, true),
    className: '',
    iconSize: [32, 32],
    iconAnchor: [16, 16]
  }));

  activeStopId = id;

  // Pan map
  map.flyTo([stop.lat, stop.lng], Math.max(map.getZoom(), 9), { duration: 0.8 });

  // Render guide
  document.getElementById('guide-content').innerHTML = renderGuide(stop);

  // Update nav
  const idx = stops.findIndex(s => s.id === id);
  document.getElementById('stop-indicator').textContent = `${idx + 1} / ${stops.length}`;
  document.getElementById('prev-btn').disabled = idx === 0;
  document.getElementById('next-btn').disabled = idx === stops.length - 1;

  // Open guide panel
  openGuide();

  // Update stop list active state
  document.querySelectorAll('.stop-item').forEach(el => {
    el.classList.toggle('is-active', Number(el.dataset.stopId) === id);
  });
}

/* ===== PANEL CONTROLS ===== */
function openGuide() {
  const panel = document.getElementById('city-guide');
  panel.classList.add('is-active');
  panel.setAttribute('aria-hidden', 'false');
  // Scroll guide content to top
  const content = document.getElementById('guide-content');
  content.scrollTop = 0;
}

function closeGuide() {
  const panel = document.getElementById('city-guide');
  panel.classList.remove('is-active');
  panel.setAttribute('aria-hidden', 'true');
  // Deactivate marker
  if (activeStopId !== null) {
    leafletMarkers[activeStopId].setIcon(L.divIcon({
      html: createMarkerHtml(stops.find(s => s.id === activeStopId), false),
      className: '',
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    }));
  }
  activeStopId = null;
  document.querySelectorAll('.stop-item').forEach(el => el.classList.remove('is-active'));
}

function openStopList() {
  document.getElementById('stop-list').classList.add('is-active');
  document.getElementById('stop-list').setAttribute('aria-hidden', 'false');
  document.getElementById('list-overlay').classList.add('is-active');
  document.getElementById('list-overlay').setAttribute('aria-hidden', 'false');
  document.getElementById('toggle-list-btn').setAttribute('aria-expanded', 'true');
}

function closeStopList() {
  document.getElementById('stop-list').classList.remove('is-active');
  document.getElementById('stop-list').setAttribute('aria-hidden', 'true');
  document.getElementById('list-overlay').classList.remove('is-active');
  document.getElementById('list-overlay').setAttribute('aria-hidden', 'true');
  document.getElementById('toggle-list-btn').setAttribute('aria-expanded', 'false');
}

/* ===== EVENT LISTENERS ===== */
document.getElementById('toggle-list-btn').addEventListener('click', () => {
  const isOpen = document.getElementById('stop-list').classList.contains('is-active');
  isOpen ? closeStopList() : openStopList();
});

document.getElementById('close-list-btn').addEventListener('click', closeStopList);
document.getElementById('list-overlay').addEventListener('click', closeStopList);
document.getElementById('close-guide-btn').addEventListener('click', closeGuide);

document.getElementById('prev-btn').addEventListener('click', () => {
  if (activeStopId === null) return;
  const idx = stops.findIndex(s => s.id === activeStopId);
  if (idx > 0) selectStop(stops[idx - 1].id);
});

document.getElementById('next-btn').addEventListener('click', () => {
  if (activeStopId === null) return;
  const idx = stops.findIndex(s => s.id === activeStopId);
  if (idx < stops.length - 1) selectStop(stops[idx + 1].id);
});

// Keyboard navigation
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (document.getElementById('stop-list').classList.contains('is-active')) {
      closeStopList();
    } else if (document.getElementById('city-guide').classList.contains('is-active')) {
      closeGuide();
    }
  }
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    if (document.getElementById('city-guide').classList.contains('is-active')) {
      const idx = stops.findIndex(s => s.id === activeStopId);
      if (idx < stops.length - 1) selectStop(stops[idx + 1].id);
    }
  }
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    if (document.getElementById('city-guide').classList.contains('is-active')) {
      const idx = stops.findIndex(s => s.id === activeStopId);
      if (idx > 0) selectStop(stops[idx - 1].id);
    }
  }
});

/* ===== INITIAL LOAD ===== */
// Auto-open first stop after a short delay so the map can settle
setTimeout(() => {
  selectStop(1);
}, 1200);
