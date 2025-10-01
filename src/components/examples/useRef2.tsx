import { useRef, useState } from "react";

export function ExampleUseRef2() {
  const [stopwatchTime, setStopwatchTime] = useState<number>(0);
  const intervalRef = useRef(null)

  function handleStart() {
    
  }


  return (
    <div className="bg-white p-4 w-fit">
      <h1>Stopwatch</h1>
      <p>{stopwatchTime}</p>
      <span className="flex gap-2">
        <button type="button" onClick={handleStart}>Start</button>
        <button type="button">Stop</button>
        <button type="button">Reset</button>
      </span>
    </div>
  );
}
