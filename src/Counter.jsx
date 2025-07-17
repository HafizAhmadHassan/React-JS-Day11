/* This is code modification/added for Lec 14-15 */
import { useState } from "react"

const Counter=()=>{
    const [count,setCount]=useState(0);
    const [rcount,rsetCount]=useState(0);
    function handleCount(){
        setCount(count+1)

    }
    function handlerCount(){
        rsetCount(rcount-1)

    }
    return (
        <div>
            <h1>{rcount}</h1>
            <button onClick={handlerCount}>
               reverse Count
            </button>
            <h1>{count}</h1>
            <button onClick={handleCount}>
                Increment Count 
            </button>
        </div>
    )
        

}
export default Counter;