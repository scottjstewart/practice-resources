class User {
  constructor(name) {
    this.name = name;
    this.type = "Trial User";
  }

  greet() {
    console.log("Welcome back, " + this.name);
  }

  status() {
    console.log("Current status: " + this.type);
  }
}
