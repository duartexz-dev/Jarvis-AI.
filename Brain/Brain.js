// ================= ELEMENTOS =================
const welcome = document.getElementById("welcome");
const statusSistema = document.getElementById("Status");
const input = document.getElementById("pedidoUser");
const logs = document.getElementById("logs");

// ================= USUÁRIO =================
let nome = localStorage.getItem("nome");

if (!nome) {
    nome = prompt("Digite seu nome:");
    localStorage.setItem("nome", nome);
}

welcome.innerHTML = `👋 Olá, ${nome}`;

// ================= STATUS =================
function atualizarStatus(msg) {
    statusSistema.innerHTML = msg;
}

// ================= LOGS =================
function addLog(acao, status) {
    let hora = new Date().toLocaleTimeString();

    logs.innerHTML += `
        <tr>
            <td>${hora}</td>
            <td>${acao}</td>
            <td>${status}</td>
        </tr>
    `;
}

// ================= VOZ =================
function falar(texto) {
    const fala = new SpeechSynthesisUtterance(texto);
    fala.lang = "pt-BR";
    speechSynthesis.speak(fala);
}

// ================= SISTEMA INICIANDO =================
function iniciarSistema() {
    atualizarStatus("🧠 Inicializando sistema...");
    addLog("Inicialização", "OK");

    setTimeout(() => {
        atualizarStatus("✅ Sistema online");
        falar(`Bem-vindo ${nome}`);
        addLog("Sistema pronto", "OK");
    }, 1500);
}

iniciarSistema();



// ================= BUSCA =================
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

// ================= MEMÓRIA =================
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

// ================= COMANDOS =================
function executarComando(comando) {
    comando = comando.toLowerCase();

    addLog(comando, "Recebido");

    // ===== COMANDOS DIRETOS =====

    if (comando.includes("hora")) {
        let hora = new Date().toLocaleTimeString();
        atualizarStatus(`⏰ ${hora}`);
        falar(`Agora são ${hora}`);
        addLog("Hora", "OK");
        return;
    }

    if (comando.includes("data")) {
        let data = new Date().toLocaleDateString();
        atualizarStatus(`📅 ${data}`);
        falar(`Hoje é ${data}`);
        addLog("Data", "OK");
        return;
    }

    if (comando.includes("youtube")) {
        atualizarStatus("🔴 Abrindo YouTube...");
        falar("Abrindo YouTube");
        window.open("https://youtube.com");
        addLog("YouTube", "OK");
        return;
    }

    if (comando.includes("github")) {
        atualizarStatus("💻 Abrindo GitHub...");
        falar("Abrindo GitHub");
        window.open("https://github.com");
        addLog("GitHub", "OK");
        return;
    }

    if (comando.includes("instagram") || comando.includes("insta")) {
        atualizarStatus("📸 Abrindo Instagram...");
        falar("Abrindo Instagram");
        window.open("https://instagram.com");
        addLog("Instagram", "OK");
        return;
    }

    if (comando.includes("google")) {
        atualizarStatus("🌐 Abrindo Google...");
        falar("Abrindo Google");
        window.open("https://google.com");
        addLog("Google", "OK");
        return;
    }

    if (comando.includes("nome")) {
        atualizarStatus(`👤 ${nome}`);
        falar(`Seu nome é ${nome}`);
        addLog("Nome", "OK");
        return;
    }

    // ===== SISTEMA HÍBRIDO =====

    // 1. BASE LOCAL
    let resposta = buscarResposta(comando);
    if (resposta) {
        atualizarStatus(resposta);
        falar(resposta);
        addLog("Base local", "OK");
        return;
    }

    // 2. MEMÓRIA
    let aprendido = buscarAprendizado(comando);
    if (aprendido) {
        atualizarStatus(aprendido);
        falar(aprendido);
        addLog("Memória", "OK");
        return;
    }

    // 3. APRENDER
    let ensinar = confirm("Não sei responder. Deseja me ensinar?");
    if (ensinar) {
        let respostaUser = prompt("Digite a resposta:");
        aprender(comando, respostaUser);

        atualizarStatus("📚 Aprendi algo novo!");
        falar("Aprendi isso agora");
        addLog("Aprendizado", "OK");
        return;
    }

    // 4. PESQUISA
    atualizarStatus("🔎 Pesquisando...");
    falar("Pesquisando no Google");
    window.open(`https://www.google.com/search?q=${comando}`);
    addLog("Pesquisa", "OK");
}

// ================= INPUT =================
input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        executarComando(input.value);
        input.value = "";
    }
});

// ================= VOZ =================
function ativarVoz() {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = "pt-BR";

    recognition.onresult = (event) => {
        const comando = event.results[0][0].transcript;
        executarComando(comando);
    };

    recognition.start();
}