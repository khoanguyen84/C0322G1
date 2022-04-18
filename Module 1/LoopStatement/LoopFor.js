// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }
// -------------------------------------
// let i = 0;
// for (; i < 10; i++) {
//     console.log(i)
// }
// -------------------------------------
// let i = 0;
// for (; i < 10;) {
//     console.log(i);
//     i++;
// }
// -------------------------------------
// let i = 0;
// for (; ;) {
//     if(i >= 10){
//         break;
//         // return 0;
//     }
//     console.log(i);
//     i++;
// }
// console.log(`i out side for: ${i}`);
// -------------------------------------
// for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }
// for (let i = 0; i < 10; i+=2) {
//     console.log(i)
// }

// for (let i = 9; i >= 0; i--) {
//     console.log(9 - i)
// }

// for (var i = 0, sum = 0; i < 10; sum+=i, i++) {
//     console.log(i);
//     // sum += i;
// }

// console.log(sum)

// for (var i = 0, j = 9; i < 10; i++, j--) {
//     console.log(`${i} - ${j}`);
// }

// for (var i = 0, j = 9; i < 10 && j >= 5; i++, j--) {
//     console.log(`${i} - ${j}`);
// }

for (let i = 0; i < 10; i++) {
    if (i % 2 != 0) {
        continue;
    }
    console.log(i)
}

// hoisting (khai báo biến, hàm)