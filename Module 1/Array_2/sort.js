let numbers = [31, 5, 1, 7, 8, 8, 8, 6, 5, 4, 4];
// console.log("Before sort")
// console.log(numbers)
// console.log("after sort")
// numbers.sort() //sort theo alphabel
// console.log(numbers)

// callback function/ anonymous function
// function ascending(n1, n2){
//     return n1 - n2;
//     // return  n2 - n1;
// }
// console.log("Before sort")
// console.log(numbers)
// console.log("after sort")
// numbers.sort(function (n1, n2){
//     return n1 - n2;
// });
// numbers.sort(ascending);
// console.log(numbers)
// console.log(numbers.reverse())

// let number = 123454321;
// let number = 12345;
// number = number.toString();
// console.log(number.split("").reverse().join(""))

let triple8 = false;
let sizeOfWin = 3;
for(let i = 0; i < numbers.length - sizeOfWin; i++){
    for(let j = i; j < i + sizeOfWin; j++){
        if(numbers[j] == 8){
            triple8 = true;
        }
    }
    if(triple8){
        break;
    }
    // if(numbers[i] == 8 && numbers[i+1] == 8 && numbers[i+2] == 8){
    //     triple8 = true;
    //     break;
    // }
}

console.log(triple8)