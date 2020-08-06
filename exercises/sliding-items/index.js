
(function () {
  const itemContainer = document.querySelector(".item-container");
  let topCounter = 0;

  itemContainer.style.position = "relative";

  const slideUp = () => {
    if (topCounter < -1000) {
      clearInterval(interval);
      return;
    }

    topCounter--;
    itemContainer.style.top = `${topCounter}px`;
  }

  // assigning `interval` to setInterval calls setInterval()
  const interval = setInterval(slideUp, 10);
})();
