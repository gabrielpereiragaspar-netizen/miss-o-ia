:root {
    --bg: #080b0a;
    --panel: #101512;
    --panel-light: #171e19;
    --green: #c5ff45;
    --white: #f1f2e9;
    --gray: #858d82;
    --border: rgba(255,255,255,0.10);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    background: var(--bg);
    color: var(--white);
    font-family: "Space Grotesk", sans-serif;
    overflow-x: hidden;
}

/* FUNDO */

.background-grid {
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: .13;

    background-image:
        linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px);

    background-size: 55px 55px;

    mask-image: linear-gradient(to bottom, black, transparent 90%);
}

.noise {
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: .035;
    z-index: 10;

    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E");
}

.orb {
    position: fixed;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    filter: blur(120px);
    pointer-events: none;
    opacity: .08;
}

.orb-1 {
    background: var(--green);
    top: 10%;
    left: -180px;
}

.orb-2 {
    background: #607a40;
    bottom: -180px;
    right: -100px;
}

/* ESTRUTURA */

.interface {
    width: min(1100px, 92%);
    min-height: 100vh;
    margin: auto;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
}

.topbar {
    height: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 2px;
}

.logo-icon {
    color: var(--green);
    font-size: 25px;
    animation: rotate 12s linear infinite;
}

.logo-light {
    color: var(--green);
}

.system-status,
.year,
.intro-tag,
.section-label,
.progress-info,
.question-number,
.answer-heading,
.quiz-counter,
.quiz-footer,
.global-footer,
.visual-label,
.visual-caption,
.side-info span,
.result-top,
.result-card-label,
.result-stats span {
    font-family: "Space Mono", monospace;
    font-size: 10px;
    letter-spacing: 1.5px;
}

.system-status {
    color: var(--gray);
}

.status-dot {
    display: inline-block;
    width: 7px;
    height: 7px;
    margin-right: 7px;
    border-radius: 50%;
    background: var(--green);
    box-shadow: 0 0 12px var(--green);
    animation: pulse 1.5s infinite;
}

.year {
    display: flex;
    align-items: center;
    gap: 12px;
    color: var(--gray);
}

.year strong {
    font-size: 15px;
    color: var(--green);
}

.linha-decorativa {
    height: 1px;
    background: var(--border);
}

/* INTRODUÇÃO */

.introducao {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 65px 0 35px;
    animation: aparecer .8s ease;
}

.intro-tag {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--gray);
}

.intro-tag span {
    width: 25px;
    height: 1px;
    background: var(--green);
}

.hero-content {
    display: grid;
    grid-template-columns: 1.2fr .8fr;
    align-items: center;
    gap: 40px;
    flex: 1;
    padding: 55px 0;
}

.hero-overline {
    font-family: "Space Mono", monospace;
    color: var(--green);
    font-size: 11px;
    letter-spacing: 2px;
    margin-bottom: 20px;
}

h1 {
    font-size: clamp(65px, 9vw, 115px);
    line-height: .86;
    letter-spacing: -8px;
    font-weight: 700;
}

h1 span {
    color: var(--green);
}

.hero-description {
    max-width: 430px;
    margin-top: 30px;
    color: var(--gray);
    font-size: 15px;
    line-height: 1.8;
}

.hero-question {
    margin-top: 18px;
    color: var(--white);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.5px;
}

.botao-iniciar {
    margin-top: 32px;
    min-width: 240px;
    padding: 18px 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    border: none;
    background: var(--green);
    color: #10150b;

    font-family: "Space Mono", monospace;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1px;

    cursor: pointer;
    transition: .3s;
}

.botao-iniciar:hover {
    background: white;
    transform: translateY(-4px);
    box-shadow: 0 12px 35px rgba(197,255,69,.15);
}

.arrow {
    font-size: 20px;
}

/* ELEMENTO CIRCULAR */

.visual-container {
    position: relative;
    padding: 25px;
    border: 1px solid var(--border);
    background: rgba(255,255,255,.015);
}

.visual-label,
.visual-caption {
    display: flex;
    justify-content: space-between;
    color: var(--gray);
}

