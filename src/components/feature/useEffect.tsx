import {useEffect, useState, useRef} from "react"

export function ExampleUseEffect() {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [isWidescreen, setisWidescreen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)

        /*if (window.innerHeight > window.innerWidth) {
            setisWidescreen(false)
        } else {
            setisWidescreen(true)
        } */

            setisWidescreen(window.innerHeight > window.innerWidth)

    function handleResize() {
        if (containerRef.current) {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
        }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
}, [])

    return (
            <div className="bg-green-200 m-4 p-2">
            <h2>Use effect example</h2>
            <p>Width: {width}</p>
            <p>Height: {height}</p>
            <p>Widescreen: {isWidescreen ? "true":"false"}</p>
    </div>
    );
}