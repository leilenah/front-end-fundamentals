/**
 * jQuery AJAX
 */
$.ajax({
    url: ''
}).done(function(response){
    alert(response);
}).fail(function() {
    window.console.log('ERROR');
});

/**
 * Fetch API
 */
fetch(url)
    .then(function(response) {
        alert(response);
    })
    .catch(function(error) {
        console.log(error);
    });
