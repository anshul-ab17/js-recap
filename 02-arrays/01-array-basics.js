
/*
Array can stores different data types depends on language used: 
Dynamic-typed lang- Python and JavaScript - resizable and mixed
Static- C++ and Java,use specialized structures or unions to store mixed data types
*/

const arr =[0,1 ,2 ,"hey", null, undefined, Object]
console.log(arr)

console.log(arr["hey"])
console.log(arr[3])

// JavaScript array-copy operations create -----shallow copies. 

// rather using deep copies.

//# A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.As a result, when you change either the source or the copy, you may also cause the other object to change too.

// #A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too.


const Dj =new Array("daft-punk","deadmau","zedd","snake","martin-garrix","chainsmoker")

Dj.push('calvin-harris','skrillex','major lazer')// insert in last

Dj.unshift('avicii','Tiësto')// insert in top
console.table(Dj)

Dj.pop() //remove from end
Dj.shift()// from top
console.table(Dj.join())

// find data in array:
console.log(Dj.includes('avicii'))
console.log(Dj.includes('daft-punk'))

console.log(Dj.indexOf('daft-punk'))
console.log(Dj.indexOf('avicii'))


const dj1 = Dj.join() // change into (type of )string and separate commmas

console.log( dj1)

console.log(typeof Dj)
console.log(typeof dj1)


// slice and splice
const myArr1 = Dj.slice(1,3) //exclude 3 -- 1,2
console.log(Dj.join())

// slice() ----method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end
// eg:
//  console.log(animals.slice(1, 5)); --- removes out element at0 index
// Expected output: Array ["bison", "camel", "duck", "elephant"]
// 
// console.log(animals.slice(2, -1)); --- remove element till 2nd index and last indexed elemnt
// Expected output: Array ["camel", "duck"]

const myArr2 = Dj.splice(1,3)// include 3---1,2,3
console.log(Dj.join())
console.log(myArr1)

console.log(myArr2)
// splice()---  method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements
Dj.splice(4, 1, 'ksmr');
console.log(Dj.join())
// Replaces 1 element at index 4

/*

toSpliced()


// const months = ["Jan", "Mar", "Apr", "May"];

// // Inserting an element at index 1
// const months2 = months.toSpliced(1, 0, "Feb");
// console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

// // Deleting two elements starting from index 2
// const months3 = months2.toSpliced(2, 2);
// console.log(months3); // ["Jan", "Feb", "May"]

// // Replacing one element at index 1 with two new elements
// const months4 = months3.toSpliced(1, 1, "Feb", "Mar");
// console.log(months4); // ["Jan", "Feb", "Mar", "May"]

// // Original array is not modified
// console.log(months); // ["Jan", "Mar", "Apr", "May"]
*/