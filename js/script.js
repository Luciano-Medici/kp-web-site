document.addEventListener('DOMContentLoaded', function() {
  const carruselInner = document.querySelector('.carrusel-inner');
  const items = document.querySelectorAll('.carrusel-item');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const indicadores = document.querySelectorAll('.indicador');
  
  let currentIndex = 0;
  let intervalo;
  const tiempoCambio = 5000; // 5 segundos
  
  function actualizarCarrusel() {
      carruselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // Actualizar indicadores
      indicadores.forEach((ind, index) => {
          ind.classList.toggle('active', index === currentIndex);
      });
  }
  
  function siguiente() {
      currentIndex = (currentIndex + 1) % items.length;
      actualizarCarrusel();
      reiniciarIntervalo();
  }
  
  function anterior() {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      actualizarCarrusel();
      reiniciarIntervalo();
  }
  
  function reiniciarIntervalo() {
      clearInterval(intervalo);
      intervalo = setInterval(siguiente, tiempoCambio);
  }
  
  // Event listeners
  nextBtn.addEventListener('click', siguiente);
  prevBtn.addEventListener('click', anterior);
  
  indicadores.forEach(ind => {
      ind.addEventListener('click', function() {
          currentIndex = parseInt(this.getAttribute('data-index'));
          actualizarCarrusel();
          reiniciarIntervalo();
      });
  });
  
  // Iniciar intervalo automático
  intervalo = setInterval(siguiente, tiempoCambio);
  
  // Pausar al pasar el mouse
  carruselInner.addEventListener('mouseenter', () => clearInterval(intervalo));
  carruselInner.addEventListener('mouseleave', reiniciarIntervalo);
});