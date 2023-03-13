const sumAll = function(min, max) {

    let finalSum = 0;

    if(min > max){
        for (let i = 0; i <= min; i++){
            finalSum = finalSum + i;
        }
    } else {
        for (let i = 0; i <= max; i++){
            finalSum = finalSum + i;
        }
    }

    if(min < 0 || max < 0){
        return 'ERROR';
    }

    if (!Number.isInteger(min) || !Number.isInteger(max)){
        return "ERROR";
    } 

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
