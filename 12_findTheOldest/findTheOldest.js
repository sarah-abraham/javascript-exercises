const findTheOldest = function(arr) {
    let sortedAges = arr.sort((a,b) => {
        if(!a.yearOfDeath){
            a.yearOfDeath = (new Date()).getFullYear(); 
        }
        else if(!b.yearOfDeath){
            b.yearOfDeath = (new Date()).getFullYear();
        }

        return a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth ? 1 : -1;

    })

    return sortedAges[(sortedAges.length)-1];
};

// Do not edit below this line
module.exports = findTheOldest;
