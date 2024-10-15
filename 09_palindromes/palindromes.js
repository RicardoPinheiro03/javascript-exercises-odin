const palindromes = function (str) {
    const strNoPunctuation = removePunctuation(str);
    console.log(`No punctuation: ${strNoPunctuation}`);
    console.log(`No punctuation and reversed: ${reverseString(strNoPunctuation)}`);

    return (strNoPunctuation) === (reverseString(strNoPunctuation));
};

function removePunctuation(str) {
    return str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

// Do not edit below this line
module.exports = palindromes;
