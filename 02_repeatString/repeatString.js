const repeatString = function(word, times) {

    let string = ""

    if (times < 0){
        string = "ERROR";
    }

    for (let i = 0; i < times; i++){
        string = string + word;
    }

    return string;

};

console.log(repeatString("", 5));


// Do not edit below this line
module.exports = repeatString;
