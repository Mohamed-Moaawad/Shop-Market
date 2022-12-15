
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



function opnenav(){
    document.getElementById("links").style.left = "0";
}
function closenav(){
    document.getElementById("links").style.left = "-100%";
}





let form = document.querySelector("form");
let chat = document.getElementById("chat-body");
let msg = document.getElementById("message");

async function getBot() {
    const responsText = await fetch("bot.json");
    const data = await responsText.json();

    form.onsubmit = (e) => {
        e.preventDefault();
        
        let msge = msg.value.trim().toLowerCase();

        // let inputmessage
        if (msge === ""){
            alert("please insert Value");
        } else{

            data.forEach(answer => {

                if(msge === answer.my_msg) {
                chat.innerHTML += `<p class="msg">${answer.my_msg}</p>`;
                setTimeout(() =>{
                    chat.innerHTML += `<p class="answer">${answer.bot_answer}</p>`;
                }, 900)
            }
            
            });

        
        }

        msg.value = ""
    }
}

getBot()



var loader = document.getElementById("load");
window.addEventListener("load" , function(){
    loader.style.display = "none";
})

 