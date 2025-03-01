import {
  Blog,
  ContactUs,
  Faq,
  Footer,
  Hero,
  Nav,
  Services,
  Testimonial,
} from "@/components";

export default function Home() {
  return (
    <div className="md:grid md:grid-cols-12 w-full text-white">
      <Nav />
      <Hero />
      <Services />
      <Testimonial />
      <Faq />
      <Blog />
      <ContactUs />
      <Footer />
    </div>
  );
}
