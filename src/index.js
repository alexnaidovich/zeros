module.exports = function getZerosCount(number) {
    var result = 0;
    while (number > 0) {
        number = parseInt(number / 5);
        result += number;
    }
    
    return result;
}
