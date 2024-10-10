const reverseString = function(str) {
    let fStr = '';
    for(let i = str.length - 1; i >= 0; i--) {
        fStr += str[i];
    }
    return fStr;
};

// Do not edit below this line
module.exports = reverseString;
