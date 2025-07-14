function ToDo(){
    function callFun(){
        alert("function called")
    }

return (
    <div>
        <h1>
            This is heading
        </h1>
        <img src="">
        </img>
        <ul>
            <li>
                Invent new traffic
                light.
            </li>
            <li>
                Rehearse a movie
                scene.
            </li>
            <li>
                Improve the spectrum
                technology.
            </li>
        </ul>

        <button onClick={callFun}>
            To do Function Click Me
        </button>
    </div>

)

}
export default ToDo;