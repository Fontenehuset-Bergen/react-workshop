import { useState } from "react"

export default function NumberButtons() {
   const [number, setNumber] = useState(0)

    return (
        <div style={{display: "flex", gap: 10,
         backgroundColor: "#23223d", padding: 20, borderRadius: 10, alignItems: "start", height: "30%"}}>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <button onClick={() => setNumber((old) => old + 1)}> Increase by one </button>
                <button onClick={() => setNumber((old) => old - 1)}> Decrease by one</button>
                <button onClick={() => setNumber(0)}> Reset</button>
            </div>
            <p style={{margin: 0}}>Current number is {number}</p>
        </div>
    )
}
