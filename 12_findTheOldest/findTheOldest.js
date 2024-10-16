const findTheOldest = function(peopleArray) {
    return peopleArray.map((element) => {
        if(!element.yearOfDeath) {
            yearOfDeath = new Date().getFullYear();
        }            
        let age = element.yearOfDeath - element.yearOfBirth;
        return {...element, age: age};
    }). 
    reduce((oldest, current) => {
        const oldestAge = oldest.age;
        const currentAge = current.age;
        return oldestAge < currentAge ? current : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;