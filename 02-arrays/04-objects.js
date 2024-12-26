// i) singleton:
// singleton is created as:
// eg: Object.create

// ii) object literals:

const arr = Symbol("key1")

const  User = {
    name: "ab",
    "full name": "bharat",
    [arr]: "mykey1",
    age: 18,
    location: "chandigarh",
    email: "ab@google.com",
    isLoggedIn: false,
    lastLoginDays: ["sunday", "Saturday"]
}

console.log( User.email)
console.log(User["location"])
console.log(User["full name"])
console.log(User[arr])

// Object.freeze(User) 
// lock thhe objects value

User.email  =  "ba@gmail.com"
console.log(User)

User.action  =  function(){
    console.log("playing..")
}

console.log(User.action)

User.move  =  function(){
    console.log(`hey ${this.name}, your from ${this.location}.`)
}

// 
// this
//  ---keyword refers to the context where a piece of code, such as a function's body, is supposed to run.
//  It allowing the same method to be reused on different objects.