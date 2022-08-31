





updateClock = () => {

var today = new Date();


var dataAtual = today.getDate();
var mesAtual = today.getMonth()+1


dataAtual = (dataAtual < 10 ? "0" : "") + dataAtual;
mesAtual = (mesAtual < 10 ? "0" : "") + mesAtual;


var date = dataAtual+'-'+mesAtual+'-'+today.getFullYear();

document.getElementById("relogio-data").innerHTML = date;



var minutoAtual = today.getMinutes();
var segundoAtual = today.getSeconds();
var horaAtual = today.getHours();
 
minutoAtual = (minutoAtual < 10 ? "0" : "") + minutoAtual;
segundoAtual = (segundoAtual < 10 ? "0" : "") + segundoAtual;
horaAtual = (horaAtual < 10 ? "0" : "") + horaAtual;


var time = horaAtual+':'+minutoAtual+':'+segundoAtual;

document.getElementById("relogio-horario").innerHTML = time;  

var situacaoDia = ((horaAtual < 18 &&  horaAtual> 6 ) ? "Tá de dia mané" : "Tá de noite mané" );

document.getElementById("situacao-dia").innerHTML = situacaoDia;


}