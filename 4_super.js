class User {
  constuctor(username, password, type) {
    this.name = username;
    this.password = password;
    this.type = type;
  }
  greet() {
    console.log("Welcome Back, " + this.name);
  }
  status() {
    console.log("your current status is " + this.type);
  }
}

var userOne = new User("scooter1", "password", "Bronze User");
userOne.greet();
userOne.status();

class BronzeUser extends User {
  constructor(username, password, type, ccinfo) {
    super(username, password, type);
    this.name = username;
    this.password = password;
    this.type = type;
    this.cc = ccinfo;
  }

  getInfo() {
    console.log(this.name, this.password, this.type, this.cc);
  }
}

var userTwo = new BronzeUser(
  "scooter2",
  "password2",
  "Bronze User",
  "ccinfo here"
);
userTwo.greet();
userTwo.getInfo();
userTwo.status();
