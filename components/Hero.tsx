export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Premium Cake Studio</p>
          <h1>
            Cake shop profesional untuk momen spesial kamu
          </h1>
          <p className="hero-copy">
            Kami menghadirkan cake premium untuk ulang tahun, pernikahan, dan
            acara perusahaan dengan desain elegan dan rasa konsisten.
          </p>
          <div className="hero-actions">
            <a href="#menu" className="btn btn-primary">
              Lihat Menu
            </a>
            <a href="#order" className="btn btn-secondary">
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
            <li>Jam buka: 08.00 - 21.00 WIB</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
