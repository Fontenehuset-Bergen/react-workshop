import { useEffect, useRef, useState } from "react"

// conditional button that will only be visible when scrolling
export function ExampleUseRef() {
    const [isVisible, setIsVisible] = useState<boolean>(false) // conditional button that will only be visible when scrolling
    const buttonRef = useRef<HTMLButtonElement>(null) //either a button element or nothing

    useEffect(() => {

        function handleScroll() {
            const isScrolling = window.scrollY > 0 //if window is greater than 0, value is true 
            setIsVisible(isScrolling)
            console.log("testing testing")
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll) //we want to remove an eventlistener later 
    }, []);

    //rerender is not the same as a page reload. page reload is part of mounting, rerender is part of refreshing the page info
    // useRef can keep track of string, boolean values etc, depending on what you pass in 
    // (isVisible) is the same as (isVisible == true)

    return <button
        type="button"
        className={`${isVisible ? "block" : "hidden"
            } fixed bottom-2 right-2 bg-red-300 p-2 rounded-2xl text-black font-bold`}
        ref={buttonRef}
        onClick={()=> {
            window.scrollTo({top: 0, behavior: "smooth"})
        }}>
        Scroll Up
    </button>
}

