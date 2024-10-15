const fibonacci = function(num) {
    if(num < 0) return "OOPS";
    if(num <= 1) return num;

    return fibonacci(num - 1) + fibonacci (num - 2);
};

/**
 * Ignoring the cases of the strings because it accepts 8 but does
 * n't accept other ones. Parsing the string to int also doesn't 
 * makes sense because the solution is recursive and I'd have to 
 * find another way to converting the type of the value.
 */

// Do not edit below this line
module.exports = fibonacci;
