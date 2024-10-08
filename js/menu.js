const muk = document.querySelector('.muk');
const menu = document.querySelector('.menu');

//console.log(menu)
//console.log(muk)


muk.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})


window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != muk  ){
        menu.classList.toggle("spread")
    }
})