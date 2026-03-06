import { ShopStatus } from "@/components/ShopStatus";

export function Hero() {
  return (
    <section id="home" className="pt-16 pb-10">
      <div className="mx-auto grid w-[min(1100px,92%)] gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">Premium Cake Studio</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-800 md:text-5xl">
            Cake shop profesional untuk momen spesial kamu
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            Kami menghadirkan cake premium untuk ulang tahun, pernikahan, dan acara perusahaan dengan desain
            elegan, rasa konsisten, dan layanan yang responsif dari konsultasi sampai pengiriman.
          </p>
          <p className="mt-3 max-w-2xl text-slate-600">
            Setiap pesanan dikerjakan tim pastry berpengalaman dengan standar produksi higienis, sehingga hasil
            akhir tetap cantik saat sampai di venue.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="rounded-full bg-gradient-to-r from-pink-500 to-pink-400 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5"
            >
              Lihat Menu
            </a>
            <a
              href="#order"
              className="rounded-full bg-cyan-100 px-5 py-3 text-sm font-bold text-cyan-800 transition hover:-translate-y-0.5"
            >
              Konsultasi Pesanan
            </a>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              { value: "1.200+", label: "Cake Terjual" },
              { value: "98%", label: "Repeat Order" },
              { value: "4.9/5", label: "Rating Pelanggan" },
            ].map((item) => (
              <article key={item.label} className="rounded-xl border border-cyan-100 bg-white/80 p-3">
                <p className="text-xl font-extrabold text-pink-600">{item.value}</p>
                <p className="text-sm font-semibold text-slate-600">{item.label}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="rounded-2xl border border-cyan-200 bg-gradient-to-br from-pink-100/80 via-white to-cyan-100/80 p-6 shadow-lg shadow-slate-200/50">
          <p className="text-xl font-bold text-slate-800">Informasi Store</p>

          <div className="mt-4">
            <p className="text-sm font-bold text-slate-700">Layanan Cepat</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
              <li>Custom design request 1-2 hari</li>
              <li>Same day delivery area tertentu</li>
              <li>Corporate bulk package</li>
            </ul>
          </div>

          <div className="mt-5">
            <p className="text-sm font-bold text-slate-700">Jadwal Operasional</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
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
