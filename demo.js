//base class

class vehicleContainer {
  //member variable
  // color;
  // model;
  // type;

  constructor(color, model, type) {
    this.color = color;
    this.model = model;
    this.type = type;

    console.log("constructor called");
  }
  //member function
  getvehicleInfo() {
    return this.color + "," + this.model + "," + this.type;
  }

  getNumber(num) {
    console.log(num);
  }
}

const vehicleObj = new vehicleContainer("red", "gypsy", "petrol");

console.log(vehicleObj.getvehicleInfo());

vehicleObj.getNumber(22);

console.log(vehicleObj.vehicleContainer());
