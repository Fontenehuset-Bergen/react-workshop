import { useState } from "react";

export function ExampleTernary() {
    const [isVisible, setIsVisible] = useState(false);

    const booleanToString = isVisible ? "visible" : "hidden"
    const test = `${booleanToString}`
    const myNumber = 23
    
    return (
        <div className={`${isVisible ? "block" : "hidden"}`}>
            <h1>Header</h1>
            <p>Text here</p>
            <p>This component is {booleanToString} {test}</p>
        </div>
    )
}