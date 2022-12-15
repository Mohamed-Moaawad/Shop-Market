const myInput = document.getElementById("my-input");
function stepper(btn){
    let id = btn.getAttribute("id");
    let min = myInput.getAttribute("min");
    let max = myInput.getAttribute("max");
    let step = myInput.getAttribute("step");
    let val = myInput.getAttribute("value");
    let calcstep = (id == "increment") ? (step*1) : (step * -1);
    let newValue = parseInt(val) + calcstep;

    if (newValue >= min && newValue <= max){
        myInput.setAttribute("value", newValue);
    }

}


function opnenav(){
    document.getElementById("links").style.left = "0";
}
function closenav(){
    document.getElementById("links").style.left = "-100%";
}

function dark() {
    var BODY = document.body ;
    var he = document.getElementById("header")
    BODY.classList.toggle("darck-mode")
    he.classList.toggle("darck-mode")
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