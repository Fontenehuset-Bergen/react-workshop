import { SiteLogo } from "@/components/ui/images/siteLogo";
import { NavBarDesktop } from "@/components/ui/menus/navigation/Desktop";
import navData from "@/data/navigationLinks.json";

export function Header() {
  return (
    <header className="z-10 fixed top-0 w-full py-2 px-2 bg-gradient-to-br from-pink-600 to-purple-700">
      <span className="container flex justify-between">
        <SiteLogo isInverted />
        <NavBarDesktop links={navData} />
      </span>
    </header>
  );
}
