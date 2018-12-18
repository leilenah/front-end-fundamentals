/**
 * jQuery Animations
 *
 * .fadeOut()
 * .fadeTo()
 * .fadeToggle()
 * .clearQueue()
 * .delay()
 * .dequeue()
 * .finish()
 * .hide()
 * .show()
 * .slideDown()
 * .slideToggle()
 * .slideUp()
 * .toggle()
 */

 // .animate()
$('#element').animate({
    opacity: 0.25,
    left: "+=50",
    height: "toggle"
}, 5000, function() {
    // callback when animation is complete
});

// .fadeIn() with callback
$('.element').fadeIn("slow", function() {
    // callback when animation is complete
});

// .slideUp() without callback
// $('#animated-color-box').slideUp("slow");

// slideshow
// TODO: Fix this ratchetness
$('.next, .prev').on('click', function() {
    const $this = $(this);
    const $slideshowImageContainer = $('.slideshow-images');
    const $slideshowImages = $('.image');
    const $currentImage = $slideshowImageContainer.find('.current');
    const currentImageNumber = $currentImage.data('number');
    const totalImages = $slideshowImageContainer.data('total-images');

    $currentImage.removeClass('current');
    $currentImage.next().addClass('current');

    if (currentImageNumber >= 1 && $('.prev').hasClass('hidden')) {
        $('.prev').removeClass('hidden');
    } else if (currentImageNumber == (totalImages - 1)) {
        $('.next').addClass('hidden');
    }

    if ($this.hasClass('next')) {
        $slideshowImages.animate({
            left: '-=500'
        });
    } else if ($this.hasClass('prev')) {
        $slideshowImages.animate({
            left: '+=500'
        });
    }
});

/**
 * Vanilla JS Animations
 */

 // setInterval()
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
