import { useState } from 'react';

type DropdownMenuItem = { label: string; href: string };

const uid = () => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(36);

export function DropdownMenu(props: { links: DropdownMenuItem[] }) {
    const { links } = props;

    const [isOpen, setOpenState] = useState(false);

    return (
        <>
            <nav className={`dropdownMenu card ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li
                        key={uid()}
                        className="unselectable"
                        id="toggle"
                        onClick={() => setOpenState(!isOpen)}
                    >
                        {isOpen ? 'Close' : 'Open'}
                    </li>
                    {links.map((item) => (
                        <li key={uid()}>
                            <a href={item.href} target="_blank">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}
