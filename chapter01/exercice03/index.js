export function reverseString(str) {
    return str.split("").reverse().join("");
}

export function isPalindrome(str) {
    str = str.replace(/\s/g,"");
    let revStr = reverseString(str);
    if(revStr===str){
        return true
    } else {
        return false
    }
    
}

export function countVowels(str) {
    
    let count = 0;

    for (let i=0; i < str.length; i++)
    {
        
              
        if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u" || str.charAt(i) == "é" || str.charAt(i) == "è" || str.charAt(i) == "y") {
            count ++;
        }

    }

    return count;
}
