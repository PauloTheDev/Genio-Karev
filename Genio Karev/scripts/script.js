//Capturas
const inputAsk = document.querySelector('.ask')
const answer = document.querySelector('.resposta')
const button = document.querySelector('button')
const body = document.querySelector('body')
const music = document.querySelector('#backMusic')


//Funções
function clear(name){
    answer.innerHTML = ''  
}

function randomNumber(){
    return Math.floor(Math.random() * 6)
}

function extraAnswers() {
    if(String(inputAsk.value).toLowerCase() === 'oi'){
        return 'Olá, o que quer saber?'
    }
    else if(String(inputAsk.value).toLowerCase() === 'tudo bem?'){
        return 'Como estou não importa'
    }
}
//Volume da música de fundo
music.volume = 0.2

const textAnswer = document.createElement = 'h1'


const listAnswers = ['Sim', 'Claro que sim!', 'Com certeza', 'Não', 'Definitivamente não', 'Preciso responder?']

//Variáveis, objetos, arrays
//=======================================
//Funcionamento da aplicação

button.addEventListener('click', () =>{


  if(String(inputAsk.value).toLowerCase() === 'oi' || String(inputAsk.value).toLowerCase() === 'tudo bem?' ){
      answer.innerHTML = extraAnswers()
  }
    else if(String(inputAsk.value) === ''){
        answer.innerHTML = 'Eu não leio mentes'
         setTimeout(() => {answer.innerHTML = ''}, 3000)
    }

    else{
       
        answer.innerHTML = `${listAnswers[randomNumber()]}`

    }
    
    
})



inputAsk.addEventListener('focus', () => {
    answer.innerHTML = ''
    inputAsk.value = ''
})


