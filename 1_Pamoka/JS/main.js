var ps = document.querySelectorAll("p");
var p = ps[0];

var buttons = document.querySelectorAll("button");
var geltona = buttons[0];
var zalia = buttons[1];
var raudona = buttons[2];

geltona.addEventListener("click", function(){
    p.style.color = "yellow";
})

zalia.addEventListener("click", function(){
    p.style.color = "green";
})

raudona.addEventListener("click", function(){
    p.style.color = "red";
})

var imgs = document.querySelectorAll("img");
var img1 = imgs[0];
var padidinti = buttons[3];
var sumazinti = buttons[4];

padidinti.addEventListener("click", function(){
    img1.style.width = "250px";
})

sumazinti.addEventListener("click", function(){
    img1.style.width = "80px";
})

var img2 = imgs[1];
var spalvotas = buttons[5];
var nespalvotas = buttons[6];

nespalvotas.addEventListener("click", function(){
    img2.style.filter = "grayscale(100%)";
})

spalvotas.addEventListener("click", function(){
    img2.style.filter = "grayscale(0%)";
})

var headers = document.querySelectorAll("h3");
var header1 = headers[0];
var ok = buttons[7];

ok.addEventListener("click", function(){
    if(header1.style.display === "none"){
        header1.style.display = "block";
    } else {
        header1.style.display = "none";
    }
})

var forms = document.querySelectorAll("form");
var form1 = forms[0];
var komentaras = buttons[8];
var submit = buttons[9];

komentaras.addEventListener("click", function(){
    form1.style.display = "block";
})

submit.addEventListener("click", function(){
    alert("Dekojame uz jusu nuomone.")
    form1.style.display = "none";
})

var img3 = imgs[2];
var kaireje = buttons[10];
var desineje = buttons[11];
var paslepti = buttons[12];
var nukelti = buttons[13];
var atstatyti = buttons[14];
var ps = document.querySelectorAll("p");
var p1 = ps[5];

kaireje.addEventListener("click", function(){
    img3.style.display = "block";
    img3.style.float = "left";
})

desineje.addEventListener("click", function(){
    img3.style.display = "block";
    img3.style.float = "right";
})

paslepti.addEventListener("click", function(){
    img3.style.display = "none";
})

nukelti.addEventListener("click", function(){
    img3.style.display = "none";
    p1.appendChild(img3);
    img3.style.display = "block";
})

atstatyti.addEventListener("click", function(){
    location.reload();
})