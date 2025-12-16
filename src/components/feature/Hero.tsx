import viteLogo from '/vite.svg'
import reactLogo from '../../assets/react.svg'
import { MissionRegForm, type MissonData } from './MissonRegForm'
import { Header } from './Header';

export function HomepageHero() 
{
 
  return (
    <>
      <Header/>
      <main>
        
          <MissionRegForm />
      </main>
      
    </>
    );
}