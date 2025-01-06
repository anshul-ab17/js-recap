const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

//channig method : more function used in a asingle line


const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1) //-- here value of the num changes and taken from above.map func.
                .filter( (num) => num >= 40)

console.log(newNums);