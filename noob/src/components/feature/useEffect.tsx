
import {useEffect, useState} from "react"

export function ExampleUseEffect() {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const [isWidescreen, setisWidescreen] = useState(false)

    useEffect(() => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)

        if (window.innerHeight > window.innerWidth) {
            setisWidescreen(false)
        } else {
            setisWidescreen(true)
        }
    }, [])

    return <div className="bg-green-200 m-4 p-2">
            <h2>Use effect example</h2>
            <p>Width: {width}</p>
            <p>Height: {height}</p>
            <p>Widescreen: {isWidescreen ? true:false}</p>
    </div>
}