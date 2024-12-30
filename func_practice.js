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



  
  const person2 = {};  
  
  function setPersonFullName (fullName) {
    this.fullName = fullName;
  };

  const doneSetPersonFullName = setPersonFullName.bind(person2);

  doneSetPersonFullName("John Smith");
  console.log(person2.fullName);




  function a () {  
    const numbers = [1,3,5,2,3,1,6,9,6,5];
    const uniqueSet = new Set(numbers);  
    const uniqueArr = Array.from(uniqueSet);
    const finalUniqueArr = uniqueArr.sort();
    console.log(finalUniqueArr);
    };
    a();

