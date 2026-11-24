import { contarCategorias } from "./utilidades.js";

export function gerarResultado(escolhas) {

    const contagem = contarCategorias(escolhas);

    const perfis = [
        {
            chave: "responsabilidade",
            nome: "O Guardião da Responsabilidade",
            texto: "Você acredita que a inteligência artificial deve ser utilizada com consciência. Para você, verificar informações, respeitar limites e pensar nas consequências são atitudes fundamentais."
        },
        {
            chave: "inovacao",
            nome: "O Explorador do Futuro",
            texto: "Você tem curiosidade sobre novas tecnologias e gosta de descobrir possibilidades. Acredita que a inteligência artificial pode transformar o mundo e abrir caminhos que ainda nem imaginamos."
        },
        {
            chave: "cautela",
            nome: "O Observador Crítico",
            texto: "Você entende que o avanço tecnológico também traz desafios. Preocupa-se com as pessoas, com o mercado de trabalho e com os impactos sociais da inteligência artificial."
        },
        {
            chave: "autonomia",
            nome: "O Pensador Independente",
            texto: "Você valoriza a criatividade, o conhecimento próprio e a liberdade de pensamento. Para você, a inteligência artificial deve funcionar como uma ferramenta de apoio, nunca como substituta da capacidade humana."
        }
    ];

    let perfilEscolhido = perfis[0];
    let maiorPontuacao = -1;

    // Analisa as categorias escolhidas.
    for (const perfil of perfis) {

        const pontos = contagem[perfil.chave] || 0;

        if (pontos > maiorPontuacao) {
            maiorPontuacao = pontos;
            perfilEscolhido = perfil;
        }
    }

    let mensagem;

    if (escolhas.length === 0) {

        mensagem = "Nenhuma decisão foi registrada.";

    } else if (maiorPontuacao >= 3) {

        mensagem = "Suas decisões mostram uma tendência forte. Você possui uma visão marcante sobre o papel da inteligência artificial no futuro.";

    } else {

        mensagem = "Suas decisões demonstram equilíbrio entre diferentes perspectivas. O futuro da inteligência artificial precisa de pessoas capazes de considerar vários pontos de vista.";
    }

    return {
        nome: perfilEscolhido.nome,
        texto: perfilEscolhido.texto,
        mensagem: mensagem
    };
}
