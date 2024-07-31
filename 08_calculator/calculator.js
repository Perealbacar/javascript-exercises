const add = function(a,b) {return a + b
	
};

const subtract = function(a,b) {return a-b
	
};

const sum = function(obj) {
  
  
  let totalSum = obj.reduce(((sum, current) =>  sum + current), 0)

  return totalSum;
  //return total = totalSum.reduce(((sum, current) =>  sum + current))

  
 
	
};

const multiply = function(obj) {

  return total = obj.reduce(((total, current) => total * current),1)

  

};

const power = function(base, power) {

  return base ** power


	
};

const factorial = function(number) {

  if (number === 0 || number === 1){
    return 1
  }

  
  for (let i = number - 1; i > 0 ; i--){
    number *= i;
  }

  return number;
	
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
