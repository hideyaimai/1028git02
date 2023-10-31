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
    $(".items").attr("src",imagepath);
})

$(".pickgu").on("click",function(){
    $(".myhandsname").html("グー")
    $(".myhandpicture").attr("src", "img/janken_gu.png");
    playerhands = "グー";
})

$(".pickchoki").on("click",function(){
    $(".myhandsname").html("チョキ")
    $(".myhandpicture").attr("src", "img/janken_choki.png");
    playerhands = "チョキ";
})

$(".pickpa").on("click",function(){
    $(".myhandsname").html("パー")
    $(".myhandpicture").attr("src", "img/janken_pa.png");
    playerhands = "パー";
})

$(".pickpa").on("click",function() {
    if(computerhands === "グー"){
        $(".resulttext").html("勝ち")
    }
    else if(computerhands === "チョキ"){
        $(".resulttext").html("負け")
    }
    else{
        $(".resulttext").html("あいこ")
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
        $(".resulttext").html("負け")
    }
    else if(computerhands === "チョキ"){
        $(".resulttext").html("あいこ")
    }
    else{
        $(".resulttext").html("勝ち")
    }
});