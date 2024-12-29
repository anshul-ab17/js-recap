// Immediately Invoked Function Expressions (IIFE)
// An Immediately Invoked Function Expression (IIFE) is a JavaScript function that runs as soon as it's defined



(function db(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// here the semicolon at end of the db(), describe that the first code has ended!
//if we dont apply it it 2nd code won't be executed.

//there's a problem due to pollution of global scope sometimes , so we use iife to remove the pollution in the variables of that global scope

( (name) => {
    console.log(`DB ${name}`);
} )('ab')
