import { useState } from "react";
import '../assets/styles/Dropdown.css';

export function Dropdown() {
    
    interface dropdown {
        label: string,
        href: string,
    }

    const dropdownLinks: dropdown[] = [
        { label: "Home", href: "url"},
        { label: "Assignment", href: "url"},
        { label: "ReadMe", href: "url"},
    ]

    let [ dropdownState, setDropdownState ] = useState(false)

    return(
        <>

        <div className="componentContainer">
            <div className="assignmentIntro">
                <h2>Assignment - Dropdown Menu Component</h2>
            </div>

            <div className="dropdownContainer">
                <button type="button" onClick={() => setDropdownState((dropdownConrol) => !dropdownConrol)}>
                    {dropdownState == false ? "Open" : "Close" }
                </button>
                {dropdownState &&
                    <ul className="menuList">
                        {dropdownLinks.map((link) => <li className="menuLink"><a key={link.label} href={link.href} target="_blank">{link.label}</a></li>)}
                    </ul>}
            </div>
        </div>

        </>
    )
}