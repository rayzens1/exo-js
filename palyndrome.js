const word = "rotor";

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

if(word.length%2==1) {
    if(word.slice(0, word.length/2) == reverseString(word.slice((word.length/2)+1, word.length))) { //Impair
        console.log(word+" est un palyndrome.")
    } else {
        console.log(word+" n'est pas un palyndrome.")
    }
} else {
    if(word.slice(0, word.length/2) == reverseString(word.slice((word.length/2), word.length))) { //Pair
        console.log(word+" est un palyndrome.")
    } else {
        console.log(word+" n'est pas un palyndrome.")
    }
}