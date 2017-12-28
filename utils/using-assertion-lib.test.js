// We'll be using the 'expect'assertion library from mjackson => https://github.com/mjackson/expect
// 'expect' project has been donated to Facebook's 'Jest' project after v21, and it is not backwards compatible. We'll be using v1.20.2 in this course.
// npm i -D expect@1.20.2
// Alternative assertion libraries => chai, sinon.js

// mocha doesn't have asserstion lib built in. It uses node.js's built in assert module
// From the website http://mochajs.org/ => Mocha allows you to use any assertion library you wish. In the above example, we’re using Node.js’ built-in assert module–but generally, if it throws an Error, it will work!

const expect = require("expect");
const utils = require("./utils");

it("Should add two numbers", () => {
  var res = utils.add(1, 3);

  expect(res).toBeA("number");
  expect(res).toBe(4);

  // You can chain assertions as well
  // expect(res).toBe(4).toBeA("number");
});

it("Should square a number", () => {
  var res = utils.square(5);

  expect(res).toBeA("number");
  expect(res).toBe(25);
});

// toBe doesn't work as expected for objects (arrays as well, since arrays are special objects) => because toBe() uses strict equality check (===)
it("Should test equality for objects", () => {
  expect({ name: "Boom" }).toBe({ name: "Boom" });
});

// To check equality for objects, use toEqual()
// toInclude(), toExclude() on arrays

// There are many useful assertions, go through the github page of 'expect' library.
// You can go through the docs of the assertion library you're using to find all the assertions

it("Should set firstName and lastName from fullName", () => {
  const user = {};

  const res = utils.setName(user, "Cool Baba");

  expect(user).toEqual({
    firstName: "Cool",
    lastName: "Baba"
  });
});
