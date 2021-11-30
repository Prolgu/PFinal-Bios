// funcion para conseguir el ancho de pagina
// al llegar a <= 500px agrega la clase fake-div al elemento cont
const cont = document.getElementById("cont")
const welc = document.getElementById("welcome")
const winSizeCss = () => {
    let w = document.documentElement.clientWidth
    if (w <= 500) {
        cont.classList.add('fake-glass')
        welc.classList.add('fake-glass')
        // console.log(w)
    } else {
        cont.classList.remove('fake-glass')
        welc.classList.remove('fake-glass')
    }
}

//=====================================================================
const arrw = document.getElementById("arrowUp")

const arrowUp = (a = false) => {
    if (a === true) {
        arrw.style.visibility = "visible"
        arrw.classList.add('arrow-up')
    } else {
        arrw.style.visibility = "hidden"
        arrw.classList.remove('arrow-up')
    }
}
const scrollPosPerc = () => {
    //cursor actual
    let scrollTop = window.scrollY
    // cursor total
    let docHeight = document.body.offsetHeight
    // let winHeight = window.innerHeight;// total de la ventana
    //redondeo del scroll actual
    let scrollPercent = Math.round(scrollTop / docHeight * 100)
    scrollPercent >= 60 ? arrowUp(true) : arrowUp()

}

const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", mobileMenu)

function mobileMenu() {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
}


// consulto  alcarcar el script
winSizeCss()

// para empezar sin ver la flecha
arrowUp()


// listener para saber consultar en resize window <= '500px'
window.addEventListener("resize", winSizeCss)

//listener para el scroll
window.addEventListener("scroll", scrollPosPerc)

console.groupCollapsed('No mirar')
console.log('Dije que no miraras');
console.groupEnd();
