function escrevendoLetra() {
    function ativaLetra(elemento, texto) {
      const arrTexto = texto.split('');
      elemento.innerHTML = '';
      arrTexto.forEach((letra, i) => {
        setTimeout(() => {
          elemento.innerHTML += letra;
        }, 75 * i);
      });
    }
  
    const titulo = document.querySelector('.digitando');
    const texto1 = "Concatene os registros pais e filhos do SPED no Excel!";
    const texto2 = "Conversor SPED PIS/COFINS!";
    let alternar = true;
  
    setInterval(() => {
      if (alternar) {
        ativaLetra(titulo, texto2);
        alternar = false;
      } else {
        ativaLetra(titulo, texto1);
        alternar = true;
      }
    }, 10000); // Alterar o tempo (em milissegundos) conforme necessário
  
    // Chama a função pela primeira vez para exibir o primeiro texto
    ativaLetra(titulo, texto1);
  }
  
  escrevendoLetra();
  

function ativacaoMenu(){
    const ativaMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria')


    ativaMenu.addEventListener('click', ()=>{
        ativaMenu.classList.toggle('fa-x')
        navMenu.classList.toggle('ativado')
    })
}


//ativacaoMenu()

function sobreMim(){
    const experiencia = document.querySelectorAll('.experience_content div');
    const botao = document.querySelectorAll('.experience_content ul li')
    const education = document.querySelectorAll('.education_content div');
    const botaoEducation = document.querySelectorAll('.education_content ul li')


    experiencia[0].classList.add('ativo')
    botao[0].classList.add('ativo')
    education[0].classList.add('ativo')
    botaoEducation[0].classList.add('ativo')

    function slideShow(index){
        experiencia.forEach((divisao)=>{
            divisao.classList.remove('ativo');
        });
        botao.forEach((item)=>{
            item.classList.remove('ativo')
        });
        experiencia[index].classList.add('ativo')
        botao[index].classList.add('ativo')
    }

    function slideShow2(index){
        education.forEach((divisao)=>{
            divisao.classList.remove('ativo');
        });
        botaoEducation.forEach((item)=>{
            item.classList.remove('ativo')
        });
        education[index].classList.add('ativo')
        botaoEducation[index].classList.add('ativo')
    }


    botao.forEach((event,index)=>{
        event.addEventListener('click', ()=>{
            slideShow(index)
        });
    });

    botaoEducation.forEach((div, index)=>{
        div.addEventListener('click', ()=>{
            slideShow2(index)
        })
    })
}

//sobreMim();

const listaALL = document.querySelectorAll('.projects_armazenamento ul li');
const buttonGeral = document.querySelectorAll('.project_navegacao li');
const buttonALL = document.querySelector('.project_models .all');

listaALL.forEach((item)=>{
    item.classList.add('ativo');
})

function removeClick(index){
    buttonGeral.forEach((item)=>{
        item.classList.remove('ativo');
    })
    buttonGeral[index].classList.add('ativo')
}

buttonGeral.forEach((event,index)=>{
    event.addEventListener('click', ()=>{
        removeClick(index)
    })
})

function showLista(lista, buttom = "all"){
    lista.forEach((item)=>{
        item.classList.remove('ativo');
    });

    if(buttom == 'design'){
        lista[0].classList.add('ativo')
        lista[1].classList.add('ativo')
    }
    if(buttom == 'graphic'){
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
    }

    if(buttom == 'website'){
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
        lista[6].classList.add('ativo');
        lista[7].classList.add('ativo');
    }

    if(buttom == 'all'){
        lista[0].classList.add('ativo')
        lista[1].classList.add('ativo')
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
        lista[6].classList.add('ativo');
        lista[7].classList.add('ativo');
    }
}

buttonGeral.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        let currentButton = e.target;
        if(currentButton.classList.contains('all')){
            showLista(listaALL);
        } if(currentButton.classList.contains('design')){
            showLista(listaALL, "design")
        }

        if(currentButton.classList.contains('graphic')){
            showLista(listaALL, "graphic")
        }

        if(currentButton.classList.contains('website')){
            showLista(listaALL, "website")
        }

        if(currentButton.classList.contains('all')){
            showLista(listaALL, "all")
        }
    });
});

function atualizarLabelArquivo(input) {
    var file = input.files[0];
    var fileSizeInMB = file.size / (1024 * 1024); // Converter para megabytes
  
    if (fileSizeInMB > 10) {
      // Arquivo excede o limite de tamanho
      alert("O arquivo selecionado excede o limite de tamanho de 10 MB. Por favor, para demonstração escolha um arquivo menor.");
      input.value = ""; // Limpar o valor do input para desfazer a seleção do arquivo
    }

    var customFileUpload = input.parentNode;
    if (input.files.length > 0) {
      document.getElementById("labelArquivo").textContent = "Arquivo selecionado";
      input.style.backgroundColor = "green";
      customFileUpload.style.backgroundColor = "green";
      //lerArquivoButton.disabled = false;
    } else {
      document.getElementById("labelArquivo").textContent = "Selecionar arquivo";
      input.style.backgroundColor = "";
      customFileUpload.style.backgroundColor = "";
      //lerArquivoButton.disabled = true;
    }
}

function atualizarPagina() {
    var lerArquivoButton = document.getElementById("lerArquivo");
    lerArquivoButton.textContent = "Gerar Excel";
    lerArquivoButton.style.backgroundColor = "blue";
  }
