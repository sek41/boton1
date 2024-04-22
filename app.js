// Obtener el botón del documento
const button = document.getElementById('button');

// Evento de clic en el botón
button.onclick = function colorchange() {
    // Generar valores aleatorios para los componentes rojo, verde y azul
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    
    // Establecer el color de fondo del cuerpo del documento usando RGB
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    document.getElementById('p').innerHTML= `rgb(${red}, ${green}, ${blue})`
};
