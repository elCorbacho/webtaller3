

// Función para validar el formulario antes de enviarlo
function validarFormulario(event) {
    var nombre = document.getElementById('Nombre').value;
    var apellidos = document.getElementById('Apellidos').value;
    var direccion = document.getElementById('Direccion').value;
    var celular = document.getElementById('celular').value;
    var email = document.getElementById('email').value;
    var comentarios = document.getElementById('detalle').value.toLowerCase(); // Convertir a minúsculas para facilitar la comparación

    // Verificar que los campos obligatorios no estén vacíos
    if (nombre === '' || apellidos === '' || direccion === '' || celular === '' || email === '' || comentarios === '') {
        // Mostrar el modal de validación
        var modal = new bootstrap.Modal(document.getElementById('modalValidacion'));
        modal.show();
        event.preventDefault(); // Evitar que se envíe el formulario
        return false;
    }
    mostrarModalAgradecimiento();
    return true; // Permitir el envío del formulario si todo está validado correctamente
}

// Función para actualizar el motivo según el contenido del campo de comentarios
function actualizarMotivo() {
    var motivo = document.getElementsByName('alternativa')[0];
    var comentarios = document.getElementById('detalle').value.toLowerCase(); // Convertir a minúsculas para facilitar la comparación

    // Si el comentario contiene la palabra "compra", seleccionar la opción "Compra"
    if (comentarios.includes('compra')) {
        motivo.value = 'Compra';
    }
    // Si el comentario contiene la palabra "venta", seleccionar la opción "Venta"
    else if (comentarios.includes('venta')) {
        motivo.value = 'Venta';
    }
    // Si no contiene ninguna de las palabras anteriores, seleccionar la opción "Consulta o Sugerencia"
    else {
        motivo.value = 'Consulta o Sugerencia';
    }
}

// Función para mostrar el modal de agradecimiento
function mostrarModalAgradecimiento() {
    var modal = new bootstrap.Modal(document.getElementById('modalAgradecimiento'));
    modal.show();
}


// Agregar event listener al evento submit del formulario
document.getElementById('contactform').addEventListener('submit', validarFormulario);

// Agregar event listener al evento input del campo de comentarios
document.getElementById('detalle').addEventListener('input', actualizarMotivo);