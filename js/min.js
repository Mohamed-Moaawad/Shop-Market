function openform(){
    document.getElementById("myform").style.top = "145px";
}

function closform(){
    document.getElementById("myform").style.top = "510px";
}
function openpage(){
    document.getElementById("my-form").style.display = "flex";
}

function clospage(){
    document.getElementById("my-form").style.display = "none";
}

function dark() {
    var BODY = document.body ;
    var he = document.getElementById("header")
    BODY.classList.toggle("darck-mode")
    he.classList.toggle("darck-mode")
}

let title = document.querySelector('.online');
let ul = document.querySelector('ul');
let reload = document.querySelector('.reload');

window.onload = function(){
    if(window.navigator.onLine){
        online()
    }else{
        offline()
    }
}

window.addEventListener('online', function(){
    online()
});
window.addEventListener('offline', function(){
    offline()
});

reload.onclick = function(){
    window.location.reload();
}

function online(){    
    document.querySelector('.online').classList.add('hodeoffline')
}

function offline(){    
    document.querySelector('.online').classList.add('hodeonline')
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

function opnenav(){
    document.getElementById("links").style.left = "0";
}
function closenav(){
    document.getElementById("links").style.left = "-100%";
}

var loader = document.getElementById("load");
window.addEventListener("load" , function(){
    loader.style.display = "none";
})