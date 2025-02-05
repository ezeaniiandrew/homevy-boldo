"use client";
import { useEffect, useState, useRef } from "react";
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
  const [offset, setOffset] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slideWidth = slideRef.current?.offsetWidth ?? 0;
    const totalWidth = slideWidth * companies.length;

    const animate = () => {
      setOffset((prevOffset) => {
        const newOffset = prevOffset - 1;
        return newOffset <= -totalWidth ? 0 : newOffset;
      });
    };

    const intervalId = setInterval(animate, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full max-w-5xl overflow-hidden bg-gray-100 p-4 rounded-lg shadow-lg relative">
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-gray-100 to-transparent z-10"></div>

      <div
        className="flex gap-7 transition-transform duration-300 ease-linear"
        style={{ transform: `translateX(${offset}px)` }}
      >
        {companies.map((company, index) => (
          <div
            key={`${(company.name, index)}`}
            ref={slideRef}
            className="flex items-center justify-center gap-2 w-40 flex-shrink-0"
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
