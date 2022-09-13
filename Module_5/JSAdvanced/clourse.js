// function counter() {
//     var count = 1;
//     function increament() {
//         console.log(count);
//         count++;
//     }

//     return increament;
// }

// let counter_1 = counter();
// counter_1();
// counter_1();
// counter_1();
// let counter_2 = counter();
// counter_2();
// counter_2();
// counter_2();

// var jobs = ["Lau nhà", "Chùi nhà", "Nấu cơm"];

// const jobApp = {
//     addJob: function(job){
//         jobs.push(job);
//     },
//     getJobs:function(){
//         return jobs;
//     }
// }

// jobApp.addJob("Đón con");
// jobs = [];
// console.log(jobApp.getJobs())

var jobApp = function () {
    var jobs = ["Lau nhà", "Chùi nhà", "Nấu cơm"];
    var fullname = "";
    return {
        addJob: function (job) {
            let exist = jobs.find( item => item == job)
            if(exist){
                console.log(`${job} is existing!`)
            }else{
                jobs.push(job);
            }
        },
        getJobs: function () {
            return jobs;
        },
        setFN: function(fn){
            fullname = fn;
        },
        getFN: function(){
            return fullname.toUpperCase();
        }
    }
}

let app = jobApp();

app.addJob("Lau nhà");
// jobs = [];
console.log(app.getJobs())

// app.setFN("khoa nguyễn");
// console.log(app.getFN());