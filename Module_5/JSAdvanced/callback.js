// 1. phải là 1 function
// 2. phải được truyền vào 1 function khác thông qua đối số
// 3. phải được thực thi

function callBack(n1, n2){
    return n1 + n2;
}

function useCallback(arg){
    console.log(arg(5, 10));
}

useCallback(callBack);

// let numbers = [1, 4, 5, 7, 8, 8];
// function calc(preValue, currVaule){
//     return preValue + currVaule;
// }
// let result = numbers.reduce(calc)

// console.log(result)