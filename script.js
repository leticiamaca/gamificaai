let menu = document.getElementById("menu");
let iconeBarras = document.getElementById('icone-barras')
let iconeX = document.getElementById('icone-x')

function abrirFecharMenu() {
  if (menu.classList.contains("menu-fechado")) {
    menu.classList.remove("menu-fechado");
    iconeX.style.display = "inline"
    iconeBarras.style.display = "none"
  } else {
    menu.classList.add("menu-fechado");
iconeBarras.style.display = 'inline'
iconeX.style.display = 'none'
  }
}

onresize = () => {
    menu.classList.remove('menu-fechado');
    iconeX.style.display = 'inline';
    iconeBarras.style.display = 'none'
}

let slides = [
  'primeiro-banner',
  'segundo-banner',
  'terceiro-banner'
]

let slideAtual = 0

let numeroSlides = slides.length

let banner = document.querySelector('.banner')

banner.classList.add(slides[slideAtual])


const mostrarProximoSlide = () => {
  banner.classList.remove(slides[slideAtual])
  if(slideAtual < [numeroSlides - 1]){
slideAtual++
  }else{
    slideAtual = 0
  }
banner.classList.add(slides[slideAtual])

}

const mostrarSlideAnterior = () => {
  banner.classList.remove(slides[slideAtual])
if(slideAtual > 0){
  slideAtual--
}else{
  slideAtual = numeroSlides - 1
}
banner.classList.add(slides[slideAtual])


}
