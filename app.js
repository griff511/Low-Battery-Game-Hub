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
    id: 3,
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
    id: 4,
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
    id: 5,
    city: 'Hampton',
    state: 'Virginia',
    date: 'February 12, 2026',
    location: 'Hampton University',
    lat: 37.0269,
    lng: -76.3428,
    story: 'Hampton University — one of the oldest HBCUs in the country — hosted Cole\'s Virginia campus stop. Students lined up to buy a physical album in an era when most people stream. The gesture hit different when the artist hands it to you himself.',
    flavor: [
      { name: 'Virginia Air & Space Center', detail: 'On Settler\'s Landing Road — one of the most underrated science museums on the East Coast, overlooking Hampton Roads.' },
      { name: 'Buckroe Beach', detail: 'Ten minutes from campus. A local beach that feels nothing like a tourist destination, in the best possible way.' }
    ]
  },
  {
    id: 6,
    city: 'Norfolk',
    state: 'Virginia',
    date: 'February 12–13, 2026',
    location: 'Various spots',
    lat: 36.8508,
    lng: -76.2859,
    story: 'The 757 has given the world Pharrell, Timbaland, and Missy Elliott. Norfolk knows what music looks like when it\'s built from scratch with no cosign. Cole\'s Trunk Sale here landed in a city that\'s been doing it quietly for decades and doesn\'t need the validation.',
    flavor: [
      { name: 'Granby Street', detail: 'Norfolk\'s main cultural artery — live music venues, restaurants, and the energy of a city that moves at its own pace.' },
      { name: 'Nauticus', detail: 'The naval museum on the waterfront, home to the battleship Wisconsin. One of the most impressive free attractions on the East Coast.' }
    ]
  },
  {
    id: 7,
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
    id: 8,
    city: 'Baltimore',
    state: 'Maryland',
    date: 'February 13–14, 2026',
    location: 'Various spots',
    lat: 39.2904,
    lng: -76.6122,
    story: 'Baltimore\'s hip-hop scene has always punched above its weight. The city\'s hunger for real music showed up for Cole in a way that proved the Trunk Sale wasn\'t just an East Coast coastal thing — it was Mid-Atlantic, all the way through. The line stretched before Cole had even opened the trunk.',
    flavor: [
      { name: 'Lexington Market', detail: 'One of America\'s oldest continuously operating public markets — open since 1782. Street food, community, and no pretense.' },
      { name: 'The Ottobar', detail: 'Charles Street indie venue that\'s hosted every genre. The kind of room where you can tell who actually loves music.' }
    ]
  },
  {
    id: 9,
    city: 'Philadelphia',
    state: 'Pennsylvania',
    date: 'February 14–15, 2026',
    location: 'Various spots',
    lat: 39.9526,
    lng: -75.1652,
    story: 'Philly\'s rap fans are notoriously discerning — the city that gave us Meek Mill, Freeway, and The Roots doesn\'t hand out respect. Cole\'s Trunk Sale here earned it. The Fall-Off moved in Philadelphia before any streaming numbers could say anything.',
    flavor: [
      { name: 'Reading Terminal Market', detail: 'Open since 1892 and still the city\'s best culinary institution — Amish produce, DiNic\'s roast pork, and Fisher\'s pretzels.' },
      { name: 'South Street', detail: 'The corridor where Philly\'s counterculture has always lived — record shops, murals, Jim\'s Steaks, and forty years of attitude.' }
    ]
  },
  {
    id: 10,
    city: 'New York City',
    state: 'New York',
    date: 'February 14–15, 2026',
    location: 'Various spots, Manhattan',
    lat: 40.7128,
    lng: -74.0060,
    story: 'The proving ground. Cole pulled up to the city that never made it easy for anyone and sold albums to New Yorkers who respect craft above all else. The streets didn\'t need convincing — they already knew.',
    flavor: [
      { name: 'Fat Cat', detail: 'West Village jazz club and game room. Live music every night, no dress code — the kind of NYC institution that still exists if you know where to look.' },
      { name: 'Essex Market', detail: 'Lower East Side market reborn on Delancey. Vendor stalls, international food, and the city\'s most genuine cross-section of people.' }
    ]
  },
  {
    id: 11,
    city: 'St. John\'s University',
    state: 'Queens, New York',
    date: 'February 14, 2026',
    location: 'St. John\'s University, Jamaica, Queens',
    lat: 40.7214,
    lng: -73.7946,
    story: 'Cole went back to his alma mater — the campus where his rap career quietly began before anyone was paying attention. Students lined up to buy the album from the man who once sat in the same seats. It closed a loop that took decades to close.',
    flavor: [
      { name: 'Jamaica Ave food strip', detail: 'The stretch near St. John\'s is all local — Jamaican bakeries, Chinese takeout, halal carts, and dollar pizza. The real campus cafeteria.' },
      { name: 'Queens Botanical Garden', detail: 'Five minutes from campus. Forty-nine acres of unexpected quiet in the middle of New York City.' }
    ]
  },
  {
    id: 12,
    city: 'Nashville',
    state: 'Tennessee',
    date: 'February 2026',
    location: 'Various spots',
    lat: 36.1627,
    lng: -86.7816,
    story: 'Best known for country music, Nashville\'s Black music scene is enormous and chronically overlooked. Cole\'s stop here was a reminder that The Fall-Off belongs to every city — not just the ones with a hip-hop flag already planted.',
    flavor: [
      { name: 'Jefferson Street', detail: 'Nashville\'s historic Black entertainment district — the corridor that hosted Jimi Hendrix and Etta James before they were famous.' },
      { name: 'Hattie B\'s Hot Chicken', detail: 'On Broadway and several other locations. The city\'s most exported food tradition, best experienced without air conditioning.' }
    ]
  },
  {
    id: 13,
    city: 'Huntsville',
    state: 'Alabama',
    date: 'February 2026',
    location: 'Various spots',
    lat: 34.7304,
    lng: -86.5861,
    story: 'Huntsville doesn\'t get enough credit in any cultural conversation. Cole showing up here — a mid-size Alabama city better known for NASA than rap — was exactly the kind of move that separates a real tour from a promotional run. The people who showed up had been waiting for someone to see them.',
    flavor: [
      { name: 'US Space & Rocket Center', detail: 'One of the most impressive Saturn V rockets you\'ll ever stand next to. Huntsville built the thing that got us to the moon.' },
      { name: 'Lowe Mill ARTS', detail: 'The largest privately owned arts facility in the US, housed in a former textile mill. More than 150 working artists under one roof.' }
    ]
  },
  {
    id: 14,
    city: 'New Orleans',
    state: 'Louisiana',
    date: 'February 2026',
    location: 'Various spots',
    lat: 29.9511,
    lng: -90.0715,
    story: 'NOLA runs on music — brass bands, bounce, jazz, everything. When Cole pulled up with a hip-hop album and an open trunk, the city absorbed it into its rhythm like it had always been there. New Orleans doesn\'t resist music. It just adds to it.',
    flavor: [
      { name: 'Frenchmen Street', detail: 'Not Bourbon — Frenchmen is where locals actually go. Live music spilling out of every door, seven nights a week, year round.' },
      { name: 'Dooky Chase\'s', detail: 'On Orleans Ave since 1941 — a civil rights landmark and legendary Creole kitchen. Leah Chase fed everyone from Ray Charles to Barack Obama.' }
    ]
  },
  {
    id: 15,
    city: 'Baton Rouge',
    state: 'Louisiana',
    date: 'February 2026',
    location: 'Various spots',
    lat: 30.4515,
    lng: -91.1871,
    story: 'Boosie. Kevin Gates. Baton Rouge has produced some of the rawest, realest rap voices in the country. Cole\'s Trunk Sale landed in a city that knows the difference between a rapper and an artist — and has never confused the two.',
    flavor: [
      { name: 'Southern University', detail: 'A major HBCU right in Baton Rouge — fitting for a tour that\'s honored Black colleges at nearly every turn.' },
      { name: 'Parrain\'s Seafood', detail: 'On O\'Neal Lane — the best crawfish étouffée in a city full of good crawfish étouffée. Non-negotiable stop.' }
    ]
  },
  {
    id: 16,
    city: 'Houston',
    state: 'Texas',
    date: 'February 2026',
    location: 'Various spots',
    lat: 29.7604,
    lng: -95.3698,
    story: 'H-Town — the birthplace of chopped and screwed, a genre built on slowing music down so you could feel every layer. Cole selling physical CDs in Houston felt deeply appropriate: a format you hold, slow music you feel. The city understood the assignment.',
    flavor: [
      { name: 'The Breakfast Klub', detail: 'On Travis Street — Houston\'s most iconic breakfast spot. Wings & waffles, a daily pilgrimage for the city\'s artists and creative class.' },
      { name: 'Third Ward', detail: 'The heart of Houston\'s Black cultural history. Emancipation Park, Project Row Houses, and the community that built this city\'s sound.' }
    ]
  },
  {
    id: 17,
    city: 'Phoenix',
    state: 'Arizona',
    date: 'February 23, 2026',
    location: 'Auto mechanic shop',
    lat: 33.4484,
    lng: -112.0740,
    story: 'En route to Los Angeles, the Honda Civic finally said enough. Cole pulled into a mechanic shop, filmed the "Old Dog" music video at the garage, signed albums for the mechanics, and by the time the car was fixed, hundreds of fans had lined up down the street. Even breakdowns were content.',
    flavor: [
      { name: 'Camelback Mountain', detail: 'Phoenix\'s iconic peak — a two-hour hike with panoramic views of the entire valley. Worth the climb, every time.' },
      { name: 'The Van Buren', detail: 'Grand Ave venue with 1,900 capacity. The right size for artists who haven\'t hit arenas yet — and for legends who want the room intimate.' }
    ]
  },
  {
    id: 18,
    city: 'Los Angeles',
    state: 'California',
    date: 'Late February 2026',
    location: 'Various spots',
    lat: 34.0522,
    lng: -118.2437,
    story: 'The final destination — and the one that almost didn\'t happen after the Civic broke down in Phoenix. But Cole made it. LA\'s hip-hop royalty, from Compton to Leimert Park, welcomed The Fall-Off with the respect it had earned over three weeks and nearly 3,000 miles on the road.',
    flavor: [
      { name: 'Leimert Park Village', detail: 'The cultural center of Black LA — art galleries, jazz spots, and the community that\'s been holding it down since the \'90s.' },
      { name: 'Roscoe\'s Chicken & Waffles', detail: 'On Pico Blvd and several other locations. Non-negotiable. The mandatory last meal before you leave LA.' }
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

/* ===== TWEET HELPERS ===== */
const TWEET_STORAGE_KEY = 'trunkSaleTweets';

function getTweetsForStop(stopId) {
  try {
    const data = JSON.parse(localStorage.getItem(TWEET_STORAGE_KEY) || '{}');
    return Array.isArray(data[stopId]) ? data[stopId] : [];
  } catch { return []; }
}

function renderTweets(stopId, container) {
  const urls = getTweetsForStop(stopId);
  if (!urls.length) return;

  const section = document.createElement('div');
  section.className = 'tweets-section guide-section';
  section.innerHTML = `
    <p class="guide-section-label">From the Feed</p>
    <div class="tweets-container">
      ${urls.map(url => `<blockquote class="twitter-tweet" data-theme="dark" data-dnt="true"><a href="${url}"></a></blockquote>`).join('')}
    </div>
  `;
  container.appendChild(section);

  if (window.twttr && window.twttr.widgets) {
    window.twttr.widgets.load(container);
  } else {
    // If widgets.js hasn't loaded yet, wait for it
    window.addEventListener('load', () => {
      if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load(container);
      }
    }, { once: true });
  }
}

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
  const guideContent = document.getElementById('guide-content');
  guideContent.innerHTML = renderGuide(stop);
  renderTweets(stop.id, guideContent);

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
// Auto-open first stop only once landing is dismissed (or if no landing present)
let initialStopSelected = false;
setTimeout(() => {
  const l = document.getElementById('landing');
  if (!l || l.classList.contains('is-hidden')) {
    if (!initialStopSelected) { initialStopSelected = true; selectStop(1); }
  }
}, 1200);

/* ===== LANDING SCREEN ===== */
const landing = document.getElementById('landing');
const landingEnter = document.getElementById('landing-enter');

function dismissLanding() {
  if (!landing || landing.classList.contains('is-hidden')) return;
  landing.classList.add('is-hidden');
  setTimeout(() => {
    landing.style.display = 'none';
    if (!initialStopSelected) { initialStopSelected = true; selectStop(1); }
  }, 700);
}

landingEnter.addEventListener('click', dismissLanding);

document.addEventListener('keydown', e => {
  if (landing && !landing.classList.contains('is-hidden')) {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
      e.preventDefault();
      dismissLanding();
    }
  }
});

