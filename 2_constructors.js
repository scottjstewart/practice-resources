class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  greet() {
    console.log("welcome " + this.name);
  }
  contact() {
    console.log("Your contact info is " + this.email);
  }
}

var userOne = new User(
  "Scott Stewart",
  "scottstewartj@gmail.com",
  "scott'spassword"
);

userOne.greet();
userOne.contact();
