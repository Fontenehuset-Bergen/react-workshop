import { useState } from "react";

interface LinkItem 
{
    label : string,
    href : string
}

export type LinkArray = LinkItem[];

interface DropDownMenuItem 
{
    menuTitle : string,
    items : LinkArray
}

type MenuState = "Open" | "Close";

export function DropDownLinkMenu( {  items} : DropDownMenuItem) 
{

    const [menuShowing, setMenu] = useState<MenuState>("Close");
    
    const toggleMenu = ()=> setMenu((old) => old === "Open" ? "Close" : "Open");

    return (
    <nav className="dropDownMenuNav flex">
        <p onClick={toggleMenu} className="menuTitleText">{menuShowing}</p>
        <ul className="linkMenuList">
            { menuShowing === "Open" &&  
                items.map((linkItem) => (<li><a href={linkItem.href}>{linkItem.label} </a></li>))
            }
        </ul>
    </nav>
    );
}
