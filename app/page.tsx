import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { HomeSection } from "@/components/HomeSection";
import { MenuSection } from "@/components/MenuSection";
import { Navbar } from "@/components/Navbar";
import { OrderSection } from "@/components/OrderSection";
import { ReviewSection } from "@/components/ReviewSection";
import highlights from "@/data/highlights.json";
import products from "@/data/products.json";
import testimonials from "@/data/testimonials.json";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HomeSection />
        <AboutSection highlights={highlights} />
        <MenuSection products={products} />
        <ReviewSection testimonials={testimonials} />
        <OrderSection />
      </main>
      <Footer />
    </div>
  );
}
