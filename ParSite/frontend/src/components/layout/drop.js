let drop = document.getElementById("has-drop");
let menu = document.getElementsByClassName("preview-wrapper");
console.log(menu);
menu.addEventListener("click", () => {
  drop.style.opacity = 1;
  console.log("1");
});
