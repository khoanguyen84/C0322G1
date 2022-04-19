let number = 6;
let total = 0;
for(let i = 1; i < number; i++){
    if(number % i == 0){
        total = total + i;
    }
}

console.log(`${number} ${number == total ? 'là số hoàn hảo' : 'không là số hoàn hảo'}`)