/* ===== ADMIN PANEL ===== */
(function () {
  const ADMIN_PASSWORD = 'lowbattery26';
  const MAX_TWEETS = 3;

  const adminHints = {
    1:  'J. Cole trunk sale Raleigh The Fall-Off',
    2:  'J. Cole NC A&T HBCU trunk sale',
    3:  'J. Cole Charlotte trunk sale album',
    4:  'J. Cole Atlanta trunk sale Dreamville',
    5:  'J. Cole Hampton University trunk sale',
    6:  'J. Cole 757 Norfolk trunk sale',
    7:  'J. Cole Howard University trunk sale',
    8:  'J. Cole Baltimore trunk sale',
    9:  'J. Cole Philly trunk sale Fall-Off',
    10: 'J. Cole NYC Manhattan trunk sale',
    11: 'J. Cole St Johns Queens alma mater trunk sale',
    12: 'J. Cole Nashville trunk sale The Fall-Off',
    13: 'J. Cole Huntsville Alabama trunk sale',
    14: 'J. Cole NOLA trunk sale The Fall-Off',
    15: 'J. Cole Baton Rouge trunk sale',
    16: 'J. Cole Houston H-Town trunk sale',
    17: 'J. Cole Phoenix mechanic Old Dog music video',
    18: 'J. Cole LA Leimert Park trunk sale',
  };

  const overlay    = document.getElementById('admin-overlay');
  const gateScreen = document.getElementById('admin-gate');
  const adminApp   = document.getElementById('admin-app');
  const gateInput  = document.getElementById('admin-password');
  const gateSubmit = document.getElementById('admin-gate-submit');
  const gateError  = document.getElementById('admin-gate-error');
  const backBtn    = document.getElementById('admin-back-btn');
  const saveBtn    = document.getElementById('admin-save-btn');
  const saveBtnFooter = document.getElementById('admin-save-btn-footer');
  const saveToast  = document.getElementById('admin-save-toast');
  const stopsList  = document.getElementById('admin-stops-list');

  function openAdmin() {
    // Bypass the landing screen so it doesn't sit on top of the admin panel
    const landingEl = document.getElementById('landing');
    if (landingEl) landingEl.style.display = 'none';

    overlay.classList.add('is-active');
    overlay.setAttribute('aria-hidden', 'false');
    if (sessionStorage.getItem('adminAuth') === '1') {
      showAdminApp();
    } else {
      gateScreen.style.display = '';
      adminApp.style.display = 'none';
      setTimeout(() => gateInput && gateInput.focus(), 80);
    }
  }

  function closeAdmin() {
    overlay.classList.remove('is-active');
    overlay.setAttribute('aria-hidden', 'true');
    if (location.hash === '#admin') {
      history.pushState('', document.title, location.pathname + location.search);
    }
  }

  function showAdminApp() {
    gateScreen.style.display = 'none';
    adminApp.style.display = 'flex';
    buildStopCards();
  }

  function authenticate() {
    if (gateInput.value === ADMIN_PASSWORD) {
      sessionStorage.setItem('adminAuth', '1');
      gateError.style.display = 'none';
      gateInput.value = '';
      showAdminApp();
    } else {
      gateError.style.display = 'block';
      gateInput.value = '';
      gateInput.focus();
    }
  }

  /* ---- Stop Cards ---- */
  function loadTweetData() {
    try { return JSON.parse(localStorage.getItem(TWEET_STORAGE_KEY) || '{}'); }
    catch { return {}; }
  }

  function buildStopCards() {
    const data = loadTweetData();
    stopsList.innerHTML = '';
    if (!stops || !stops.length) {
      stopsList.innerHTML = '<p style="color:red;padding:24px">DEBUG: stops array is empty or undefined</p>';
      return;
    }
    stops.forEach(stop => {
      const savedUrls = (data[stop.id] || []).filter(Boolean);
      const urls = savedUrls.length > 0 ? savedUrls : [''];
      const card = document.createElement('div');
      card.className = 'admin-stop-card';
      card.dataset.stopId = stop.id;
      card.innerHTML = `
        <div class="admin-stop-header">
          <div>
            <div class="admin-stop-num">Stop ${String(stop.id).padStart(2, '0')}</div>
            <div class="admin-stop-city">${stop.city}</div>
            <div class="admin-stop-state">${stop.state}</div>
          </div>
          <button class="admin-btn-clear" data-stop-id="${stop.id}">Clear</button>
        </div>
        <div class="admin-search-hint">
          <strong>Search hint:</strong> <code>${adminHints[stop.id] || ''}</code>
        </div>
        <div class="admin-tweet-inputs" data-stop-id="${stop.id}">
          ${urls.map((url, i) => inputRowHTML(url, i, urls.length)).join('')}
        </div>
        <button class="admin-btn-add" data-stop-id="${stop.id}"${urls.length >= MAX_TWEETS ? ' disabled' : ''}>+ Add tweet URL</button>
      `;
      stopsList.appendChild(card);
    });
    if (!stopsList.children.length) {
      stopsList.innerHTML = '<p style="color:red;padding:24px">DEBUG: forEach ran but no cards were appended</p>';
    }
    bindCardEvents();
  }

  function inputRowHTML(url, _i, total) {
    const safeUrl = url.replace(/"/g, '&quot;');
    return `
      <div class="admin-tweet-row">
        <input type="url" class="admin-tweet-url" placeholder="https://x.com/username/status/..." value="${safeUrl}">
        ${total > 1
          ? `<button class="admin-btn-remove" title="Remove" aria-label="Remove URL">&times;</button>`
          : `<span style="width:28px;flex-shrink:0"></span>`}
      </div>`;
  }

  function bindCardEvents() {
    stopsList.querySelectorAll('.admin-btn-clear').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.stopId;
        const inputs = stopsList.querySelector(`.admin-tweet-inputs[data-stop-id="${id}"]`);
        inputs.innerHTML = inputRowHTML('', 0, 1);
        const addBtn = stopsList.querySelector(`.admin-btn-add[data-stop-id="${id}"]`);
        if (addBtn) addBtn.disabled = false;
      });
    });

    stopsList.querySelectorAll('.admin-btn-add').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.stopId;
        const inputs = stopsList.querySelector(`.admin-tweet-inputs[data-stop-id="${id}"]`);
        const urls = Array.from(inputs.querySelectorAll('.admin-tweet-url')).map(i => i.value);
        if (urls.length >= MAX_TWEETS) return;
        urls.push('');
        inputs.innerHTML = urls.map((url, i) => inputRowHTML(url, i, urls.length)).join('');
        bindRemoveEvents(inputs, btn);
        btn.disabled = inputs.querySelectorAll('.admin-tweet-row').length >= MAX_TWEETS;
        const all = inputs.querySelectorAll('.admin-tweet-url');
        all[all.length - 1].focus();
      });
    });

    stopsList.querySelectorAll('.admin-tweet-inputs').forEach(inputs => {
      const id = inputs.dataset.stopId;
      const addBtn = stopsList.querySelector(`.admin-btn-add[data-stop-id="${id}"]`);
      bindRemoveEvents(inputs, addBtn);
    });
  }

  function bindRemoveEvents(inputs, addBtn) {
    inputs.querySelectorAll('.admin-btn-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        const row = btn.closest('.admin-tweet-row');
        const urls = Array.from(inputs.querySelectorAll('.admin-tweet-url')).map(i => i.value);
        const idx = Array.from(inputs.querySelectorAll('.admin-tweet-row')).indexOf(row);
        urls.splice(idx, 1);
        if (urls.length === 0) urls.push('');
        inputs.innerHTML = urls.map((url, i) => inputRowHTML(url, i, urls.length)).join('');
        bindRemoveEvents(inputs, addBtn);
        if (addBtn) addBtn.disabled = urls.length >= MAX_TWEETS;
      });
    });
  }

  /* ---- Save ---- */
  function saveAll() {
    const data = {};
    stopsList.querySelectorAll('.admin-stop-card').forEach(card => {
      const id = Number(card.dataset.stopId);
      const urls = Array.from(card.querySelectorAll('.admin-tweet-url'))
        .map(input => input.value.trim())
        .filter(url => url && (url.includes('twitter.com') || url.includes('x.com')));
      if (urls.length) data[id] = urls;
    });
    localStorage.setItem(TWEET_STORAGE_KEY, JSON.stringify(data));
    saveToast.classList.add('show');
    setTimeout(() => saveToast.classList.remove('show'), 2000);
  }

  /* ---- Hash routing ---- */
  function handleHash() {
    if (location.hash === '#admin') {
      openAdmin();
    } else if (overlay.classList.contains('is-active')) {
      closeAdmin();
    }
  }

  window.addEventListener('hashchange', handleHash);
  handleHash(); // handle if page loads with #admin already in URL

  /* ---- Bind buttons ---- */
  gateSubmit.addEventListener('click', authenticate);
  gateInput.addEventListener('keydown', e => { if (e.key === 'Enter') authenticate(); });
  backBtn.addEventListener('click', closeAdmin);
  saveBtn.addEventListener('click', saveAll);
  saveBtnFooter.addEventListener('click', saveAll);
}());
