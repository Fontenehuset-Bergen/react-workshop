import { type NavigationData } from "@/types/navigation";

export function NavBarDesktop({ links }: { links: NavigationData[] }) {
  return (
    <nav>
      {links.map((item) => (
        <a key={item.label} href={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
