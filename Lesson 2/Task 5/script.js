// В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).

let min = 0;

if (min >= 0 && min <= 14) {
    alert("Первая четверть часа");
} else if (min >= 15 && min <= 29) {
    alert("Вторая четверть часа");
} else if (min >= 30 && min <= 44) {
    alert("Третья четверть часа");

} else if (min >= 45 && min <= 59) {
    alert("Четвертая четверть часа");

}