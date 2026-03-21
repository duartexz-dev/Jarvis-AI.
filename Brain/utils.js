function falar(texto) {
    const fala = new SpeechSynthesisUtterance(texto);
    fala.lang = "pt-BR";
    speechSynthesis.speak(fala);
}

function atualizarStatus(msg) {
    document.getElementById("Status").innerHTML = msg;
}

function addLog(acao, status) {
    let hora = new Date().toLocaleTimeString();

    document.getElementById("logs").innerHTML += `
        <tr>
            <td>${hora}</td>
            <td>${acao}</td>
            <td>${status}</td>
        </tr>
    `;
}