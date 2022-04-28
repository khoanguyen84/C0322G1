// toán tử spread, rải
// toán tử rest

let numbers = [1, 2, 3, 4, 6];
// let floats = numbers;
let floats = [...numbers]
// let floats = [1, 2, 3]
floats[1] = 20;
// let floats = [1, 20, 3]
// console.log(floats)
// console.log(numbers)


let khoa = {
    fullname: "khoa",
    age: 18,
    gender: true
}

let dat = {
    ...khoa,
    email: "dat@gmail.com"
};
dat.fullname = "dat";
// console.log(dat)
// console.log(khoa)

// function sum() {
//     //    console.log(arguments)
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i]
//     }
//     return total
// }
// function sum(msg, verb, ...rest) {
//     //    console.log(arguments)
//     let total = 0;
//     for (let i = 0; i < rest.length; i++) {
//         total += rest[i]
//     }
//     return `${msg} ${verb}: ${total}`;
// }

let values = [1, 2, 3, 4, 6];
function sum(...rest) {
    let total = 0;
    for (let i = 0; i < rest.length; i++) {
        total += rest[i]
    }
    return total
}

console.log(sum(...values))
// console.log(sum(1, 2, 3, 4, 6))


// console.log(sum("Kết quả", "là", 1, 3, 4, 5, 6, 7, 8, 9, 9, 5, 4, 3, 3))
// console.log(sum(1, 3, 4, 5, 6, 7, 8, 9, 9, 5, 4, 3, 3))

