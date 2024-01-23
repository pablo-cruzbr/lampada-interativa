const turnOnOff = document.getElementById('turnOnOff');
const lamp = document.getElementById ('lamp');

function isLampBroken(){
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn () {
    if (!isLampBroken ()){
    lamp.src = './img/ligada.jpg' ;
    }
}

function lampOff () {
    if (!isLampBroken () ) {
    lamp.src = './img/desligada.jpg';
    }
}

function lampBroken(){
    lamp.src = './img/quebrada.jpg';
}

function lampOnOff(){
//Criar uma Condição
    if (turnOnOff.textContent == 'Ligar'){
        lampOn(); //Ligar Lampada
        turnOnOff.textContent = 'Desligar'; //Mude o texto para desligar
    }else{
        lampOff();//Desligue a Lampada
        turnOnOff.textContent = 'Ligar'; //Mude o texto para Ligar 
    }
}

turnOnOff.addEventListener('click', lampOnOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave',lampOff);
lamp.addEventListener('dblclick', lampBroken);