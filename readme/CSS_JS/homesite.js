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

function scroller(selector, text){
    let targets = document.querySelectorAll(selector);//アニメーションさせたい要素//アニメーションタイミング

    let scroll = window.scrollY;//スクロール量を取得
    let h = window.innerHeight;//画面の高さを取得

    for(let target of targets) {
        let pos = target.getBoundingClientRect().top + scroll;//アニメーションさせたい要素の位置を取得
        if (scroll > pos - h ) {//スクロール量 > アニメーションさせたい要素の位置
            target.style.animation = text;
        }else if(scroll < pos - h ) {//スクロール量 > アニメーションさせたい要素の位置
            target.style.animation = "";
        }
    }
}

// BOOT STRAP
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

const overlay = document.getElementById("overlay"),
      modalWindow = document.getElementById("modalWindow"),
      baloon = document.getElementById("baloon");
      
document.getElementById("dl-btn").onclick = () =>{
    overlay.classList.add("action");
    modalWindow.classList.add("action");
    baloon.classList.add("action");
}
document.getElementById("overlay").onclick = () =>{
    overlay.classList.remove("action");
    modalWindow.classList.remove("action");
    baloon.classList.remove("action")
}

window.addEventListener('scroll', function() {//スクロールしたとき
    scroller(".js-scrollAnimation_toRight","toRight calc( 0.5s * var(--order)) ease");
    scroller(".js-scrollAnimation_fadeIn","fadeIn 0.8s ease");
});


