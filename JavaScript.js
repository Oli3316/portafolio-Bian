saludar();

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("abajo", window.scrollY > 20);
});
function saludar() {
  Swal.fire({
    title: "Hola, soy Bianca! Gracias por visitar mi página 😄",
    text: "Visita mis redes sociales!",
    imageUrl:
      "https://media-exp1.licdn.com/dms/image/D4E35AQEinjpknmpR-A/profile-framedphoto-shrink_800_800/0/1628767583766?e=2147483647&v=beta&t=KiBHjO7peOLIRBxTARoi9iFVmEyM24qjiwsOp1RJsQU",
    imageWidth: 200,
    imageHeight: 200,
    confirmButtonText: "Ok",
    background: "black",
    color: "#fff",
  });
}
