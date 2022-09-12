// function sum() {
//     let total = 0;
//     for(let i = 0; i < arguments.length; i++){
//         total += arguments[i];
//     }

//     return total;
// }
// function sum(message, ...rest) {
//     let total = 0;
//     for(let i = 0; i < rest.length; i++){
//         total += rest[i];
//     }

//     return `${message}: ${total}`;
// }
function sum(...rest) {
    let total = 0;
    for (let i = 0; i < rest.length; i++) {
        total += rest[i];
    }

    return total;
}

// sum(1,2,3,3,4,5,6,7);
// console.log(sum("Total", 2, 3, 4, 5, 6, 7, 8, 8));
// sum()
let numbers = [1, 2, 2, 4, 5, 5, 6];

console.log(sum(1, 2, 2, 4, 5, 5, 6))
// console.log(sum(...numbers))