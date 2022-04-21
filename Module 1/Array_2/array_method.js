// let numbers = [3, 5, 6, 7, 8, 8, 9, 6, 5, 4, 4];
// console.log(numbers.toString())

// let hobbies = ["Đá banh", "Cầu lông", "Bóng chuyền"]
// document.querySelector("h1").innerHTML = hobbies.join('<br><hr>');
// console.log(numbers.join(";"))

// push: thêm 1 hoặc nhiều giá trị vào cuối mảng và trả về độ dài mới của mảng
// let push = numbers.push(5,5,5)
// console.log(push)
// let pop = numbers.pop()
// pop: xóa 1 giá trị ở cuối mảng và trả về giá trị đó
// console.log(pop)

// unshift ~ push
// let unshift = numbers.unshift(12,13,14)
// console.log(unshift)

// shift ~ pop
// let shift = numbers.shift();
// console.log(shift)

// console.log(numbers)
// console.log(delete numbers[2]);
// console.log(numbers)

// concat: gộp 1 hoặc nhiều mảng/giá trị vào 1 mảng và tạo ra 1 mảng mới
// let numbers_2 = [100, 200, 300];

// let newArr = numbers_2.concat(numbers, 44)
// console.log(numbers)
// console.log(numbers_2)
// console.log(newArr)

let numbers = [3, 5, 6, 7, 8, 8, 9, 6, 5, 4, 4];
// console.log(numbers)
// numbers.splice(3, 0, 0,0,0)
// let add = numbers.splice(0,0, 1,1,1)
// console.log(add)
// let remove = numbers.splice(numbers.length, 3)
// console.log(remove)
// numbers.splice(1,3)
// numbers.splice(1, 0, 50, 60, 70)
// numbers.splice(1, 3, 50, 60, 70)
// console.log(numbers)

let slice = numbers.slice(1, 4)
console.log(slice)
console.log(numbers)


