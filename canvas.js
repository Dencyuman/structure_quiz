let canvas;
let ctx;
let canvasWidth;
let center;
let drawSimpleBeam;
let drawOtherLines;

window.onload = function(){
    //変数代入
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext('2d');
    canvasWidth = canvas.width;

    //線の基本設定
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = "6";

    //単純梁を作図
    drawSimpleBeam = function(){
        ctx.beginPath();
        ctx.moveTo(100, 100);
        ctx.lineTo(85, 130);
        ctx.lineTo(115, 130);
        ctx.lineTo(100, 100);
        ctx.lineTo(1100, 100);
        ctx.lineTo(1085, 130);
        ctx.lineTo(1115, 130);
        ctx.lineTo(1100, 100);
        ctx.closePath();
        ctx.stroke();
    }

    //その他補助線を作図
    drawOtherLines = function(){
        ctx.beginPath();
        ctx.moveTo(100, 150);
        ctx.lineTo(100, 170);
        ctx.lineTo(100, 160);
        ctx.lineTo(600, 160);
        ctx.lineTo(600, 150);
        ctx.lineTo(600, 170);
        ctx.closePath();
        ctx.stroke()
    }

    
    }

    //作図
    drawSimpleBeam();
    drawOtherLines();


