import { useEffect, useRef, useState } from "react"

export function ExampleUseRef() {
    const [isVisible, setIsVisible] = useState(false)
    const buttonRef = useRef<HTMLButtonElement|null>(null)

    useEffect(() => {
        function HandleScroll() {
            setIsVisible(window.scrollY > 0);
        }

    window.addEventListener("scroll", HandleScroll);
    return () => window.removeEventListener("scroll", HandleScroll);
    }, []);

    return (
        <button
        type="button"
        className="{`${
        isVisible ? "block" : "hidden"}
        fixed bottom-2 right-2 `}
        ref={buttonRef}
        onClick={()=>}
    )
    if (isVisible) return <button type="button" className={isVisible ? "block" : "hidden"} ref={buttonRef}>Go Back Up</button>
}