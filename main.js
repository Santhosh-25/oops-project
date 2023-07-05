// let print = function () {
//   firstName = "Franklin";
//   console.log(firstName);
// };
// let test = new print();

// let print1 = function () {
//   this.firstName = "manoj";
//   console.log(this.firstName);
//   this.printName = function () {
//     this.firstName = "pandian";
//     console.log(this.firstName);
//   };
// };

// let test1 = new print1();

// console.log(test1.printName());
// console.log(test1.firstName);

//class contains variable and methods
//class is a definition, what the object should do, obj is an instance of a class

class printNew {
  firstName = "Ranjan";

  printName = function () {
    return "This is my name -" + this.firstName;
  };
}

const obj1 = new printNew();

console.log(obj1.firstName);
console.log(obj1.printName());

// in this class we cannot pass any value, if we want to pass value we need to use constructor

class printNew1 {
  firstName = "Franklin";
  //creating a object for a class it self we can able to run a constructor
  constructor() {
    console.log("Test");
  }
  printName1() {
    return "This is my name - " + this.firstName;
  }
}

const obj2 = new printNew1();
console.log(obj2.firstName);
console.log(obj2.printName1());

class printNew2 {
  firstName = "Franklin";
  //passing value to the constructor
  constructor(name) {
    this.firstName = name;
    console.log(this.firstName);
  }
  printName1() {
    return "This is my name - " + this.firstName;
  }
}
//creating a object it self we can run a constructor
const obj3 = new printNew2("kabilan");

class company {
  companyName;
  constructor(companyName) {
    this.companyName = companyName;
  }
  printName;
}
