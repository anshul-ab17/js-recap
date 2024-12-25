// array-more


const mahindra = ["thar", "xuv", "bolero","scorpio"]
const tata = ["nexon", "tiago", "harrier","altroz"]

// mahindra.push(tata) --- push - insert one array into another array

// console.log(mahindra);
// console.log(mahindra[4][2]);

const cars = mahindra.concat(tata) //--- concat - add two arrays in a new separated array 
// console.log(cars);


const car = [...mahindra, ...tata] 
// spread  operator ---- add more than 2 arrays in a new array.

console.table(car);



const arr1 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_arr = arr1.flat(Infinity) // flat(no-of-depth)--- return new array with all elements to be in one array.
console.log(real_arr);



console.log(Array.isArray("ab")) // isArray- check if it's an array.
console.log(Array.from("ab")) // from-- make it an array
console.log(Array.from({name: "bharat"}))  // here it can't directly convert , we have to pass parameter for what we want are array to be whether key or value.

// if it can;t it'll give an empty array

let score1 = 100
let score2 = 200
let score3 = 300

//of -- make array of following  multi variables
console.log(Array.of(score1, score2, score3));
