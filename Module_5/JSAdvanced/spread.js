// tham trị: pass by value
// tham chiếu: pass by reference
//  + mảng, object, function

// let clubFootball = ["Phong", "Ngân", "Hằng"];
// // let clubCooking = clubFootball;
// let clubCooking = [...clubFootball];
// clubCooking[0] = "Trung";

// console.log(clubFootball);
// console.log(clubCooking);

let daoTri = {
    name : "Đào Trí",
    age : 18,
    email: "tri.dao@gmail.com"
}

// let leTri = daoTri;
let leTri = {
    ...daoTri,
    name: "Lê Trí",
    phone: '113'
};
// leTri.name = "Lê Trí";

console.log(daoTri);
console.log(leTri);