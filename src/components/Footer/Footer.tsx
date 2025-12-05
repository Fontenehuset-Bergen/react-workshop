/*
Footer Component - Requirements
    - Two columns ( Choose your own content ) ✔
    - Return inside <footer> ✔
    - Clear design signifying the end of the webpage ✔
*/

import './footer.css';
import goodbye from '../../../public/hfimages/goodbye.png'


export default function Footer() {
  return (
    <footer className="flex footer barspadding">
        <div className='fcontentLeft'>
          Placeholder text
        </div>

        <div className="flex fcontentRight">
          <img src={goodbye} className="footerimg" alt="Bye" />
          <p>There is nothing more.</p>
        </div>
    </footer>
  )
}
