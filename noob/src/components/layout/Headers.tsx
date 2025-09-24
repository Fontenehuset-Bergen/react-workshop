import navigationLinks from "../../data/navigationLinks.json"

export function HeaderLayout() {
    
  return(
    <header className="flex flex-row justify-around bg-gradient-to-1 from-orange-400 to-purple-500">
        <span id="blabla" className="blabla">
            <img src="/vite.svg" />
        </span>
        <nav className="flex flex-row gap-4">
          {navigationLinks.map((link)  => <a>{link.label}</a>)}
        </nav>
    </header>
    );
}