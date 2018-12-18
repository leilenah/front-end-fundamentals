/**
 * async
 *
 * async functions always return a promise.
 * Non-promises are wrapped in a promise.
 */

/**
 * Return a resolved promise.
 * If the code contains return <non-promise>, JS automatically wraps it into a resolved promise.
 */
 async function getPromise() {
	 return 1;
 }

// explicitly set the promise
async function getPromise() {
	return Promise.resolve(1);
}

getPromise.then(alert); // 1

/**
 * await
 *
 * await makes JS wait until a promise settles, then returns the result.
 */
const onePromise = await getPromise(); // wait until promise resolves
alert(onePromise);
