function palindrome(str){
    //replace every non character with a empty string and make the string lowercase
    str = str.replace(/[^a-z0-9+]+/gi, '').toLowerCase();
    if(str === reverseString(str))
    return true;
    return false;
}

function reverseString(string){
    let splitWord = string.split('');
    splitWord.reverse();
    string = splitWord.join('');
    return string
}


console.log(palindrome("not a palindrome"));
