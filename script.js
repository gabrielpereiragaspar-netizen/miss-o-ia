import { perguntas, sortearReflexao } from "./perguntas.js";
import { gerarResultado } from "./resultado.js";
import { formatarTexto } from "./utilidades.js";

const introducao = document.querySelector("#introducao");
const quiz = document.querySelector("#quiz");
const resultado = document.querySelector("#resultado");

const perguntaElemento = document.querySelector("#pergunta");
const alternativasElemento = document.querySelector("#alternativas");

const contador = document.querySelector("#contador");
const porcentagem = document.querySelector("#porcentagem");
const progresso = document.querySelector("#progresso");

const iniciarBotao = document.querySelector("#iniciar");
const reiniciarBotao = document.querySelector("#reiniciar");

let perguntaAtual = 0;
let escolhas = [];
let respostaBloqueada = false;

function iniciarQuiz() {
    perguntaAtual = 0;
    escolhas = [];
    respostaBloqueada = false;

    introducao.classList.add("escondido");
    resultado.classList.add("escondido");
    quiz.classList.remove("escondido");

    progresso.style.width = "0%";

    mostrarPergunta();
}

function mostrarPergunta() {

    if (perguntaAtual >= perguntas.length) {
        mostrarResultado();
        return;
    }

    respostaBloqueada = false;

    const pergunta = perguntas[perguntaAtual];

    const numero = String(perguntaAtual + 1).padStart(2, "0");
    const total = String(perguntas.length).padStart(2, "0");

    const percentual = Math.round(
        ((perguntaAtual + 1) / perguntas.length) * 100
    );

    contador.textContent = `${numero} / ${total}`;
    porcentagem.textContent = `${percentual}%`;

    progresso.style.width = `${percentual}%`;

    document.querySelector("#numero-cenario").textContent = numero;

    perguntaElemento.textContent = formatarTexto(
        pergunta.enunciado
    );

    // Reinicia a animação da pergunta.
    const container = document.querySelector(".question-container");

    container.classList.remove("animar-pergunta");
    void container.offsetWidth;
    container.classList.add("animar-pergunta");

    alternativasElemento.replaceChildren();

    for (const [indice, alternativa] of pergunta.alternativas.entries()) {

        const botao = document.createElement("button");
        const letra = document.createElement("span");
        const texto = document.createElement("span");

        botao.type = "button";
        botao.className = "alternativa";

        letra.className = "letra";
        letra.textContent = String.fromCharCode(65 + indice);

        texto.textContent = formatarTexto(
            alternativa.texto
        );

        botao.append(letra, texto);

        botao.style.animationDelay = `${indice * 100}ms`;

        botao.addEventListener("click", () => {
            selecionarResposta(alternativa);
        });

        alternativasElemento.appendChild(botao);
    }
}

function selecionarResposta(alternativa) {

    if (respostaBloqueada) {
        return;
    }

    respostaBloqueada = true;

    escolhas.push(alternativa);

    perguntaAtual++;

    mostrarPergunta();
}

function mostrarResultado() {

    quiz.classList.add("escondido");
    resultado.classList.remove("escondido");

    const resultadoFinal = gerarResultado(escolhas);

    document.querySelector("#titulo-resultado").textContent =
        "O futuro chegou.";

    document.querySelector("#texto-resultado").textContent =
        resultadoFinal.texto;

    document.querySelector("#perfil").textContent =
        resultadoFinal.nome;

    document.querySelector("#total-escolhas").textContent =
        String(escolhas.length).padStart(2, "0");

    document.querySelector("#mensagem-final").textContent =
        `${resultadoFinal.mensagem} ${sortearReflexao()}`;

    resultado.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

iniciarBotao.addEventListener("click", iniciarQuiz);

reiniciarBotao.addEventListener("click", iniciarQuiz);
