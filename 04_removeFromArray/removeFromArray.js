const removeFromArray = function(arr, ...elementsToRemove) {
    elementsToRemove.forEach((element) => {
        while(arr.includes(element) && arr[arr.indexOf(element)]===element){
            arr.splice(arr.indexOf(element), 1);
        }
    })
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
