const imagenes = document.querySelector('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const muk1 = document.querySelector('.muk');

const nodos = document.querySelectorAll('.img-galeria');
const array = Array.from(nodos);

array.forEach(imagen => {
   imagen.addEventListener('click', ()=>{
     aparecerImagen(imagen.getAttribute('src'))
    })
})


contenedorLight.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showimage')
        muk1.style.opacity = '1'
    }
})


const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showimage')
     muk1.style.opacity = '0'
}