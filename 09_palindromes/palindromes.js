const palindromes = function (word) {
    const alphanumerical = "abcdefghijklmnopqrstuvqxyz0123456789";
    let wordArr = word.toLowerCase().split("").filter((character) => alphanumerical.includes(character));
    let reversedArr = word.toLowerCase().split("").reverse().filter((character) => alphanumerical.includes(character));
    let i = 0;
    for(i = 0; i<wordArr.length; i++){
        if(wordArr[i] != reversedArr[i]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
