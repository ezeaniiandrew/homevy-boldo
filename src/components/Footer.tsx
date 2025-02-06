import SVGLogo from "./Logo";

const footerDetails = [
  { heading: "Landings", items: ["Home", "Products", "Services"] },
  { heading: "Company", items: ["Home", "Careers", "Services"] },
  { heading: "Resources", items: ["Blog", "Products", "Services"] },
];

export default function Footer() {
  return (
    <>
      <footer className="col-span-full px-[6.25rem] max-sm:p-4 py-[100px]">
        <div className="grid grid-cols-4 max-sm:flex max-sm:flex-col">
          <div className="grid grid-cols-subgrid place-self-start max-sm:w-full">
            <h3 className="flex gap-2 items-center text-[2.7rem] leading-[34px]">
              <SVGLogo fillColor="#0a2640" width={25} height={32} />
              <span className="text-dark-blue font-manrope font-bold">
                Boldo
              </span>
            </h3>
            <p className="max-w-[300px] max-sm:w-full text-gray leading-[28px] mt-[40px]">
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>
          </div>
          {footerDetails.map((detail) => (
            <div
              key={detail.heading}
              className="grid grid-cols-subgrid text-center max-sm:text-left max-sm:mt-16"
            >
              <h3 className="font-bold text-black text-xl leading-[32px]">
                {detail.heading}
              </h3>
              <ul className="mt-[40px] grid gap-4">
                {detail.items.map((item, index) => (
                  <li key={index} className="text-gray leading-[32px] text-xl">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-gray mt-16 max-sm:text-center">
          All rights reserved.
        </p>
      </footer>
    </>
  );
}
