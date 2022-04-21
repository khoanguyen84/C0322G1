let caro = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 10, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
]
const player_1 = 1;
const player_2 = 2;
const x_value = 1;
const o_value = 10;
let player = player_1;

function renderCaro(){
    let tbCaro = "<table>";
    for(let i = 0; i <caro.length; i++){
        tbCaro += "<tr>";
        for(let j =0; j < caro[i].length; j++){
            tbCaro += `<td onclick="play(${i},${j})">
                ${caro[i][j] == x_value ? 'X' : 
                        (caro[i][j] == o_value ? 'O' : '&nbsp;&nbsp;')}
            </td>`
        }
        tbCaro += "</tr>";
    }
    tbCaro += "</table>";
    document.body.innerHTML = tbCaro;
}

function play(row, col){
    if(caro[row][col] != 0){
        alert("Invalid position")
        return;
    }
    if(player == player_1){
        caro[row][col] = x_value;
        player = player_2;
    }
    else{
        caro[row][col] = o_value;
        player = player_1;
    }
    renderCaro();
}
renderCaro();