.visual-circle {
    position: relative;
    width: min(100%, 330px);
    aspect-ratio: 1;
    margin: 30px auto;
    display: grid;
    place-items: center;
}

.circle {
    position: absolute;
    border: 1px solid rgba(197,255,69,.25);
    border-radius: 50%;
}

.circle-outer {
    inset: 0;
    border-style: dashed;
    animation: rotate 35s linear infinite;
}

.circle-middle {
    inset: 12%;
    border-color: rgba(197,255,69,.4);
    animation: rotate-reverse 22s linear infinite;
}

.circle-inner {
    inset: 25%;
    border-color: rgba(197,255,69,.6);
    box-shadow: 0 0 35px rgba(197,255,69,.08);
}

.visual-core {
    width: 100px;
    height: 100px;
    display: grid;
    place-items: center;
    border: 1px solid var(--green);
    background: rgba(197,255,69,.07);
    box-shadow: 0 0 55px rgba(197,255,69,.12);
    color: var(--green);
    font-size: 35px;
    font-weight: 700;
    transform: rotate(45deg);
}

.visual-core span {
    transform: rotate(-45deg);
}

.orbit-dot {
    position: absolute;
    top: 12%;
    right: 24%;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: var(--green);
    box-shadow: 0 0 20px var(--green);
}

.orbit-dot-2 {
    top: auto;
    right: auto;
    bottom: 16%;
    left: 19%;
    width: 7px;
    height: 7px;
    background: white;
}

.caption-value {
    color: var(--green);
}

.side-info {
    display: flex;
    gap: 35px;
    margin-top: 25px;
}

.side-info div {
    display: grid;
    gap: 7px;
}

.side-info span {
    color: var(--gray);
}

.side-info strong {
    font-size: 25px;
    color: var(--green);
}

.intro-bottom {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding-top: 20px;
    border-top: 1px solid var(--border);

    color: var(--gray);
    font-family: "Space Mono", monospace;
    font-size: 9px;
    letter-spacing: 1px;
}

/* QUESTIONÁRIO */

.quiz {
    flex: 1;
    padding: 60px 0 35px;
    animation: aparecer .5s ease;
}

.quiz-header {
    display: flex;
    justify-content: space-between;
    align-items: end;
}

.section-label {
    color: var(--green);
}

.quiz-header h2 {
    margin-top: 10px;
    font-size: 35px;
}

.quiz-counter {
    display: grid;
    gap: 7px;
    color: var(--gray);
    text-align: right;
}

.quiz-counter strong {
    font-size: 19px;
    color: var(--green);
}

.progress-container {
    margin: 40px 0 55px;
}

.progress-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    color: var(--gray);
}

#porcentagem {
    color: var(--green);
}

.trilho {
    height: 3px;
    background: #263027;
}

.progresso {
    width: 20%;
    height: 100%;
    background: var(--green);
    box-shadow: 0 0 15px var(--green);
    transition: width .5s ease;
}

.question-number {
    margin-bottom: 22px;
    color: var(--gray);
}

.question-number strong {
    color: var(--green);
}

.pergunta {
    max-width: 850px;
    margin-bottom: 35px;
    font-size: clamp(25px, 4vw, 39px);
    line-height: 1.3;
    letter-spacing: -1px;
}

.answer-heading {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    margin-bottom: 15px;
    color: var(--gray);
    font-size: 9px;
}

.alternativas {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
}

.alternativa {
    min-height: 125px;
    padding: 20px;
    display: flex;
    align-items: flex-start;
    gap: 15px;

    border: 1px solid var(--border);
    background: var(--panel);
    color: var(--white);

    text-align: left;
    font-size: 14px;
    line-height: 1.7;

    cursor: pointer;
    transition: .25s;
}

.alternativa:hover {
    border-color: var(--green);
    background: var(--panel-light);
    transform: translateY(-5px);
}

.letra {
    flex-shrink: 0;
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;

    background: rgba(197,255,69,.1);
    color: var(--green);

    font-family: "Space Mono", monospace;
    font-size: 12px;
}

