import { useState } from 'react';
import './App.css';
import User from './User';
import Header from './Header';
import Login, { Profile, Settings, userKey } from './UserComponent';
import WithouJSX from './WithouJSX';
import ToDo from './ToDo';

function App() {
  const [count, setCount] = useState(0);
  alert(sum())

  const fruit=(name)=>{
    alert(name)
  }
  return (
    <>
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
