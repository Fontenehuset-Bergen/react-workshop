import "../assets/styles/example.css";
import { useState } from "react";
import { HomepageHero } from "../components/feature/Hero";

function App() {
  const [count, setCount] = useState(0);
  const [showEffectExample, setShowEffectExample] = useState(false);

  return (
    <>
      <HomepageHero />
      <button type="button" onClick={() => setShowEffectExample((old) => !old)}>
        {showEffectExample ? "close" : "open"} useEffect example
      </button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
