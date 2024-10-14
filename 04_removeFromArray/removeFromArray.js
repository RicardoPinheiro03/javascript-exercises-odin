const removeFromArray = function(noArray, ...args) {
    return noArray.filter(val => !args.includes(val));
};

module.exports = removeFromArray;
