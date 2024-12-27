const yournumber = prompt ('введите любое число');
+yournumber
let double = yournumber**2;
let triple = yournumber**3; 
alert ( yournumber, double, triple ); 








let word = "довод";
let backword = "";
for (let i = word.length - 1; i >= 0; i -= 1) {
    backword += word[i];
}
if (word === backword) {
    alert('Слово довод является палиндромом');
}
else {
    alert('Слово довод не является палиндромом')
}

let wordsecond = "сантимент";
let backwordsecond = "";
for (let i = wordsecond.length - 1; i >= 0; i -= 1) {
    backwordsecond += wordsecond[i];
}
if (wordsecond !== backwordsecond) {
    alert('Слово сантимент не является палиндромом');
}
else {
    alert('Слово сантимент является палиндромом')
}



const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ];
const setFirst = new Set(arr);
const arrNew = Array.from(setFirst);
console.log (arrNew);



const insertNumber = prompt('введите любое число');
+insertNumber
const arrSecond = [];
for (let arrSecond = 0; arrSecond <= insertNumber; arrSecond += 1) {
    console.log(arrSecond);
}



const boardSize = 3;
const board = [];
for (let i = 0; i < boardSize; i++) {
    const row = [];
    for (let j = 0; j < boardSize; j++) {
        row.push(Math.random() < 0.5 ? 'X' : 'O');
    }
    board.push(row);
    console.log(board[i].join(' '))
}



const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};
const arrValues = [];
for (let key in obj) {
arrValues.push(obj[key]); 
};
console.log(arrValues);



function createUser(name, age) {
    return {
        userName: name,
        userAge: age
    }
}

let jediUser = createUser('Оби-ван Кеноби', 74)

console.log('Новый пользователь: ', jediUser) 