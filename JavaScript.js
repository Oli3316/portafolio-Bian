window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("abajo", window.scrollY > 20);
});

const saludo = document.getElementsByTagName("body");
saludo.addEventListener("scroll", () => {
  Swal.fire({
    title: "Error!",
    text: "Do you want to continue",
    icon: "error",
    confirmButtonText: "Cool",
  });
});
