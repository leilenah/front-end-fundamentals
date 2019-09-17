/**
 * jQuery AJAX
 */

const ajaxUrl = 'https://jsonplaceholder.typicode.com/todos/1';

$.ajax({
    url: ajaxUrl,
    type: 'POST',
    data: {},
    beforeSend: function(xhr){xhr.setRequestHeader('X-Test-Header', 'test-value'); },
    success: function() { alert('Success!' + authHeader); }
}).done((response) => {
    alert(response);
}).fail(() => {
    window.console.log('ERROR');
});

/**
 * Fetch API
 *
 * Fetch returns a Promise that resolves to the Response to that request.
 * Along with the url param, you can pass an init param.
 *
 * Fetch takes a URL, followed by an object
 *
 * Fetch is not supported by IE11
 */

const siteUrl = 'https://jsonplaceholder.typicode.com/todos/1';

fetch(siteUrl, {
    method: 'GET', // GET, POST, PUT, DELETE

    mode: 'cors',

    cache: 'no-cache',

    credentials: 'same-origin',

    headers: {
        'Content-Type': 'application/json'
    },

    redirect: 'follow',

    referrer: 'no-referrer',

    body: JSON.stringify(data) // converts JS object or value into JSON string
})
.then((response) => response.json())
.then((json) =>  {
    console.log(json);
})
.catch((error) => {
    console.log(`Error ${error}`);
})


/**
 * XMLHttpRequest
 */
