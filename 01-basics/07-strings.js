const str ="ab"
const str2="10"

// console.log(str+str2+2)

console.log(`Hey, I'm ${str} and I've ${str2} Repo. `)



const strNew =new String("Hey, You") // here we have used objects of the js
// new = built-in object types that has a constructor function.

console.log(str == strNew)
console.log(str === strNew)

console.log(strNew[0])
console.log(strNew.__proto__)
console.log(strNew.length)
console.log(strNew.charAt(5))
console.log(strNew.indexOf('Y'))

console.log(strNew.substring(0,3))

console.log(strNew.slice(-8,4))

//trim works on white spaces.
const new1 ="   yoyoyoyo    "
console.log([new1.trim()])

const url = "https://www.google.%20com"

console.log(url.replace(".%20","." ))

console.log(url.includes("wwwx"))
console.log(url.includes("com"))

console.log(url.split(".",2))// 2 is limit and ". is separator"
console.log(url.split("."))