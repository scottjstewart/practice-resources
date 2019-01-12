const users = [
  { name: "user1", pass: "1" },
  { name: "user2", pass: "2" },
  { name: "user3", pass: "3" },
  { name: "user4", pass: "4" },
  { name: "user5", pass: "5" },
  { name: "user6", pass: "6" }
];

// let user_info = [];

// for (let i = 0; i < users.length; i++) {
//   user_info.push(users[i].name);
// }

// // console.log(user_info);

const userNames = users.map(user => user.name);
console.log(userNames);

// class User {
//   constructor(name, pass) {
//     this.name = name;
//     this.pass = pass;
//   }
//   greet() {
//     console.log(`Hello ${this.name}`);
//   }
// }

// var user = new User(users.name, users.pass);

var kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 }
];

console.log(kvArray);

var reformattedArray = kvArray.map(obj => {
  var rObj = {};
  rObj[obj.key] = obj.value;
  console.log(rObj);
  return rObj;
});
