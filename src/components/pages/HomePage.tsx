import { useState } from "react";
import ShoppingCard from "../cards/shoppingCard";
import Paragraph from "../paragraph";
import TextButton from "../buttons/textButton";
import LinkButton from "../buttons/linkButton";
import StatusBadge from "../badge";

export default function HomePage() {
    const [count, setCount] = useState(0)
    const [hobbies, setHobbies] = useState([""])
    const [input, setInput] = useState("")


    function handleSubmit() {
        if (input.length > 3)
            setHobbies((oldHobbies) => [...oldHobbies, input])
        setInput("")
    }
    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1>Home</h1 >
            <div className='test-box'>
                <TextButton textcontent='TextButton' />
                <LinkButton label='LinkButton' ref='' />
                <StatusBadge label='Sold out' level='warning' />
                <StatusBadge label='100+' level='success' />
                <StatusBadge label='Few left' level='info' />
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
               <Paragraph text='lorem etc' textSize={18} />
            <div className="card">
              
                <button onClick={() => setCount((bananaindex) => bananaindex + 1)}>
                    banana count is {count}
                </button>
               
            </div>


        </div>
    )
}