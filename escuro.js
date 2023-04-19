alert('Wellcome :) ')

var img = document.getElementById('image')

const toggleBtn = document.getElementById('toggle-mode')

const body = document.body



toggleBtn.addEventListener('click', function () {
    body.classList.toggle('dark-mode')
    img.src = 'https://cdn-icons-png.flaticon.com/512/2117/2117709.png'
 
    
})

function gerarTabuada() {

    var numero = parseInt(document.getElementById('number').value); //transformar em número inteiro graças ao parseInt

    var tabela = document.getElementById('tabela-tabuada');

    tabela.innerHTML = ""; //limpar a tabela antes de gerar outra
  
    img.src = 'https://cdn-icons-png.flaticon.com/512/3276/3276051.png'

    //gerar a tabuada

    for (var i = 1; i <= 100; i++) {
        var resultado = numero * i;
        var linha = "<tr><td>" + numero + "X" + i + "</td><td>" + resultado + "</td></tr>";//tr é tabela

        tabela.innerHTML += linha

    }

    tabela.style.backgroundColor = 'white'
    tabela.style.marginTop = '20px'
      tabela.style.color = 'black'


}



