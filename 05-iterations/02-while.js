//----for of ------

// for (const element of array1) {
//     console.log(element);
//   }

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

//-----Maps------
//  Map object holds key-value pairs and remembers the original insertion order of the keys

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")// set unique value so this won't be added into the map


console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
