let checkbox = document.querySelector("input[name = 'mode']");


checkbox.addEventListener('change', function(){
    if(this.checked){
        transition();
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else{
        transition();
        document.documentElement.setAttribute('data-theme', 'light');
    }
});

let transition  = ()=>{
    document.documentElement.classList.add('transition');
    window.setTimeout(()=>{document.documentElement.classList.remove('transition')}, 1000);
}