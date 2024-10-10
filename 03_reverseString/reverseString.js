const reverseString = function(str) {
    // Without using bultin stuff:
        // let fStr = '';
        // for(let i = str.length - 1; i >= 0; i--) {
        //     fStr += str[i];
        // }
        // return fStr;
    return str.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
