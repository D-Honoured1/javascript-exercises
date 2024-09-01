/*const removeFromArray = function(array, ...args) {
    const newArray = [];

    array.forEach(element => {
        if (!args.includes(element)) {
            newArray.push(element);
        }
    });

    return newArray;
};*/

const removeFromArray = function (array, ...args) {
    return array.filter(val => !args.includes(val))
}

// Do not edit below this line
module.exports = removeFromArray;
