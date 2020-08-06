(function () {

  /**
   * TODO: Re-write using intersection observer
   */

  const sections = document.querySelectorAll(".section-wrapper");

  const observerCallback = ([entry]) => {
    const i = entry.target.getAttribute("data-index");
    const navItem = document.querySelector(`#nav-link-${i}`);


    // if (i == "3") {
    //   console.log(entry.intersectionRatio);
    // }

    if (entry.isIntersecting) {
      // console.log(entry.target);

      navItem.classList.add("nav-link--active");
      return;
    }

    navItem.classList.remove("nav-link--active");
  };

  const observer = new IntersectionObserver(observerCallback, {
    threshold: 1.0
  });

  sections.forEach(section => observer.observe(section));
})();
