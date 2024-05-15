let menu = document.getElementById("menu");
let iconeBarras = document.getElementById("icone-barras");
let iconeX = document.getElementById("icone-x");

function abrirFecharMenu() {
  if (menu.classList.contains("menu-fechado")) {
    menu.classList.remove("menu-fechado");
    iconeX.style.display = "inline";
    iconeBarras.style.display = "none";
  } else {
    menu.classList.add("menu-fechado");
    iconeBarras.style.display = "inline";
    iconeX.style.display = "none";
  }
}

onresize = () => {
  menu.classList.remove("menu-fechado");
  iconeX.style.display = "inline";
  iconeBarras.style.display = "none";
};

let slides = ["primeiro-banner", "segundo-banner", "terceiro-banner"];

let slideAtual = 0;

let numeroSlides = slides.length;

let banner = document.querySelector(".banner");

banner.classList.add(slides[slideAtual]);

const mostrarProximoSlide = () => {
  banner.classList.remove(slides[slideAtual]);
  if (slideAtual < [numeroSlides - 1]) {
    slideAtual++;
  } else {
    slideAtual = 0;
  }
  banner.classList.add(slides[slideAtual]);
};

const mostrarSlideAnterior = () => {
  banner.classList.remove(slides[slideAtual]);
  if (slideAtual > 0) {
    slideAtual--;
  } else {
    slideAtual = numeroSlides - 1;
  }
  banner.classList.add(slides[slideAtual]);
};

const selecionarSlide = (indiceSlide) => {
  slides.forEach((slide) => banner.classList.remove(slide));
  slideAtual = indiceSlide;
  banner.classList.add(slides[indiceSlide]);
};

let listaCases = [
  {
    imagem: "https://unsplash.it/640/425?image=40",
    descricao:
      "Uma empresa de tecnologia lança um desafio de gamificação onde os funcionários devem propor e implementar ideias inovadoras",
  },
  {
    imagem: "https://unsplash.it/640/425?image=39",
    descricao:
      "Uma empresa de consultoria cria uma narrativa interativa de gamificação para seu programa de treinamento.",
  },
  {
    imagem: "https://unsplash.it/640/425?image=10",
    descricao:
      "Uma empresa de games implementa uma competição gamificada entre equipes que competem pelo topo do ranking",
  },
  {
    imagem: "https://unsplash.it/640/425?image=20",
    descricao:
      "Uma empresa de saúde promove o bem-estar dos funcionários através de um desafio de gamificação de condicionamento físico",
  },
];

const renderizarCases = () => {
  let elementoLista = document.getElementById("lista-cards");
  let template = "";

  listaCases.forEach(cardCase => {
    template += `<div class="card">
    <img src="${cardCase.imagem}" alt="">
    <p>"${cardCase.descricao}"</p>
    <button>Ver mais</button>
  </div>`;
 
  })
  elementoLista.innerHTML =  template;
}


