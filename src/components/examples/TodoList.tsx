import { useRef, useState } from "react";

interface Todo {
  text: string;
  isDone: boolean;
}

const INITIAL_TODOS = [
  { text: "handle brød", isDone: false },
  { text: "sjekk om melk er utgått", isDone: false },
];

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>(INITIAL_TODOS);
  const [todoInput, setTodoInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  // We can update our todo list by running map on the existing array for
  // singling out the element we want to modify based on its index
  function handleMarkAsDone(index: number) {
    // We call setTodos to update our list, but instead of reffering the value
    // "todos", we're assigning a function instead of trying to manipulate the state value
    setTodos((old) =>
      // this map will return all existing todos, but for the one matching
      // our index it'll modify its "isDone value"
      old.map((todo, i) => (i === index ? { ...todo, isDone: true } : todo))
    );
  }

  // We can assign our input to a ref and track that for values
  function handleAdd() {
    // Early escape if inputfield is empty
    if (!inputRef.current?.value) return;

    const newTodo: Todo = { text: inputRef.current?.value, isDone: false };

    setTodos((old) => [...old, newTodo]);
  }

  // An alternative approach is using states to handle the input
  function handleAddWithState() {
    // Early escape if inputfield is empty
    if (todoInput.length < 3) return;

    const newTodo: Todo = { text: todoInput, isDone: false };

    setTodos((old) => [...old, newTodo]);

    setTodoInput("");
  }

  // We can also remove elements, it functions much the same as update
  function handleRemove(index: number) {}

  // We can create a function to reset state back to the initial values
  function handleReset() {
    setTodos(INITIAL_TODOS);
  }

  return (
    <div style={{ display: "flex", flexFlow: "column nowrap", gap: "1rem" }}>
      <p>
        This is a simplified todo-list using Reacts useState, click{" "}
        <span
          onClick={handleReset}
          style={{ color: "#646cff", cursor: "pointer" }}
        >
          here
        </span>{" "}
        to reset
      </p>
      <div className="todo-list">
        {todos?.map((todo, index) => (
          <span key={todo.text} className="todo-item">
            <p
              style={
                todo.isDone
                  ? { textDecorationLine: "line-through", color: "darkgray" }
                  : {}
              }
            >
              {todo.text}
            </p>
            <span className="todo-actions">
              {!todo.isDone && (
                <button onClick={() => handleMarkAsDone(index)}>done</button>
              )}
              <button
                onClick={() => handleMarkAsDone(index)}
                style={{ color: "red" }}
              >
                X
              </button>
            </span>
          </span>
        ))}
      </div>
      <p>
        Add a new todo with either useRef or useState, notice the difference in
        how the field is controlled
      </p>
      <div style={{ display: "flex", gap: "1rem" }}>
        <div style={{ flex: 1 }}>
          <p>useRef</p>
          <span>
            <input ref={inputRef} style={{ padding: "1rem" }} />
            <button onClick={handleAdd} style={{ marginLeft: "1rem" }}>
              add
            </button>
          </span>
        </div>
        <div style={{ flex: 1 }}>
          <p>useState</p>
          <span>
            <input
              style={{ padding: "1rem" }}
              type="text"
              value={todoInput}
              onChange={(e) => setTodoInput(e.currentTarget.value)}
            />
            {todoInput.length > 3 && (
              <button
                type="button"
                onClick={() => handleAddWithState()}
                style={{ marginLeft: "1rem" }}
              >
                add
              </button>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