.alternativa:hover .letra {
    background: var(--green);
    color: var(--bg);
}

.quiz-footer {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    padding-top: 20px;
    border-top: 1px solid var(--border);
    color: var(--gray);
    font-size: 9px;
}

/* RESULTADO */

.resultado {
    flex: 1;
    padding: 55px 0 35px;
    animation: aparecer .7s ease;
}

.result-top {
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--border);
    color: var(--gray);
}

.result-status {
    color: var(--green);
}

.result-content {
    max-width: 650px;
    margin: 55px auto;
}

.result-symbol {
    color: var(--green);
    font-size: 55px;
    margin-bottom: 25px;
    animation: rotate 15s linear infinite;
    width: fit-content;
}

.result-content h2 {
    margin-top: 15px;
    font-size: clamp(40px, 7vw, 70px);
    letter-spacing: -3px;
}

.result-intro {
    color: var(--gray);
    margin: 15px 0 30px;
}

.result-card {
    padding: 25px;
    background: var(--panel);
    border-left: 3px solid var(--green);
}

.result-card-label {
    color: var(--gray);
}

.result-card h3 {
    margin: 15px 0;
    font-size: 27px;
    color: var(--green);
}

.texto-resultado {
    color: #bdc5b9;
    line-height: 1.8;
    font-size: 14px;
}

.result-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-top: 20px;
}

.result-stats div {
    padding: 20px;
    border: 1px solid var(--border);
    display: grid;
    gap: 12px;
}

.result-stats span {
    color: var(--gray);
}

.result-stats strong {
    font-size: 27px;
    color: var(--green);
}

.mensagem-final {
    margin-top: 25px;
    color: var(--gray);
    line-height: 1.8;
    font-size: 14px;
}

.resultado .botao-iniciar {
    width: 100%;
}

/* RODAPÉ */

.global-footer {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    padding: 20px 0;
    border-top: 1px solid var(--border);
    color: #606b5e;
    font-size: 9px;
}

/* ANIMAÇÕES */

@keyframes aparecer {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulse {
    50% {
        opacity: .35;
        box-shadow: 0 0 3px var(--green);
    }
}

@keyframes rotate {
    to {
        transform: rotate(360deg);
    }
}

@keyframes rotate-reverse {
    to {
        transform: rotate(-360deg);
    }
}

/* CLASSES DE ESTADO */

.escondido {
    display: none !important;
}

/* RESPONSIVIDADE */

@media (max-width: 750px) {

    .hero-content {
        grid-template-columns: 1fr;
        gap: 55px;
    }

    .hero-right {
        max-width: 420px;
        width: 100%;
        margin: auto;
    }

    h1 {
        font-size: clamp(65px, 15vw, 100px);
    }

    .alternativas {
        grid-template-columns: 1fr;
    }

    .alternativa {
        min-height: 95px;
    }

    .quiz {
        padding-top: 40px;
    }
}

@media (max-width: 480px) {

    .interface {
        width: 90%;
    }

    .topbar {
        height: 70px;
    }

    .system-status {
        font-size: 8px;
    }

    .year {
        gap: 5px;
        font-size: 8px;
    }

    .year strong {
        font-size: 12px;
    }

    .introducao {
        padding-top: 45px;
    }

    .hero-content {
        padding: 45px 0;
    }

    h1 {
        font-size: 67px;
        letter-spacing: -5px;
    }

    .hero-description {
        font-size: 13px;
    }

    .visual-container {
        padding: 15px;
    }

    .visual-circle {
        max-width: 270px;
    }

    .intro-bottom {
        font-size: 7px;
    }

    .quiz-header h2 {
        font-size: 27px;
    }

    .pergunta {
        font-size: 26px;
    }

    .answer-heading {
        font-size: 8px;
    }

    .quiz-footer,
    .global-footer {
        font-size: 7px;
    }

    .global-footer span:nth-child(2) {
        display: none;
    }

    .result-content {
        margin: 40px auto;
    }
}

@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: .01ms !important;
        transition-duration: .01ms !important;
    }
}
