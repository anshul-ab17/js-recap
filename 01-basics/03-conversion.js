let score = "33abc" // frontend

// const {score} = req.body - backend.


console.log(typeof score);
console.log(typeof (score));// as a method.

let scoreInNumber = Number(score); // data type can be used to change it's type(should only be written in captial.)
console.log(typeof scoreInNumber);

/*here the "33abc" given as string and 
changed to - number but logically it's 
neither number nor string.

*/
console.table([score, scoreInNumber]);
// here after conversion is gives out NaN - Not a Number.


// null - number.
let score1 = null;
let score1No = Number(score1);

console.table([score1, score1No]);

//undefined to number
let score2 = undefined;
let score2No = Number(score2);

console.table([score2, score2No]);

// stringe to number.
let score3 = "javascript";
let score3No = Number(score3);

console.table([score3, score3No]);


// bool - number
let score4 = true;
let score4No = Number(score4);

console.table([score4, score4No]);


let log = 1
let boolLog = Boolean(log)
console.log(boolLog)

// for boolean 
/* 
1- true
0- false
empty string ,"" - false
any string "ab" - true.

*/