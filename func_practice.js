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
    a: 2,
    b: 3,
    operator: '+',
  };

  const arr = Object.values(obj);
  
  const result = calculate.apply(Object.values(obj), arr); 
  console.log(result);



  
  const users = [ {
      name: "John",
      age: 22,
    },
    {
      name: "Win",
      age: 16,
    },
    {
      name: "Tommy",
      age: 18,
    }
  ];

  const adults = [];
  const names = [];

  for (let number of users) {
    names.push(number.name)
    if ( number.age >= 18) {
    adults.push(number) }
  };

  console.log(adults);
  console.log(names);



  
  const obj2 = {};
  
  function setFullName() {
    obj2.fullName = "Nick Jonson"
    console.log(`My name is ${this.fullName}`)
  };
  
  const person2 = {
    fullName2: "Johny",
  };
  
  const setPersonFullName = obj2.fullName.bind(person2);
  setPersonFullName("John Smith");