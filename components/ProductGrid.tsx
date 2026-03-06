import Image from "next/image";

type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  badge: string;
  image: string;
};

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <section id="menu" className="py-12">
      <div className="mx-auto w-[min(1100px,92%)]">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">Our Menu</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-800 md:text-4xl">Pilihan Cake Favorit</h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <Image
                className="h-44 w-full rounded-xl border border-cyan-100 object-cover"
                src={product.image}
                alt={product.name}
                width={600}
                height={380}
              />
              <p className="mt-3 inline-block rounded-full bg-pink-100 px-2.5 py-1 text-xs font-bold text-pink-700">
                {product.badge}
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-800">{product.name}</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">{product.description}</p>
              <p className="mt-3 text-base font-extrabold text-cyan-700">{product.price}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
