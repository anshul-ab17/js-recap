
// Variables declared with var are function-scoped (local) and do not respect block scope.
// Variables declared with let and const are block-scoped.

let a = 300
const b = 400
var c=200
// Global variables defined with the var keyword belong to the window object
// let keyword do not belong to the window object

if (true) {
    // let and const.--two keywords provide Block Scope in JavaScript.

    let a = 10
    const b=20
    var c=30
    console.log("INNER: " ,a,b);
    // In "Strict Mode", undeclared variables are not automatically global.
}

console.log(a);
console.log(b);
console.log(c);

// global scope in browser and node environment are different!


// Global Scope: Variables accessible everywhere in the code, declared outside functions or blocks.

// Local Scope: Variables accessible only within the function where they are declared.

// Block Scope: Variables accessible only within the block {} they are declared in, using let or const.

console.log("*****************************")


function one(){
    const username = "bharat"

    function two(){
        const website = "github"
        console.log(username);
    }
    // console.log(website); 
    //  two() 
    // both code won't be executed


}
one()

if (true) {
    const username = "bharat"
    if (username === "bharat") {
        const website = " github"
        console.log(username + website);
    }
    // console.log(website); not executed , out of scope
}





console.log(addone(5)) // executed before initilization
function addone(n){
    return n + 1
}





// addTwo(5) won't axecuted before initilization
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5))


// Hoisting in JavaScript is a built-in behavior that moves the declarations of functions, variables, and classes to the top of their scope before the code is executed

// Value hoisting: Using a variable's value in its scope before the line it is declared
// Declaration hoisting: Referencing a variable in its scope before the line it is declared, but the value is always undefined