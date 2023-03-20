const about = document.querySelector(".me");

let isTextVisible = false;

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const textPosition = about.offsetTop + about.offsetHeight;

  if (scrollPosition >= 1040 && !isTextVisible && window.innerHeight) {
    about.classList.add(
      "animate__animated",
      "animate__bounceInLeft",
      "animate__faster"
    );

    isTextVisible = true;
  } else if (scrollPosition < 1040 && isTextVisible) {
    about.classList.remove(
      "animate__animated",
      "animate__bounceInLeft",
      "animate__faster"
    );
    isTextVisible = false;
  }
});

const mainskills = document.querySelector(".mainskills");

let isSkillsVisible = false;

window.addEventListener("scroll", () => {
  const positionScroll = window.scrollY + window.innerHeight;
  const skillPosition = mainskills.offsetTop + mainskills.offsetHeight;

  if (positionScroll >= 1280 && !isSkillsVisible && window.innerHeight) {
    mainskills.classList.add("animate__animated", "animate__fadeIn");
    isSkillsVisible = true;
  } else if (positionScroll < 1280 && isSkillsVisible) {
    mainskills.classList.remove("animate__animated", "animate__fadeIn");
    isSkillsVisible = false;
  }
});
