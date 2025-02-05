import Testimonial from "@/components/Testimonial";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Services from "@/components/Services";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <div className="grid grid-cols-12 w-full text-white">
      <Nav />
      <Hero />
      <Services />
      <Testimonial />
      <Faq />
    </div>
  );
}
