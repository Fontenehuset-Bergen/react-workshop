import { useEffect, useState } from "react";

/** Hjelpe funksjon for å simulere delay, blir bare brukt for å gjøre fetch treigere :) */ 
const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

export function ExampleUseEffectFetch() {
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    let ignore = false;

    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setImage(data.message as string);
        }
      })
      .catch((err) => console.log(err));

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <img
      src={image ? image : "/vite.svg"}
      style={{ width: 300, objectFit: "contain" }}
    />
  );
}

export function ExampleUseEffectFetchAdvanced() {
  const [image, setImage] = useState<string>("");
  const [status, setStatus] = useState<"loading" | "error" | "done">("done");

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchDoggo() {
      setStatus("loading");
      await sleep(3000);

      const result = await fetch("https://dog.ceo/api/breeds/image/random", {
        signal: abortController.signal,
      });
      const data = await result.json();

      if (data.status === "success") {
        setImage(data.message as string);
        setStatus("done");
      } else {
        setStatus("error");
      }
    }

    fetchDoggo();

    return () => abortController.abort();
  }, []);

  if (status === "done")
    return (
      <img
        src={image ? image : "/vite.svg"}
        style={{ width: 300, objectFit: "contain" }}
      />
    );

  return (
    <p>
      {status === "loading"
        ? "Image is loading..."
        : "An error occoured when loading a doggo image"}
    </p>
  );
}
