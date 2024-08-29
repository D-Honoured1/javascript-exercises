const repeatString = function(greet, time) {
    if (time < 0) {
        return "WRONG!";
    }

    let string =""

    for (i=0; i<time; i++) {
        string += greet;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
