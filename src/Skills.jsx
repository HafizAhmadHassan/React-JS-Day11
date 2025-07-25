import { useState } from "react"

function Skills(){
    const [skills,setSkills] = useState([])
    
    const handleSkills=(event)=>{
        console.log(event.target.value,event.target.checked);
        if(event.target.checked){
            setSkills([...skills,event.target.value])
        }
        else{
           setSkills([...skills.filter((item)=>item!=event.target.value)])
        }
    }
    
    return (
        <div>
            <h3>Select Skills</h3>
            <input onChange={handleSkills} type="checkbox" id="Php" value="Php"/>
            <label htmlFor="Php"> PHP </label>
            <br />

            <input onChange={handleSkills} type="checkbox" id="Java" value="Java" />
            <label htmlFor="Java"> Java </label>
            <br />

            <input onChange={handleSkills} type="checkbox" id="Python" value="Python"/>
            <label htmlFor="Python"> Python </label>
            <br />

            <h1>{skills.toString()}</h1>
        </div>

    )
}

export default Skills;