import { useState } from 'react';

export function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="counter card">
                <p>{count}</p>
                <div className="controls">
                    <button onClick={() => setCount(count + 1)}>ADD</button>
                    <button onClick={() => setCount(count - 1)}>SUB</button>
                    <button onClick={() => setCount(0)}>RESET</button>
                </div>
            </div>
        </>
    );
}
