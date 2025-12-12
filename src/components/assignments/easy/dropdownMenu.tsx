import { useState } from "react"

interface DropdownMenuProps {
    label: string
    href: string

}

function MenuButtons({ label, href, }: DropdownMenuProps) {
    return (
        <a href={href} style={{ fontWeight: "bold" }}>{label}</a>
    )
}

export default function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <button onClick={() => setIsOpen((old) => !old)} style={{
                borderBottomLeftRadius: isOpen ? 0 : 10,
                borderBottomRightRadius: isOpen ? 0 : 10,
                backgroundColor: "white",
                color: "black",
                borderBottomWidth: isOpen ? 2 : 0,
                borderBottomStyle: isOpen ? "solid" : "none",
                borderBottomColor: isOpen ? "black" : "white",
                fontWeight: "bold"
            }}>
                {isOpen ? "Close menu" : "Open Menu"}
            </button>
            {isOpen &&
                <div style={{
                    display: "flex", flexDirection: "column", alignItems: "start", gap: 2,
                    backgroundColor: "white", padding: 5, borderRadius: 5, borderTopRightRadius: 0, borderTopLeftRadius: 0
                }}>
                    <MenuButtons href="" label="Home" />
                    <MenuButtons href="" label="Assignments" />
                    <MenuButtons href="" label="Readme" />
                </div>
            }

        </div>
    )
}