const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

// Lista de países (puedes agregar más según sea necesario)
const countries = [
  "Argentina",
  "Bolivia",
  "Chile",
  "Costa Rica",
  "Dominican Republic",
  "Ecuador",
  "El Salvador",
  "Guatemala",
  "Honduras",
  "Nicaragua",
  "Panama",
  "Paraguay",
  "Peru",
  "Uruguay",
  "Venezuela",
  // Agrega más países aquí
];

function filterCountries() {
  const searchInput = document.getElementById("countrySearch");
  const countryList = document.getElementById("countryList");
  const searchTerm = searchInput.value.toLowerCase();
  countryList.innerHTML = ""; // Limpiar la lista de resultados

  if (searchTerm === "") {
    return; // No mostrar resultados si el campo está vacío
  }

  const filteredCountries = countries.filter(country =>
    country.toLowerCase().includes(searchTerm)
  );

  if (filteredCountries.length === 0) {
    countryList.innerHTML = "<p>No se encontraron países.</p>";
  } else {
    filteredCountries.forEach(country => {
      const countryItem = document.createElement("div");
      countryItem.textContent = country;
      countryItem.addEventListener("click", function () {
        searchInput.value = country;
        countryList.innerHTML = ""; // Limpiar la lista de resultados al seleccionar un país
      });
      countryList.appendChild(countryItem);
    });
  }
}

// Cerrar la lista de resultados cuando se hace clic en cualquier lugar de la página
document.addEventListener("click", function (e) {
  const countryList = document.getElementById("countryList");
  if (!countryList.contains(e.target)) {
    countryList.innerHTML = "";
  }
});

// Evitar el envío del formulario cuando se presiona "Enter" en el campo de búsqueda
document.getElementById("countrySearch").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
  }
});

nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
submitBtn.addEventListener("click", function(){
  // Ocultar toda la .container después de mostrar el mensaje de éxito
  const container = document.querySelector(".container");
  container.style.display = "none";

  // Mostrar el mensaje de éxito
  const successMessage = document.getElementById("success-message");
  successMessage.style.display = "block";

  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});

prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
// Agregar esto a tu código JavaScript existente

// Arreglo de colores para los confetis
const coloresConfeti = ['#f39c12', '#e74c3c', '#3498db', '#2ecc71', '#9b59b6', '#1abc9c'];

// Función para obtener un color aleatorio del arreglo
function obtenerColorAleatorio() {
  const indiceAleatorio = Math.floor(Math.random() * coloresConfeti.length);
  return coloresConfeti[indiceAleatorio];
}

// Agregar confeti cuando se muestra el mensaje de éxito
function agregarConfeti() {
  var confeti = document.createElement('div');
  confeti.classList.add('confetti');
  confeti.style.backgroundColor = obtenerColorAleatorio(); // Asignar color aleatorio
  confeti.style.left = Math.random() * 100 + 'vw';
  document.body.appendChild(confeti);

  // Eliminar el confeti después de la animación
  confeti.addEventListener('animationend', function() {
    confeti.remove();
  });
}

// Mostrar el mensaje de éxito y lanzar confeti
submitBtn.addEventListener("click", function() {
  // Ocultar toda la .container después de mostrar el mensaje de éxito
  const container = document.querySelector(".container");
  container.style.display = "none";

  // Mostrar el mensaje de éxito
  const successMessage = document.getElementById("success-message");
  successMessage.style.display = "block";

  // Agregar confeti
  for (let i = 0; i < 50; i++) {
    setTimeout(agregarConfeti, i * 200); // Lanza confeti en intervalos
  }

  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});