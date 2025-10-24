const btnTop = document.getElementById("btnTop");
window.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    btnTop.style.display = "flex";
  } else {
    btnTop.style.display = "none";
  }
};

btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
