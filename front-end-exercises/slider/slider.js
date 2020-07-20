/**
 * Fetch a list of posts from Posts API and render post data in the post-container div.
 * Build a slider that displays the contents of each post and lets you click through each one.
 *
 * Post API endpoint: https://jsonplaceholder.typicode.com/posts
 */

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
  	const postContainer = document.querySelector("#post-container");
    const prevButton = document.querySelector("#prev");
    const nextButton = document.querySelector("#next");
    const activePost = document.querySelector(".post.active");
    let newActivePost;

    if (event.target.id === "next") {
    	newActivepost = activePost.nextSibling;
    } else {
    	newActivePost = activePost.previousSibling;
    }

    activePost.classList.remove("active");
    newActivePost.classList.add("active");

    if (postContainer.firstChild.classList.has("active")) {
    	prevButton.classList.add("hidden")
    } else {
    	prevButton.classList.remove("hidden");
    }
  });
});

