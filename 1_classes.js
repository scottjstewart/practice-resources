class User {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  greet() {
    console.log("Welcome back, " + this.name);
  }

  status() {
    console.log("Current status: " + this.type);
  }
}

class Details {
  constructor(first, last, email) {
    this.f = first;
    this.l = last;
    this.e = email;
  }
  greet() {
    console.log("Weclome " + this.f);
  }
  details() {
    console.log(
      "Here are your profile details: " + "firstname: " + this.f,
      "lastname: " + this.l,
      "email: " + this.e
    );
  }
}

var userOne = new Details("Scott", "Stewart", "scottstewartj@gmail.com");
userOne.greet();
userOne.details();

var anonDude = new User("Anonymous dude", "trial user");

anonDude.greet();
anonDude.status();

var anonLady = new User("Anonymous Lady", "bronze user");
anonLady.greet();
anonLady.status();

var jeff = new User("Jeff", "silver user");
jeff.greet();
jeff.status();

var scott = new User("Scott Stewart", "Premium User");
scott.greet();
scott.status();

var harry = new User("Harrison", "Gold User");
harry.greet();
harry.status();

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  details() {
    console.log(
      "Make: " + this.make,
      "Model: " + this.model,
      "Year: " + this.year
    );
  }
}

var carOne = new Car("BMW", "328i", "2018");
carOne.details();
