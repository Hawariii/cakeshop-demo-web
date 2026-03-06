import { ShopStatus } from "@/components/ShopStatus";

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Premium Cake Studio</p>
          <h1>Cake shop profesional untuk momen spesial kamu</h1>
          <p className="hero-copy">
            Kami menghadirkan cake premium untuk ulang tahun, pernikahan, dan
            acara perusahaan dengan desain elegan, rasa konsisten, dan layanan
            yang responsif dari konsultasi sampai pengiriman.
          </p>
          <p className="hero-copy">
            Setiap pesanan dikerjakan tim pastry berpengalaman dengan standar
            produksi higienis, sehingga hasil akhir tetap cantik saat sampai di
            venue.
          </p>
          <div className="hero-actions">
            <a href="#menu" className="btn btn-primary">
              Lihat Menu
            </a>
            <a href="#order" className="btn btn-secondary">
              Konsultasi Pesanan
            </a>
          </div>
          <div className="hero-stats">
            <article>
              <p className="stat-number">1.200+</p>
              <p className="stat-label">Cake Terjual</p>
            </article>
            <article>
              <p className="stat-number">98%</p>
              <p className="stat-label">Repeat Order</p>
            </article>
            <article>
              <p className="stat-number">4.9/5</p>
              <p className="stat-label">Rating Pelanggan</p>
            </article>
          </div>
        </div>
        <aside className="hero-card">
          <p className="hero-card-title">Informasi Store</p>

          <div className="hero-card-section">
            <p className="hero-card-subtitle">Layanan Cepat</p>
            <ul className="hero-card-list">
              <li>Custom design request 1-2 hari</li>
              <li>Same day delivery area tertentu</li>
              <li>Corporate bulk package</li>
            </ul>
          </div>

          <div className="hero-card-section">
            <p className="hero-card-subtitle">Jadwal Operasional</p>
            <ul className="hero-card-list">
              <li>Senin - Jumat: 08.00 - 21.00 WIB</li>
              <li>Sabtu: 08.00 - 22.00 WIB</li>
              <li>Minggu: 09.00 - 20.00 WIB</li>
            </ul>
          </div>

          <ShopStatus />
        </aside>
      </div>
    </section>
  );
}
