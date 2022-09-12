// parameter: tham số
// agrument: đối số

// 1. Function Declareration
function sum(a, b){
    console.log(a + b);
}
// sum(6,7);

// 2. Function Expression
const subtract = function(a, b){
    console.log(a - b);
}
// subtract(7,6);

// 3. Anonymous/Callback Function
let numbers = [1,2,4,4];

// function process(preValue, currValue){
//     return preValue + currValue;
// }
// let total = numbers.reduce(function(preValue, currValue){
//     return preValue + currValue;
// })
let total = numbers.reduce((preValue, currValue) => preValue + currValue)

// console.log(total);
// console.log(process(10, 20));

// 4. Định nghĩa lớp
// function Student(){
//     // 5. định nghĩa phương thức
//     this.sayHello = function(){
//         console.log("Hello anh em!")
//     }
// }
class Student{
    // 5. định nghĩa phương thức
    sayHello(){
        console.log("Hello anh em!")
    }
}

let trung = new Student();
// trung.sayHello();


// const cong = function(n1, n2){
//     console.log(n1 + n2);
// }
// const cong = (n1, n2) => console.log(n1 + n2);
// cong(10,20);

// const sayHello = function(msg){
//     console.log(msg);
// }
// const sayHello = (msg) => console.log(msg);

// sayHello('CodeGym')

// const greeting = function(){
//     console.log("Hello world");
// }
const greeting = () => console.log("Hello world");

greeting();