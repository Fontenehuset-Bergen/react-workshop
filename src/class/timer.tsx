import { useState, useEffect, useRef } from "react";

export function MyTimer() {
    const [ time, setTime ] = useState(Date.now());
    const [ start ] = useState(Date.now());

    const timeDiff = (time - start) / 1000;

    const timeRef = useRef<number>(null);
    // There is no way to update the variable stored in useRef

    useEffect(() => {
        timeRef.current = setInterval(() => {
            setTime(Date.now());
        }, 1000);
    }, []);

    return(
        <>
            <div>{timeDiff.toFixed(0)} seconds since mount</div>
        </>
    )
};

export function MyEventListener() {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!divRef.current) return

        function handleEvent() {
            console.log("hello mouse");
        }

        divRef.current.addEventListener("mouseenter", handleEvent)
    }, [])

    return(
        <>
            <div ref={divRef}>
                <p>
                    Hover Me
                </p>
            </div>
        </>
    )
}

export function MyFetch() {
    const [ imageUrl, setImageUrl ] = useState<string>("/vite.svg");

    useEffect(() => {
        const abortController = new AbortController();
        const url = "https://dog.ceo/api/breeds/image/random";
        async function fetchDoggo() {
            const result = await fetch(url, { signal: abortController.signal });
            const data: { message: string, status: string } = await result.json();
            if (data.status === "success") {
                setImageUrl(data.message);
            }
        }

        fetchDoggo();

        return () => abortController.abort();
    }, [])

    return(
        <>
            <img src={imageUrl} alt="placeholder" />
        </>
    )
}