import { useState } from "react";

export function CounterButtons()
{
    const resetValue : number =  0;
    const [myCounter, setCounter] = useState(resetValue);

    const handleIncrease = () => setCounter((old) => old + 1);
    const handleDecrease = () => setCounter((old) => old - 1);
    const handleReset = () => setCounter(resetValue);

    return(
        <>
      
            <div className="buttonTextWrapper flex">
                <h2>Counter buttons assignment</h2>
                <p className="counterDisplay">Verdien er nå :< span style={ { color : "lightskyblue"}}> {myCounter}</span></p>
                <div className="buttonDiv flex">
                    <button className="defaultButton" onClick={handleIncrease}>Increase count</button>
                    <button className="defaultButton" onClick={handleDecrease}>Decrease count</button>
                    <button className="defaultButton" onClick={handleReset}>Reset count</button>
                </div>
            </div>
                   
        
        </>
    )
}