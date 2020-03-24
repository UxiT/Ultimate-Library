/*
var mLogin = document.getElementById('modalLogForm');
var mReg = document.getElementById('modalRegForm');

var logbtn = document.getElementById("modalLogin");
var regbtn = document.getElementById("modalReg");

var closeBtn = document.getElementById('close');
var closereg = document.getElementById('closereg')

logbtn.addEventListener('click', openLogin);
regbtn.addEventListener('click', openReg);
closeBtn.addEventListener('click', closeLogin);
closereg.addEventListener('click', closeReg);

function openLogin(){
  mLogin.style.display = 'block';
}

function openReg(){
  mReg.style.display = 'block';
}

function closeLogin(w){
  mLogin.style.display = 'none';
}

function closeReg(w){
  mReg.style.display = 'none';
}

*/


let tiles = $('.tile-inner');
let canvas = $('.canvas')[0];

let base_color = tiles[0].style.backgroundColor;

/*
tiles.forEach((tile) => {
    tile.addEventListener('click', function(){
      tile.style.backgroundImage = "url'extures/oak-log.jpg'";
    })
});
*/


$.each(tiles, function(index, tile){
  tile.addEventListener("click", function(){
    //tile.style.backgroundImage = "url('http://127.0.0.1:8000/media/oak-log.jpg')";
    if (tile.style.backgroundColor != base_color) {
        tile.style.backgroundColor = base_color;
    }
    else {
      tile.style.backgroundColor = "red";
    }
  });
});


canvas.addEventListener("mousedown", function(){

    canvas.addEventListener('mouseover', function(event){
      event.target.style.backgroundColor = "red";
    })
});

canvas.addEventListener("mouseup", function(){
console.log("dd");
    canvas.addEventListener('mouseover', function(event){
      event.target.style.backgroundColor = event.target.style.backgroundColor;
    })
});
