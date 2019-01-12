const users = [
  { name: "user1", type: "bronze", loggedin: true },
  { name: "user2", type: "bronze", loggedin: false },
  { name: "user3", type: "sivler", loggedin: false },
  { name: "user4", type: "sivler", loggedin: false },
  { name: "user5", type: "sivler", loggedin: true },
  { name: "user6", type: "gold", loggedin: true },
  { name: "user7", type: "gold", loggedin: false },
  { name: "user8", type: "gold", loggedin: false }
];

let loggedinUsers = [];

for (let i = 0; i < users.length; i++) {
  if (users[i].loggedin) {
    loggedinUsers.push(users[i].name);
  }
}

console.log(loggedinUsers);

//shortcut below

const activeUsers = users.filter(users => users.loggedin);
console.log(activeUsers);

const inactiveU = users.filter(users => users.loggedin === false);
console.log(inactiveU);
