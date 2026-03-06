export function ContactOrder() {
  const waMessage =
    "Halo SweetCrumb, saya ingin konsultasi untuk pemesanan cake.";

  return (
    <section id="order" className="section order-section">
      <div className="container order-grid">
        <article className="order-card">
          <p className="section-label">Contact Us</p>
          <h2 className="section-title">Order & Konsultasi</h2>
          <p className="card-copy">
            Hubungi tim kami untuk custom cake, corporate order, atau paket
            event.
          </p>
          <p className="order-line">WhatsApp: +62 812-3456-7890</p>
          <p className="order-line">Email: order@sweetcrumb.id</p>
          <div className="contact-actions">
            <a
              className="btn btn-primary"
              href={`https://wa.me/6281234567890?text=${encodeURIComponent(waMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat WhatsApp
            </a>
            <a className="btn btn-secondary" href="mailto:order@sweetcrumb.id">
              Kirim Email
            </a>
          </div>
        </article>
        <article className="order-card">
          <p className="section-label">Opening Hours</p>
          <h3 className="order-title">Jam Buka - Tutup</h3>
          <ul className="hour-list">
            <li>Senin - Jumat: 08.00 - 21.00 WIB</li>
            <li>Sabtu: 08.00 - 22.00 WIB</li>
            <li>Minggu: 09.00 - 20.00 WIB</li>
            <li>Hari Besar: Menyesuaikan pre-order</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
