// header
const header  = document.querySelector(".header")
const botonHeader  = document.querySelector(".header-button")
const menuMobile  = document.querySelector(".menu-mobile")

botonHeader.onclick = () => {
    menuMobile.classList.toggle("menu-active")
    botonHeader.classList.toggle("circle-active")
    main.classList.toggle("ocultar-main")
    main.addEventListener('click', () => {
        menuMobile.classList.remove('menu-active')
        botonHeader.classList.remove('circle-active')
        main.classList.remove('ocultar-main')
    })
}


// main
const main = document.querySelector("main")
const videoHome = document.querySelector(".home_video")
const homeTitle = document.querySelector(".home-title")
const homeButton = document.querySelector(".home-button")
const arrow = document.querySelector(".home-arrows")

const homeTitleContent1 = 'Escuchar: "mil voces"'
const homeTitleContent2 = 'Desilza hacia abajo'
homeTitle.textContent = homeTitleContent1


const homeButtonContent1 = 'activar audio'
const homeButtonContent2 = 'mutear'
homeButton.textContent =  homeButtonContent1 

homeButton.onclick = () => {
    videoHome.muted = !videoHome.muted 
    if(homeTitle.textContent === homeTitleContent1 || homeButton.textContent ===  homeButtonContent1){
        homeTitle.textContent = homeTitleContent2
        homeButton.textContent = homeButtonContent2
    }
    else if(homeTitle.textContent === homeTitleContent2 || homeButton.textContent ===  homeButtonContent2){
        homeTitle.textContent = homeTitleContent1
        homeButton.textContent = homeButtonContent1
    }
}

window.addEventListener('scroll', () => {
    let value = 1 + window.scrollY / -400;
    videoHome.style.opacity = value
})


// footer
const goTo = document.querySelector(".footer-title")

goTo.onclick = () => {
    window.scrollTo(0,0)
}




