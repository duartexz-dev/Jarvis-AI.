function buscarResposta(pergunta) {
    pergunta = pergunta.toLowerCase();

    for (let item of baseConhecimento) {
        for (let p of item.perguntas) {
            if (pergunta.includes(p)) {
                return item.resposta;
            }
        }
    }

    return null;
}