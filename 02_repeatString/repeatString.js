const repeatString = function(word, n) {
    let i;
    let stringWithRepeatedWord = "";
    if(n<0){
       return 'ERROR' 
    }
    for(i = 0; i<n; i++){
        stringWithRepeatedWord += word;
    }
    return stringWithRepeatedWord
};

// Do not edit below this line
module.exports = repeatString;
