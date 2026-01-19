import { useEffect, useRef, useState } from "react";
import { sleep } from "../../utils/sleep";
import { useFetch } from "../../hooks/useFetch";

export function MyUseEffectExample() {
  const [count, setCount] = useState(0);
  console.log("body");

  useEffect(() => {
    console.log("useEffect", count);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((old) => old + 1)}>
        Count is {count}
      </button>
    </div>
  );
}

export function MyTimer() {
  const [time, setTime] = useState<number>(Date.now());
  const [start] = useState<number>(Date.now());
  const timeRef = useRef<number>(null);

  console.log("body");

  const timeDiff = (time - start) / 1000;

  useEffect(() => {
    timeRef.current = setInterval(() => {
      console.log("interval");
      setTime(Date.now());
    }, 1000);

    console.log("effect");
  }, []);
  return <div>{timeDiff.toFixed(0)} seconds since mount</div>;
}

export function MyEventLister() {
  const divRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    /*  if (!dialogRef.current) return;
    dialogRef.current.showModal(); */

    const element = divRef.current;
    if (!element) return;

    function handleClick() {
      console.log("hello");
    }

    element.addEventListener("click", handleClick);
    return () => element.removeEventListener("click", handleClick);
  }, []);
  return (
    <div ref={divRef}>
      <p>Hover meeee!</p>
      <button onClick={() => dialogRef.current?.showModal()}>open modal</button>
      <dialog ref={dialogRef} closedby="any">
        <p>Dialog</p>
      </dialog>
    </div>
  );
}

export function MyFetch() {
  const imageUrl = useFetch("/react.svg");

  return <img src={imageUrl} alt="an image" />;
}
