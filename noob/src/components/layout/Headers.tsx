export function HeaderLayout() {
    const links = ["home", "about"] 

    const linksnumber = links.map((link, index) => link + index)

    console.log(links,linksnumber)

  return(
    <header className="flex flex-row justify-around bg-gradient-to-1 from-orange-400 to-purple-500">
        <span id="blabla" className="blabla">
            <img src="/vite.svg" />
        </span>
        <nav className="flex flex-row gap-4">
          {links.map((link)  => <a>{link}</a>)}
        </nav>
    </header>
    );
}