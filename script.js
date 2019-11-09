//document.getElementsByClassName("container8");
//document.getElementById
//document.querySelector
//document.querySelectorAll

document.getElementById("burger").onclick = function(){
   addMenu();
}

function addMenu(){
    document.getElementById("menu").classList.toggle("show");
}