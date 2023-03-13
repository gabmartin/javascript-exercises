const removeFromArray = function (array, ...values) {

    const newArray = [];

    array.forEach(item => {

        if (!values.includes(item)){
            newArray.push(item);
        }

    });

    return newArray;
}

console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;