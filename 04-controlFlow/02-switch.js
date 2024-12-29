
//boiler: for switch

//   switch (key) {
//     case value:      
//         break;

//     default:
//         break;
// }

// if we don't use break -- then code will execute all the console except the default value.

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}