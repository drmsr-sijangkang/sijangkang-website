export default function Landing() {
  return (
    <section className="landing">
      <div className="hero">
        <h2>Welcome to Sijangkang</h2>
        <p>
          Sijangkang is a close-knit neighbourhood in Selangor. This site
          shares local news, history, events and a community map.
        </p>
      </div>

      <div className="features">
        <article>
          <h3>Community</h3>
          <p>Local bulletin, events and contacts for residents.</p>
        </article>
        <article>
          <h3>History</h3>
          <p>Short notes on Sijangkang's history and points of interest.</p>
        </article>
        <article>
          <h3>Map</h3>
          <p>Find locations, landmarks and meeting points.</p>
        </article>
      </div>
    </section>
  );
}
