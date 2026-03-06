export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Premium Cake Studio</p>
          <h1>
            Cake shop profesional dengan nuansa <span>pink</span>,{" "}
            <span>white</span>, dan <span>cyan</span>
          </h1>
          <p className="hero-copy">
            Kami menghadirkan cake premium untuk ulang tahun, pernikahan, dan
            acara perusahaan dengan desain elegan dan rasa konsisten.
          </p>
          <div className="hero-actions">
            <a href="#products" className="btn btn-primary">
              Lihat Produk
            </a>
            <a href="#contact" className="btn btn-secondary">
              Konsultasi Pesanan
            </a>
          </div>
        </div>
        <aside className="hero-card">
          <p className="hero-card-title">Open Order Hari Ini</p>
          <ul>
            <li>Custom design request</li>
            <li>Same day delivery area tertentu</li>
            <li>Corporate bulk package</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
