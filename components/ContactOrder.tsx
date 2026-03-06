export function ContactOrder() {
  const waMessage =
    "Halo SweetCrumb, saya ingin konsultasi untuk pemesanan cake.";

  return (
    <section id="order" className="bg-gradient-to-b from-cyan-100/40 to-pink-100/40 py-12">
      <div className="mx-auto grid w-[min(1100px,92%)] gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">Contact Us</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-800">Order & Konsultasi</h2>
          <p className="mt-3 text-slate-600">
            Hubungi tim kami untuk custom cake, corporate order, atau paket event.
          </p>
          <p className="mt-4 font-semibold text-slate-700">WhatsApp: +62 812-3456-7890</p>
          <p className="mt-1 font-semibold text-slate-700">Email: order@sweetcrumb.id</p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              className="rounded-full bg-gradient-to-r from-pink-500 to-pink-400 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5"
              href={`https://wa.me/6281234567890?text=${encodeURIComponent(waMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat WhatsApp
            </a>
            <a
              className="rounded-full bg-cyan-100 px-5 py-3 text-sm font-bold text-cyan-800 transition hover:-translate-y-0.5"
              href="mailto:order@sweetcrumb.id"
            >
              Kirim Email
            </a>
          </div>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">Opening Hours</p>
          <h3 className="mt-2 text-2xl font-bold text-slate-800">Jam Buka - Tutup</h3>
          <ul className="mt-4 space-y-2 text-slate-600">
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
