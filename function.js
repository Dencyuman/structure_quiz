//変数の宣言
let length; //梁の長さ
let power; //外力の大きさ
let stress; //応力の大きさ
let trueAnswer; //正答の値
let userAnswer; //解答の値
let random1; //乱数1~3
let random2;
let random3;
let number1; //問題変数1~3
let number2;
let number3;
let correct; //正解メッセージ
let incorrect; //不正解メッセージ

let correctAnswer; //答え表示機能()
let correctAnswerHint;

let canvas; //canvasタグ本体
let ctx; //context
let canvasWidth; //canvasタグの横幅
let center; //canvasタグの中央
let drawSimpleBeam; //単純梁の作図
let drawSizeLines; //寸法線等の作図
let drawOtherLines; //その他の線の作図
let writeLetter; //文字の記入

/*
ロード時に行う処理
・問題の変数作成→makeRandomVariable()
・作製した問題の必要な数値を表示→addValue()
・正答計算→calculateAnswer()
・図表示→drawFigure()
*/
window.onload = function () {
    makeRandomVariable();
    addValue();
    calculateAnswer();
    drawFigure();

    correctAnswer = document.getElementById("correctAnswer");//臨時機能
    correctAnswer.innerHTML = trueAnswer;
}

let makeRandomVariable = function(){
    //変数の作成
    do{//random2よりrandom3の方が大きい場合にのみ許可
        random1 = (Math.floor(Math.random() * 11) + 1) * 2; //梁の長さ
        random2 = (Math.floor(Math.random() * 10) + 1) * 10; //外力の大きさ
        random3 = (Math.floor(Math.random() * 10) + 1) * 10; //左側支点反力の大きさ
    }while(random3 >= random2);
    }

let addValue = function(){
    //作製した問題の必要な数値を表示
    number1 = document.getElementById("number1"); //梁の長さ
    number2 = document.getElementById("number2"); //外力の大きさ
    number3 = document.getElementById("number3"); //左側支点の反力の大きさ
    number1.innerHTML = random1; //梁の長さ
    number2.innerHTML = random2; //外力の大きさ
    number3.innerHTML = random3; //左側支点反力の大きさ
    length = random1;
    power = random2;
    stress = random3;
}

let calculateAnswer = function(){
    //正答計算
    trueAnswer = Math.round((stress * length / power) * 10) / 10 ;
    // alert(trueAnswer);
}

let drawFigure = function(){
    //変数代入
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext('2d');
    canvasWidth = canvas.width;
    center = canvasWidth / 2;

    //線の基本設定
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = "3";

    //文字の基本設定
    ctx.font = "24px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";

    //単純梁を作図
    drawSimpleBeam = function () {
        ctx.beginPath();
        ctx.moveTo(100, 100);
        ctx.lineTo(85, 130);
        ctx.lineTo(115, 130);
        ctx.lineTo(100, 100);
        ctx.lineTo(600, 100);
        ctx.lineTo(585, 130);
        ctx.lineTo(615, 130);
        ctx.lineTo(600, 100);
        ctx.stroke();
    }

    //寸法線を作図
    drawSizeLines = function () {
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = "2";

        ctx.beginPath();
        ctx.moveTo(100, 150);
        ctx.lineTo(100, 170);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(100, 160);
        ctx.lineTo(600, 160);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(600, 150);
        ctx.lineTo(600, 170);
        ctx.stroke();
    }

    //その他の線を作図
    drawOtherLines = function(){
        //距離ｘベクトル作図
        ctx.beginPath();
        ctx.moveTo(100, 60);
        ctx.lineTo(100, 90);

        ctx.moveTo(100, 70);
        ctx.lineTo(295, 70);

        ctx.moveTo(280, 65);
        ctx.lineTo(295, 70);
        ctx.lineTo(280, 75);
        ctx.stroke();

        //荷重ベクトル作図
        ctx.beginPath();
        ctx.moveTo(300, 40);
        ctx.lineTo(300, 100);
        ctx.moveTo(295, 85);
        ctx.lineTo(300, 100);
        ctx.lineTo(305, 85);
        ctx.stroke();

        //反力ベクトル作図
        ctx.strokeStyle = "#ff0000";
        ctx.lineWidth = "3"
        ctx.beginPath();
        ctx.moveTo(95, 120);
        ctx.lineTo(100, 105);
        ctx.lineTo(105, 120);
        ctx.moveTo(100, 105);
        ctx.lineTo(100, 170);
        ctx.stroke();
    }

    //文字を記入
    writeLetter = function(){
        ctx.fillText(length + "m", center, 160);
        ctx.fillText(power + "kN", 300, 40);
        ctx.textBaseline = "top";
        ctx.fillText(stress + "kN", 100, 170);
        ctx.font = "30px serif";
        ctx.fillText("x", 395 / 2, 70);
    }

    //関数を実行
    drawSimpleBeam();
    drawSizeLines();
    drawOtherLines();
    writeLetter();
}


/*
「答え合わせ」ボタンを押された時の処理
・onload関数で作成した正答を用いて答え合わせをする。
・正誤を表示する
*/
let checkAnswer = function(){
    userAnswer = document.getElementById("answer").value;
    correct = document.getElementById("correct");
    incorrect = document.getElementById("incorrect");
    correctAnswerHint = document.getElementById("correctAnswerHint");
    if(userAnswer == trueAnswer){
        correct.style.display = "block";
        incorrect.style.display = "none";
        correctAnswerHint.style.display = "none";
    }else{
        correct.style.display = "none";
        incorrect.style.display = "block";
        correctAnswerHint.style.display = "block";
    }
}
