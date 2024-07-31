const fibonacci = function(index) {

   if( index < 0){
    return "OOPS"
   }

    let fibSeq = [0,1];

    for(let i = 2; i <= index ; i++){

        let a = i - 2;
        let b = i - 1;

        fibSeq.push(fibSeq[a] + fibSeq[b]);

    }

    return fibSeq[index];
    
};



// Do not edit below this line
module.exports = fibonacci;
