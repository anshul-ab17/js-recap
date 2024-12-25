/*
//if object created using constructor it will always be singleton
but if it'll be literal it won't be singleton



Object Literal Notation − Let’s create user details where we have the key, name, age, and name of the company. So we are creating an object named userDetails.
  eg:
    const userDetails = {name: "Aman", age: "22", Company: "tutorialspoint"};


Object Constructor Notation − In constructor Notation, we are creating the same object but in a different way. By calling the constructor function with the "new" keyword.
 eg:
    const userDetails = new User("Aman", 22, "tutorialspoint");
*/

// Object Literal Notation −

const literal1 = {
   'url': " https://www.ab.com/index.htm",
   'consoleUrl': function(){ 
      console.log(this.url);
   }
};
// Object constructor Notation −
// (singleton)
function constructor1(){
   this.url = " https://www.ab.com/index.htm";
   this.consoleUrl = function(){
      console.log(this.url);
   }
}

console.log(literal1)
let link = new constructor1();
link.consoleUrl();
console.log(link)




