# Lec 21

- What is controlled component
- identify controlled component
- Error if we dont use controlled value property
- Make form get input fileds values
- Interview Question

- A controlled component is form whose input field values are controlled by React's State

- Here how it works:
    - Strore input field value in State
    - Use Change handler with input field
    - value attribute attached with State

Benefits
    - Single Source of Truth
    - Validation and Manipulation before Submit
    - Dynamic Updates Values

Arrow function vs Normal
- this is Lexical it will look for global
for example
let object{
    x:2
    function normal(){
        return this.x
    }
    function arrow()=>{
        return this.x # this does not work
    }

}

-  normal can consume arguemnts
- return in implicit if it is single line in arrow function

- Function redefined constantly if it arrow function wheen Component rerenders  See in code
incerementCount Function in that case we should use normal function
- console .log is added check in console

Explore the best : https://www.youtube.com/watch?v=kmYxpgHbkoY
