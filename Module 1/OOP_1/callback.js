// callback
// 1. phải là 1 hàm
// 2. được truyền qua đối số của 1 hàm khác
// 3. phải được thực thi

// function sum(n1, n2){
//     return n1 + n2;
// }

function process(para){
    let n1 = 5;
    let n2 = 7;
    console.log(para(n1,n2))
}

process(function(n1, n2){
    return n1 + n2;
});

let numbers = [1, 3, 4, 5, 5, 6, 7, 7];

// let htmls = numbers.map(function(number, index){
//     return `<h1>${index}-${number}</h1>`
// })

// function handleMap(number, index){
//     return `<h1>${index}-${number}</h1>`
// }
// let htmls = numbers.map(handleMap)
// console.log(htmls)

// function handleReduce(preValue, currValue){
//     return preValue + currValue
// }

// let result = numbers.reduce(handleReduce)

// let result = numbers.reduce(function(total, number){
//     return total + number;
// })
// function handleReduce(total, number){
//     return total + number;
// }
// let result = numbers.reduce(handleReduce)

// console.log(result)