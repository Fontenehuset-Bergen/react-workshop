import { MissionRegForm, type MissonData } from './MissonRegForm'
import { Header } from './Header';
import { Footer} from "./Footer";


export function HomepageHero() 
{
 
  return (
    <>
      <Header/>

        
          <MissionRegForm />

      <Footer/>
    </>
    );
}