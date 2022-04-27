// 1. định nghĩa 1 kiểu dữ liệu mới
// có 2 loại dữ liệu
// 1. Kiểu dữ liệu nguyên thủy: boolean, string, number, object, null, underfine
// 2. Kiểu dữ liệu do người dùng định nghĩa

// productName: string
// price: number
// quantity: number

let product_1 = {
    productName: "iPhone 6s",
    price: 5100000,
    quantity: 10
}
let product_2 = {
    productName: "iPhone 7s",
    price: 6100000,
    quantity: 10
}
let product_3 = {
    productName: "iPhone 8s",
    price: 3100000,
    quantity: 10
}
let product_4 = {
    productName: "iPhone X",
    price: 7100000,
    quantity: 10
}
let products = [product_1, product_2, product_3, product_4]

function renderProducts() {
    let htmls = products.map(function (product , index) {
        return `
            <tr>
                <td>${index + 1}</td>
                <td>${product.productName}</td>
                <td>${product.price}</td>
                <td>${product.quantity}</td>
            </tr>
        `
    })
    document.querySelector("#tbProducts>tbody").innerHTML = htmls.join("");
}

// let products = [
//     ["iPhone 6s", 5000000, 10],
//     ["iPhone 6s", 5100000, 10],
//     ["iPhone 6s", 5300000, 10],
//     ["iPhone 6s", 5400000, 10]
// ]

// function renderProducts() {
//     let htmls = products.map(function (product , index) {
//         return `
//             <tr>
//                 <td>${index + 1}</td>
//                 <td>${product[0]}</td>
//                 <td>${product[1]}</td>
//                 <td>${product[2]}</td>
//             </tr>
//         `
//     })
//     document.querySelector("#tbProducts>tbody").innerHTML = htmls.join("");
// }

// let productsName = [
//     "Item 1",
//     "Item 2",
//     "Item 3",
//     "Item 4"
// ]

// let productsPrice = [
//     5000000,    
//     5400000,    
//     4500000,    
//     7600000    
// ]

// let productsQuantity = [
//     10,
//     24,
//     33,
//     21
// ]

// function renderProducts(){
//     let htmls = "";
//     for(let i=0; i< productsName.length; i++){
//         htmls += `
//             <tr>
//                 <td>${i + 1}</td>
//                 <td>${productsName[i]}</td>
//                 <td>${productsPrice[i]}</td>
//                 <td>${productsQuantity[i]}</td>
//             </tr>
//         `
//     }
//     document.querySelector("#tbProducts>tbody").innerHTML = htmls;
// }

renderProducts();