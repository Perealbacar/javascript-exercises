const reverseString = function(orderedString) {

    let reversedString = "";
    let stringCharacters = [];

    for(x = 0; x <  orderedString.length; x++) {
        stringCharacters[x] = orderedString[x];
    }

    stringCharacters.reverse();

    reversedString = stringCharacters.join("");

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
