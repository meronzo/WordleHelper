var navLinks = document.getElementById("nav-links");
var modalMask = document.getElementById("modal-mask");
function showMenu(){
    navLinks.style.right = "0";
    showMask();
}
function hideMenu(){
    navLinks.style.right = "-200px";
    hideMask()
}

function showMask(){
    modalMask.style.visibility = "visible";
    modalMask.style.opacity = "1";
}
function hideMask(){
    modalMask.style.visibility = "hidden";
    modalMask.style.opacity = "0";
}