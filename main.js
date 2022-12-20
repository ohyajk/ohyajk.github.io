const homeBtn = document.querySelector('#homeBtn')
const homeSec = document.querySelector('#homeSec')

homeBtn.addEventListener('click', ()=> {
    homeSec.style.display = 'flex'
    aboutSec.style.display = 'none'
    proSec.style.display = 'none'
    conSec.style.display = 'none'
})

const aboutBtn = document.querySelector('#aboutBtn')
const aboutSec = document.querySelector('#aboutSec')

aboutBtn.addEventListener('click', ()=> {
    homeSec.style.display = 'none'
    aboutSec.style.display = 'flex'
    proSec.style.display = 'none'
    conSec.style.display = 'none'
})

const proBtn = document.querySelector('#proBtn')
const proSec = document.querySelector('#proSec')

proBtn.addEventListener('click', ()=> {
    homeSec.style.display = 'none'
    aboutSec.style.display = 'none'
    proSec.style.display = 'flex'
    conSec.style.display = 'none'
})

const conBtn = document.querySelector('#conBtn')
const conSec = document.querySelector('#conSec')

conBtn.addEventListener('click', ()=> {
    homeSec.style.display = 'none'
    aboutSec.style.display = 'none'
    proSec.style.display = 'none'
    conSec.style.display = 'flex'

})