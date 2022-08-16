const navBar = document.querySelector(".navbarMenu");

let scrollPosition1 = scrollY;

document.addEventListener("scroll", (event) => {
  if (scrollY > 100) {
    const scrollPosition2 = scrollY;
    if (scrollPosition2 > scrollPosition1) {
      navBar.style.transform = "translateY(-105px)";
      scrollPosition1 = scrollPosition2;
    } else {
      navBar.style.transform = "initial";
      scrollPosition1 = scrollPosition2;
    }

    if (scrollY > 600) {
      navBar.classList.add("bgColor");
    } else {
      navBar.classList.remove("bgColor");
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
