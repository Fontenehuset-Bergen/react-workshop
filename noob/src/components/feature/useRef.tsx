import {useRef, useState} from "react";

export function ExampleUserRef2() {
    const [stoppwatchTime, setStoppwatchTime] = useState<number>(0);
    const [timeNow, setTimeNow] = useState<number>(0);
    const [seconds, setSeconds] = useState(0);
    const intervalRef = useRef(0);


function handleStart(){
    if (timeNow == 0) {
    setTimeNow(Date.now());
    }

    const interval = setInterval(()=>{
        setSeconds((old) => old + 0.01)
    }, 10)
    intervalRef.current = interval;
}

function handleStop() {
    clearInterval(intervalRef.current)
}

function handleReset() {
    setSeconds(0)
}

let timeDiff = (stoppwatchTime - timeNow) / 10000

return (
    <div className="bg-white p-4 w-fit">
        <h1>Stopwatch</h1>
        <p>{timeDiff.toFixed(3)}</p>
        <span>
            <button type="button" onClick={handleStart}>Start</button>
            <button type="button" onClick={handleStop}>Stop</button>
            <button type="button" onClick={handleReset}>Reset</button>
        </span>
    </div>
)

}