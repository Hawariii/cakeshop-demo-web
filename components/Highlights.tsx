import Image from "next/image";

type Highlight = {
  id: number;
  title: string;
  description: string;
  image: string;
};

type HighlightsProps = {
  highlights: Highlight[];
};

export function Highlights({ highlights }: HighlightsProps) {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-pink-100/40 to-cyan-100/50 py-12"
    >
      <div className="mx-auto w-[min(1100px,92%)]">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">About Us</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-800 md:text-4xl">Kenapa SweetCrumb?</h2>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <p className="rounded-xl border border-slate-200 bg-white/80 p-4 leading-7 text-slate-600">
            SweetCrumb berdiri untuk menghadirkan cake butik dengan tampilan premium dan rasa yang balance,
            tidak terlalu manis, serta cocok untuk berbagai acara formal maupun personal.
          </p>
          <p className="rounded-xl border border-slate-200 bg-white/80 p-4 leading-7 text-slate-600">
            Kami melayani custom dekorasi, gift box, dan paket corporate dengan proses konsultasi yang jelas
            agar konsep cake sesuai tema acara.
          </p>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <Image
                className="h-44 w-full rounded-xl border border-cyan-100 object-cover"
                src={item.image}
                alt={item.title}
                width={560}
                height={320}
              />
              <h3 className="mt-3 text-xl font-bold text-slate-800">{item.title}</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
