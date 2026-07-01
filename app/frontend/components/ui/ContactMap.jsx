import { useEffect, useRef, useState } from "react";

// Dhaka, Bangladesh — home base.
const HOME = [23.8103, 90.4125];

// Small markers for client regions.
const CLIENT_REGIONS = [
  { coords: [39.5, -98.35], label: "United States", sub: "Clients" },
  { coords: [54.0, -2.0], label: "United Kingdom", sub: "Clients" },
  { coords: [-25.0, 133.0], label: "Australia", sub: "Clients" },
];

/**
 * Renders a dark-themed, interactive world map (Leaflet + CARTO dark tiles)
 * centered on Dhaka with pulsing home marker + small client-region markers.
 * Leaflet touches `window`/`document`, so it's loaded dynamically inside
 * useEffect — this component only ever runs in the browser.
 */
export function ContactMap() {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      const [{ default: L }] = await Promise.all([
        import("leaflet"),
        import("leaflet/dist/leaflet.css"),
      ]);

      if (cancelled || !containerRef.current || mapRef.current) return;

      const map = L.map(containerRef.current, {
        center: HOME,
        zoom: 2,
        minZoom: 2,
        scrollWheelZoom: false,
        zoomControl: true,
        attributionControl: true,
      });
      mapRef.current = map;

      // Only hijack page scroll for zoom once the user has actually engaged.
      map.on("focus", () => map.scrollWheelZoom.enable());
      map.on("blur", () => map.scrollWheelZoom.disable());
      containerRef.current.addEventListener("click", () => map.scrollWheelZoom.enable());

      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }).addTo(map);

      const pulseIcon = L.divIcon({
        className: "",
        html: '<div class="map-marker-pulse"></div>',
        iconSize: [18, 18],
        iconAnchor: [9, 9],
      });
      L.marker(HOME, { icon: pulseIcon }).addTo(map).bindPopup("<strong>Dhaka, Bangladesh</strong><br>Home base — remote-first, GMT+6");

      const smallIcon = L.divIcon({
        className: "",
        html: '<div style="width:10px;height:10px;border-radius:50%;background:#d4af37;opacity:0.85;border:1.5px solid #0a0a0a;"></div>',
        iconSize: [10, 10],
        iconAnchor: [5, 5],
      });
      CLIENT_REGIONS.forEach((r) => {
        L.marker(r.coords, { icon: smallIcon }).addTo(map).bindPopup(`<strong>${r.label}</strong><br>${r.sub}`);
      });

      map.whenReady(() => {
        if (!cancelled) setLoading(false);
      });
    }

    init();

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative rounded-3xl overflow-hidden border border-[var(--color-border)]">
      <div ref={containerRef} className="map-container" />

      {loading && (
        <div className="map-loading">
          <svg className="animate-spin w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M21 12a9 9 0 1 1-9-9" />
          </svg>
          Loading map…
        </div>
      )}

      <div className="map-legend">
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-gold)]" />
            <div className="text-left">
              <p className="text-sm font-semibold text-white">Dhaka, Bangladesh</p>
              <p className="text-xs text-white/60">Home base</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-gold)] opacity-70" />
            <div className="text-left">
              <p className="text-sm font-semibold text-white">Clients worldwide</p>
              <p className="text-xs text-white/60">US, UK &amp; Australia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
