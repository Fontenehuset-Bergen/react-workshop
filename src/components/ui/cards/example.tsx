// import { useState, useRef, useEffect } from "react"

// interface ExampleProps {
//     name: string,
// }

// export function Example({ name }: ExampleProps) {

//     const [newName, setName] = useState(name)
//     const [time, setTime] = useState(1000)

//     setName(() => name.toLowerCase())
//     // a way to alter the name 
//     const userName = useRef(name)

//     useEffect(() => {
//         document.addEventListener("scroll", )
//     }, [])

    // after mounting (in updating phase) run this function one time 
    //document.addEventListener can be used inside useEffect but not outside in the mounting phase

    // return (
    //     <p>{newName}</p>
    // )

    // two ways of declaring valuable - const = constant, let = changeable 
    // react works differently - it doesn't know that a value changes using let age = 0 age = 10 
    // useState can be used to set name 
    // setName can then be used to tell React that the name has changed
    // useref - store valuables between renders 
    // arrowfunction = anonymous function
    // React Lifecycles - different stages of how your components are being rendered 
    
// }