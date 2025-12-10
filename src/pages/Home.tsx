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
  const [hobbies, setHobbies] = useState([""])
  const [input, setInput] = useState("")

  function handleSubmit() {
    if (input.length > 3)
      setHobbies((oldHobbies) => [...oldHobbies, input])
    setInput("")
  }

  return (
    <>
      <div className='homepage'>
        <Header />

        <div style={{
          padding: "1rem",
          display: "flex",
          flexFlow: "column nowrap",
          backgroundColor: "darkseagreen",
          color: "darkgreen",
          borderRadius: 10, margin: 10
        }}>
          <p>My hobbies are:</p>
          <div style={{
            display: "flex",
            flexDirection: "row",
            gap: 10
          }}>
            {hobbies.map((hobby) => (
              <span key={hobby}>
                {hobby && <p style={{
                  backgroundColor: "lightcyan",
                  color: "darkblue",
                  padding: 5,
                  borderRadius: 5,
                }}>
                  {hobby}
                </p>
                }
              </span>
            ))}
          </div>
          <div>
            <input
              type="text"
              value={input}
              placeholder='enter hobby'
              onChange={(e) => setInput(e.currentTarget.value)}
            />
            <button onClick={handleSubmit} style={{ marginLeft: 10 }}>Add</button>
          </div>
          <p style={{ color: "gray", fontStyle: "italic", textAlign: "start" }}>{input}</p>
        </div>

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
