let indice = 0;

function moverCarrusel(direccion) {
  const carrusel = document.getElementById('carrusel-scroll');
  const ancho = window.innerWidth;

  indice += direccion;

  // Limita el índice
  const total = carrusel.querySelectorAll('img').length;
  if (indice < 0) indice = total - 1;
  if (indice >= total) indice = 0;

  carrusel.style.transform = `translateX(-${indice * ancho}px)`;
}

document.addEventListener("DOMContentLoaded", function () {
  const botones = document.querySelectorAll(".filtros button");
  const productos = document.querySelectorAll(".producto");

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      // Quitar clase activa a todos los botones
      botones.forEach(b => b.classList.remove("activo"));
      boton.classList.add("activo");

      const categoria = boton.getAttribute("data-categoria");

      productos.forEach(producto => {
        if (categoria === "todos" || producto.dataset.categoria === categoria) {
          producto.style.display = "block";
        } else {
          producto.style.display = "none";
        }
      });
    });
  });
});
