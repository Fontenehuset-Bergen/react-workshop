import navigationLinks from "../../data/navigationLinks.json"

export function HeaderLayout() {

  return (
    <header className="fixed w-full flex flex-row justify-around bg-gradient-to-l from-yellow-400 to-blue-500">
      <span id="" className="">
        <img src="/vite.svg" />
      </span>
      <nav className="flex flex-row gap-4">
        {navigationLinks.map((link) => <a href={link.href}>{link.label}</a>)}
      </nav>
    </header>
  );
}
