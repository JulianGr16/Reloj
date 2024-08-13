const fechaActual = ()=>{
    const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fecha = new Date();
    const fechaFormateada = fecha.toLocaleDateString('es-ES', opcionesFecha);
    const horaFormateada = fecha.toLocaleTimeString('es-ES');

    document.getElementById('fecha').textContent = fechaFormateada;
    document.getElementById('hora').textContent = horaFormateada;

}




setInterval(fechaActual, 1000);
fechaActual();

