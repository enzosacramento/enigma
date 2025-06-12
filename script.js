const enigmas = [
  {
    pergunta: "lembra o mes em que isso tudo começou?",
    resposta: "setembro",
    mensagem: "pois é, foi tão inesperado e de repente que eu nem vi o mês passar, mesmo que eu contasse cada segundo esperando vc me responder, ou esperando o dia seguinte pra literalmente só te ver na escola pq eu não tinha coragem de chegar pra falar nem um oi(e qundo eu mandei uma cantada e vc disse q ia mandar pra pessoa que você gosta foi sacanagem pura tá), na vdd quando eu tive foi bem engraçado e eu pensei que ali ja era tudo (mal sabia oq estava por vir), esse início foi bem curioso pq tipo, como VOCÊ poderia gostar de mim, e isso não entrava na minha cabeça, mas msm dps de cair na sua frente, lançar um feitiço todo travado, algo ainda me impulsionava bastante, e eu me perco nessa parte do tempo pq o momento em q eu me convenci q realmente tava acontecendo foi quando vc tava em chamada com a sua mãe e me mandou comer aquela esfirra, sua voz ficou ecoando na minha cabeça o dia todo falando aquilo, e ali me surgiu um sentimento diferente, não era mais a curiosidade do que ia ser, mas do que ja estava sendo, então nesse período, ou antes, dps você entrou nas minhas orações, e eu pedi a Deus um unico sinal de que eu devia seguir esse caminho, e no dia seguinte você literalmente fala dEle pra mim, isso ja me aqueceu o coração a um nível gigante, e dali pra frente seu perfume e seu abraço passaram a ser uma mistura de sentimento muito boa,acho q a proxima data marcante por aí foi la quando a gente se fuzilou de beijoca pq achou que não ia se ver de novo..."
  },
  {
    pergunta: "lembra quando foi?",
    resposta: "interclasse",
    mensagem: "eu acabei de lembrar de algo na vdd antes ainda q foi muito MUITO bom, que foi no dia das crianças, q a gente ficou junto o dia todo, e vc subiu nas minhas costas, alias eu amo quando vc faz isso, mesmo q as vezes vc segure com o braço no meu pescosto e eu quase morra, enfim, voltando ao interclasse, eu percebi o quão maluco eu tava e apaixonado quando o vôlei e uma camisa de banda não eram a minha preocupação, e sim ver vc e estar com a camisa de beijocas, que aliás desde q vc fez ela eu ja estava de olho, e caraca, eu to ficando velho pq eu simplesmente esqueci que antes mesmo disso teve A FORMATURA DO PEDRO, cujo dia também foi mt curioso, vc tava extremamente linda (como sempre) e eu tava doidinho pra te beijar, mas eu feiamente travei,e foi justamente pensando nisso q eu lembrei do primeiro e emocionante selinho que eu te dei, foi rapido, mas me paralizou pelo resto do dia, assim como no dia seguinte, onde eu fui literalmente fuzilado,e justamente por aquele sentimento de que nn iria se ver mais, mas opa, mesmo que pouco a gente ainda se via na igreja, mas eu sinto q mesmo que nem aí a gente n se visse, ia acontecer do mesmo jeito, até quando eu finalmente fui na sua casa,e fiquei definitivamente com o uc na mão, mastd deu certo e MUITO certo, até o dia 28, onde ja com a benção eu podia te pedir em namoro finalmente, mesmo q não minha ideia ainda pq tinha q ser algo bem melhor,mas enfim, fato foi q aconteceu e com crtz a melhor escolha da minha vida, e pra não me estender mais ainda aqui eu quero dizer q nesses 10 meses q a gente se conhece foram suficientes pra eu me apaixonar e amar completamente seus olhos, seu nariz desenhadinho e a pintinha dele, sua boca, SEU CABELO que é impressionantemente perfeito em tudo, seu beijo que desde aqueles 5 segundos antes de eu subir no onibus, ja foi quase um paraíso, sua cintura e o quão perfeita ela fica na minha mão, ouvir sua voz me chamando de ridículo, enfim, eu amo de mais você, de mais mesmo Isabela, e eu vou fazer de tudo pra vc nunca ter dúvida disso, e antes de eu te entregar a ultima parte do texto eu preciso que você diga aqui... "
  },
  {
    pergunta: "quem ama mais?",
    resposta: "você",
    mensagem: "mesmo negando, obrigado por reconhecer"
  }
];

let etapaAtual = 0;

const output = document.getElementById('output');
const input = document.getElementById('input');

function mostrarPergunta() {
  output.innerText += `\n💭 ${enigmas[etapaAtual].pergunta}\n`;
}

function verificarResposta(resposta) {
  if (resposta.toLowerCase().trim() === enigmas[etapaAtual].resposta) {
    output.innerText += `\n✔️ ${enigmas[etapaAtual].mensagem}\n`;
    etapaAtual++;
    if (etapaAtual < enigmas.length) {
      mostrarPergunta();
    } else {
      output.innerText += "\n e acabou, da uma olhada no bolso direito da sua bolsa e Feliz Dia dos Namorados! ❤️\n";
      input.style.display = 'none';
    }
  } else {
    output.innerText += "\n❌ Hmm... ainda não. Tente outra vez.\n";
  }
}

input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    const resposta = input.value;
    output.innerText += `\nVocê: ${resposta}`;
    verificarResposta(resposta);
    input.value = '';
  }
});

output.innerText = "bem vinda a isso que eu n sei se eu posso chamar de carta, mas é como se fosse, é bem facil, começando por...\n\n";
mostrarPergunta();
