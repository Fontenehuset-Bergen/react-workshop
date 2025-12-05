/*
Header Component - Requirements
    - Image/Logo on the left  ✔
    - Space for a menu button on the right  ✔
    - 50px height min  ✔
    - 100% screen width  ✔
    - Return inside <header>  ✔
*/

import './header.css';
import snail from '../../../public/hfimages/snail.png';
import menu from '../../../public/hfimages/menu.png'

export default function Header() {
  return (
    <header className="flex header barspadding">
        <img src={snail} className="headericon" alt="Snail Icon" />
        <img src={menu} className="headericon" alt="Menu Icon" />
    </header>
  )
}
