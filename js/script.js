'user strict'
let c = (e)=>document.querySelector(e);
let cs = (e)=>document.querySelectorAll(e);


let menuHamburguer = c('.menuHaburguer');
let menu = c('header');

menuHamburguer.addEventListener('click', ()=>{
    menu.classList.toggle('openMenu')
    if(menu.classList.contains('openMenu')){
        menu.style.display = 'flex'
    }else{
        menu.style.display = 'none'
    }
});