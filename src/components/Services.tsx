import Image from "next/image";
import Link from "next/link";

const serviceCards = {
  triple: [
    {
      image: "/service-image-1.png",
      title: "Cool feature title",
      description: "Learning curve network effects return on investment.",
    },
    {
      image: "/service-image-2.png",
      title: "Cool feature title",
      description: "Learning curve network effects return on investment.",
    },
    {
      image: "/service-image-3.png",
      title: "Cool feature title",
      description: "Learning curve network effects return on investment.",
    },
  ],
  fullSpan: [
    {
      image: "/connect-image-1.png",
      overlayImage: "/connect-image-2.png",
      title:
        "We connect our customers with the best, and help them keep up-and stay open.",
      description: {
        id: 1,
        contents: [
          {
            image: "/checkmark-icon.svg",
            text: "We connect our customers with the best.",
          },
          {
            image: "/checkmark-icon.svg",
            text: "Advisor success customer launch party.",
          },
          {
            image: "/checkmark-icon.svg",
            text: "Business-to-consumer long tail.",
          },
        ],
      },
    },
    {
      image: "/connect-image-3.png",
      overlayImage: "/connect-image-4.png",
      title:
        "We connect our customers with the best, and help them keep up-and stay open.",
      description: {
        id: 2,
        contents: [
          {
            image: "/feather-icon.svg",
            text: "We connect our customers with the best.",
          },
          {
            image: "/eye-icon.svg",
            text: "Advisor success customer launch party.",
          },
          { image: "/sun-icon.svg", text: "Business-to-consumer long tail." },
        ],
      },
    },
  ],
};

export default function Services() {
  return (
    <section className="col-span-full px-[6.25rem]">
      <h2 className="text-gray text-xl leading-8 text-center capitalize">
        our services
      </h2>
      <p className="text-black font-manrope text-5xl text-center leading-[72px] max-w-[842px] mx-auto">
        Handshake infographic mass market crowdfunding iteration.
      </p>
      <div className="mt-[78px] flex items-center justify-between gap-24 mb-44">
        {serviceCards.triple.map((card, index) => (
          <div key={index} className="flex flex-col w-[300px] gap-3">
            <Image src={card.image} alt="service" width={300} height={354} />
            <h3 className="text-black text-2xl font-normal">{card.title}</h3>
            <p className="text-gray text-xl leading-8">{card.description}</p>
            <Link
              href="#"
              className="text-dark-blue text-xl leading-9 font-bold flex place-items-center gap-2 border-b border-dark-blue w-[164px]"
            >
              <span>Explore page</span>
              <Image
                src="/arrow-right.svg"
                alt="arrow"
                width={24}
                height={26}
              />
            </Link>
          </div>
        ))}
      </div>
      <div>
        {serviceCards.fullSpan.map((card, index) => (
          <div
            key={index}
            className={`flex items-center gap-[150px] mb-44 relative ${
              index === 1 && "flex-row-reverse mt-[120px]"
            }`}
          >
            <div className="relative">
              <Image src={card.image} alt="service" width={494} height={506} />
              <Image
                src={card.overlayImage}
                alt="service"
                width={310}
                height={525}
                className={`${
                  index === 0
                    ? "absolute -bottom-32 right-10"
                    : "absolute -bottom-32 left-10"
                }`}
              />
            </div>
            <div className="max-w-[493px]">
              <h3 className="text-black text-4xl leading-[56px] font-normal font-manrope mb-10">
                {card.title}
              </h3>
              <ul className="text-gray text-xl leading-8 list-disc flex flex-col gap-6 mb-14 ">
                {card.description.contents.map((item, index) => (
                  <li
                    key={index}
                    className={`flex gap-2 p-1 font-semibold ${
                      card.description.id === 2
                        ? "border-2 border-white text-dark-blue rounded-[4px] shadow-[0px_4px_32px_0px_#00000014]"
                        : ""
                    } ${
                      index === 0 &&
                      "bg-dark-blue text-white border-2 border-dark-blue"
                    }`}
                  >
                    <Image src={item.image} alt="icon" width={36} height={36} />
                    <span>{item.text}</span>
                  </li>
                ))}
                {/* box-shadow: 0px 4px 32px 0px #00000014; */}
              </ul>
              {index === 0 && (
                <Link
                  href="/"
                  className="bg-dark-blue border-2 border-dark-blue py-4 px-14 rounded-[56px] text-white font-bold text-xl"
                >
                  Start now
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
