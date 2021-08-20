//Task1
console.log('Task1');
let x = 3, i = 1;
while ( i <= x ) {
    console.log('-');
    i = i + 1;
}

//Task2
console.log('Task2');
let y = +prompt('Сколько тире тебе нужно?');
let i2 = 1;
while ( i2 <= y ) {
    console.log('-');
    i2 = i2 + 1;
}

//Task3
console.log('Task3');

function tire (z) {
    let c = 1;
    while ( c <= z) {
        console.log('-');
        c++;
    }
}
tire (2);
console.log('and')
tire (5);

//Task4
console.log('Task4: Add, Sub, Mult, Div');

console.log('ADD:');
function AddNumbers (a,b) {
    let result=a+b;
    console.log('Результат добавления =',result);
}
a = +prompt('Введите число А');
b = +prompt('Введите число Б');
AddNumbers(a,b);


console.log('SUB:');
function SubNumbers (a,b) {
    let result=a-b;
    console.log('Результат вычитания =',result);
}
a = +prompt('Введите число А');
b = +prompt('Введите число Б');
SubNumbers(a,b);


console.log('MULT:');
function MultNumbers (a,b) {
    let result=a*b;
    console.log('Результат умножения =',result);
}
a = +prompt('Введите число А');
b = +prompt('Введите число Б');
MultNumbers(a,b);


console.log('DIV:');
function DivNumbers (a,b) {
    let result=a/b;
    console.log('Результат деления =',result);
}
a = +prompt('Введите число А');
b = +prompt('Введите число Б');
DivNumbers(a,b);
