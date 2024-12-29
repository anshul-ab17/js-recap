
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

// function one(){
//     const username = "hitesh"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);

//      two()

// }

// // one()

// if (true) {
//     const username = "hitesh"
//     if (username === "hitesh") {
//         const website = " youtube"
//         // console.log(username + website);
//     }
//     // console.log(website);
// }

// // console.log(username);


// // ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))

// function addone(num){
//     return num + 1
// }



// addTwo(5)
// const addTwo = function(num){
//     return num + 2
// }