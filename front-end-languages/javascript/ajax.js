/**
 * jQuery AJAX
 */
$.ajax({
    url: ''
}).done(function(response) {
    alert(response);
}).fail(function() {
    window.console.log('ERROR');
});

/**
 * Fetch API
 *
 * Fetch returns a Promise that resolves to the Response to that request.
 * Along with the url param, you can pass an init param.
 */
fetch(url)
    .then(function(response) {
        alert(response);
    })
    .catch(function(error) {
        console.log(error);
    });
