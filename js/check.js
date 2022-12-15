
function dark() {
    var BODY = document.body ;
    var he = document.getElementById("header")
    BODY.classList.toggle("darck-mode")
    he.classList.toggle("darck-mode")
}

function opnenav(){
    document.getElementById("links").style.left = "0";
}
function closenav(){
    document.getElementById("links").style.left = "-100%";
}


function opnecolor(){
    var div = document.getElementById("colors");
    if(div.style.left == "-160px"){
        div.style.left = "0px";
    } else{
    div.style.left = "-160px";
    }
}

// function orgncolor() {
//     var div = window.getElementById("dori1");
//     div.classList.toggle("onecolor");
// }

function boxedbody() {
    var div = document.body;
    div.classList.toggle("boxedbody");
}



var loader = document.getElementById("load");
window.addEventListener("load" , function(){
    loader.style.display = "none";
})