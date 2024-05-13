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
