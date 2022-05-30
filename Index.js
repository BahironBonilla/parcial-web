let button = document.getElementById('btnEnviarDatos')

button.addEventListener('click', function () {

    let inputNombre = document.getElementById('input-nombre');
    let inputApellido = document.getElementById('input-apellido');
    let pMensajeError = document.getElementById('p-mensaje-error');
    let pMensajeConfirmacion = document.getElementById('p-mensaje-confirmacion');

    if (inputNombre.value == "") {
        
        pMensajeError.innerHTML = "Error: el campo nombre esta vacio";
    }
    else if (inputApellido.value == "") {
        
        pMensajeError.innerHTML = "Error: el campo apellido esta vacio";
    }
    else if (inputNombre.value.length > 20) {
        pMensajeError.innerHTML = "Error: el nombre exede la longitud permitida"
    }
    else if (inputApellido.value.length > 20) {
        pMensajeError.innerHTML = "Error: el apellido exede la longitud permitida"
    }
    else {
        pMensajeConfirmacion.innerHTML = "Los datos se enviaron correctamente";
        pMensajeError.innerHTML = "";
    }
})


let buttonLimpiar = document.getElementById('btnLimpiarDatos');

buttonLimpiar.addEventListener('click', function () {
    alert('Boton de limpiar');
    let inputNombre = document.getElementById('input-nombre');
    inputNombre.value = "";
    let inputApellido = document.getElementById('input-apellido');
    inputApellido.value = "";


});
