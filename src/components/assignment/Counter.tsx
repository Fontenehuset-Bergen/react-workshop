import {useState} from 'react';

export function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div className="counter">
        <p>{count}</p>

            <button onClick={() => setCount(count-1)}>-1</button>
            <button onClick={() => setCount(0)}>reset</button>
            <button onClick={() => setCount(count+1)}>+1</button>
        </div>
    );
}