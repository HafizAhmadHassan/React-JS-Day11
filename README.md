# Lec 10 :JSX exercise
Javascript code in html

Exercise

# Lec 11 :JSX Implementation

home.html
src --> ToDo.jsx

# Lec 12

- Json file
- make route and server
- get data list
- make search api
- Answer Interview


# Lec 13
- Click event and function call
- difference Js and React
- Make function
- Make button and click event
- Call function on click event
- Call Arrow function
- Pass Params with function call
- interview question


- onclick vs onClick on camel case in reactjs
- we should not pass as string in onclick the function
- do not do onClick={callFunc()}
vs onClick={callFunc}
because callFunc() functoin call in beginning  

- this will give error because apple function calls in beginning
<button onClick={fruit("apple")}>Apple</button>

- so we should call empty function with arrow:
<button onClick={()=>fruit("apple")}>Apple</button>


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
