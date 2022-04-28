// const sum = function(n1, n2){
//     return n1 + n2;
// }
const sum = (n1, n2) => n1 + n2;

// const logger = function(msg){
//     console.log(msg)
// }
const logger = (msg) => console.log(msg)
// logger("Thành công")

// const hello = function(){
//     console.log("Hello anh em")
// }
const hello = () => console.log("Hello anh em")

// hello();


let numbers = [1, 4, 5, 6, 8, 8, 8]

// let result = numbers.reduce(function(total, number){
//     return total + number
// })
let result = numbers.reduce((total, number) =>  total + number)
// console.log(result)

// const process = function(n1, n2, n3){
//     let max = 0;
//     if(n1 > n2 && n1 > n3){
//         max = n1
//     }
//     else if(n2 > n3){
//         max = n2
//     }
//     else {
//         max = n3;
//     }
//     return max;
// }
const process = (n1, n2, n3) => {
    let max = 0;
    if(n1 > n2 && n1 > n3){
        max = n1
    }
    else if(n2 > n3){
        max = n2
    }
    else {
        max = n3;
    }
    return max;
}

console.log(process(5,7,4))