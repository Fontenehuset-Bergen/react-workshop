import { useState } from "react";
import '../assets/styles/Counter.css';

export function Counter() {
    const [ count, setCount ] = useState(0);

    return(
        <>
            <div className="countContainer">
                <p className="countDisplay">{count}</p>
                <div className="countButtonsBox">
                    <button className="countPlus" onClick={() => setCount((countOld) => countOld + 1)}>+</button>
                    <button className="countReset" onClick={() => setCount(0)}>Reset</button>
                    <button className="countMinus" onClick={() => setCount((countOld) => countOld - 1)}>-</button>
                    {/* Issue: Make the counter stop at 0 and not go into negative numbers */}
                </div>
            </div>
        </>
    )
}