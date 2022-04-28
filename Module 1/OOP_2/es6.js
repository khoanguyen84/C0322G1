// base class: cha
class Human{
    constructor(fullname, age){
        this.fullname = fullname;
        this.age = age;
    }
    getName(){
        return this.fullname;
    }
    greeting(){
        return `${this.fullname}, ${this.age}`
    }
    static slogen(){
        return 'still breath still alive'
    }
}

// derived class: lớp con
class Staff extends Human{
    constructor(fullname, age, salary){
        super(fullname, age);
        this.salary = salary;
    }
    greeting(){
        return `${super.greeting()}, ${this.salary}`
    }
}
// console.log(Human.greeting())
let phuoc = new Human("Phước Mai", 18)
// console.log(phuoc.getName())
console.log(phuoc.greeting())
// console.log(phuoc.slogen())

let dat = new Staff("Đạt Trịnh", 19, 10000)
console.log(Staff.slogen())
// console.log(dat.getName())
// console.log(dat.greeting())


// class Staff{
//     constructor(fullname, age, salary){
//         this.fullname = fullname;
//         this.age = age;
//         this.salary = salary
//     }
//     getName(){
//         return this.fullname;
//     }
//     greeting(){
//         return `${this.fullname}, ${this.age}, ${this.salary}`
//     }
// }

Math.random()

let numbers = new Array()
numbers.join()

// Array.join();


