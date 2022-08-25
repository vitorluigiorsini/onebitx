const navBar = document.querySelector(".navbarMenu");

let scrollPosition1 = scrollY;

document.addEventListener("scroll", (event) => {
  if (scrollY > 100) {
    const scrollPosition2 = scrollY;
    if (scrollPosition2 > scrollPosition1) {
      navBar.classList.add("is-hidden");
      navBar.classList.remove("has-bgColor");
      scrollPosition1 = scrollPosition2;
    } else {
      if (scrollY > 600) {
        navBar.classList.add("has-bgColor");
      } else {
        navBar.classList.remove("has-bgColor");
      }
      navBar.classList.remove("is-hidden");
      scrollPosition1 = scrollPosition2;
    }
  }
});

const offcanvasBackground = document.getElementById("offcanvasWithBackdrop");

window.addEventListener("resize", (event) => {
  if (window.innerWidth < 992) {
    offcanvasBackground.classList.add("bg-dark");
  } else {
    offcanvasBackground.classList.remove("bg-dark");
  }
});

window.onload = () => {
  if (window.innerWidth < 992) {
    offcanvasBackground.classList.add("bg-dark");
  } else {
    offcanvasBackground.classList.remove("bg-dark");
  }
};
