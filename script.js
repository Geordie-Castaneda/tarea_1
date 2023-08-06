function enviarFormulario() {
    const nombres = document.getElementById("nombres").value;
    const apellidos = document.getElementById("apellidos").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;
  
    // Puedes realizar aquí cualquier acción con los datos ingresados, como enviarlos a un servidor o mostrarlos en la página.
    alert("Nombre: " + nombres + "\nApellidos: " + apellidos + "\nTelefono: " + telefono + 
    "\nCorreo electronico: "+ correo +"\nMensaje: "+mensaje);
}