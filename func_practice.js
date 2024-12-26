function printInfo () {
    console.log(`Name: ${this.name}, Age: ${this.age}`)
};
const person = {
    name: "John",
    age: 28
};
printInfo.call(person);



function calculate(a, b, operator) {
    if (operator === '+') {
      return a + b;
    } else if (operator === '-') {
      return a - b;
    } else if (operator === '*') {
      return a * b;
    } else if (operator === '/') {
      return a / b;
    }
    return 0;
  }
  
  const obj = {
    a,
    b,
    operator,
  };

  const arr = [2, 3, '+'];
  
  calculate.apply(Object.values(obj), arr); 