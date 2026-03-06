type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  badge: string;
};

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <section id="products" className="section">
      <div className="container">
        <p className="section-label">Our Product</p>
        <h2 className="section-title">Pilihan Cake Favorit</h2>
        <div className="card-grid">
          {products.map((product) => (
            <article key={product.id} className="cake-card">
              <p className="badge">{product.badge}</p>
              <h3>{product.name}</h3>
              <p className="card-copy">{product.description}</p>
              <p className="price">{product.price}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
