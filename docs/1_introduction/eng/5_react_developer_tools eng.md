# React developer tools
Traditional browser tools (Elements/Inspector, Console, Network) are designed to inspect HTML, CSS, and plain JavaScript. They only see the finished DOM structure—not how React’s components, props, and state are connected. When you work in React, the DOM is the result of your component tree. Without insight into this tree, debugging quickly becomes cumbersome: you see what ended up in the DOM, but not which component created it, what props it received, or what state triggered a render.

The [React Developer Tools](https://react.dev/learn/react-developer-tools) browser extension solves this by giving you:
- Components tab: See the entire component tree, select a component, and inspect props, state, and hooks. You can see which components are rendering, and often see why.
- Profiler tab: Measure render time, see which components are rendering during an interaction, and identify unnecessary re-renders.

## Components
When you run Vite and React in development mode (npm run dev), Components will display a tree where each node is a React component. If you select a component, you will see details in the sidebar: props (input data to the component), state (internal state), and often an overview of hooks like useState and useEffect. Try changing something in the UI (click a button, type in an input field) and see how the values ​​update live in DevTools. This is the fastest way to verify that your component is getting the data you think it is getting.

## Profile
Profiler allows you to “record” an interaction and then see which components rendered and how long it took. This is useful when your app starts to grow and you want to understand performance. For week 1, it is enough to know that the tab exists; we will come back to it when you have built a little more UI.