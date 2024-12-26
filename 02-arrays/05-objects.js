// const pokemonTrainer = new Object() ----this is a singleton object
const pokemonTrainer ={}  //-- this is a non singleton obbject(literal)

// -- both an empty object!

pokemonTrainer.id="321ab"
pokemonTrainer.name="Ash Ketchum"
pokemonTrainer.hasBuddy=false

const gymTrainer ={
    email:"trainer1@gmail.com",
    fullName:{
        userfullName:{
            first:"Brook",
            last: "Harison"
        }
    }
}
// console.log(pokemonTrainer)
// console.log(gymTrainer)

const obj1 = {1:"a", 2:"b"}
const obj2 ={4:"c",3:"d"}

console.log(obj1, obj2)

// const obj3 =Object.assign({},obj1, obj2)
// assign()---method copies all enumerable own properties from one or more source objects to a target object


const obj3 ={...obj1, ...obj2}
console.log(obj3)

const users = [
    {
        id: 1,
        email: "ab@gmail.com"
    },
    {
        id: 1,
        email: "ac@gmail.com"
    },
    {
        id: 1,
        email: "bc@gmail.com"
    },
]

console.log(users[0].email)


console.log(Object.keys(pokemonTrainer));
console.log(Object.values(pokemonTrainer));
console.log(Object.entries(pokemonTrainer));

const class1={
    sem:"last",
    subject:{
        sub1:"dataVis",
        sub2:"sysDesign"
    },
    courseTeacher:"hitesh",
    price:"$100"
}

const {courseTeacher: instructor} =class1;
// console.log(teacher)
console.log(instructor)

// 


//json format:

//like an object
// {     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


//like an array
[
    {},
    {},
    {}
]
