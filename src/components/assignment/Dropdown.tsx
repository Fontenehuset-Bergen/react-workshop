import { useState } from "react";

interface iLink {
    label: string,
    href: string
}

export function Dropdown({links = []}:{links:iLink[]}) {
    const linkElements = links.map(link =>
        <li key={link.label}>
            <a href={link.label}>{link.label}</a>
        </li>
    );
    const [isOpen, setIsOpen] = useState(false);
    if (!isOpen) {
        return (
            <div className="dropdown">
                <button onClick={() => setIsOpen(true)}>open</button>
            </div>
        );
    }
    else {
        return (
            <div className="dropdown">
                <button onClick={() => setIsOpen(false)}>close</button>
                <ul>
                    {linkElements}
                </ul>
            </div>
        );
    }
}