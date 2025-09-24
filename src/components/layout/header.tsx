import navigationLinks from '../../data/navigationLinks.json'

export function HeaderLayout() {
    
    return(
        <header className="fixed w-full flex flex-row justify-around bg-gradient-to-l from-orange-400 to-pruple-50">
            <span id="blabla" className="blabla">
                <img src="/vite.svg" />
            </span>
            <nav className="flex flex-row gap-4">
                {navigationLinks.map((link) => <a href={link.href}>{link.label}</a>)}
            </nav>
        </header>
    );
}