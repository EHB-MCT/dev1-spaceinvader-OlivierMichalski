"use strict";


let canvas = document.querySelector("canvas");
canvas.width
= window.innerWidth;
canvas.height
= window.innerHeight;
let context = canvas.getContext('2d' );

drawInvader();

function drawInvader(){

    context.beginPath();
    context.rect(25 ,25 ,300 ,300 );
    context.fill()

    
    context.beginPath();
    context.fillStyle = "#66FF66"
    context.rect(50 ,50 ,50 ,50 );
    context.fill()


    context.beginPath();
    context.rect(100 ,100 ,50 ,50 );
    context.fill()
    
    context.beginPath();
    context.rect(50 ,100 ,50 ,50 );
    context.fill()
    
    context.beginPath();
    context.rect(100 ,150 ,50 ,50 );
    context.fill()
    
    context.beginPath();
    context.rect(150 ,150 ,50 ,50 );
    context.fill()
    
    context.beginPath();
    context.rect(200 ,150 ,50 ,50 );
    context.fill()

    context.beginPath();
    context.rect(200 ,100 ,50 ,50 );
    context.fill()
    
    context.beginPath();
    context.rect(250 ,100 ,50 ,50 );
    context.fill()
    
    context.beginPath();
    context.rect(250 ,50 ,50 ,50 );
    context.fill()
    
    context.beginPath();
    context.rect(150 ,50 ,50 ,50 );
    context.fill()


}