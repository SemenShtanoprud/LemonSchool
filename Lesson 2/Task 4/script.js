// В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

let month = +prompt('Введите число между 1 и 12', '');

const isWinter = month === 1 || month === 2 || month === 12;
const isSpring = month === 3 || month === 4 || month === 5;
const isSummer = month === 6 || month === 7 || month === 8;
const isAutumn = month === 9 || month === 10 || month === 11;

if (isWinter) {
    alert("Месяц " + month + " - зима")
} else if (isSpring) {
    alert("Месяц " + month + " - весна")
} else if (isSummer) {
    alert("Месяц " + month + " - лето")
} else if (isAutumn) {
    alert("Месяц " + month + " - осень")
} else {
    alert("Вы ввели некорректное число")
}