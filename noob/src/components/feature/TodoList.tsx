import { useState } from "react";
import { type ChangeEvent } from "react";

export function TodoList(){
    const [todoList, setTodoList] = useState<string[]>([])
    const [inputValue, setInputValue] = useState("")

    function handleInput() {
        if (inputValue.length >3) {
            setTodoList((old) => [...old, inputValue])
        }
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value)
    }

    return (
        <div>
        <h2>Todo-list</h2>
        {todoList.map((todo) => (
            <span>
                <p>{todo}</p>
            </span>
        ))}
        <input placeholder="Add a todo item" onChange={handleChange}/>
        <button onClick={handleInput}>Add</button>
    </div>
    );
}