saludar();

window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  var hUno = document.querySelector('h1');
  var parrafo = document.querySelector('.parrafo-index-1');
  header.classList.toggle('abajo', window.scrollY > 20);
  hUno.classList.toggle('abajo', window.scrollY > 20);
  parrafo.classList.toggle('abajo', window.scrollY > 20);
});
function saludar() {
  Swal.fire({
    title: 'Gracias por visitar mi espacio 😄',
    imageUrl: './img/BianHermosa.jpg',
    imageWidth: 400,
    imageHeight: 400,
    showConfirmButton: false,
    timer: 2000,
    customClass: 'sweetAlert sweetAlert2'
  });
}

const hamburgerMenu = document.querySelector('.hamburger');
const menuIsActive = () => {
  hamburgerMenu.classList.toggle('active');
};
hamburgerMenu.addEventListener('click', menuIsActive);
