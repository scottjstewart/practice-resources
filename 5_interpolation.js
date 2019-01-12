const username = "Scott";

console.log(`${username} is the true master of JavaScript!`);

console.log(`Hey ${username}, What bugs can you fix today?`);

const user = {
  username: "Scott",
  profession: "Software Engineer",
  password: "password",
  email: "scottstewartj@gmail.com"
};

console.log(
  `${user.username} is a ${user.profession} and you can contact him at ${
    user.email
  }`
);

class User {
  constructor(username, password, job, email) {
    this.username = username;
    this.password = password;
    this.job = job;
    this.email = email;
  }
  getInfo() {
    console.log(
      `${this.username} is a ${this.job} and you can contact him at ${
        this.email
      }`
    );
  }
}

var userOne = new User(
  "Scott",
  "password",
  "software engineer",
  "scottstewartj@gmail.com"
);

userOne.getInfo();
