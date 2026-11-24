export const perguntas = [
    {
        enunciado: "Você descobre uma inteligência artificial capaz de responder perguntas e criar imagens e áudios realistas. Qual é sua primeira reação?",
        alternativas: [
            {
                texto: "Fico impressionado, mas também preocupado com os riscos.",
                categoria: "cautela"
            },
            {
                texto: "Fico animado com as possibilidades que essa tecnologia oferece.",
                categoria: "inovacao"
            }
        ]
    },
    {
        enunciado: "Sua professora pede um trabalho sobre tecnologia em sala de aula. Como você decide pesquisar?",
        alternativas: [
            {
                texto: "Uso uma ferramenta de IA para encontrar informações e depois confiro as fontes.",
                categoria: "responsabilidade"
            },
            {
                texto: "Faço pesquisas por conta própria e desenvolvo minhas próprias ideias.",
                categoria: "autonomia"
            }
        ]
    },
    {
        enunciado: "A turma começa a discutir como a IA pode mudar o mercado de trabalho. Qual ponto você destaca?",
        alternativas: [
            {
                texto: "É importante proteger os trabalhadores e preparar as pessoas para as mudanças.",
                categoria: "cautela"
            },
            {
                texto: "A IA pode criar novas profissões e abrir oportunidades.",
                categoria: "inovacao"
            }
        ]
    },
    {
        enunciado: "Você precisa criar uma imagem para representar sua opinião sobre inteligência artificial. O que faz?",
        alternativas: [
            {
                texto: "Crio a imagem utilizando uma ferramenta de desenho tradicional.",
                categoria: "autonomia"
            },
            {
                texto: "Experimento um gerador de imagens por IA e ajusto o resultado.",
                categoria: "inovacao"
            }
        ]
    },
    {
        enunciado: "Um colega entrega um trabalho feito inteiramente por IA, sem conferir as informações. Como você reage?",
        alternativas: [
            {
                texto: "Sugiro revisar os dados, conferir as fontes e acrescentar ideias próprias.",
                categoria: "responsabilidade"
            },
            {
                texto: "Acho válido usar a ferramenta, mas é importante entender o conteúdo apresentado.",
                categoria: "inovacao"
            }
        ]
    }
];

export function sortearReflexao() {
    const reflexoes = [
        "Uma tecnologia útil também precisa ser usada com responsabilidade.",
        "O pensamento crítico continua importante, mesmo com ferramentas inteligentes.",
        "O futuro da IA depende das decisões de pessoas, empresas e governos.",
        "Aprender a colaborar com novas tecnologias pode abrir caminhos.",
        "A tecnologia muda rapidamente, mas nossas escolhas continuam importantes."
    ];

    const indice = Math.floor(Math.random() * reflexoes.length);

    return reflexoes[indice];
}
