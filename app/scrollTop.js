let toTop = document.getElementById("toTop");
toTop.style.display = "none";
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
});

toTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
