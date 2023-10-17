

const Reloj = () => {
    let fecha = new Date(); //hora con la fecha actual
    let horas = fecha.getHours();//horas del sistema
    let minutos = fecha.getMinutes();//minutos del sistema
    let segundos = fecha.getSeconds();//segundos del sistema

    horas = (horas < 10) ? '0' + horas : horas;
    minutos = (minutos < 10) ? '0' + minutos : minutos;
    segundos = (segundos < 10) ? '0' + segundos : segundos;

    let time = hora + ':' + minutos + ':' + segundos;
    let hora = document.querySelector('#reloj')
    hora.innerHTML = time;
    
}
setInterval(Reloj, 1000)
