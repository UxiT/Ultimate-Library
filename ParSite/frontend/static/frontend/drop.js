let drop = document.getElementById("has-drop");
<<<<<<< HEAD
let menu = document.getElementsByClassName("preview-wrapper")[0];
let is_open;

menu.addEventListener("click", () => {
  if (drop.style.opacity == 0) {
    drop.style.opacity = 1;
  } else {
    drop.style.opacity = 0;
  }
});

//let drop_fun = new Promise((resolve, reject) => {});
=======
let menu = document.getElementsByClassName("dropdown")[0];


menu.addEventListener('click', ()=>{
    /*
    if(drop.style.opacity == 0){
        drop.style.opacity = 1;
    }else{
        drop.style.opacity = 0;
    }*/
    menu.style.height = '60%';

})

>>>>>>> 50622328e8ebc47e5aa7ae0f44dae4275aeda879
