/**
 * Source: https://github.com/jawache/async-javascript-workshop
 */

/**
 * Question 1
 *
 * The below code errors when you run it.
 * Make it run without errors but you cannot change the location of the `let`
 * statement, that has to stay at the end.
 */

function doAsyncTask(cb) {
  cb();
}
doAsyncTask(_ => console.log(message));

let message = "Callback Called";


/**
 * Question 2
 *
 * The below code swallows the error and doesn't pass it up the chain,
 * make it pass the error up the stack using the next callback.
 */

const fs = require("fs");

function readFileThenDo(next) {
  fs.readFile("./blah.nofile", (err, data) => {
    next(data);
  });
}

readFileThenDo(data => {
  console.log(data);
});


/**
 * Question 3
 *
 * Instead of passing it up the stack throw it instead and try to catch it later on.
 */

const fs = require("fs");

function readFileThenDo(next) {
  fs.readFile("./blah.nofile", (err, data) => {
    if (err) throw err;
    next(data);
  });
}
// Hint use try..catch
readFileThenDo(data => {
  console.log(data);
});


/**
 * Question 4
 *
 * Create a promise version of the async readFile function
 */

const fs = require("fs");

function readFile(filename, encoding) {
  fs.readFile(filename, encoding, (err, data) => {
    //TODO
  });
}
readFile("./files/demofile.txt", "utf-8")
    .then(...)
});


/**
 * Question 5
 *
 * Load a file from disk using readFile and then compress it using the async
 * zlib node library, use a promise chain to process this work.
 */

const fs = require("fs");
const zlib = require("zlib");

function zlibPromise(data) {
  zlib.gzip(data, (error, result) => {
    //TODO
  });
}

function readFile(filename, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, encoding, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

readFile("./files/demofile.txt", "utf-8")
    .then(...) // --> Load it then zip it and then print it to screen
});


/**
 * Question 6
 *
 * Create some code that tries to read from disk a file and times out if it
 * takes longer than 1 seconds, use `Promise.race`
 */

function readFileFake(sleep) {
  return new Promise(resolve => setTimeout(resolve, sleep));
}

readFileFake(5000); // This resolves a promise after 5 seconds, pretend it's a large file being read from disk


/**
 * Question 7
 *
 * Create a process flow which publishes a file from a server, then realises the
 * user needs to login, then makes a login request, the whole chain should error
 * out if it takes longer than 3 seconds. Use `catch` to handle errors and timeouts.
 */

function authenticate() {
  console.log("Authenticating");
  return new Promise(resolve => setTimeout(resolve, 2000, { status: 200 }));
}

function publish() {
  console.log("Publishing");
  return new Promise(resolve => setTimeout(resolve, 2000, { status: 403 }));
}

function timeout(sleep) {
  return new Promise((resolve, reject) => setTimeout(reject, sleep, "timeout"));
}

Promise.race( [publish(), timeout(3000)])
  .then(...)
  .then(...)
  .catch(...);


/**
 * Question 8
 *
 * Convert the promise version of the multi-file loader over to using async/await
 */

const util = require("util");
const fs = require("fs");
const readFile = util.promisify(fs.readFile);

const files = ["./files/demofile.txt", "./files/demofile.other.txt"];

let promises = files.map(name => readFile(name, { encoding: "utf8" }));
Promise.all(promises).then(values => {
  // <-- Uses .all
  console.log(values);
});
