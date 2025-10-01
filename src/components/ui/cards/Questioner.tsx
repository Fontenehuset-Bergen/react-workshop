import { ChangeEvent, useState } from "react"

export function Questioner () {
    const [responses, setResponses] = useState("");

    function handleInput(event: ChangeEvent<HTMLInputElement>) {
        if (event.target.value == "4"){
            setResponses("You guessed correctly")
        } else {
            setResponses("Try Again")
        }
    }

    return (
        <div>
            <p>What is 2 + 2</p>
            <input  placeholder="Your answer" onChange={handleInput}/>
            <p>{responses}</p>
        </div>
    );
}