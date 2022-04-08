// hàm này dùng để chuyển trạng thái bóng đèn thành on

function turnOn(){
    document.getElementById('light').src='https://www.w3schools.com/js/pic_bulbon.gif'
    document.getElementById('light').style.width = "120px"
    document.getElementById('light').style.height = "200px"
}
/*
    hàm này dùng để chuyển trạng thái bóng đèn thành off
 */
function turnOff(){
    document.getElementById('light').src='https://www.w3schools.com/js/pic_bulboff.gif'
    document.getElementById('light').style.width = "100px"
    document.getElementById('light').style.height = "180px"
}

function additional(){
    // debugger;
    // Bước 1: lấy giá trị trong input number 1
    let number1 = Number(document.getElementsByClassName('number')[0].value);
    // Bước 2: lấy giá trị trong input number 2
    let number2 = parseInt(document.getElementsByClassName('number')[1].value);
    // Bước 3: cộng 2 giá trị đó lại
    let total = number1 + number2;
    // Bước 4: đưa tổng vào trong input result
    document.getElementsByName('result')[0].value = total;
}