class MyMath {
    static random() {
        return Math.random();
    }
    static negative(number) {
        return 0 - number;
    }
    static firstOrderEquation(a, b) {
        if (a == 0) {
            // throw new Error("Division by zero");
            return "Division by zero"
        }
        return -b / a;
    }
    static getAreaCircle(radius) {
        return Math.PI * radius ** 2;
    }
    static sum(...rest) {
        let total = 0;
        for (let i = 0; i < rest.length; i++) {
            total += rest[i]
        }
        return total
    }
}

class MyArray{
    constructor(...items){
        this.items = items
    }
}

console.log(MyMath.sum(10,5,6,7,6,4,3,3,5,6,8,9,9))

let arr = new MyArray()

let arr2 = new Array()