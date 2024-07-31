const palindromes = function (string) {

    
    let stringArray = Array.from(string.toLowerCase());

    stringArray = stringArray.filter(item => item.toUpperCase() != item.toLowerCase() || item <= 9 && item > 0 || item === 0)
    
    let reversedArray = stringArray.toReversed();

    const boolstring = stringArray.reduce((result, item, index) => result && item === reversedArray[index], true)
    
    return boolstring;

    let bool = true;

    stringArray.map((item, index) =>{

        if(item !== reversedArray[index]){
            bool = false
            return        
        }
    } )

    return bool

};

// Do not edit below this line
module.exports = palindromes;
