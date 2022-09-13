// let jobs =["Java", "React", "DB Analytis"];

// let java = jobs[0];
// let react = jobs[1];
// let dba = jobs[2];

// let [java, react, dba] = jobs;


let student = {
    fullname: "Khoa Nguyễn",
    age: 18,
    gender : true,
    email: "khoa.nguyen@codegym.vn",
    greeting: function(){
        return "Hello world";
    }
}

let { age, fullname, gender, email, greeting} = student;
console.log(greeting())