const main = document.querySelector("main")
const video_home = document.querySelector(".home_video")
const boton_header  = document.querySelector(".menu-circle")
const menu_mobile  = document.querySelector(".menu-mobile")
const homeBoton = document.querySelector(".home-boton")
const homeTitle = document.querySelector(".home-title")

homeTitle.innerHTML = 'Escuchar: "Mil Voces"'
homeBoton.textContent = 'ACTIVAR AUDIO'
boton_header.onclick = () => {
    menu_mobile.classList.toggle("active")
    boton_header.classList.toggle("circle-active")
    main.classList.toggle("ocultar")
}


homeBoton.onclick = () => {
    video_home.muted = !video_home.muted
    homeBoton.innerHTML = 'MUTEAR'
    homeTitle.innerHTML = 'Desliza hacia abajo'
    // homeBoton.classList.toggle('home-boton-inactive')
}

window.addEventListener('scroll', function(){
        let value = 1 + window.scrollY / -600;
        video_home.style.opacity = value
})

VanillaTilt.init(document.querySelectorAll(".artist-card"), {
    max: 25,
    speed: 200
});