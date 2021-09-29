// В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

let month = +prompt('Введите число между 1 и 12', '');
if (month == 12 || month == 1 && month == 2) {
    alert("Месяц " + month + " - зима")
    console.log("Месяц " + month + " - зима");
} else if (month >= 3 && month <= 5) {
    alert("Месяц " + month + " - весна")
    console.log("Месяц " + month + " - весна");
    // break;
} else if (month >= 6 && month <= 8) {
    alert("Месяц " + month + " - лето")
    console.log("Месяц " + month + " - лето");
    // break;
} else if (month >= 9 && month <= 11) {
    alert("Месяц " + month + " - осень")
    console.log("Месяц " + month + " - осень");
} else {
    alert("Вы ввели некорректное число")
    console.log("Вы ввели некорректное число");
}