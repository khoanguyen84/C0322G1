let number = 6;
let total = 0;
for(let i = 1; i < number; i++){
    if(number % i == 0){
        total = total + i;
    }
}

console.log(`${number} ${number == total ? 'là số hoàn hảo' : 'không là số hoàn hảo'}`);

// Kiểm tra number có phải là 1 số chính phương hay ko? 
// (số chính phương là số mà căn bậc 2 của nó là 1 số nguyên)
// Hiển thị các số chính phương trong [10, 100]

let value = 9;

console.log(`${value} ${Math.sqrt(value) == Math.floor(Math.sqrt(value)) ? 'só chính phương' : 'không là số chính phương'}`)

for(let number = 10; number <=100; number++){
    if(Math.sqrt(number) == Math.floor(Math.sqrt(number))){
        console.log(number);
    }

    // if(Number.isInteger(Math.sqrt(number))){
    //     console.log(number);
    // }
}   