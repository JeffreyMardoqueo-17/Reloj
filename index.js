//fucnion de hora
function RelojBonito() {
    const date = new Date();
    let horas = date.getHours();//horas del reloj
    let min = date.getMinutes();
    let seg = date.getSeconds();

    horas = (horas < 10) ? "0" + horas : horas;
    min = (min < 10) ? "0" + min : min;
    seg = (seg < 10) ? "0" + seg : seg;

    let time = horas + ":" + min + ":" + seg;
    const watch = document.querySelector('#reloj');
    watch.innerHTML=time;//imprimir en el html
}
setInterval(RelojBonito, 1000)