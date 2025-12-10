import viteLogo from '/vite.svg'
import reactLogo from '../../assets/react.svg'
import { Button } from '../ui/Button';
import { LinkButton } from '../ui/LinkButton';
import { ParaStyle } from '../ui/Paragraph';
import { Badge } from '../ui/Badge';
// import { ProductListing } from '../Product';

export function HomepageHero() {
    return <><div>
    <a href="https://vite.dev" target="_blank">
      <img src={viteLogo} className="logo" alt="Vite logo" />
    </a>
    <a href="https://react.dev" target="_blank">
      <img src={reactLogo} className="logo react" alt="React logo" />
    </a>
  </div>
  <h1>Blah blah blah</h1>

  <Button label="Button Test" className="pinkbutton" />
  <Button label='More Button' className='purplebutton' />

  <LinkButton label='This is a link button' className='linkbutton' href='http://www.google.com' />

  <ParaStyle sizeunit={'px'} textsize={64} textcontent='Hello this is a paragraph made with props and whatnot'/>

  <Badge level='info' label='Find more information' />
  <Badge level='success' label='Successful' />
  <Badge level='warning' label='This is a Warning badge' />

  {/* <ProductListing /> */}
  
  </>
}