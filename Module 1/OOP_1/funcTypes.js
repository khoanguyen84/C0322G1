// 1. Declaration function
function sum(n1, n2){
    return n1 + n2;
}
console.log(sum(5,7))
// 2. Expression function
const subtract = function(n1, n2){
    return n1 - n2;
}
console.log(subtract(7,5))
// 3. Anonymous function
function multiple(para){
    let n1 = 5;
    let n2 = 7;
    return para(n1, n2)
}
console.log(multiple(function(n1, n2){
    return n1 * n2;
}))