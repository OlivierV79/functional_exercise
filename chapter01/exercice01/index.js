
export function greetWorld() {
return 'Hey, world!';
}

export function greet(name) {
    return "Hey, "+name+ "!";
}


export function capitilizedGreet(name) {
    function strUcFirst(a) {
        return a.charAt(0).toUpperCase() + a.substring(1).toLowerCase();
        // return a.slice(0,1).toUpperCase() + a.slice(1).toLowerCase();
      }
    
    name = strUcFirst(name);
    return "Hey, "+name+ "!"
}
