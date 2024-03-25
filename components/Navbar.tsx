import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container py-5 relative z-30">
      <Link href="/">
        <Image
          src="/hilink-logo.svg"
          alt="Travel app logo"
          width={74}
          height={29}
        />
      </Link>

      <ul className="hidden lg:flex h-full gap-12">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="hidden lg:flexCenter">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src="menu.svg"
        alt="Menu"
        width={32}
        height={32}
        className="inline-block lg:hidden cursor-pointer"
      />
    </nav>
  );
};

export default Navbar;
