const repeatString = function (string, num){
    let heyString = ``;
    if (num >= 0){
        for (let i = 0; i < num; i++){
            heyString += string
        }
    } else {
        return `ERROR`;
    }
    return heyString;
}


console.log(repeatString(`hey`,0))

// Do not edit below this line
module.exports = repeatString;
