const repeatString = function(str, noOfReps) {
    if(noOfReps >= 0) {
        let fStr = '';
        for(let i = 0; i < noOfReps; i++) {
            fStr += str;
        }
        return fStr;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;
