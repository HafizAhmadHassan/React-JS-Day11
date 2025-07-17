import { useState } from 'react';
import './App.css';
import User from './User';
import Header from './Header';
import Login, { Profile, Settings, userKey } from './UserComponent';
import WithouJSX from './WithouJSX';
import ToDo from './ToDo';
import Counter from './Counter';

/* This is code modification for Lec 14-15*/


function App() {
  const [count, setCount] = useState(0);
  alert(sum())
/* This is code modification/added for Lec 14-15 */
  const [fruits, setFruit] = useState("Apple");
  
  const [Display, setDisplay] = useState(true);
  
  const handleFruit=()=>{
    setFruit("Banana")
  }

/* This is code modification/added for Lec 14-15 */


  const fruit=(name)=>{
    alert(name)
  }

  return (
    <>

    /* This is code modification/added for Lec 16 */
   <h1> This is toggle exercise</h1>
{/*  Display? <h1>This is dispaly</h1>:null  
if display variable exist print heading else null */}
    <button onClick={()=>setDisplay(!Display)}>Toggle</button>

    {
      Display? <h1>This is toggle dispaly</h1>:null 
    }


    

    /* This is code modification/added for Lec 16 */


    /* This is code modification/added for Lec 14-15 */

    <Counter/>
    <h1>{fruits}</h1>
    <button onClick={handleFruit}> Change Fruits</button>

    /* This is code modification/added for Lec 14-15 */

      <Header />
      <ToDo/>
      <button onClick={()=>fruit("apple")}>Apple</button>
      <WithouJSX/>
      <h1>code Step by Step</h1>
      <h1>Hello React 19</h1>
      <h1>Counter : {count} :Sum Function : {sum()}</h1>
      <User />

      <button onClick={() => setCount(count + 1)}>
        Click to increase Counter
      </button>

      {/* Optionally, fix these components as needed */}
      <Fruit />
      <Color />

      <Login />
      <Profile />
      <Settings />
      <h1>{userKey}</h1>
    </>
  );
}

function Fruit() {
  return <h1>Apple</h1>;
}

function Color() {
  return <h1>Red</h1>;
}

function sum() {
  return 10 + 10;
}

export default App;
