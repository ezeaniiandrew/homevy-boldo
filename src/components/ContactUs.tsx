export default function ContactUs() {
  return (
    <section className="px-[6.25rem] max-sm:p-4 col-span-full mb-[84px]">
      <div
        className="bg-dark-blue py-[72px] min-h-[391px] rounded-xl relative after:content-[''] after:w-[1293px] after:h-[1293px] after:rounded-full after:absolute after:-top-[1000px] max-sm:after:-bottom-[100px] after:left-[460px] max-sm:after:left-[20px] after:bg-[#1C3D5B] z-10 overflow-hidden border border-red-700"
        id="wrapper"
      >
        <div className="absolute top-[72px] max-sm:top-[40px] left-[50%] translate-x-[-51.5%] w-full z-20">
          <h2 className="font-manrope text-5xl max-sm:text-2xl leading-[72px] text-center max-w-[716px] mx-auto z-20">
            An enterprise template to ramp up your company website
          </h2>
          <form className="flex max-sm:flex-col gap-6 items-center justify-center mt-12 max-sm:w-[90%] mx-auto">
            <label htmlFor="email-address" className="max-sm:w-full">
              <input
                type="email"
                id="email-address"
                placeholder="Your email address"
                className="rounded-[240px] border-2 border-white py-4 pl-4 pr-14 w-[370px] max-sm:pr-7 max-sm:w-full placeholder:text-xl placeholder:text-black placeholder:leading-[32px]"
              />
            </label>
            <button
              type="submit"
              className="bg-green py-4 px-14 border-2 border-green rounded-[56px] max-sm:w-full font-bold text-dark-blue text-xl"
            >
              Start now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
