/**
 * Promises
 *
 * Promises are objects.
 * Promises represent the eventual success or failure of an asynchronous operation.
 * Promises also contain the resulting value.
 *
 * Promise states:
 *   - Pending
 *   - Fulfilled
 *   - Rejected
 */

const PromiseTest = new Promise((resolve, reject) {
  setTimeout(() => {
    resolve('foo');
  }, 300);
});

