import Image from "next/image";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  message: string;
  rating: number;
  image: string;
};

type TestimonialsProps = {
  testimonials: Testimonial[];
};

export function ReviewSection({ testimonials }: TestimonialsProps) {
  return (
    <section id="review" className="py-12">
      <div className="mx-auto w-[min(1100px,92%)]">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">Review</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-800 md:text-4xl">Apa Kata Pelanggan</h2>

        <div className="mt-6 grid gap-5">
          {testimonials.map((item) => (
            <article key={item.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-3 flex items-center gap-3">
                <Image
                  className="h-11 w-11 rounded-full border-2 border-pink-200 object-cover"
                  src={item.image}
                  alt={item.name}
                  width={64}
                  height={64}
                />
                <div>
                  <p className="text-sm font-bold text-slate-800">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
              </div>
              <p className="text-sm tracking-[0.2em] text-amber-500">{"★".repeat(item.rating)}</p>
              <p className="mt-1 italic leading-7 text-slate-600">{item.message}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
