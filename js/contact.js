
/////////
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


function sendMail() {
    var params = {
        name : document.getElementById("fullname").Value,
        email : document.getElementById("email_id").Value,
        message : document.getElementById("message").Value
    };
    // emailjs.send("service_1hz59ub", "template_wqyzeyt", params).then(function (res){
    //     alert("Success! " + res.status);
    // })


    const serviceID = "service_puacldb";
    const templateID = "template_7uplftr";

    emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
        document.getElementById("fullname").value = "";
        document.getElementById("email_id").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch( (err) => console.log(err));
}


var loader = document.getElementById("load");
window.addEventListener("load" , function(){
    loader.style.display = "none";
})

