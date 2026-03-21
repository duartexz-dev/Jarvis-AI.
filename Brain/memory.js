function buscarAprendizado(pergunta) {
    let dados = JSON.parse(localStorage.getItem("ia")) || [];

    for (let item of dados) {
        if (pergunta.includes(item.pergunta)) {
            return item.resposta;
        }
    }

    return null;
}

function aprender(pergunta, resposta) {
    let dados = JSON.parse(localStorage.getItem("ia")) || [];

    dados.push({ pergunta, resposta });

    localStorage.setItem("ia", JSON.stringify(dados));
}