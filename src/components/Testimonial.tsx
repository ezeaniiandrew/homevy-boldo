import Image from "next/image";

const testimonials = [
  {
    text: "Buyer buzz partner network disruptive non-disclosure agreement business",
    author: {
      name: "Albus Dumbledore",
      role: "Manager @ Howarts",
      image: "/author-dp-1.png",
    },
  },
  {
    text: "Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.",
    author: {
      name: "Severus Snape",
      role: "Manager @ Slytherin",
      image: "/author-dp-2.png",
    },
  },
  {
    text: "Release facebook responsive web design business model canvas seed money monetization.",
    author: {
      name: "Harry Potter",
      role: "Team Leader @ Gryffindor",
      image: "/author-dp-3.png",
    },
  },
];

export default function Testimonial() {
  return (
    <section className="mt-[120px] bg-dark-blue col-span-full px-[6.25rem] pt-24 pb-24">
      <div className="flex justify-between">
        <p className="max-w-[716px] font-manrope text-5xl leading-[4.5rem] text-white">
          An enterprise template to ramp up your company website
        </p>
        <div className="flex items-center justify-center gap-6 self-end">
          <button
            type="button"
            title="previous slide"
            className="w-[72px] h-[72px] bg-white grid place-content-center rounded-full"
          >
            <Image src={"/arrow-left.svg"} height={39} width={36} alt="" />
          </button>
          <button
            type="button"
            title="next slide"
            className="w-[72px] h-[72px] bg-white grid place-content-center rounded-full"
          >
            <Image src={"/arrow-right.svg"} height={39} width={36} alt="" />
          </button>
        </div>
      </div>
      <div className="mt-[72px] flex gap-[22px] ">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex h-fit flex-col gap-8 w-[350px] p-10 bg-white rounded-xl shadow-[0px_12px_32px_0px_#0000001F;
]"
          >
            <p className="max-w-[716px] font-manrope text-black text-2xl leading-[36px]">
              {`"${testimonial.text}"`}
            </p>
            <div className="flex gap-4">
              <Image
                src={testimonial.author.image}
                height={58}
                width={58}
                alt=""
                className="rounded-full"
              />
              <div className="text-dark-blue leading-[32px]">
                <p className="font-bold">{testimonial.author.name}</p>
                <p className="text-sm">{testimonial.author.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
