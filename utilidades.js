export function formatarTexto(texto) {
    return texto
        .replace(/\s+/g, " ")
        .replace(/IAIA/g, "IA")
        .trim();
}

export function contarCategorias(escolhas) {
    const contagem = {};

    for (const escolha of escolhas) {

        // Condição de parada.
        if (!escolha || !escolha.categoria) {
            break;
        }

        const categoria = escolha.categoria;

        if (contagem[categoria]) {
            contagem[categoria]++;
        } else {
            contagem[categoria] = 1;
        }
    }

    return contagem;
}
