import { useEffect, useRef, useState } from "react";

export function ExampleUseEffect() {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const [isWidescreen, setIswidescreen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null);
}

useEffect(() => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
    //if (window.innerHeight > window.innerWidth) {
    //    setIsWidescreen(false)
    //} else {
    //    setIswidescreen(true)
    //}
    setIsWidescreen(window.innerHeight > window.innerWidth)
    function handleResize() {
        if (containerRef.current) {
            setWidth(containerRef.current?.clientWidth)
            setHeight(containerRef.current?.clientHeight)
        }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
}, [])

return <div className="bg-red-200 m-4 p-2">
    <h2>Use effect example</h2>
    <p>Width: {width}</p>
    <p>Height: {height}</p>
    <p>Widescreen?: {IsWideScreen}</p>
</div>

