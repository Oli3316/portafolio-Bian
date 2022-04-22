saludar();

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("abajo", window.scrollY > 20);
});
function saludar() {
  Swal.fire({
    title: "Gracias por visitar mi espacio 😄",
    imageUrl:
      "https://media-exp1.licdn.com/dms/image/D4E35AQEinjpknmpR-A/profile-framedphoto-shrink_800_800/0/1628767583766?e=2147483647&v=beta&t=KiBHjO7peOLIRBxTARoi9iFVmEyM24qjiwsOp1RJsQU",
    imageWidth: 300,
    imageHeight: 300,
    showConfirmButton: false,
    timer: 2000,
    customClass: "sweetAlert sweetAlert2",
  });
}

const hamburgerMenu = document.querySelector(".hamburger");
const menuIsActive = () => {
  hamburgerMenu.classList.toggle("active");
};
hamburgerMenu.addEventListener("click", menuIsActive);
