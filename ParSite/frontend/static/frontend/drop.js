let drop = document.getElementById("has-drop");
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
