import { type NavigationData } from "@/types/navigation";

export function NavBarDesktop({ links }: { links: NavigationData[] }) {
  return (
    <nav className="flex gap-5 font-semibold">
      {links.map((item) => (
        <a key={item.label} href={item.href} className="!text-white hover:underline">
          {item.label}
        </a>
      ))}
    </nav>
  );
}
