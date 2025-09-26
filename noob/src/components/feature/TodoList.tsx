import { useState } from "react";
import { type ChangeEvent } from "react";

interface TodoListProps {
    initialValue: string[]
}

export function TodoList(props:TodoListProps){
    const [todoList, setTodoList] = useState<string[]>(props.initialValue)
    const [inputValue, setInputValue] = useState("")

    const test = useState(false)
    console.log(test[0])
    const myState = test[0]
    const setMyState = test[1]

    const myobject = {
        name: "bla bla bla",
        age: 29,
        dob: new Date(2000,1,1)
    }

    const {age,dob,name} = myobject

    console.log(name, myobject.name)

    function handleInput() {
        if (inputValue.length >3) {
            setTodoList((old) => [...old, inputValue])
        }
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value)
    }

    function removeTodoItem(todo: string) {
        const newTodoList = todoList.filter((existingTodo)=> existingTodo != todo)
        setTodoList(newTodoList)
    }

    return (
        <div className = "flex flex-col gap-2 bg-stone-700 text-white">
        <h2 className= "text-2xl">Todo-list</h2>
        {todoList.map((todo) => (
            <span>
                <p>{todo}</p>
                <button onClick={() => removeTodoItem(todo)} className="bg-red-600">X</button>
            </span>
        ))}
        <input placeholder="Add a todo item" onChange={handleChange} className="bg-white text-black"/>
        <button className = "p-2 bg-amber-500" onClick={handleInput}>Add</button>
    </div>
    );
}