(function () {
  const sections = document.querySelectorAll(".section-wrapper");
  document.addEventListener('scroll', () => {
    sections.forEach((section, i) => {
      const rect = section.getBoundingClientRect();
      const navItem = document.querySelector(`#nav-link-${i}`);

      if (!navItem) return;

      if ((rect.top <= window.innerHeight) && (rect.bottom > window.innerHeight)) {
        navItem.classList.add("nav-link--active");
      } else {
        navItem.classList.remove("nav-link--active");
      }
    });
  });
})();
