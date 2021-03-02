function formvalidation() {
    var email = document.getElementById("email");
    var name = document.getElementById("name");
    var phone = document.getElementById("phonenumber"); 
    var message= document.getElementById("message"); 
    
    var entirePage = document.getElementById("contact")
    //Generate thank you message
    entirePage.style.opacity = "0.2";
    //var div = document.createElement("div");
    //div.classList.add("fixedformmessage");
    //document.body.appendChild(div);
    //alert("your message has been received");

}
var entirePage = document.getElementById("contact")
//Generate thank you message
entirePage.style.opacity = "0.2";

var submitbutton = document.getElementById("submitbutton");
var counter = 1;

submitbutton.addEventListener('click', function(){
    var div = document.createElement("div");
    
    div.classList.add("fixedformmessage");
    document.body.appendChild(div);
    alert("yhello");
},false)