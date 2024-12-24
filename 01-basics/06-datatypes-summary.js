/*
DATATYPES
 based on data stored in memory and can be accessed.

#i.Primitive
7types:( String, Number, Boolean, null,undefined , symbol, BigInt.)

//null -empty.
//undefined- variable and memory space declared but no values.

//symbol- to make any value unique.

//bigInt- for scientifc values.

#ii. Non- Primitive. or Reference.
-all the value are such that their reference in memory can be directtly allocated to us .

types- Array, Objects, Functions.


*/
const id= Symbol('123')
const id2= Symbol('123')
 console.log(id===id2 )
const bigNumber = 344232212232321322131333n
/*
JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime. Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable explicitly.

*/

//array
const student = ["vasu", "abhi","pri", "ab"]

let studentObj ={
    name:"yogesh",
    age:28,
    uid:22112,
}

const myfunc = function(){
    console.log("func!!!");
}

myfunc();
myfunc();
/*
typeof        result

undefined -  "undefined"
null      -   "'object"
boolean   -   "boolean"
Number    -   "number"
string    -    "string"

OBJECT    -    "object"
(native and doesn't implement [call])

OBJECT    - "function"
(native or host does implement [call])

OBJECT (host and doesn't implement [call])   -----implement -defined expect may not be "undefined " ,"boolean", "number", "string"              

*/