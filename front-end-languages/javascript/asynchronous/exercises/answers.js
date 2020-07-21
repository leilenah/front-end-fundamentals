/**
 * Question 1
 */

function doAsyncTask(cb) {
	return new Promise(resolve => resolve()).then(() => cb());
}
doAsyncTask(_ => console.log(message));

let message = "Callback Called";

/**
 * Question 2
 */

const fs = require("fs");

function readFileThenDo(next) {
  return new Promise((resolve, reject) => {
    fs.readFile("./blah.nofile", (err, data) => {
      if (err) reject((null, err));
      resolve(data)
    });
  });
}

readFileThenDo((data, err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

/**
 * Question 3
 */

// option 1
const fs = require("fs");

function readFileThenDo() {
  return new Promise((resolve, reject) => {
    fs.readFile("./blah.nofile", (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

readFileThenDo()
  .then(data => console.log(data))
  .catch(err => console.error(err))


// option 2
const fs = require("fs");

function readFileThenDo(next) {
  fs.readFile("./blah.nofile", (err, data) => {
    if (err) throw err;
    next(data);
  });
}

readFileThenDo(data => {
  try {
    console.log(data)
  } catch (err) {
    console.error(err);
  }
});

/**
 * Question 4
 */

// option 1
const fs = require("fs");

function readFile(filename, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, encoding, (err, data) => {
      if (err) reject(err)
      resolve(data);
    });
  });

}
readFile("./files/demofile.txt", "utf-8")
  .then(data => console.log(data))
  .catch(err => console.error(err))


// option 2
const fs = require("fs");

function readFile(filename, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, encoding, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

function handleSuccess(data) {
  console.log(data);
}

function handleError(err) => {
  console.error(err);
}

readFile("./files/demofile.txt", "utf-8")
  .then(
    data => handleSuccess(data),
    err => handleError(err)
  );


/**
 * Question 5
 */

// option 1
const fs = require("fs");
const zlib = require("zlib");

function compressFile(data) {
  return new Promise((resolve, reject) => {
    zlib.gzip(data, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
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
  .then(data => compressFile(data))
  .then(data => console.log(data))
  .catch(err => console.error(err));


// option 2
const fs = require("fs");
const zlib = require("zlib");

function compressFile(data) {
  return new Promise((resolve, reject) => {
    zlib.gzip(data, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
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

readFile("./files/demofiile.txt", "utf-8")
  .then(
    data => compressFile(data),
    err => console.error(`Unable to read file: ${err}`)
  )
  .then(
    data => console.log(data),
    err => console.error(`Unable to compress file: ${err}`)
  );


/**
 * Question 6
 */

function readFileFake(ms) {
  return new Promise(resolve => setTimeout(resolve, ms, 'file success'));
}

function timeout(ms) {
  return new Promise((resolve, reject) => setTimeout(reject, ms, 'timeout'));
}

Promise.race([readFileFake(5000), timeout(1000)])
  .then(data => console.log(data))
  .catch(err => console.error(err));


/**
 * Question 7
 */

function authenticate() {
  console.log("Authenticating");
  return new Promise(resolve => setTimeout(resolve, 2000, { status: 200 }));
}

function publish() {
  console.log("Publishing");
  return new Promise(resolve => setTimeout(resolve, 2000, { status: 403 }));
}

function authPublish() {
  return publish()
    .then(
      data => {
        if (data.status === 403) {
          return authenticate()
        }
      },
      err => console.error(err)
    );
}

function timeout(sleep) {
  return new Promise((resolve, reject) => setTimeout(reject, sleep, "timeout"));
}

Promise.race([authPublish(), timeout(3000)])
  .then(data => console.log(data))
  .catch(err => console.error(err))


/**
 * Question 8
 */

// option 1
const util = require("util");
const fs = require("fs");
const readFile = util.promisify(fs.readFile);

const files = ["./files/demofile.txt", "./files/demofile.other.txt"];

async function printFileContents(files) {
  const promises = files.map(name => readFile(name, { encoding: "utf8" }));
  const fileContents = await Promise.all(promises);
  console.log(fileContents);
}

printFileContents(files);


// option 2
const util = require("util");
const fs = require("fs");
const readFile = util.promisify(fs.readFile);

const files = ["./files/demofile.txt", "./files/demofile.other.txt"];

(async function () {
  const promises = files.map(name => readFile(name, { encoding: "utf8" }));
  const fileContents = await Promise.all(promises);
  console.log(fileContents);
})();


/**
 * Question 9
 */

const logOne = () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, Math.random() * 1000, 'one!');
  });
};

const logTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, Math.random() * 1000, 'two!');
  });
}

function inOrder(logOne, logTwo) {
	logOne()
    .then(data => {
      console.log(data);
      logTwo().then(data => console.log(data))
  	});
}

inOrder(logOne, logTwo);

/**
 * Question 10
 */


/**
 * Question 11
 */

