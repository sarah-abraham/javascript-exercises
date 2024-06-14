const fibonacci = function(num) {
    if(typeof num!='number'){
        num = Number(num);
    }
    if(num === 0){
        return 0;
    }
    else if(num < 0){
        return 'OOPS';
    }

    let t1 = 1;
    let t2 = 0;
    let i;
    for(i=2; i<=num; i++){
        let current = t1 + t2;
        t2 = t1;
        t1 = current;
    }
    return t1;

};

// Do not edit below this line
module.exports = fibonacci;
