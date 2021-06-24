const video_home = document.querySelector(".home_video")
const boton_header  = document.querySelector(".menu-circle")
const menu_mobile  = document.querySelector(".menu-mobile")
const boton_action = document.querySelector(".action")
const titulo = document.querySelector(".am1")

const saludo = [
    'hola',
    'como estas',
    'bienvenido a nuestra pagina oficial',
]

function animar(titulo){

    setTimeout(function(){titulo.innerHTML = saludo[0]}, 0)
    setTimeout(function(){titulo.innerHTML = saludo[1]}, 1000)
    setTimeout(function(){titulo.innerHTML = saludo[2]}, 2000)

    setTimeout(function(){titulo.innerHTML = saludo[0]}, 5000)
    setTimeout(function(){titulo.innerHTML = saludo[1]}, 6000)
    setTimeout(function(){titulo.innerHTML = saludo[2]}, 8000)
2
}
animar(titulo)

boton_header.addEventListener("click", function mostrarMenu(){
    menu_mobile.classList.toggle("active")
    boton_header.classList.toggle("circle-active")
})

boton_action.onclick = () => video_home.muted = !video_home.muted

window.addEventListener('scroll', function(){
        let value = 1 + window.scrollY / -600;
        video.style.opacity = value
})

VanillaTilt.init(document.querySelectorAll(".artist-card"), {
    max: 25,
    speed: 200
});