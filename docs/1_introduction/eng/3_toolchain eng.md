# Tools we use in this project
To make it easier for us to share code between us, we have chosen to use two tools that make this easier for us; github and stackblitz. Along with these, we have also chosen to use a development server called Vite, which is responsible for assigning

## Github
GitHub is a platform for version control and collaboration around code. It is built on Git and makes it easy to store projects in the cloud, see the history of changes, compare versions and collaborate via pull requests. The whole point is that everyone can work simultaneously on their own “branch”, without stepping on each other’s toes.

GitHub gives us a safe place to store the code with a full history, easy error handling (you can always “roll back”), and a place to conduct code reviews via pull requests. In addition, there are issues for tasks/errors, and Actions for automatic builds and tests – but in this workshop we will mostly stick to repo + branches + PR.

## Stackblitz
StackBlitz is an in-browser IDE that is very similar to Microsoft's VS Code. You can open a GitHub repo, edit files, install packages, and run the project - without setting up anything locally. It's quick to get started, and everyone gets the same setup regardless of their own machine.

The big advantage is zero friction: no local Node installation required, no configuration wars. StackBlitz has a built-in terminal, editor with TypeScript support, and integration with GitHub, so you can make commits and pushes directly from the browser. You get an immediate preview of the app in a separate panel/URL.

## Know
When you double-click an `index.html` and view the page in the browser, the browser fetches the file via `file://`. It works fine for simple HTML/JS, but as soon as you want to use modern JavaScript features (ES modules with imports, TypeScript, React/JSX, CSS modules), or get fast page refresh while coding, you encounter limitations. For example, the browser will refuse to import files over `file://` for security reasons, and React/JSX requires the code to be transformed before it can be executed.

Vite solves this by being a smart, super-fast development server. Think of Vite as a small “local web server + helper” that does three important things for you: it serves your files over `http://` (so module imports work), it transforms modern code (TypeScript, JSX) into plain JavaScript that the browser understands, and it provides instant page refresh when you save (Hot Module Replacement), without the entire page flashing or losing state.

Without a server, we quickly run into problems like this:
- ES modules (`import ... from './fil.js'`) will often fail from `file://`.
- JSX (React syntax) and TypeScript need to be compiled before the browser can execute it.
- Every time you save, you have to manually refresh the page—and you often lose temporary state in the UI.
- Relative paths and requests (fetch) may behave differently from `file://` than from `http://`.

### What does Vite do
In development, Vite serves the files “as is”, but intercepts the imports and transforms only what is needed, when needed. If you change one component, Vite only sends the updated module to the browser, and the React component is re-rendered without reloading the entire page. It feels like writing pure JS/HTML, but with superpowers: you can import modules, use modern language features and get fast feedback.

When you later run a production build, Vite packages everything into regular, efficient static files (minified JS/CSS) that you can put on any regular web server. So: in development you get a great helper, in production you end up with completely “regular” files.

In a Vite project, index.html is still the entry point, but you point to a module with type="module"—typically src/main.jsx or src/main.tsx. That file can import other files and components, and Vite makes sure everything resolves correctly in the browser. Example:
```html
<!-- index.html -->
<!doctype html>
<html>
<head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /></head>
<body>
<div id="root"></div>
<script type="module" src="/src/main.jsx"></script>
</body>
</html>
```