const utils = require("./utils");

// To run tests using mocha, set the 'test' script in package.json to 'mocha filename'
// You can use a globbing pattern to specify the spec files
// More on globbing patterns => https://ortus.gitbooks.io/commandbox-documentation/usage/parameters/globbing-patterns.html

// takes 2 args => title of the test, and the function that tests your code
it("Should add two numbers", () => {
  var res = utils.add(1, 3);

  if (res !== 4) {
    // throwing an error fails the test case
    throw new Error(`Expected 4, but got ${res}`);
  }
});

it("Should square a number", () => {
  var res = utils.square(5);

  if (res != 25) {
    // throwing an error fails the test case
    throw new Error(`Expected 25, but got ${res}`);
  }
});

// ---------------------------------------------
// Auto restarting tests
// ---------------------------------------------

// You can nodemon to run any command you want when a file changes
// Use `nodemon --exex "npm test"`
// You can add this command as a npm script
// To run the npm scripts provided by npm => npm start/test/etc
// TO run the npm scripts defined by us => npm run-script script_name (npm run script_name is the shortcut)
