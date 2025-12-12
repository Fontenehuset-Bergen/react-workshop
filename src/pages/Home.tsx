import { HomepageHero } from '../components/feature/Hero'
import { Counter } from '../components/assignment/Counter'
import '../assets/styles/example.css'
import { Dropdown } from '../components/assignment/Dropdown'
import { SpotTheError } from '../components/assignment/SpotTheError'

function App() {
  return (
    <>
      <HomepageHero />
      <div className="card">
        <Counter />
        <Dropdown links={[
          { label: 'Home', href: './home' },
          { label: 'Assignments', href: './assignments' },
          { label: 'Readme', href: './readme' }]}
        />
        <SpotTheError title='!!!SpOt ThE ErR0Rs To wIn 100000000,0000000000,00000£!!!'/>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
