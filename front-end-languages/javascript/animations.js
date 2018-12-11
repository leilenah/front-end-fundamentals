/**
 * jQuery Animations
 */
$('#element').animate({
    opacity: 0.25,
    left: "+=50",
    height: "toggle"
}, 5000, function() {
    // callback when animation is complete
});

// fadeIn
$('.element').fadeIn("slow", function() {
    // callback when animation is complete
});

// fadeIn no callback
// $('#animated-color-box').slideUp("slow");

// Other animations
// .fadeOut()
// .fadeTo()
// .fadeToggle()
// .clearQueue()
// .delay()
// .dequeue()
// .finish()
// .hide()
// .show()
// .slideDown()
// .slideToggle()
// .slideUp()
// .toggle()


/**
 * Vanilla JS Animations
 */
$('#container').click(function() {
    window.console.log('containter clicked');

    const animate = document.getElementById('animate');
    let pos = 0;

    setInterval(function() {
        if (pos < 350) {
            console.log('pos < 350');
            pos++;
            animate.style.top = pos + "px";
            animate.style.left = pos + "px";
        }
    }, 5);
});
