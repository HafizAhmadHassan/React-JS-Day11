
# Lec 14 
- Check current verions
- update version
- Test Project
- Check Documentation
- Interview Question

why necessary?
is it working or not?
important interview questions?
Time-to-Time Updates?
Bugs fixed with time so new fearures.
3-4 years there is no update dont use it
why react update
- example u use react 16
- now in market react 19
so u will not have any issues

rc means release candidate use for small project
big projects stable version should be used

reason we use rc:
    - new feature which will be coming we will show it now
    - no need to require the new playlist
    - 

look package.json :
    - react : 19.0.1 # 19 is major release # 0 means minor and 1 release bug or patch

    - npm install react@rc
    - npm install react-dom@rc
Go documentation check upgrade
    - npm install --save-exact react@rc react-dom@rc

Both commands are same

# Lec 15
- why state required 
- what is state
- hooks
- use state
- example of state
- state in different component
- multiple state
- interview question

i want to change fruit value to banana
onClick we call handleFruit

react only update the fruit if component re-render its like refresh or relaod on browser

how to do rerender?
react usually automatically change or rerender

react usually dont consider anything for variable. Component automatically re-render, how to make use?


State is container we can store data like variable where component rerender data automatically. Mutable and dynamic

whereas in simple variable decalration it does not 

we need to import them and hooks inclustion

**it is function component not class component we can call them hooks**
- if u see use in beginning these are 
import {useState} from 'react'

another experiment
const [fruit,setFruit]=useState("apple");
you can give names in any 
const [count,abc]=useState("apple");

handleFruit

- Component function name should always be capital letter first

We are seeing both examples of component based
    - useState
    - without component useState # look file Counter.jsx

Counter.jsx file
    - have a look ReverseCounter and IncrementCounter 


# Lec 16
- Core javascript
    we have style.display hide
- JQuery things got different

-define state
- update state on button click
- add condition for toggle
-  hide and show component
- task for you
- interview Question


const dispaly set displat
useState(false)
{
    dispaly?(if) h1 anil sidhu
    :(means else)
}

button click 
setDisplay(!)
button can be places 

Component we can say name Toggle

multiple condition is the task