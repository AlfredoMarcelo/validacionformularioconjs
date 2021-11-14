const contenedor = document.querySelector('.container')
const numero = document.querySelector('#numero')
let contador = 0

contenedor.addEventListener('click', (e) => {
    
    if(e.target.classList.contains('btn-info')){
        contador++
        numero.textContent = contador
    }
    if(e.target.classList.contains('btn-danger')){
        contador--
        numero.textContent = contador
    }

})






/*Esta es una manera de utilizar el addEventListener junto 
al textContent


const botonmas = document.querySelector('.btn-info')
const botonmenos = document.querySelector('.btn-danger')
const numero = document.querySelector('#numero')
let contador = 0


botonmas.addEventListener('click', () => {
    contador++
    numero.textContent = contador
})

botonmenos.addEventListener('click',() =>{
    contador--
    numero.textContent = contador
})*/