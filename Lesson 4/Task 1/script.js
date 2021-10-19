// Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

function squareNumber(number) {
    return number * number
}

function squareNumber2(number) {
    return Math.pow(number, 2);
}

console.log(squareNumber(7));

console.log(squareNumber2(7));