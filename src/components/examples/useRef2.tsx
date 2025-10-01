import { useState } from "react";

export function ExampleUseRef2() {
  const [stoppwatchTime, setStoppwatchTime] = useState<number>(0);


  return (
    <div className="bg-white p-4 w-fit">
      <h1>Stoppwatch</h1>
      <p>{stoppwatchTime}</p>
      <span className="flex gap-2">
        <button type="button">Start</button>
        <button type="button">Stop</button>
        <button type="button">Reset</button>
      </span>
    </div>
  );
}
