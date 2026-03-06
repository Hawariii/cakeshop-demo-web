type Highlight = {
  id: number;
  title: string;
  description: string;
};

type HighlightsProps = {
  highlights: Highlight[];
};

export function Highlights({ highlights }: HighlightsProps) {
  return (
    <section id="why-us" className="section alt-section">
      <div className="container">
        <p className="section-label">Why Choose Us</p>
        <h2 className="section-title">Standar Layanan Kami</h2>
        <div className="highlight-grid">
          {highlights.map((item) => (
            <article key={item.id} className="highlight-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
