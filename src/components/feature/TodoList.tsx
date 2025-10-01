import { useState, type ChangeEvent } from "react";

interface TodoListProps {
    initialValue: string[]
}

export function TodoList(props: TodoListProps) {
    const [todoList, setTodoList] = useState<string[]>(props.initialValue)
    const [inputValue, setInputValue] = useState("")

    function handleInput() {
        if (inputValue.length > 3) {
            setTodoList((old) => [...old, inputValue])
        }
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value)
    }

    function removeTodoItem(todo: string) {
        const newTodoList = todoList.filter((existingTodo) => existingTodo != todo)
        setTodoList(newTodoList)
    }
    
    return (
        <div className=" w-fit flex flex-col gap-2 bg-green-300 text-black">
            <h2 className="text-2xl">To do List</h2>
            {todoList?.map((todo) => (
                <span className="flex space-x-30">
                    <p>{todo}</p>
                    <button
                        onClick={() => removeTodoItem
                        } className="bg-red-700 p-1">X</button>
                </span>
            ))}
            <input
                placeholder="Add a todo item"
                onChange={handleChange}
                className="bg-white text-black" />
            <button
                className="p-2 bg-amber-500 text-black"
                onClick={handleInput}>Add</button>
        </div>)
}