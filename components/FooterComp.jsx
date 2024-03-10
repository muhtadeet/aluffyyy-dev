// import { Link } from "react-scroll";
import Link from "next/link";

export default function FooterWithLogo() {
  return (
    <footer className="w-full bg-transparent p-12 sm:p-14 z-[999]">
      <div className="flex items-center justify-center gap-y-6 gap-x-64 text-center z-[999]">
        <Link
          to="#home"
          href="#home"
          smooth={true}
          duration={1000}
          className="z-[999]"
        >
          <b className="text-white hover:text-[#FA939F] font-ubuntu text-xl z-[999]">
            Mustakim Islam Alif
          </b>
        </Link>
      </div>
    </footer>
  );
}
