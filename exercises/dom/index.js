/**
 * Wait for DOM to be ready.
 */
document.addEventListener('DOMContentLoaded', () => {

  /**
   * Get all items.
   */
  const items = document.querySelectorAll(".item");
  // console.log(items);


  /**
   * Get the parent element of item-1.
   */

  const item1 = document.querySelector("#item-1");
  const item1Parent = item1.parentElement;
  // console.log(item1Parent);


  /**
   * Get the next sibling of item-2.
   */
  const item2 = document.querySelector("#item-2");
  // console.log(item2.nextSibling);




});
