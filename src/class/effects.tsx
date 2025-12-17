

// How to use Effects?

import { useEffect, useState } from "react";

export function MyUseEffectExample() {
    const [ count, setCount ] = useState(0)
    console.log("body");

    useEffect(() => {
        console.log("useEffect", count)
    }, [count]);
    
    return(
        <>
        <div>
            <button onClick={() => setCount((old) => old + 1)}>Count is {count}</button>
        </div>
        </>
    )
}