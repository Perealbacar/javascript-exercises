const findTheOldest = function(object) {
    const currentYear = new Date().getFullYear();
    object.map(item => item.yearOfDeath === undefined ? item.yearOfDeath = currentYear : false);
    let sorted = object.sort((a,b) => a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth ? -1 : 1 );
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
