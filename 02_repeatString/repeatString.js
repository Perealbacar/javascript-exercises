const repeatString = function(repeatThis, times) {

    if(times < 0) {return 'ERROR'};

    let repeatedString = "";
    for(x = 0; x < times; ++x){
        repeatedString += repeatThis;
    }
    
    return repeatedString;

};

// Do not edit below this line
module.exports = repeatString;
