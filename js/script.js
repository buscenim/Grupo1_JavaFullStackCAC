if(document.getElementById("btn-Modal")){
    var modal = document.getElementById("signIn-Modal");
    var button = document.getElementById("btn-Modal");
    var span = document.getElementsByClassName("close")[0];
    var body = document.getElementsByTagName("body");

    button.onclick = function(){
        modal.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function(){
        modal.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }
}