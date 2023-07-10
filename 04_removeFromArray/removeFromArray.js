const removeFromArray = function(array,num1,num2) {
    let secondArray = array.splice(num1 -1,1);
    return array;

};

console.log(removeFromArray([1, 2, 3, 4], 3))

// Do not edit below this line
module.exports = removeFromArray;
