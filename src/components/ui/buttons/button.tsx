// imports { useState } from "react";

import { useState } from "react"

interface MyButtonProps {
    label: string,
    className: string,
    // Set a classname for css styling
    // className?: string, Makes it optional

}

// Props is a naming convention for sending data to a function. Also known as parameter.



export function MyButton( { label, className }: MyButtonProps) {

    const [value, setValue] = useState(0);
    // useState is a function inside React
    // value and setValue is names you assign, use whatever name makes sense. "set" is common practice

    const [showTooltip, setShowTooltip] = useState(false); // Automatically understood as a boolean

    return (
    
        <>
            <button 
                className={`${className}`} // Works the same as class="" in HTML
                onClick={() => setValue(value +1)} // Works the same as an onclick event handler w/ am eventListener
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)} >
                    {label} {value}
            </button>

            {showTooltip === true ? <p>Click to increase value</p> : <p></p>}
            {showTooltip && <p>Click to increase value</p>}
            {/* These two methods create the same result. Top is more verbose, but the result is the same */}

        </>
    )    
}