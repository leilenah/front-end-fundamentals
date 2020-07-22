/**
 * fetch
 */

// get data
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json()) // get the JSON from the HTTP response
  .then(json => {
    console.log('first post', json[0]);
    return json;
  })
  .finally(() => { // finally cannot receive an argument
    console.log(`finally`);
  })
  .catch(error => {
    console.log('error', error);
  });

// post data
async function postData(url, data) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  });
  return response.json();
} */

postData('https://example.com/answer', { answer: 43 })
  .then(data => {
    console.log('data');
  });

/**
 * async / await
 */

const waitTwoSeconds = () => {
	return new Promise(resolve => {
  	setTimeout(() => {
    	resolve({
      	message: "I'm back"
      });
    }, 2000);
  })
}

const sayHi = async () => {
  console.log("I will be back in 2 seconds");
  const newMessage = await waitTwoSeconds(); // newMessage will == the resolved value
  console.log(newMessage);
}

sayHi();


/**
 * Promise
 */
const wait = ms =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });


wait(3000).then(() => {
  console.log('resolved!'); // resolve maps to this
});
