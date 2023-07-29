function slideShow() {
  const slider = document.querySelector(".slider");
  const hero = document.querySelector(".hero");
  const nav = document.querySelector(".nav");

  slider.style.transform = "translateY(-100%)";
  hero.style.transform = "translateY(0%)";
  setTimeout(() => {
    nav.style.opacity = "1";
  }, 1000);
}

slideShow();
