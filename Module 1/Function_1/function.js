// thiết ké 1 hàm, tạo ra 1 mảng có 10 phần tử và các giá trị của mảng được sinh ngẫu nhiên trong [1,10],
// hiển thì mảng ra console

// Scope (phạm vị)
// Global
// Local / Block code (trong { }, function)

// Clourse

// function increment(n){
//     console.log(name)
//     n ++;
//     console.log("number inside increment function:" , n); // 6
// }

// let name = "Đạt"
// var number = 5;
// console.log("number before execute increment function:" , number); //5
// increment(number);
// increment(5);
// console.log("number after execute increment function:" , number); // 5 - 6

// function swap(number1, number2){
//     let temp = number1;
//     number1 = number2;
//     number2 = temp;
//     console.log(`number 1: ${number1}, number 2: ${number2}`); // 7- 5
// }


// let number1 = 5;
// let number2 = 7;
// console.log(`number 1: ${number1}, number 2: ${number2}`); // 5 - 7
// swap(number1, number2);
// console.log(`number 1: ${number1}, number 2: ${number2}`); // 5 - 7

// optional parameter
// required parameter
// context

// let numbers = [1, 2, 3, 4]
// console.log(numbers.join("+"));

function sum(number0, number1 = 5, number2 = 7){
    console.log(number0);
    console.log(number1);
    console.log(number2);
    return number0 + number1 + number2;
}

let number000000 = 50;
let number1 = 50;
let number2 = 70;
let number3;
// console.log(number3)
// console.log(number1 + number2);
console.log(sum(number000000));
// console.log(sum(number1, number2));