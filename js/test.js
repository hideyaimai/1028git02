let playerhands = "";
let computerhands = "";

$(".pickgu,.pickchoki,.pickpa").on("click",function () {
    // ここに処理を書く
    let random = Math.floor(Math.random()*3);
    let imagepath;

    if(random === 0){
        imagepath = "img/janken_gu.png";
        computerhands = "グー";
    }
    else if(random === 1){
        imagepath = "img/janken_choki.png";
        computerhands = "チョキ";
    }
    else if(random === 2){
        imagepath = "img/janken_pa.png";
        computerhands = "パー";
    }
    $(".enemyhandpicture").attr("src",imagepath);
})

$(".pickgu").on("click",function(){
    $(".myhandpicture").attr("src", "img/janken_gu.png");
    $(".pickgu").css("background-color","rgba(237, 202, 196, 0.4)")
    $(".pickchoki").css("background-color", "");
    $(".pickpa").css("background-color", "");
    playerhands = "グー";
})

$(".pickchoki").on("click",function(){
    $(".myhandpicture").attr("src", "img/janken_choki.png");
    playerhands = "チョキ";
    $(".pickgu").css("background-color","")
    $(".pickchoki").css("background-color", "rgba(237, 202, 196, 0.4)");
    $(".pickpa").css("background-color", "");
})

$(".pickpa").on("click",function(){
    $(".myhandpicture").attr("src", "img/janken_pa.png");
    playerhands = "パー";
    $(".pickgu").css("background-color","")
    $(".pickchoki").css("background-color", "");
    $(".pickpa").css("background-color", "rgba(237, 202, 196, 0.4)");
})

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

$(document).ready(function() {
    $(".confirmbutton").on("click", function() {
      $(".background-image").addClass("show");
      setTimeout(function() {
        $(".background-image").removeClass("show");
      }, 300); // 0.3秒後に背景画像を非表示にする
    });
  });
  