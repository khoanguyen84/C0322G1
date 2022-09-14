// sync
// async

// promise chain
// callback hell

// setTimeout(function(){
//     console.log(1);
//     setTimeout(function(){
//         console.log(2)
//     },2 * 1000)
// }, 3* 1000)


const promise = new Promise(
    function executor(resolve, reject) {
        // nghiệp vụ
        let numbers = 5;
        if (numbers >= 5) {
            return resolve(1)
        }
        return reject("Thất bại");
    }
)

promise
    .then(function (data) {
        console.log(data);
        return ++data;
    })
    .then(function (data) {
        console.log(data)
        return ++data;
    })
    .then(function (data) {
        console.log(data)
        return ++data;
    })
    .catch(function (error) {
        console.log(error)
    })
    .finally(function () {
        console.log("done")
    })
