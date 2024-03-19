function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operator = document.getElementById('operator').value;
    var result;

    switch (operator) {
        case 'tambah':
            result = num1 + num2;
            break;
        case 'kurang':
            result = num1 - num2;
            break;
        case 'kali':
            result = num1 * num2;
            break;
        case 'bagi':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Tidak bisa membagi dengan nol";
            }
            break;
        case 'modulus':
            result = num1 % num2;
            break;
        default:
            result = "Operator tidak valid";
    }

    document.getElementById('result').innerText = "Hasil: " + result;
}