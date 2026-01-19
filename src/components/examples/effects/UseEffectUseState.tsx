import { useEffect, useState } from "react";

export function ExampleUseEffectUseState() {
  const [name, setName] = useState<string>(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      return storedName;
    } else {
      return "";
    }
  });

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);
  return (
    <div>
      <p>Hei {name ? name : "mr. ukjent"}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <button onClick={() => localStorage.removeItem("name")}>
        tilbakestill
      </button>
      <p style={{color: "gray"}}>Etter du har tilbakestilt reload siden</p>
    </div>
  );
}
