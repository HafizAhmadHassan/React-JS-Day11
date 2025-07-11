
## Lec 6 : File and Folder Structure
- most important
- config files
- files structure
- where to write code

- package.json--> project doesnot work contains
react version 
dev dependience code is in node modules
npm run build 
npm run dev 
consider
"@types/react-dom": "^19.1.6",
^ this means minimum
dependencies --> parents packages



- package-lock.json
contains exact version

for example global depend on something else in package-lock.json contains our nested details

readme.md
rules
vite.config.js
for example we want to change port
we do configuration there

- eslint
which files to render  we can make rules like function maximum length
variable declaration
ETMA script

- .gitignore
pull to download
folders not to put
node_modules we do not push because it has large memory

- index.html browser entrypoint
root and java script lod main.jsx file all code here added to root 

- src we do our work
component we create here

- public : resources to expose 
you can put on 
- assets private resources

- node modules contains everything
package
we do not push
npm install will download all these

## Lec7 : First Components
we make our first compnent
Function vs Component
Car every part is component engine etc
UI part is component like 
- header
- side nav
- side NAv
- Footer

One component can contain more components
for example within car engine

how to use

like
<Component/>

App.jsx is root compoentnt
starts with capital letter

Function vs Component names
 - first letter start with small letter
 - first letter is capital

if we want to use component in another file

do 
export default App

normal export vs default export

when use Two html tag with return
always use wrapper
like
function App() {

  return (
   

    <div>
      <h1>H1</h1>
      <h1>H1</h1>
    </div>
  )
}

Error :

function App() {

  return (
   


      <h1>H1</h1>
      <h1>H1</h1>

  )
}

funciton component vs class componet

- funciton component
    - first letter start with
    - tags as well

normal function
    - does not contain html tags etc
    - start with small letter 
how to call:
    alert(sum())
    within html {sum()}

## Lec8 : Import Exporting Components

    - why need import export
    - make new file for component
    - export types
        -default
        - named export
        - multiple export
    - import component
    - interviews

why import export new files?
    - we cannot create 100 compoents in 1 file
    - cannot write lot of lines of code
    - we use 1 component in multiple space
        - its called export
    - in other file we use import
    - Look image Linkedin
        - we use it in multiple places
 
 Example
  User compoent

One file has only
  - 1 Export default
  - all others are named export  

default export if done
    - i can import Login from './UserComponent'
    - if put export along function 
        - import {Login} from './UserComponent'
    - only one component will be export from one file

    Look File example

we can also export const variable

    - use  {Userkey}

# Lec 9

JSX means having confusion in full form
some example jsx
react without JSx

jsx syntax extention of javascript
enhancement of js so in java script we can add html code

js + html code => jsx

const userName = "Hassan"
use inside h1 tag

let x
let y we can do that

if condition
loop cases we can

without jsx:

createElement 3 params
- hello div, id and conetnetn

alternative
div className="rootOther" in return
import {createElemet} from "react"



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
