import { useEffect, useRef, useState } from "react"

interface ExampleProps {
    name: string
}

export function Example({name}: ExampleProps) {
    const [newName, setName] = useState(name)
    const [time, setTime] = useState(1000)
    const userName = useRef(name)




    return <p>{newName}</p>
}