/**
 * Function to calculate the sums betweens two numbers.
 * Example: 1, 3
 * Expected Result: 1 + 2 + 3
 * @param {Integer} arg1 
 * @param {Integer} arg2 
 * @returns the sum of the intermediate sums between the two arguments.
 */
const sumAll = function(arg1, arg2) {
    let sumResult = 0; 
    let counter = 0;
    
    /**
     * Check if the arguments are real integers (IN > 0) and if the type of the arguments are integers.
     */
    if(arg1 < 0 || arg2 < 0 || !Number.isInteger(arg1) || !Number.isInteger(arg2) ) {
        return 'ERROR'; 
    }

    /**
     * If the first argument is bigger than the second one, reverse the while loop.
     * This code could be optmized if beforehand I would reverse the values. One is min, another is max,
     * so the reversion would solve the problem and pass the tests.
     */
    if(arg1 > arg2) {
        counter = arg2;
        while(counter <= arg1) {
            sumResult += counter;
            counter++;
        }
    } else {
        counter = arg1;
        while(counter <= arg2) {
            sumResult += counter;
            counter++;
        }
    }

    return sumResult; 
};

// Do not edit below this line
module.exports = sumAll;
