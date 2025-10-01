import { ChangeEvent, useState } from "react";

interface TodoListProps {
    initialValue: string[]
}

export function ToDoList(props:TodoListProps) {
  const [todoList, setTodoList] = useState<string[]>(props.initialValue);
  const [inputValue, setInputValue] = useState("");

  function handleInput() {
    if (inputValue.length > 3) {
      setTodoList((old) => [...old, inputValue]);
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function removeTodoItem(todo: string) {
    const NewTodoList = todoList.filter((existingTodo) => existingTodo != todo);
    setTodoList(NewTodoList);
  }

  return (
    <div className="w-fit flex flex-col gap-2 bg-stone-700 text-white">
      <h2 className="text-2xl">Todo-list</h2>
      {todoList.map((todo) => (
        <span className="flex gap-2">
          <p>{todo}</p>
          <button onClick={() => removeTodoItem(todo)} className="bg-red-600">
            X
          </button>
        </span>
      ))}
      <input
        placeholder="Add a todo item"
        onChange={handleChange}
        className="bg-white text-black"
      />
      <button className="p-2 bg-amber-500" onClick={handleInput}>
        Add
      </button>
    </div>
  );
}
