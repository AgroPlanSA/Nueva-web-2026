document.addEventListener("DOMContentLoaded", () => {
  M.Sidenav.init(document.querySelectorAll(".sidenav"));

  M.Dropdown.init(document.querySelectorAll(".dropdown-trigger"), {
    coverTrigger: false,
    constrainWidth: false,
    hover: true
  });

  M.Slider.init(document.querySelectorAll(".slider"), {
    indicators: true,
    height: 600,
    interval: 6000
  });

  M.Carousel.init(document.querySelectorAll(".carousel"), {
    dist: -40,
    padding: 20,
    indicators: true
  });
});
