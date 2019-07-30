$(document).ready(function(){



console.log("tekst z pliku");
var x = 5;
var y = 10;

console.log("zawartosc x "+ x);
console.log("zawartosc y "+ y);
console.log("suma "+ (x+y));

function multiply(a,b){
    console.log(a*b);
}
function compare(a,b){
    if(a>b){
        console.log(a+" jest wieksze");
    }else if(a<b){
        console.log(b+" jest wieksze");
    }else console.log(a+" i "+b+" sa rowne");
}
multiply(x,y);
compare(3,3);
///////////////////
var tekst = document.querySelector(".paragraf");
console.log(tekst);
var obrazek = document.getElementsByClassName("logopic");
console.log(obrazek);

var scriptButton = document.querySelector(".myBut");
    scriptButton.onclick = function(){console.log("click!")}

var jqButton = $('.button');
    jqButton.on("click", changeBG);

var section = $('.mySec');
function changeBG(){
    section.toggleClass("jqActiv");
    console.log("JQu works!");
}

console.log(tekst.textContent+"<-moj tekst tu jest");

var jqTekst = $('.paragraf');
console.log(jqTekst.text());

jqTekst.addClass("nowa-klasa");
//////////
var myDiv = $('.emptyDiv');
jqButton.on("click",function(){
    var temp = $(this).text();
    console.log(temp);
    myDiv.append(temp);
   // myDiv.text(">>"+temp+ "<<")
});

var jqImg = $(".logopic");
jqImg.show();

var jqButton = $('.myBut');
var picVis = true;
jqButton.on("click",function(){
    if(picVis==true){
        jqImg.hide();
        picVis = false;
    }else {
        jqImg.show();
        picVis = true;
    }
    

});




})