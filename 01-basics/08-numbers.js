const score= 2123223.22;
console.log(score)

const score1= new Number(2441);
console.log(score1.toFixed(3))
console.log(score.toPrecision(9))

console.log(`Change Number to a format: ${score.toLocaleString("en-in")}`)

const str1 = new String("hey, you")

console.log(`Length of the string : ${score.toString().length}`)
console.log(str1)

console.log(`Number.MAX_SAFE_INTEGER :${Number.MAX_SAFE_INTEGER}`)
console.log(`Epsilon value: ${Number.EPSILON}`)
console.table([Number.MAX_VALUE, Number.MAX_VALUE])

console.log(`---------MAths----------------------------`)

console.log(Math.abs(-10))
console.log(Math.round(22.55))
console.log(Math.ceil(444.62))
console.log(Math.floor(55.62))


console.log(`Math's Random: ${Math.random()}`) // value btwn 0 and 1

console.log((Math.random()*10)+1) // btwn 1 to 10 
// ,  if(+1 not there then for 0 to 9) 

console.log(Math.floor(Math.random()*10 +1))

// 11 to 20
console.log(Math.floor(Math.random()*10+11))

// or for range


const max= 10
const min= 21

console.log(Math.floor(Math.random()*(max -min +1 )+min))