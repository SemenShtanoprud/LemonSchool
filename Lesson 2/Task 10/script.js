// Вывести простые числа


let a = 10;


for (let index = 0; index < a; index++) {
    console.log(a / 2)
}

while () {
    console.log(a / 2)
}

let num = 10;
let isSimple = true;

for (let i = 1; i <= num; i++) {

    for (let j = i; j <= i - 1; j++) {
        if (j % i === 0) {
            console.log(j);
            break
        }
    }

}