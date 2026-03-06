type Testimonial = {
  id: number;
  name: string;
  role: string;
  message: string;
  rating: number;
};

type TestimonialsProps = {
  testimonials: Testimonial[];
};

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <p className="section-label">Testimonials</p>
        <h2 className="section-title">Apa Kata Pelanggan</h2>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article key={item.id} className="testimonial-card">
              <p className="stars">{"★".repeat(item.rating)}</p>
              <p className="quote">{item.message}</p>
              <p className="author">{item.name}</p>
              <p className="role">{item.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
