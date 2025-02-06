import CompanySlideshow from "@/components/CompanySlideshow";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="p-4 md:px-[6.25rem] mb-[5rem] md:py-[6.25rem] bg-dark-blue md:col-span-full md:pt-40 relative after:content-[''] min-h-[798px] max-sm:min-h-[140vh] after:w-[1293px] after:h-[1293px] after:rounded-full after:absolute after:-top-[800px] max-sm:after:-bottom-[50px] after:left-[700px] max-sm:after:left-[60px] after:bg-[#1C3D5B] z-10 overflow-hidden">
      <div className="absolute md:px-[7rem] max-sm:px-4 top-[200px] max-sm:top-[100px] left-[50%] translate-x-[-51.5%] w-full z-20">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between items-center">
          <div className="max-w-[35rem]">
            <h1 className="font-manrope text-4xl md:text-5xl font-normal leading-[4.5rem]">
              Save time by building fast with Boldo Template
            </h1>
            <p className="text-light-grey leading-[1.6rem] mt-4">
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </p>
            <div className="mt-10 flex flex-col md:flex-row gap-6 capitalize text-center">
              <Link
                href={"#"}
                className="px-14 py-4 bg-green border-2 border-green rounded-[56px] text-xl font-bold text-dark-blue"
              >
                Buy template
              </Link>
              <Link
                href={"#"}
                className="px-14 py-4 border-2 border-white rounded-[56px] text-xl font-bold"
              >
                explore
              </Link>
            </div>
          </div>
          <div>
            <Image
              src="/hero-graphics.svg"
              alt="hero"
              width={494}
              height={423}
            />
          </div>
        </div>
        <div className="mt-[3.5rem] mb-[3.5rem]">
          <CompanySlideshow />
        </div>
      </div>
    </section>
  );
}
