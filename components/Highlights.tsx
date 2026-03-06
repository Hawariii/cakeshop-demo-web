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
    <section id="about" className="section alt-section">
      <div className="container">
        <p className="section-label">About Us</p>
        <h2 className="section-title">Kenapa SweetCrumb?</h2>
        <div className="about-intro">
          <p>
            SweetCrumb berdiri untuk menghadirkan cake butik dengan tampilan
            premium dan rasa yang balance, tidak terlalu manis, serta cocok
            untuk berbagai acara formal maupun personal.
          </p>
          <p>
            Kami melayani custom dekorasi, gift box, dan paket corporate
            dengan proses konsultasi yang jelas agar konsep cake sesuai tema
            acara.
          </p>
        </div>
        <div className="highlight-grid">
          {highlights.map((item) => (
            <article key={item.id} className="highlight-card">
              <Image
                className="card-image"
                src={item.image}
                alt={item.title}
                width={560}
                height={320}
              />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
