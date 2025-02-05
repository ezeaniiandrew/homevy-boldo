import Image from "next/image";

const faqs = [
  "We connect our customers with the best?",
  "Android research & development rockstar? ",
];

export default function Faq() {
  return (
    <section className="mt-[124px] col-span-full px-[6.25rem] mb-[158px]">
      <Image
        src={"/faq-banner-image.png"}
        className="w-full"
        alt=""
        width={1100}
        height={403}
      />
      <div className="flex justify-between mt-14">
        <p className="max-w-[500px] font-manrope text-4xl leading-[56px] text-black">
          We connect our customers with the best, and help them keep up-and stay
          open.
        </p>
        <div className="leading-[56px]">
          {faqs.map((faq) => (
            <ul key={faq} className="flex flex-col leading-[56px]">
              <li className="flex text-black text-xl w-[499px] justify-between items-center border-b border-[#c4c4c4]">
                <span className="leading-[56px]">{faq}</span>
                <span className="w-7 h-7 bg-dark-blue grid place-content-center rounded-full">
                  <Image
                    src={"/chevron-down.svg"}
                    height={6}
                    width={12}
                    alt=""
                  />
                </span>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
