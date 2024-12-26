function sayMyName(){
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("A");
    console.log("T");
}

// sayMyName() -- print all 


/*Parameters:
Are the names listed in the function definition.
Act as placeholders for the values that will be passed to the function when it is called.

Arguments: 
Are the actual values passed to the function when it is called.
Are assigned to the corresponding parameters inside the function. */


function add(num1, num2){
     console.log(num1 + num2);
}
add(3,"a")
add(3,"2")
const result1 =add(3,2)


console.log("Result 1:",result1)



function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2 
}

const result2 = addTwoNumbers(3, 5)
console.log("Result 2:",result2)

 


function login(username = "John Doe"// default
    ){
    if(!username){
        console.log("username? ");
        return
    }
    return `${username} logged in`
}

console.log(login("bharat"))
console.log(login()) // undefined printed if default not present!

// rest operator -- ...(value)
function sumCost(val1, val2, ...num1){
    // val1 and val2 are default value in array returned in num1 that's why 2 and 4are not printed
    return num1
}
sumCost()

console.log(sumCost(2, 4, 5, 6))

const user = {
    username: "anna",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myArray = [98,24,55,35]

function Value(getArray){
    return getArray[1]
}
getArray=[2, 4.3,4,9,2]
console.log(getArray[1])

console.log(Value(myArray));
console.log(Value([2, 4.3,4,9,2]));