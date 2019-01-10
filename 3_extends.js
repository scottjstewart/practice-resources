class User {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  greet() {
    console.log("Welcome back," + this.name);
  }

  status() {
    console.log("Current status: " + this.type);
  }
}

class TrialUser extends User {
  trialEnding() {
    if (this.type === "Trial User") {
      console.log(
        "Your trial will be ending soon, " +
          this.name +
          "." +
          " Would you like to renew?"
      );
    } else {
      console.log("You're a premium user");
    }
  }
}

var userOne = new User("Scott", "Premium User");
userOne.greet();
userOne.status();

var trialUser = new TrialUser("Harry", "Trial User");
trialUser.greet();
trialUser.trialEnding();
trialUser.status();

var premiumUser = new TrialUser("Teddy", "Premium User");
premiumUser.greet();
premiumUser.trialEnding();
