let playerhands = "";
let computerhands = "";
let result = "";

// computerhandsをランダムに変更します。
$(".pickgu,.pickchoki,.pickpa").on("click",function () {
    // ここに処理を書く
    let random = Math.floor(Math.random()*3);

    if(random === 0){
        computerhands = "グー";
    }
    else if(random === 1){
        computerhands = "チョキ";
    }
    else if(random === 2){
        computerhands = "パー";
    }
})

// 以下3つはplayerhandsの変数を変更します。
$(".pickgu").on("click",function(){
    playerhands = "グー";
    $(".pickgu").css("background-color","rgba(237, 202, 196, 0.4)")
    $(".pickchoki").css("background-color", "");
    $(".pickpa").css("background-color", "");
})

$(".pickchoki").on("click",function(){
    playerhands = "チョキ";
    $(".pickgu").css("background-color","")
    $(".pickchoki").css("background-color", "rgba(237, 202, 196, 0.4)");
    $(".pickpa").css("background-color", "");
})

$(".pickpa").on("click",function(){
    playerhands = "パー";
    $(".pickgu").css("background-color","")
    $(".pickchoki").css("background-color", "");
    $(".pickpa").css("background-color", "rgba(237, 202, 196, 0.4)");
})

// 確定ボタンで変数をUIに反映します
$(".confirmbutton").on("click",function() {
    if(playerhands === "グー"){
        $(".myhandpicture").attr("src", "img/janken_gu.png");
    }
    else if(playerhands === "チョキ"){
        $(".myhandpicture").attr("src", "img/janken_choki.png");
    }
    else{
        $(".myhandpicture").attr("src", "img/janken_pa.png");
    }

    if(computerhands === "グー"){
        $(".enemyhandpicture").attr("src", "img/janken_gu.png");
    }
    else if(computerhands === "チョキ"){
        $(".enemyhandpicture").attr("src", "img/janken_choki.png");
    }
    else{
        $(".enemyhandpicture").attr("src", "img/janken_pa.png");
    }
});

// 以下3つは勝敗判定をします。
$(".pickpa").on("click",function() {
    if(computerhands === "グー"){
        $(".resulttext")
        .html("勝ち")
    }
    else if(computerhands === "チョキ"){
        $(".resulttext")
        .html("負け")
    }
    else{
        $(".resulttext")
        .html("あいこ")
    }
});

$(".pickgu").on("click",function() {
    if(computerhands === "グー"){
        $(".resulttext").html("あいこ")
    }
    else if(computerhands === "チョキ"){
        $(".resulttext").html("勝ち")
    }
    else{
        $(".resulttext").html("負け")
    }
});

$(".pickchoki").on("click",function() {
    if(computerhands === "グー"){
        $(".resulttext")
        .html("負け")
    }
    else if(computerhands === "チョキ"){
        $(".resulttext")
        .html("あいこ")
    }
    else{
        $(".resulttext")
        .html("勝ち")
    }
});