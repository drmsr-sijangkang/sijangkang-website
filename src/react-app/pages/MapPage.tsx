/*
  Simple iframe embed using Google Maps search for "Sijangkang Selangor".
  This avoids adding map libraries or API keys.
*/
export default function MapPage() {
  return (
    <section className="map-page">
      <h2>Community Map — Sijangkang</h2>

      <div className="map-embed">
        <iframe
          title="Sijangkang Map"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps?q=Sijangkang+Selangor&output=embed"
          allowFullScreen
        />
      </div>

      <p className="map-note">
        If you want specific coordinates or markers (e.g., community centre,
        mosque, school), tell me the list and I’ll add them to the page.
      </p>
    </section>
  );
}
