// function renderPost() {
//     $.ajax({
//         url: "https://jsonplaceholder.typicode.com/posts",
//         method: "GET",
//         success: function (posts) {
//             let htmls = posts.map(function (post) {
//                 return `
//                         <tr>
//                             <td>${post.id}</td>
//                             <td>${post.title}</td>
//                             <td>${post.body}</td>
//                         </tr>
//                 `
//             });
//             document.querySelector('.table>tbody').innerHTML = htmls.join("");
//         }
//     })
// }
function renderPost() {
    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //     method: "GET"
    // }).then(function (response) {
    //     return response.json();
    // }).then(function (posts) {
    //     let htmls = posts.map(function (post) {
    //         return `
    //                 <tr>
    //                     <td>${post.id}</td>
    //                     <td>${post.title}</td>
    //                     <td>${post.body}</td>
    //                 </tr>
    //                 `
    //     });
    //     document.querySelector('.table>tbody').innerHTML = htmls.join("");
    // })
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET"
    }).then(async function (response) {
        let posts = await response.json();
        // call API => province
        // call API => district
        // call API => ward
        let htmls = posts.map(function (post) {
            return `
                    <tr>
                        <td>${post.id}</td>
                        <td>${post.title}</td>
                        <td>${post.body}</td>
                    </tr>
                    `
        });
        document.querySelector('.table>tbody').innerHTML = htmls.join("");
    })
}

function initCategory() {
    // document.querySelector('#fullname').oninput = function(e){
    //     // console.log(e.target.value)
    //     console.log(e)
    // }
    document.querySelector('#fullname').addEventListener("input", function(e){
        console.log(e.target.value)
    })
}



(function () {
    renderPost();
    initCategory();
})()


// renderPost();
// initCategory();