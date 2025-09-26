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
        <div className = "flex flex-col gap-2 bg-stone-700 text-white">
        <h2 className= "text-2xl">Todo-list</h2>
        {todoList.map((todo) => (
            <span>
                <p>{todo}</p>
            </span>
        ))}
        <input placeholder="Add a todo item" onChange={handleChange} className="bg-white text-black"/>
        <button className = "p-2 bg-amber-500" onClick={handleInput}>Add</button>
    </div>
    );
}