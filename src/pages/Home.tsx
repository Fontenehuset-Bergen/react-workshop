import { useState } from 'react'
// import { HomepageHero } from '../components/feature/Hero'
import '../assets/styles/example.css'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import TextButton from '../components/buttons/textButton'
import LinkButton from '../components/buttons/linkButton'
import Paragraph from '../components/paragraph'
import StatusBadge from '../components/badge'
import ShoppingCard from '../components/cards/shoppingCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='homepage'>
        <Header />       
        <div className="card">
          <button onClick={() => setCount((bananaindex) => bananaindex + 1)}>
            banana count is {count}
          </button>
        </div>

        <ShoppingCard
          description='Beskrivelse kommer'
          imageUrl='src/assets/images/hodetelefoner.webp'
          inStock='inStock' price={2000}
          productName='Navn kommer'
        />

        <ShoppingCard
          description='Beskrivelse kommer'
          imageUrl='src/assets/images/kontorstol.webp'
          inStock='soldOut'
          price={2000}
          productName='Navn kommer'
        />

        <Paragraph text='lorem etc' textSize={18} />

        <div className='test-box'>
          <TextButton textcontent='TextButton' />
          <LinkButton label='LinkButton' ref='' />
          <StatusBadge label='Sold out' level='warning' />
          <StatusBadge label='100+' level='success' />
          <StatusBadge label='Few left' level='info' />
        </div>

        <Footer />
      </div>
    </>
  )
}

export default App
