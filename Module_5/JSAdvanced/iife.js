// IIFE : Immediately Invoked Function Expression

function sum(n1, n2) {
    return n1 + n2;
}

sum(4, 6);

// (function (n1, n2) {
//     console.log(n1 + n2);
// })(4, 6);


(function (msg) {
    console.log(msg)
})("hello");
