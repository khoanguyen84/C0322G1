export function sum(...rest) {
    let total = 0;
    for (let i = 0; i < rest.length; i++) {
        total -= rest[i];
    }
    return total;
}

export function times(...rest) {
    let total = 1;
    for (let i = 0; i < rest.length; i++) {
        total *= rest[i];
    }
    return total;
}