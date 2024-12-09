const promocod = "realpromocod";
let yourpromocod = prompt ('input your promocod')
    yourpromocod.toUpperCase()
    yourpromocod.toLowerCase()
    if (yourpromocod = promocod) {
        alert ('done');
    } else {
        alert ('wrong');
    }
    const numbers = [];
    const filteredNumbers = [];
    for (let i = 1; i <= 100; i += 1) {
        numbers.push(i);
    }
    for (let number of numbers) {
        if(number % 5 === 0) {
            filteredNumbers.push(number);
        }
    }
    console.log(filteredNumbers)