// strict mode
// 1. ở phạn vi global của fiel js
// 2. ở trên cùng của 1 hàm

'use strict';
for(let j = 0; j < 10 ; j++){
    console.log(j);
}

function loop(){
    'use strict';
    for(j = 0; j < 10 ; j++){
        console.log(j);
    }
}

loop();
