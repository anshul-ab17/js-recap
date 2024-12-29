const user = {
    username: "ab",
    price: 100,

    intro : function() {
        console.log(`${this.username} , bienvenido  website`);
        // this - refers to current context
        console.log(this);
    }

}

// user.intro()

// new context
user.username = "zoro"
user.price = 120
// user.intro()

console.log(this); //--{}
// refers to empty object for node environment

// but in browser this- consolen refers to the window object

function p1(){
    let user = "ab"
    // console.log(this) --- gives global, time , performance value
    console.log(this.user); // give undefined
}
p1()

const p2 = function () {
    let username = "ab"
    console.log(this.username);
}
p2()

// Arrow functions treat “this” keyword differently This inherit context from the parent scope whenever we call the "this" keyword.

const p3 =  () => {
    let username = "bharat"
    console.log(this);
}


p3()

const addTwo = (num1, num2) => {
    return num1 + num2
}

const add1 = (num1, num2) =>  num1 + num2 
//implicit return

const add2 = (num1, num2) => ( num1 + num2 )

const user1 = (num1, num2) => ({username: "ab"})


console.log(addTwo(3, 4))
console.log(user1)

