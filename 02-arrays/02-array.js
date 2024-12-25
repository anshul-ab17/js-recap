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



const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);



// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name: "hitesh"})) // interesting

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));
