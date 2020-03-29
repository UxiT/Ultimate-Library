let drop = document.getElementById("has-drop");
let menu = document.getElementsByClassName("preview-wrapper")[0];
let slider = document.getElementsByClassName("slider-trigger")[0];
let darkMode = document.getElementsByClassName("Dark-mode");

menu.addEventListener('click', ()=>{
    if(drop.style.opacity == 0){
        drop.style.opacity = 1;
    }else{
        drop.style.opacity = 0;
    }
})

