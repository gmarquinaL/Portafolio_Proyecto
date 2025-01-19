
emailjs.init("3CwRJQLD8G2VVRTyE");// ID de usuario

const sendEmail = (e) => {
    e.preventDefault(); 
  
    // Mostrar mensaje de estado
    const statusMessage = document.getElementById("statusMessage");
    statusMessage.textContent = "Enviando..."; 
  

    emailjs.sendForm(
      'service_lsami8a', // ID de servicio
      'template_1lycn3j', //  ID de plantilla
      e.target,
      '3CwRJQLD8G2VVRTyE' // clave pública de EmailJS
    )
    .then((result) => {
      // Si el correo se envía correctamente, muestra este mensaje
      statusMessage.textContent = "¡Mensaje enviado exitosamente!";
      statusMessage.style.color = "green"; 
    })
    .catch((error) => {
      // Si hay un error, muestra este mensaje
      statusMessage.textContent = "¡No se pudo enviar el mensaje! Intenta nuevamente.";
      statusMessage.style.color = "red"; 
    });
  
    e.target.reset(); 
};

// Asocia la función sendEmail al evento submit del formulario
document.querySelector(".contacto__formulario").addEventListener("submit", sendEmail);



// JavaScript para scroll suave entre secciones
document.querySelectorAll('.navegacion__elemento a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // Elimina el '#' del ID
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', // Scroll suave
                block: 'start' // Posición al inicio de la sección
            });
        }
    });
});
