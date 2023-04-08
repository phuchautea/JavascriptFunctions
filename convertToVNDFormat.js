function convertToVNDFormat(number) {
    number = parseInt(number * 1); // bỏ phần thập phân (1000.00 => 1000)
    var options = {
        style: 'currency',
        currency: 'VND'
    };
    if (typeof number === 'number') {
        return number.toLocaleString('vi-VN', options);
    } else {
        return number;
    }
}
console.log(convertToVNDFormat(100000)); // "100.000 ₫"
console.log(convertToVNDFormat("không trăm")); // "không trăm"