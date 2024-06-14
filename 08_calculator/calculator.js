const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a>b ? a-b : b-a;
};

const sum = function(arr) {
	let sum = arr.reduce((total, element) => {return total + element}, 0);
  return sum;
};

const multiply = function(arr) {
  let product = arr.reduce((total, element) => {return total * element}, 1);
  if(product === 1){
    return 0;
  }
  return product;
};

const power = function(base,upper) {
	return Math.pow(base,upper);
};

const factorial = function(num) {
	if(num===0 || num===1){
    return 1;
  }
  else if(num==2){
    return 2;
  }
  else{
    let i;
    let prod = 1;
    for(i = 2; i<=num; i++){
        prod = prod*i;
    }
    return prod;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
