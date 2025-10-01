import { useState } from "react"
// we need to keep track of states or values

export function DropdownMenu() {
    const [isVisible, setIsVisible] = useState(false)

    // object deconstructing - usestate returns two different values that we need to keep track of. 
    // we chose the names ourselves to keep track of different states. we can give it an initial state, ours is false. 
    // could also be written as const isVisible = false, but with useState we can modify the state. 
    // it also signals to react that the state is changed, and the webpage will know to update

    function handleVisiblity() {
        setIsVisible(old => !old)
    }
    return <div>
        {/* we need an element to click to show/toggle the state */}
        <button onClick={handleVisiblity}>Open Menu</button>
        {/* <button onClick={(isVisible) => setIsVisible(!setIsVisible)}>Open Menu</button> --- ! before value tells JS to flip the value but only works one way */}
        {/* <button onClick={() => setIsVisible((old)=> !old)}>Open Menu</button> --- a better option is arrow function */}
        {/* best option is the third, moving the function outside the return */}
        {isVisible && (<div>
            <button>Edit profile</button>
            <button>Check notifications</button>
        </div>
        )}
    </div>
}

