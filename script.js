const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');

boton1.addEventListener('click', () => {
    alert('¡Bienvenido a esta página!');
});

boton2.addEventListener('click', () => {
    alert('¡Bienvenida a esta página!');
});

        function validarFormulario() {
            
            var nombre = document.getElementById("nombre").value;
            var email = document.getElementById("email").value;
            var mensajeError = document.getElementById("mensajeError");
            
            mensajeError.textContent = "";

            if (nombre === "" || email === "") {
                mensajeError.textContent = "Todos los campos son obligatorios.";
                return false;
            }

            var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regexEmail.test(email)) {
                mensajeError.textContent = "Por favor, ingrese un correo electrónico válido.";
                return false;
            }
            return true;
        }
    