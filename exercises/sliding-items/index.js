
(function () {
  const itemContainer = document.querySelector(".item-container");
  let topCounter = 0;

  itemContainer.style.position = "relative";

  setInterval(() => {
    if (topCounter > -1000) {
      topCounter--;
      itemContainer.style.top = `${topCounter}px`;
    }
  }, 10);
})();
