const sumAll = function(firstNum, lastNum) {

    let sumTotal = 0;
    let smallNum = firstNum;
    let bigNum = lastNum;

    const error = 'ERROR';

    if (firstNum > lastNum) {
        smallNum = lastNum;
        bigNum = firstNum;
    }
    
    if (firstNum < 0 || lastNum < 0 || firstNum % 1 !== 0  || firstNum % 1 !== 0 || typeof firstNum !== "number" || typeof lastNum !== "number"){

        return error;       
        
    }
    

    for (let a = smallNum ; a <= bigNum; a++){
        sumTotal += a;
    }

    return sumTotal;
};

// Do not edit below this line
module.exports = sumAll;
