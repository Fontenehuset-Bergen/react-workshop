import { useState, type ChangeEvent } from "react";

export function Questionaire(){
    const [responses, setResponses] = useState("");

    function handleInput(event: ChangeEvent<HTMLInputElement>) {
       
        setResponses( event.target.value)
    }
 
    return (
        <div>
            <p>Hva er 2 + 2</p>
            <input placeholder="Ditt svar" onChange={handleInput} />
            <p>{responses}</p>
        </div>
    );
}