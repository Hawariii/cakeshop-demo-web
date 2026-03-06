import { ContactOrder } from "@/components/ContactOrder";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { Navbar } from "@/components/Navbar";
import { ProductGrid } from "@/components/ProductGrid";
import { Testimonials } from "@/components/Testimonials";
import highlights from "@/data/highlights.json";
import products from "@/data/products.json";
import testimonials from "@/data/testimonials.json";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid products={products} />
        <Highlights highlights={highlights} />
        <Testimonials testimonials={testimonials} />
        <ContactOrder />
      </main>
      <Footer />
    </div>
  );
}
