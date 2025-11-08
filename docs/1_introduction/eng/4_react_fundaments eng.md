# React
React is a library for building user interfaces as components. Instead of manually updating the DOM `(e.g. document.querySelector(...).innerHTML = ...)`, you describe how the UI should look for a given state. When data changes, React ensures that the browser updates correctly and efficiently. Think: “say what, not how.”

Without React, you have to keep track of what to update where when data changes. There are quickly many special cases. With React, you write a function that describes the UI as a function of the data: `UI = f(state)`. When the state changes, React re-renders the component and minimally patches the DOM. The result is less “glue code,” easier debugging, and more predictable behavior as your app grows.

## JSX (TSX) - html as a function
JSX lets you write HTML-like code inside JavaScript. JSX is not a string; it compiles to regular function calls that React understands. You enclose JS expressions with curly braces `{ ... }`, e.g. `{title}` or `{items.map(...)}`. With TypeScript we use the .tsx file extension.

Some useful rules to start with:
- Single root: A component must return one root node element (e.g. use `<main>…</main>` or `<>…</>`).
- Naming: HTML tags are lowercase (`<div>`), components are PascalCase (`<Header />`).
- Attributes: Some names are different in JSX: `className` (not `class`), `htmlFor` (not for), and `style` is a JS object (e.g. `style={{ padding: 16 }}`).
- Expressions in brackets: Anything that is a valid JS expression can be enclosed in `{}` (variables, function calls, ternary, map, etc.).

## Components
A component is a function that returns a piece of UI (JSX). You can put components together like Lego: small, reusable pieces that together make up the entire page. Components can take in props (input values) and can have their own state (internal state).
- Props are “input” from outside – the component reads them, but doesn’t change them.
- Composition: Build large parts by putting together small components.
- Lists: When rendering lists with `array.map`, each element must be given a stable `key` (e.g. an id) for React to update correctly.

## State
State is data that belongs to the component and can change over time (e.g. input value, toggles, counter). When state changes, the component automatically re-renders, and React only updates what is needed in the DOM.
- Single source of truth: Let the component (or an appropriate level in the tree) own the state that the rest of the components need.
- Independence: Don't mutate state directly (like `push` on the same array). Create new copies with e.g. spread (`[...arr, new]`, `{ ...obj, change }`) – this makes updates predictable.
- Derived values: If something can be calculated from existing state/props, it usually doesn't need its own state (it's calculated in render).

## Updates
When a component renders, it produces a description of the UI (JSX → elements). React compares the new description with the previous one (diffing/reconciliation) and only updates what has actually changed in the DOM. You don't have to write “find element, remove class, add text …” – React does that for you.

- Keys in lists help React match elements between renders.
- Declarative thinking: You describe the final result, not the order of DOM operations.

## Example page in React
A very simple React page, e.g. `/src/App.jsx` (without diving into details yet)
```tsx
export default function App() {
const title = 'Hi, React!';
const items = ['One', 'Two', 'Three'];
const showList = true;

return (
<main style={{ padding: 16, fontFamily: 'roboto' }}>
<h1>{title}</h1>

{/* Conditional display */}
{showList && (
<ul>
{items.map(item => (
<li key={item}>{item}</li>
))}
</ul>
)}

{/* Later: we'll add state and interactivity here */}
</main>
);
}
```
*What you see here*: ​​JSX with `{}` for variables/expressions, conditional display with `&&`, and list rendering with `map` + `key`. We'll build on [props](../2_components/3_props.md) first, then [state](../3_hooks/2_states.md), [hooks](../3_hooks/1_introduction.md) and [effects](../4_effects/1_introduction.md) over the next few weeks.