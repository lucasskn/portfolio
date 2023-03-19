const about = document.querySelector(".me");

let isTextVisible = false;

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const textPosition = about.offsetTop + about.offsetHeight;

  if (scrollPosition >= textPosition && !isTextVisible && window.innerHeight) {
    about.classList.add(
      "animate__animated",
      "animate__bounceInLeft",
      "animate__faster"
    );
    isTextVisible = true;
    console.log("funcionando");
  } else if (scrollPosition < textPosition && isTextVisible) {
    about.classList.remove(
      "animate__animated",
      "animate__bounceInLeft",
      "animate__faster"
    );
    isTextVisible = false;
  }
});
