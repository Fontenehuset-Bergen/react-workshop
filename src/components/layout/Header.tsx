import navigationLinks from "@/data/navigationLinks.json"

export function HeaderLayout() {

    return (
        <header className='fixed w-full flex flex-row justify-around bg-gradient-to-r from from-orange-300 from-10 via-amber-100 via-30% to-amber-900 to-90%'>
            <span>
                <img src="/vite.svg" alt="" />
            </span>
            <nav className='flex flex-row gap-4'>
                {navigationLinks.map((links) => <a href="link.href">{links.label}</a>)}
            </nav>
        </header>
    );
}