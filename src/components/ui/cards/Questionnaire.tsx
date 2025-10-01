import { useState, type ChangeEvent } from "react"

export function Questionnaire() {
    const [responses, setResponses] = useState("")
    function handleInput(event: ChangeEvent<HTMLInputElement>) {
        if (event.target.value == "4") {
            setResponses("You guessed correctly")
        } else {
            setResponses("Try again")
        }

    }
    return <div>
        <p>Hva er 2 + 2?</p>
        <input placeholder="Ditt svar" onChange={handleInput} />
        <p>{responses}</p>
    </div>
}