function palindrome(str){
    //replace every non character with a empty string and make the string lowercase
    str = str.replace(/[^a-z0-9+]+/gi, '').toLowerCase();
    if(str === reverseString(str))
    return true;
    return false;
}

function reverseString(string){
    return string.split('').reverse().join('');
}


console.log(palindrome("not a palindrome"));
