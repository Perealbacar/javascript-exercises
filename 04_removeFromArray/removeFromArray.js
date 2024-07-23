const removeFromArray = function(array, ...args) {

    

    return array.filter(item => !args.includes(item))

    
    /*
    let removedArray = array;
    let args = Array.from(arguments);

    console.log(args);

    args.shift();

    console.log(args);

    
    
    for(x = 0; x <= args.length; x++){

        let indexDelete = removedArray.indexOf(args[x]);

        if(indexDelete > -1){
            removedArray.splice(indexDelete, 1);
            --x
        }
    }    
    
    return removedArray;
    */
};

// Do not edit below this line
module.exports = removeFromArray;
