export function sum(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    return a+b;
}

export function isGreaterThan(input, comp) {
    input = parseInt(input);
    comp = parseInt(comp);
    if(input>comp){
        return true;
    }
    else {
        return false;
    }
}

export function reverseNumber(num) {
    num = parseInt(num.toString().split("").reverse().join(""));

    return num;
}
