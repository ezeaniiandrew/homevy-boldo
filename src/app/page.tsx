import {
  Blog,
  ContactUs,
  Faq,
  Hero,
  Nav,
  Services,
  Testimonial,
} from "@/components";

export default function Home() {
  return (
    <div className="grid grid-cols-12 w-full text-white">
      <Nav />
      <Hero />
      <Services />
      <Testimonial />
      <Faq />
      <Blog />
      <ContactUs />
    </div>
  );
}
