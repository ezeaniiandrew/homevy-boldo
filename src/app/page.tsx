import CompanySlideshow from "@/components/CompanySlideshow";
import Nav from "@/components/Nav";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-12 w-full text-white">
      <Nav />
      <section className="px-[6.25rem] bg-dark-blue col-span-full pt-40">
        <div className="flex justify-between items-center">
          <div className="max-w-[35rem]">
            <h1 className="font-manrope text-5xl font-normal leading-[4.5rem]">
              Save time by building fast with Boldo Template
            </h1>
            <p className="text-light-grey leading-[1.6rem] mt-4">
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </p>
            <div className="mt-10 flex gap-6 capitalize">
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
        <div className="mt-[3.5rem]">
          <CompanySlideshow />
        </div>
      </section>
      <section></section>
    </div>
  );
}
