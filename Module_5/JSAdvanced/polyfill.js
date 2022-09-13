if(Array.prototype.includes2 != 'function'){
    Array.prototype.includes2 = function(value){
        for(let i = 0; i < this.length; i++){
            if(this[i] === value)
                return true;
        }
        return false;
    }


    Array.prototype.map2 = function(callback){
        let result = [];
        for(let i = 0; i < this.length; i++){
            result.push(callback(this[i], i)); 
            //calback(java) -> <a href='#'>java</a> -> result = ['<a href='#'>java</a>']
            //calback(react) -> <a href='#'>react</a> -> result = ['<a href='#'>java</a>', '<a href='#'>react</a>']
        }
        return result;
    }
}

let jobs = ["java", "react", "fe"];
// defCallback(java) -> <a href='#'>java</a>
// defCallback(react) -> <a href='#'>react</a>
function defCallback(job, index){
    return `<h1>${index} - ${job}</h1>`;
}
let htmls = jobs.map2(defCallback);


document.write(htmls.join(""));