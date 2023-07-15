function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}
console.log(isNumeric("10000")); // true
console.log(isNumeric("10.000")); // true
console.log(isNumeric(1234)); // true
console.log(isNumeric(12.34)); // true
console.log(isNumeric(12,34)); // true
console.log(isNumeric("10,000")); // false
console.log(isNumeric("ABC")); // false