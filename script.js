;(function(){
    'use strict'
var juego ={
    palabra:"ALURA",
    estado:1,
    adivinado:["A", "L"],
    errado:['B', 'J', 'K','C']

}
var $html={
    hombre: document.getElementById('hombre'),
    adivinado: document.querySelector('.adivinado'),
    errado: document.querySelector('.errado')
}
function dibujar(juego){
var $elemen
$elemen=$html.hombre
$elemen.src='./Imagenes/estados/0' + juego.estado + '.png.png'

var palabra=juego.palabra
 var adivinado=juego.adivinado

 $elemen= $html.adivinado
for(let letra of palabra){
   let $span = document.createElement('span')
   let  $txt=document.createTextNode('')
    if(adivinado.indexOf(letra)  >= 0) {
$txt.nodeValue= letra
    }
$span.setAttribute('class', 'letra adivinada')
$span.appendChild($txt)
$elemen.appendChild($span)
}

var errado =juego.errado
$elemen=$html.errado
for(let letra of errado){
    $span = document.createElement('span')
    $txt = document.createTextNode(letra)
    $span.appendChild($txt)

}

}
console.log(juego)
dibujar(juego)
}())