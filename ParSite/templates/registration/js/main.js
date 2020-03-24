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
