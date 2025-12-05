import "../../assets/styles/header.css"

export default function Header() {
    return (
        <div className="header-style">
            <div className="header-box">
                <img src="src/assets/images/esma-melike-sezer-TuyxSY71E3g-unsplash-crop.jpg" alt="logo" className="header-logo" />
                <div className="header-text-box">
                    <h2 className="header-text">My Header</h2>
                    <button className="header-menu-button">Menu</button>
                </div>                
            </div>
        </div>
    )
}