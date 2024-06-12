const reverseString = function(sentence) {
    let characterArray = sentence.split("");
    let n = characterArray.length;
    let reversedCharacterArray = [];
    let i = 0, j = n-1;
    while(i<n && j>=0){
        reversedCharacterArray[j] = characterArray[i];
        j--;
        i++;
    }
    let reversedStringResult = reversedCharacterArray.join("");
    return reversedStringResult
};

// Do not edit below this line
module.exports = reverseString;
