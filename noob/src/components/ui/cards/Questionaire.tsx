import { useState } from "react";

export function Questionaire(){
    const [responses, setResponses] = useState("");

    function handleInput() {
        setResponses("Typing...")
    }
 
    return (
        <div>
            <p>Hva er 2 + 2</p>
            <input placeholder="Ditt svar" onChange={handleInput} />
            <p>{responses}</p>
        </div>
    );
}