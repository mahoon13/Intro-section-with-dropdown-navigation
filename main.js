const body = document.querySelector("body");

//setting up dropdown system
const dps = body.querySelectorAll(".drop-down");
dps.forEach((dp) => {
  dp.toggled = false;
  dp.addEventListener("click", () => {
    if (dp.toggled) {
      dp.classList.remove("toggled");
      dp.toggled = false;
    } else {
      dp.classList.add("toggled");
      dp.toggled = true;
    }
  });
});

const navbar_toggle = document.querySelector(".navbar-toggle");
const menu = document.querySelector("menu");
navbar_toggle.addEventListener("click", () => {
  menu.style.visibility = "visible";
  navbar_toggle.style.display = "none";
});

const close_btn = document.querySelector(".close-btn");
close_btn.addEventListener("click", () => {
  menu.style.visibility = "hidden";
  navbar_toggle.style.display = "block";
});
