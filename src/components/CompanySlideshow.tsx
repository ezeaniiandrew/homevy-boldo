import SVGLogo from "./Logo";

const companies = Array.from({ length: 10 }, (_, index) =>
  index % 2 === 0
    ? {
        name: "Boldo",
        logo: <SVGLogo fillColor="#ffffff" height={33} width={23} />,
      }
    : {
        name: "Presto",
        logo: (
          <SVGLogo fillColor="#ffffff" height={33} width={23} name="presto" />
        ),
      }
);

export default function CompanySlideshow() {
  return (
    <div className="w-full overflow-hidden bg-gray-100 py-4 rounded-lg">
      <div className="flex gap-7">
        {companies.map((company, index) => (
          <div
            key={`${(company.name, index)}`}
            className="flex items-center justify-start gap-2 w-40 max-sm:w-20 flex-shrink-0"
          >
            {company.logo}
            <h2 className="text-sm font-semibold text-center">
              {company.name}
            </h2>
          </div>
        ))}
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-gray-100 to-transparent z-10"></div>
    </div>
  );
}
