import { useState } from "react"
import "../../assets/styles/header.css"
import DropdownMenu from "./menu"

export default function Header() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    return (
        <div className="header-style">
            <div className="header-box">
                <img src="src/assets/images/esma-melike-sezer-TuyxSY71E3g-unsplash-crop.jpg" alt="logo" className="header-logo" />
                <div className="header-text-box">
                    <h2 className="header-text">My Header</h2>
                </div>
                <div style={{ display: "flex", flexDirection: "column", padding: 5, alignItems: "end" }}>
                    <button
                        onClick={() => setIsDropdownOpen((old) => !old)}
                        className="header-menu-button">Menu</button>
                    {
                        isDropdownOpen &&
                        <DropdownMenu />
                    }
                </div>
            </div>
        </div>
    )
}