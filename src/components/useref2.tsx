import { useRef, useState } from "react"

export function ExampleUseRef2() {
    const [timeNow, setTimeNow] = useState<number>(0)
    const [seconds, setSeconds] = useState<number>(0)
    const intervalRef = useRef(0)

    function handleStart() {
        if (timeNow === 0) {
        setTimeNow(Date.now());
        }

        const interval = setInterval(() => {
            setSeconds((old) => old + 0.1)
        }, 10);
        intervalRef.current = interval 
    }

    function handleStop() {
        clearInterval(intervalRef.current)
    }

    function handleReset() {
        setSeconds(0)
    }

    return <div className="bg-white p-4 w-fit">
        <h1>Stoppwatch</h1>
        <p>{seconds.toFixed(3)}</p>
        <span className="flex gap-2">
            <button type="button" onClick={handleStart}>Start</button>
            <button type="button" onClick={handleStop}>Stop</button>
            <button type="button" onClick={handleReset}>Reset</button>
        </span>
    </div>
}