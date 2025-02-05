import Link from "next/link";
import SVGLogo from "./Logo";

export default function Nav() {
  return (
    <nav className="fixed z-50 bg-dark-blue flex justify-between items-between px-[6.25rem] mt-[3.5rem] w-full text-white">
      <div className="flex items-center gap-1">
        <SVGLogo fillColor="#65e4a3" width={26} height={33} />
        <p className="font-manrope font-bold text-[2.7rem]">Boldo</p>
      </div>
      <ul className="flex items-center justify-center gap-[2.5rem] font-semibold">
        <li>
          <Link href="#">Product</Link>
        </li>
        <li>
          <Link href="#">Services</Link>
        </li>
        <li>
          <Link href="#">About</Link>
        </li>
        <li className="px-[2.5rem] py-[0.5rem] font-bold border-2 border-white bg-white rounded-3xl text-dark-blue">
          <Link href="#">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
