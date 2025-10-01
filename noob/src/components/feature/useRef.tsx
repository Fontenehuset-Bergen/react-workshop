import {useRef, useState} from "react";

export function ExampleUserRef2() {
    const [stoppwatchTime, setStoppwatchTime] = useState<number>(0);
    const [timeNow, setTimeNow] = useState<number>(0);
    const intervalRef = useRef(0)


function handleStart(){
    setTimeNow(Date.now())

    const interval = setInterval(()=>{
        const newTime = Date.now()
        setStoppwatchTime(newTime)
    }, 10)
    intervalRef.current = interval
}

let timeDiff = (stoppwatchTime - timeNow) / 10000

return (
    <div className="bg-white p-4 w-fit">
        <h1>Stopwatch</h1>
        <p>{timeDiff.toFixed(3)}</p>
        <span>
            <button type="button" onClick={handleStart}>Start</button>
            <button type="button">Stop</button>
            <button type="button">Reset</button>
        </span>
    </div>
)

}