import viteLogo from '/vite.svg'
import reactLogo from '../../assets/react.svg'
import { CounterButtons } from '../CounterButtons';
import { DropDownLinkMenu, type LinkArray } from '../DropDownLinkMenu';

const myTestLinks : LinkArray = 
[
   { label : "Github", href :"#"} ,
   { label : "Microsoft Store", href :"#"},
   { label : "My Home Page", href :"#"}
];

export function HomepageHero() {
    return (
  <div className='homePageHero flex'>
      {/* <CounterButtons/> */}
      <DropDownLinkMenu menuTitle="not used here" items={myTestLinks}/>
  </div>
    );
}