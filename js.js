let boxs = document.querySelectorAll(".main .box");
boxs.forEach((e) => {
  e.addEventListener("click", () => {
    boxs.forEach((el) => {
      el.classList.remove("active");
    });
    e.classList.add("active");
  });
});
