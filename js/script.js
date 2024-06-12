// O exercicio consiste em criar um simples cronometro.

var hour = 0;
var minute = 0;
var second = 0;

var tempo = 1000; //quantos milésimos valem 1 segundo!
var cron = 0;

// Função que inicia o cronometro.
// Nela usamos o setInterval para executar a função timer a cada 1 segundos,
// repetidas vezes.
function startTimer(){

    cron = setInterval(() => { timer(); }, tempo);
    

}
// Função de restart do cronometro.
// alem de limpar o timer configurado, ele limpa as variaveis e já chama a startTimer
// para iniciar novamente o cronometro.
function restartTimer(){

    clearInterval(cron);
    hour = 0;
    minute = 0;
    second = 0;
    startTimer();

}

// Função de pausar o cronometro, aonde simplesmente limpamos o setInterval.
function pauseTimer(){

    clearInterval(cron);

}

// Função timer, aonde fazemos a lógica de contagem de nosso cronometro.
// Então ela é chamada a cada 1 segundo ( setInterval ), e vai somando a variavel second + 1
// e quando os segundos chega a 60, ele adiciona +1 em minuto e zera os segundos,
// e essa mesma lógica acontece com os minutos/horas.
function timer(){

    second++;

    if( second == 60){

        second = 0;
        minute++;

    }else if( minute == 60 ){

        minute = 0;
        hour = 1;

    }

    //Insere o valor tratado no elemento counter
    document.getElementById('counter').innerText = (hour < 10 ? '0' + hour : hour) + ':' + (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second);

}