const add = function(arg1, arg2) {
  return arg1 + arg2;
};

const subtract = function(arg1, arg2) {
  return arg1 - arg2; 
};

const sum = function(numbArr) {
  if(numbArr.length === 0) return 0;
  return numbArr.reduce(sumReduction, 0);
};

const multiply = function(numbArr) {
  return numbArr.reduce(multReduction);
};

const power = function(base, exponent) {
  return base ** exponent;
};

const factorial = function(arg1) {
	if(arg1 === 0) return 1;
  const tempFactArr = [];

  for(let i = arg1; i >= 1; i--) {
    tempFactArr.push(i);
  }

  return tempFactArr.reduce(multReduction);
};


/**
 * Helper Functions
 */
function sumReduction(accumlator, element) {
  return accumlator + element;
}

function multReduction(accumlator, element) {
  return accumlator * element;
}


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
