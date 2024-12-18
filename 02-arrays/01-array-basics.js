
/*
Array can stores different data types depends on language used: 
Dynamic-typed lang- Python and JavaScript - resizable and mixed
Static- C++ and Java,use specialized structures or unions to store mixed data types
*/

const arr =[0,1 ,2 ,"hey", null, undefined, Object]
console.log(arr)

console.log(arr["hey"])
console.log(arr[3])

// JavaScript array-copy operations create shallow copies. rather using deep copies.

//# A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.As a result, when you change either the source or the copy, you may also cause the other object to change too.

// #A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too.


const Djs =new Array("daft-punk","deadmau","alan","chainsmoker")


console.log(Djs)