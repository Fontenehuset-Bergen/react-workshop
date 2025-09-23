import { SiteLogo } from "@/components/ui/images/siteLogo";
import { NavBarDesktop } from "@/components/ui/menus/navigation/Desktop";
import navData from "@/data/navigation/links.json";

export function Header() {
  return (
    <header className="z-10 fixed w-full flex justify-between py-2 px-4 bg-gradient-to-br from-orange-500 to-purple-700 shadow-xl shadow-stone-800">
      <SiteLogo isInverted />
      <NavBarDesktop links={navData} />
      <nav className="flex gap-2">
        {navData.map((item) => (
          <a
            key={item.label}
            href="/"
            className="!text-white hover:!text-sky-100 hover:!underline duration-200"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
