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

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section id="review" className="section">
      <div className="container">
        <p className="section-label">Review</p>
        <h2 className="section-title">Apa Kata Pelanggan</h2>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article key={item.id} className="testimonial-card">
              <Image
                className="review-avatar"
                src={item.image}
                alt={item.name}
                width={96}
                height={96}
              />
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
