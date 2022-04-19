let number = 1234321;
let temp = number;
let reverseNumer = 0;
let surplus = 0;
while(temp > 0){
    surplus = temp % 10;
    temp = Math.floor(temp /10);
    reverseNumer = reverseNumer * 10 + surplus;
}

console.log(`${number} ${number == reverseNumer ? 'là số đối xứng' : 'không là số đối xứng'} `)