const main = document.querySelector("main")
const video_home = document.querySelector(".home_video")
const boton_header  = document.querySelector(".menu-circle")
const menu_mobile  = document.querySelector(".menu-mobile")
const boton_action = document.querySelector(".action")
const titulo = document.querySelector(".am1")

const saludo = [
    'Hola',
    'como estas?',
    'bienvenido a nuestra pagina web',
]


boton_header.addEventListener("click", function mostrarMenu(){
    menu_mobile.classList.toggle("active")
    boton_header.classList.toggle("circle-active")
    main.classList.toggle("ocultar")
})

boton_action.onclick = () => video_home.muted = !video_home.muted

window.addEventListener('scroll', function(){
        let value = 1 + window.scrollY / -600;
        video_home.style.opacity = value
})

VanillaTilt.init(document.querySelectorAll(".artist-card"), {
    max: 25,
    speed: 200
});