class employee {
  constructor(employeeId, firstName, lastName, dOj, dOb, EduQual, skill) {
    this.employeeId = employeeId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dOj = dOj;
    this.dOb = dOb;
    this.EduQual = EduQual;
    this.skill = skill;
  }
  employeeName() {
    let fullName = `Employee Name: ${this.firstName} ${this.lastName}`;
    return fullName;
  }
}

const obj1 = new employee(
  "1",
  "santhosh",
  "kumar",
  new Date(2022, 4, 4),
  new Date(1999, 4, 23),
  "B.E",
  "java"
);
const obj2 = new employee(
  "2",
  "sathish",
  "kumar",
  new Date(2020, 1, 6),
  new Date(2000, 4, 29),
  "M.E",
  ",net"
);
const obj3 = new employee(
  "3",
  "sandy",
  "kabilan",
  new Date(2023, 7, 8),
  new Date(1999, 9, 2),
  "CSE",
  "html"
);

const obj4 = new employee(
  "4",
  "ganapathi",
  "kabilan",
  new Date(2021, 2, 4),
  new Date(2001, 9, 24),
  "CSE",
  "html"
);

const obj5 = new employee(
  "5",
  "sangu",
  "kamesh",
  new Date(2021, 8, 4),
  new Date(2000, 5, 23),
  "CSE",
  "html"
);

let arr = [obj1, obj2, obj3, obj4, obj5];

console.log(obj1);

console.log(arr[0].skill);

obj1.salary = 1000;

const sal = [1000, 20000, 3000, 4000, 5000];

arr.forEach((x, i) => {
  x.salary = sal[i];
});

console.log(arr);

console.log(new Date(2022, 9, 8).getDate());

let arr2 = arr.filter((x) => {
  let y = x.dOj.getFullYear();
  if (new Date().getFullYear() - y >= 1) {
    return x;
  }
});

console.log(arr2);

arr2.forEach((x) => {
  if (arr.includes(x)) {
    console.log(x.employeeId);
  }
});

arr.forEach((x) => {
  x.yoe = new Date().getFullYear() - x.dOj.getFullYear();
});

let arrx = [];

let obj = {};

arr.forEach((x) => {
  if (x.yoe === 0) {
    obj.newSalary = x.salary;
  } else {
    obj.newSalary = x.salary * 0.15 + x.salary;
  }
  arrx.push(obj);
});

console.log(arrx);

arr.forEach((x, i) => {
  arrx.empid = x.employeeId;
  arrx.empName = x.employeeName;
  arrx.sal = x.salary;
});

console.log(arrx);
