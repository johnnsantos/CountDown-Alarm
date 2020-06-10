let mostrador = document.getElementById("mostrador");

let minutos = document.getElementById("caixaminutos");
let segundos = document.getElementById("caixasegundos");
let comecar = document.getElementById("comecar");

let cronometroSeg;

let minutoAtual;
let segundoAtual;

let interval;

for(let i = 0; i <= 60; i++) {
    minutos.innerHTML+='<option value="'+i+'">'+i+'</option>';
}

for(let i = 1; i <= 60; i++) {
    segundos.innerHTML+='<option value="'+i+'">'+i+'</option>';
}

comecar.addEventListener('click', function(){
    minutoAtual = minutos.value;
    segundoAtual = segundos.value;

    mostrador.childNodes[1].innerHTML = minutoAtual + ":" + segundoAtual;

    interval = setInterval (function(){
        segundoAtual--;
        if(segundoAtual <= 0) {
            if(minutoAtual > 0) {
                minutoAtual--;
                segundoAtual = 59;
            }else{
                document.getElementById("sound").play();
                clearInterval(interval);
            }
        }
        mostrador.childNodes[1].innerHTML = minutoAtual + ":" + segundoAtual;
    },1000);
})