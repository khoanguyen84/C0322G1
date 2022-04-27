// Object Contructor
// Context :  ngữ cảnh
function Staff(id, fullname, gender, email, hobbies){
    // property
    this.id = id;
    this.fullname = fullname;
    this.gender = gender;
    this.email = email;
    this.hobbies = hobbies;
    // method
    this.getInfo = function(){
        return `${this.gender ? "Mr" : "Ms"}, ${this.fullname}, email: ${this.email}`;
    }
}

let loc = new Staff(1, "Lộc Võ", true, "loc.vo@gmail.com", ["Bơi", "Đi bộ"])
let phuoc = new Staff(2, "Phước Mai", true, "phuoc.mai@gmail.com", ["Bơi", "Đi bộ"])
let thu = new Staff(3, "Thư Lê", false, "thu.le@gmail.com", ["Bơi", "Đi bộ"])

// let staffs = [loc, phuoc, thu]
let staffs = [
    new Staff(1, "Lộc Võ", true, "loc.vo@gmail.com", ["Bơi", "Đi bộ"]),
    new Staff(2, "Phước Mai", true, "phuoc.mai@gmail.com", ["Bơi", "Đi bộ"]),
    new Staff(3, "Thư Lê", false, "thu.le@gmail.com", ["Bơi", "Đi bộ"])
]

// for(let staff of staffs){
//     console.log(staff)
// }

for(let i = 0; i < staffs.length; i++){
    console.log(staffs[i].getInfo())
}


function MyArray(){
    this.join = function(){
        console.log("join method in MyArray class")
    }

    this.toString = function(){

    }

    this.map = function(){

    }
}

let array = new MyArray();
array.join()