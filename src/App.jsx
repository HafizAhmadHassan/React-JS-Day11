import { useState } from 'react';
import './App.css';
import User from './User';
import Header from './Header';
import Login, { Profile, Settings, userKey } from './UserComponent';
import WithouJSX from './WithouJSX';
import ToDo from './ToDo';
import Counter from './Counter';
import Props from './Props';
import Props2 from './Props2';
import PropsObjective3 from './PropsObjective3';
import PropsCondition from './PropsCondition';
/* This is code modification for Lec 14-15*/


function App() {
  const [val,setVal]=useState("")
  const [count, setCount] = useState(0);
  /* alert(sum()) */

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

  /* This is code modification for Lec 17*/

  const [conditioncount,conditionsetCount] =useState(0)
 {/* This is code modification for Lec 18*/}

  {/* This is code modification for Lec 18*/}

  let name = "Hassan";
  let age= 20;

  let userObject1 = {
    name:"Object name 1",
    age : "age 1"
  }

  let userObject2 = {
    name:"Object name 2",
    age : "age 2"
  }
  let students =["student1","student2", "student3"]
  let [stud,setStud]=useState(students[1])
  return (
    <>
     {/* This is code modification for Lec 18*/}

    <Props name ="Hassans" age={29} />
    <Props2 name ="Hassans" age={29} />

    <Props name ={name} age={age} />
    <Props2 name ={name} age={age} />

    <PropsObjective3 user={userObject1} />

    {
      students && <PropsCondition student={students[0]}/>
    }
    
    <h1>{stud}</h1>
    <button onClick={()=>setStud(students[2])}>
      Click to Change Student
    </button>

      {/* This is code modification for Lec 18*/}





    {/* This is code modification for Lec 17*/}
    <h1>{conditioncount}</h1>
    
      <button onClick={()=>{conditionsetCount(conditioncount+1)}}>
        click
      </button>
    {
      conditioncount==1?<h1>Condition : {conditioncount}</h1>:
      conditioncount ==2? <h1>Condition : {conditioncount}</h1>:
      conditioncount ==3? <h1>Condition : {conditioncount}</h1>:
      conditioncount ==4? <h1>Condition : {conditioncount}</h1>:
      conditioncount ==5? <h1>Condition : {conditioncount}</h1>:
      conditioncount ==6? <h1>Condition : {conditioncount}</h1>:null
    }


    {/* This is code modification/added for Lec 16 */}
   <h1> This is toggle exercise</h1>
{/*  Display? <h1>This is dispaly</h1>:null  
if display variable exist print heading else null */}
    <button onClick={()=>setDisplay(!Display)}>Toggle</button>

    {
      Display? <h1>This is toggle dispaly</h1>:null 
    }


    

    {/* This is code modification/added for Lec 16 */}


    {/* This is code modification/added for Lec 14-15 */}

    <Counter/>
    <h1>{fruits}</h1>
    <button onClick={handleFruit}> Change Fruits</button>

    {/* This is code modification/added for Lec 14-15 */}

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

      {/* This is code modification for Lec 20*/}
      <h1> Get Input Field Value</h1>
      
      <input type="text" value={val} onChange={(event)=>setVal(event.target.value)} placeholder='Enter username' />
      <h1>{val}</h1>
      <button onClick={()=>setVal("")}>Clear</button>
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
