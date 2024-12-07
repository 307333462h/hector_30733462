const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    // Usar FormData para recolectar los datos del formulario
    const data = new FormData(formulario);

    // Convertir FormData a un objeto
    const formDataObject = {};
    data.forEach((value, key) => {
        formDataObject[key] = value;
    });

    fetch('/contactanos', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formDataObject) // Convertir el objeto a JSON
    })
    .then(res => res.json())
    .then(res => {
        if (res.message){
            Swal.fire('¡Mensaje Enviado Exitosamente!');
        } else{
            Swal.fire('¡No se pudo enviar el mensaje!');
        }
    })
    .catch(e => {
        console.error(e);
    });
});