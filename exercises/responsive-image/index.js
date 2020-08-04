(function () {
  /**
   * Image Caption
   */
  const imageContainer = document.querySelector(".image-container");

  // create wrapper div
  const imageCaption = document.createElement("div");

  // update image caption element
  imageCaption.classList.add("image-caption");
  imageCaption.innerHTML = "Macarons are very tasty! I love them, I really do. One day I will bake some.";

  // append image caption to container
  imageContainer.append(imageCaption);


  /**
   * Video Caption
   */
  const videoContainer = document.querySelector(".video-container");

  // create wrapper div
  const videoCaption = document.createElement("div");

  // update video caption element
  videoCaption.classList.add("video-caption");
  videoCaption.innerHTML = "This is a video about macarons to compliment the photos of macarons that are on top of this video...of macarons."

  // append video caption to container
  videoContainer.append(videoCaption);

})();
