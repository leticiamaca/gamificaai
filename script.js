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


const carregarCases = () =>{ 
  //requisição dos dados que estão dentro do banco de dados para a API trazer
  fetch("http://localhost:3000/cases")

  //O then interpreta os dados que a API trouxe e transforma esses dados em um jeito que o JavaScript  entenda
// A resposta da API vem de modo Assincrono pode demorar e ele é uma promise quando uma função retorna uma promisse você pode sincronizar uma função dentro dos parenteses e quando colocamos um nome entre parenteses nós renomeamos essa promise(Resposta)
// Como a resposta vem com uma promisse o then executa quando essa função chega, se ela não chegar ou demorar muito ou até não chegar nós colocamos um catch com console.error
  .then( resposta => resposta.json()
   )

  .then ((dados) => {
listaCases = dados
renderizarCases()
  })

}

const solicitarOrcamento = () =>{
  //Pegar valores dos inputs
let valorNome = document.getElementById('campo-nome').value
let valorEmail = document.getElementById('campo-email').value
let valorDescricao = document.getElementById('campo-descricao').value
console.log(valorNome)
console.log(valorEmail)
console.log(valorDescricao)

  // organizar objetos com os valores
  let dadosForm = {
nome: valorNome,
email: valorEmail,
descricao: valorDescricao
  }
  // Enviar requisição para a API
  //127.0.0.1 siginifica localhost também porém em formato de número
  //Método http post - create -> cadastrar ou criar 
  fetch("http://localhost:3000/solicitacoes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
      
    },
    body: JSON.stringify(dadosForm)

  })
  .then(resposta => console.log(resposta))
  .catch(erro => console.error(erro))  //Caso erro - catch alert com mensagem de erro

    // Limpar os campos do formulário

      //Mostrar alert com mensagem de sucesso
    
}