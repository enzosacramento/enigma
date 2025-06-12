const enigmas = [
  {
    pergunta: "Começa com a letra do nosso mês especial, e foi onde demos o primeiro passo.",
    resposta: "junho",
    mensagem: "Sim... Junho. Nosso começo. Onde tudo mudou. "
  },
  {
    pergunta: "É doce, mas não se come. Aparece quando você sorri para mim.",
    resposta: "olhar",
    mensagem: "Seu olhar é meu lugar favorito. "
  },
  {
    pergunta: "Se eu tivesse que viver tudo de novo, começaria onde?",
    resposta: "com você",
    mensagem: "Você é minha resposta em qualquer tempo. Vá até a gaveta do criado-mudo. "
  }
];

let etapaAtual = 0;

const output = document.getElementById('output');
const input = document.getElementById('input');

function mostrarPergunta() {
  output.innerText += `\n ${enigmas[etapaAtual].pergunta}\n`;
}

function processando(callback) {
  output.innerText += "\nProcessando";
  let pontos = 0;
  const interval = setInterval(() => {
    if (pontos < 3) {
      output.innerText += ".";
      pontos++;
    } else {
      clearInterval(interval);
      output.innerText += "\n";
      callback();
    }
  }, 500);
}

function verificarResposta(resposta) {
  input.disabled = true;

  processando(() => {
    if (resposta.toLowerCase().trim() === enigmas[etapaAtual].resposta) {
      output.innerText += ` ${enigmas[etapaAtual].mensagem}\n`;
      etapaAtual++;
      if (etapaAtual < enigmas.length) {
        mostrarPergunta();
      } else {
        output.innerText += "\n Fim da jornada... mas o amor continua. Feliz Dia dos Namorados! \n";
        input.style.display = 'none';
      }
    } else {
      output.innerText += " Hmm... ainda não. Tente outra vez.\n";
    }
    input.disabled = false;
    input.focus();
  });
}

input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    const resposta = input.value;
    output.innerText += `\n> ${resposta}`;
    input.value = '';
    verificarResposta(resposta);
  }
});

output.innerText = " Bem-vinda(o) à surpresa mais romântica do ano...\n\n";
mostrarPergunta();
