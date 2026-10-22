document.querySelectorAll(".menu-toggle").forEach((button) => {
  const navigation = document.getElementById(button.getAttribute("aria-controls"));
  if (!navigation) return;

  const closeMenu = () => {
    button.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  };

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(isOpen));
    navigation.classList.toggle("is-open", isOpen);
  });

  navigation.addEventListener("click", closeMenu);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
});

const revealTargets = document.querySelectorAll(
  ".featured-service-card, .service-card, .cameroon-destination-card, .travel-offer-card, .blog-card, .partner-card, .google-review-card, .activity-card, .cameroon-region-card, .about-value-card, .support-card"
);
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
}

const backToTop = document.createElement("button");
backToTop.type = "button";
backToTop.className = "back-to-top";
backToTop.setAttribute("aria-label", "Back to top");
backToTop.textContent = "↑";
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
document.body.appendChild(backToTop);
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("is-visible", window.scrollY > 700);
}, { passive: true });

const quoteForm = document.getElementById("flight-quote-form");
if (quoteForm) {
  const returnInput = quoteForm.elements.return;
  const syncTrip = () => {
    const oneWay = quoteForm.elements.trip.value === "One way";
    returnInput.disabled = oneWay;
    if (oneWay) returnInput.value = "";
  };
  quoteForm.addEventListener("change", syncTrip);
  const today = new Date().toISOString().slice(0, 10);
  quoteForm.elements.depart.min = today;
  quoteForm.elements.depart.addEventListener("change", () => { returnInput.min = quoteForm.elements.depart.value; });
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const f = new FormData(quoteForm);
    const lines = [
      "Hello Amigo Travel, please send me flight options.",
      `Trip: ${f.get("trip")}`,
      `From: ${f.get("from").toString().trim()}`,
      `To: ${f.get("to").toString().trim()}`,
      `Depart: ${f.get("depart")}`,
      f.get("return") ? `Return: ${f.get("return")}` : "",
      `Passengers: ${f.get("pax") || 1}`,
      `Class: ${f.get("cabin")}`
    ].filter(Boolean);
    window.open(`https://wa.me/237674518729?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
  });
}

const weatherCards = document.querySelectorAll(".weather-card");
if (weatherCards.length) {
  const conditions = {
    0: "Clear sky", 1: "Mostly clear", 2: "Partly cloudy", 3: "Overcast", 45: "Fog", 48: "Fog",
    51: "Light drizzle", 53: "Drizzle", 55: "Heavy drizzle", 61: "Light rain", 63: "Rain", 65: "Heavy rain",
    80: "Rain showers", 81: "Rain showers", 82: "Heavy showers", 95: "Thunderstorm", 96: "Thunderstorm", 99: "Thunderstorm"
  };
  weatherCards.forEach(async (card) => {
    const { lat, lon } = card.dataset;
    try {
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,wind_speed_10m`);
      if (!response.ok) throw new Error("weather");
      const { current } = await response.json();
      card.querySelector(".weather-temp").textContent = `${Math.round(current.temperature_2m)}°C`;
      card.querySelector(".weather-desc").textContent = `${conditions[current.weather_code] || "Current conditions"} · wind ${Math.round(current.wind_speed_10m)} km/h`;
    } catch {
      card.querySelector(".weather-desc").textContent = "Live weather unavailable";
    }
  });
}

const newsList = document.getElementById("news-list");
if (newsList) {
  const loadNews = async (query) => {
    newsList.innerHTML = '<li class="news-empty">Loading headlines…</li>';
    try {
      const url = "https://api.gdeltproject.org/api/v2/doc/doc?mode=artlist&format=json&maxrecords=8&sort=datedesc&timespan=7d&sourcelang=english&query=" + encodeURIComponent(query);
      const res = await fetch(url);
      const data = await res.json();
      const seen = new Set();
      const items = (data.articles || []).filter((a) => !seen.has(a.title) && seen.add(a.title)).slice(0, 6);
      if (!items.length) throw new Error("none");
      newsList.innerHTML = "";
      items.forEach((a) => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.href = a.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = a.title;
        const meta = document.createElement("span");
        const d = a.seendate || "";
        meta.textContent = a.domain + (d ? " · " + d.slice(6, 8) + "/" + d.slice(4, 6) + "/" + d.slice(0, 4) : "");
        li.append(link, meta);
        newsList.append(li);
      });
    } catch (e) {
      newsList.innerHTML = '<li class="news-empty">Headlines are unavailable right now. Please use the official sources above.</li>';
    }
  };
  document.querySelectorAll(".news-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".news-tab").forEach((t) => t.classList.remove("is-active"));
      tab.classList.add("is-active");
      loadNews(tab.dataset.query);
    });
  });
  loadNews(document.querySelector(".news-tab.is-active").dataset.query);
}

const parcelForm = document.getElementById("parcel-track-form");
if (parcelForm) {
  parcelForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const id = parcelForm.elements.parcel.value.replace(/\s+/g, "");
    if (!id) return;
    window.open(`https://www.dhl.com/global-en/home/tracking/tracking-express.html?submit=1&tracking-id=${encodeURIComponent(id)}`, "_blank", "noopener");
  });
}

const trackForm = document.getElementById("flight-track-form");
if (trackForm) {
  trackForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const code = trackForm.elements.flight.value.replace(/\s+/g, "").toUpperCase();
    if (!code) return;
    window.open(`https://www.flightaware.com/live/flight/${encodeURIComponent(code)}`, "_blank", "noopener");
  });
}

const tripForm = document.getElementById("trip-planner-form");
if (tripForm) {
  tripForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(tripForm);
    const interests = data.getAll("interest");
    const lines = [
      "Hello Amigo Travel, I'd like help planning a trip.",
      data.get("name") ? `Name: ${data.get("name").toString().trim()}` : "",
      interests.length ? `Interests: ${interests.join(", ")}` : "",
      `Travellers: ${data.get("travellers") || 1}`,
      data.get("month") ? `Preferred month: ${data.get("month")}` : ""
    ].filter(Boolean);
    window.open(`https://wa.me/237674518729?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
  });
}
