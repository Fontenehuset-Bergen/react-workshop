import { useEffect, useState } from "react";
import { sleep } from "../utils/sleep";

export function useFetch(arg: string = "/vite.svg") {
  const [imageUrl, setImageUrl] = useState(arg);

  useEffect(() => {
    const abortController = new AbortController();

    const url = "https://dog.ceo/api/breeds/image/random";

    async function fetchDoggo() {
      await sleep(3000);
      try {
        const result = await fetch(url, { signal: abortController.signal });
        if (!result.ok) {
          throw new Error("Fetch aborted");
        }

        const data: { message: string; status: string } = await result.json();

        if (data.status === "success") {
          setImageUrl(data.message);
          console.log("doggo updated");
        }
      } catch (err) {
        console.log("cancelled fetch, ", err);
      }
    }

    fetchDoggo();

    return () => abortController.abort();
  }, []);

  return imageUrl;
}
