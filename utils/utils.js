const add = (a, b) => a + b;

const square = a => a * a;

const setName = (user, fullName) => {
  var names = fullName.split(" ");
  user.firstName = names[0];
  user.lastName = names[1];

  return user;
};

module.exports = {
  add,
  square,
  setName
};
