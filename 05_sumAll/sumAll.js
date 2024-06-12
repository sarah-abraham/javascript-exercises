const sumAll = function(first, second) {
    let i;
    let sum = 0;
    let highNumber, lowNumber;
    if(first>=0 && second>=0 && typeof first =='number' && typeof second=='number'){ 
        if(first>second){
            highNumber = first;
            lowNumber = second;
        }
        else{
            highNumber = second;
            lowNumber = first;
        }
        for(i=lowNumber; i<=highNumber; i++){
            sum += i;
        }
        return sum;
    }
    else{
        return 'ERROR';
    }

};

// Do not edit below this line
module.exports = sumAll;
