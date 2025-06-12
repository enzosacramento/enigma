const output = document.getElementById("output");
const input = document.getElementById("input");
const bgDiv = document.getElementById("background");

const enigmas = [
  {
    pergunta: "meu nome?",
    resposta: "Enzo",
    mensagem: "sabe muito",
    imagemFundo: "fundo1.jpg" // 
  },
  {
    pergunta: "Segundo enigma: o que anda com os pés na cabeça?",
    resposta: "piolho",
    mensagem: "Certo. Um piolho vive na cabeça e se movimenta com os pés.",
    imagemFundo: "fundo2.jpg" // (cole o arquivo da imagem aqui)
  }
];

let etapaAtual = 0;

function exibirPergunta() {
  output.innerText += `\n${enigmas[etapaAtual].pergunta}\n`;
}

function verificarResposta(resposta) {
  const respostaCorreta = enigmas[etapaAtual].resposta.toLowerCase().trim();
  const respostaUsuario = resposta.toLowerCase().trim();

  if (respostaUsuario === respostaCorreta) {
    output.innerText += `\n> ${resposta}\n✔ ${enigmas[etapaAtual].mensagem}\n`;
    bgDiv.style.backgroundImage = `url('${enigmas[etapaAtual].imagemFundo}')`;

    etapaAtual++;
    if (etapaAtual < enigmas.length) {
      setTimeout(() => {
        output.innerText += `\n\n`;
        exibirPergunta();
      }, 1500);
    } else {
      output.innerText += `\n\n✨ Você concluiu todos os enigmas!`;
    }
  } else {
    output.innerText += `\n> ${resposta}\n❌ Resposta incorreta. Tente novamente.\n`;
  }

  input.value = "";
}

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && input.value.trim() !== "") {
    verificarResposta(input.value);
  }
});

// Inicializar com a primeira pergunta
exibirPergunta();
