fetch("/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  });
fetch("/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".toggler").forEach((toggler) => {
    toggler.addEventListener("click", function () {
      toggler.querySelectorAll(".toggleable").forEach((toggleable) => {
        toggleable.classList.toggle("hidden");
      });
      toggler
        .querySelectorAll(".description__plus")
        .forEach((description__plus) => {
          description__plus.classList.toggle("hidden");
        });
      toggler
        .querySelectorAll(".description__minus")
        .forEach((description__minus) => {
          description__minus.classList.toggle("hidden");
        });
    });
  });
});
