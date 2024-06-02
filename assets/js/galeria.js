
//FUNCION PARA MOSTRAR MODAL CON IMAGEN AMPLIADA Y TEXTO
//---------------------------------------------------------
function MostrarModal (event) { // Función que muestra el modal
  event.preventDefault(); // Previene el comportamiento por defecto
  
  const imagen = event.target;  // Selecciona la imagen que se ha hecho click
  var myModal = new bootstrap.Modal(document.getElementById('myModal'), {}); // Selecciona el modal

  const texto = document.getElementById('textimagen'); // Selecciona el texto del modal
  texto.textContent = imagen.alt; // Asigna el texto de la imagen al modal

  const imagenModal = document.getElementById('img'); // Selecciona la imagen del modal
  imagenModal.src = imagen.src; // Asigna la imagen al modal

  myModal.show(); // Muestra el modal
}

//FUNCION PARA CERRAR MODAL
//---------------------------------------------------------
function CerrarModal (event) { // Función que cierra el modal
  var myModal = new bootstrap.Modal(document.getElementById('myModal'), {}); // Selecciona el modal
  myModal.hide(); // Cierra el modal
}

//FUNCION PARA ASIGNAR COMPORTAMIENTO A LAS IMAGENES
//---------------------------------------------------------
function AsignarComportamiento(event) { // Función que asigna el comportamiento a las imágenes
  const imagen = document.querySelectorAll('.imagen'); // Selecciona todas las imágenes
  imagen.forEach(function (element) { // Asigna el evento click a cada imagen
    element.addEventListener('click', MostrarModal); // Al hacer click en la imagen, se muestra el modal
  });

  const CloseButton = document.getElementById('closeBtn'); // Botón para cerrar el modal
  CloseButton.addEventListener('click', CerrarModal); // Al hacer click en el botón, se cierra el modal
}


//FUNCION PARA ASIGNAR COMPORTAMIENTO A LOS BOTONES DE BORRAR IMAGEN
//---------------------------------------------------------
function BorradorImagen(event) {  // Función que asigna el comportamiento a los botones de borrar imagen
  const borrarImagenBotones = document.querySelectorAll('.borrarimg'); // Selecciona todos los botones de borrar imagen
  borrarImagenBotones.forEach(function (boton) { // Asigna el evento click a cada botón
    boton.addEventListener('click', function(event) { // Al hacer click en el botón, se borra la imagen
      const contenedor = event.target.closest('div.col'); // Selecciona el contenedor de la imagen
      contenedor.remove(); // Borra el contenedor
    });
  });
}


function Inicializar() { // Función que inicializa la galería
  AsignarComportamiento(); // Asigna el comportamiento a las imágenes
  BorradorImagen(); // Asigna el comportamiento a los botones de borrar imagen
}

document.addEventListener('DOMContentLoaded', Inicializar), {}; // Cuando el documento esté cargado, se asigna el comportamiento a las imágenes