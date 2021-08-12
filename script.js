const arrowleft = document.getElementById("arrow-left");
const arrowright = document.getElementById("arrow-right");

arrowleft.addEventListener('click', function(){
    document.body.style.backgroundImage = "url(bg/bg6.jpg)";
});

arrowright.addEventListener('click', function(){
    document.body.style.backgroundImage = "url(bg/bg2.jpg)";
});