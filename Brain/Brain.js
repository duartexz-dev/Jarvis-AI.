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

    if (comando.includes("investidor10")) {
        atualizarStatus("🌐 Abrindo Investidor10...");
        falar("Abrindo Investidor10");
        window.open("https://investidor10.com.br/");
        addLog("Investidor10", "OK");
        return;
    }

    if (comando.includes("binance")) {
        atualizarStatus("🌐 Abrindo Binance...");
        falar("Abrindo Binance");
        window.open("https://www.binance.com/pt-BR");
        addLog("Binance", "OK");
        return;
    }

    if (comando.includes("netflix")) {
        atualizarStatus("🌐 Abrindo Netflix...");
        falar("Abrindo Netflix");
        window.open("https://www.netflix.com/br/");
        addLog("Netflix", "OK");
        return;
    }

    if (comando.includes("bitcoin") || comando.includes("btc")) {
        atualizarStatus("💰 Abrindo preço do Bitcoin...");
        falar("Mostrando preço do Bitcoin");
        window.open("https://www.coingecko.com/pt/moedas/bitcoin");
        addLog("Bitcoin", "OK");
        return;
    }

    if (comando.includes("wikipedia")) {
        atualizarStatus("🌐 Abrindo Wikipedia...");
        falar("Abrindo Wikipedia");
        window.open("https://pt.wikipedia.org/wiki/P%C3%A1gina_principal");
        addLog("Wikipedia", "OK");
        return;
    }

    if (comando.includes("tiktok")) {
        atualizarStatus("🌐 Abrindo TikTok...");
        falar("Abrindo TikTok");
        window.open("https://www.tiktok.com/");
        addLog("TikTok", "OK");
        return;
    }

    if (comando.includes("dólar") || comando.includes("usd")) {
        atualizarStatus("💱 Abrindo conversão de moedas...");
        falar("Mostrando cotação do dólar");
        window.open("https://www.google.com/search?q=dolar+hoje");
        addLog("Moedas", "OK");
        return;
    }

    if (comando.includes("whatsapp")) {
        atualizarStatus("💬 Abrindo WhatsApp...");
        falar("Abrindo WhatsApp");
        window.open("https://web.whatsapp.com/");
        addLog("WhatsApp", "OK");
        return;
    }

    if (comando.includes("gmail") || comando.includes("email")) {
        atualizarStatus("📧 Abrindo Gmail...");
        falar("Abrindo Gmail");
        window.open("https://mail.google.com/");
        addLog("Gmail", "OK");
        return;
    }

    if (comando.includes("spotify")) {
        atualizarStatus("🎵 Abrindo Spotify...");
        falar("Abrindo Spotify");
        window.open("https://open.spotify.com/");
        addLog("Spotify", "OK");
        return;
    }

    if (comando.includes("chatgpt")) {
        atualizarStatus("🤖 Abrindo ChatGPT...");
        falar("Abrindo ChatGPT");
        window.open("https://chat.openai.com/");
        addLog("ChatGPT", "OK");
        return;
    }

    if (comando.includes("notícias") || comando.includes("noticias")) {
        atualizarStatus("📰 Abrindo notícias...");
        falar("Mostrando notícias");
        window.open("https://news.google.com/");
        addLog("Notícias", "OK");
        return;
    }

    if (comando.includes("clima") || comando.includes("tempo")) {
        atualizarStatus("🌦️ Verificando clima...");
        falar("Mostrando previsão do tempo");
        window.open("https://www.google.com/search?q=clima+hoje");
        addLog("Clima", "OK");
        return;
    }

    if (comando.includes("tradutor")) {
        atualizarStatus("🌐 Abrindo tradutor...");
        falar("Abrindo tradutor");
        window.open("https://translate.google.com/");
        addLog("Tradutor", "OK");
        return;
    }

    if (comando.includes("drive")) {
        atualizarStatus("📁 Abrindo Google Drive...");
        falar("Abrindo Google Drive");
        window.open("https://drive.google.com/");
        addLog("Drive", "OK");
        return;
    }

    if (comando.includes("maps") || comando.includes("mapa")) {
        atualizarStatus("🗺️ Abrindo Google Maps...");
        falar("Abrindo mapa");
        window.open("https://www.google.com/maps");
        addLog("Maps", "OK");
        return;
    }

    if (comando.includes("calculadora")) {
        atualizarStatus("🧮 Abrindo calculadora...");
        falar("Abrindo calculadora");
        window.open("https://www.google.com/search?q=calculadora");
        addLog("Calculadora", "OK");
        return;
    }

    if (comando.includes("roblox")) {
        atualizarStatus("🎮 Abrindo Roblox...");
        falar("Abrindo Roblox");
        window.open("https://www.roblox.com/");
        addLog("Roblox", "OK");
        return;
    }

    if (comando.includes("minecraft")) {
        atualizarStatus("⛏️ Abrindo Minecraft...");
        falar("Abrindo Minecraft");
        window.open("https://www.minecraft.net/");
        addLog("Minecraft", "OK");
        return;
    }

    if (comando.includes("amazon")) {
        atualizarStatus("🛒 Abrindo Amazon...");
        falar("Abrindo Amazon");
        window.open("https://www.amazon.com.br/");
        addLog("Amazon", "OK");
        return;
    }

    if (comando.includes("mercado livre")) {
        atualizarStatus("🛒 Abrindo Mercado Livre...");
        falar("Abrindo Mercado Livre");
        window.open("https://www.mercadolivre.com.br/");
        addLog("Mercado Livre", "OK");
        return;
    }

    if (comando.includes("aliexpress")) {
        atualizarStatus("🛒 Abrindo AliExpress...");
        falar("Abrindo AliExpress");
        window.open("https://pt.aliexpress.com/");
        addLog("AliExpress", "OK");
        return;
    }

    if (comando.includes("shopee")) {
        atualizarStatus("🛒 Abrindo Shopee...");
        falar("Abrindo Shopee");
        window.open("https://shopee.com.br/");
        addLog("Shopee", "OK");
        return;
    }

    if (comando.includes("globo")) {
        atualizarStatus("📺 Abrindo Globo...");
        falar("Abrindo Globo");
        window.open("https://www.globo.com/");
        addLog("Globo", "OK");
        return;
    }

    if (comando.includes("twitch")) {
        atualizarStatus("🎥 Abrindo Twitch...");
        falar("Abrindo Twitch");
        window.open("https://www.twitch.tv/");
        addLog("Twitch", "OK");
        return;
    }

    if (comando.includes("discord")) {
        atualizarStatus("💬 Abrindo Discord...");
        falar("Abrindo Discord");
        window.open("https://discord.com/app");
        addLog("Discord", "OK");
        return;
    }

    if (comando.includes("linkedin")) {
        atualizarStatus("💼 Abrindo LinkedIn...");
        falar("Abrindo LinkedIn");
        window.open("https://www.linkedin.com/");
        addLog("LinkedIn", "OK");
        return;
    }

    if (comando.includes("chat")) {
        atualizarStatus("💬 Abrindo chat...");
        falar("Abrindo chat");
        window.open("https://chat.openai.com/");
        addLog("Chat", "OK");
        return;
    }

    if (comando.includes("agenda")) {
        atualizarStatus("📅 Abrindo agenda...");
        falar("Abrindo agenda");
        window.open("https://calendar.google.com/");
        addLog("Agenda", "OK");
        return;
    }

    if (comando.includes("notas")) {
        atualizarStatus("📝 Abrindo notas...");
        falar("Abrindo notas");
        window.open("https://keep.google.com/");
        addLog("Notas", "OK");
        return;
    }

    if (comando.includes("velocidade internet")) {
        atualizarStatus("📶 Testando internet...");
        falar("Testando velocidade da internet");
        window.open("https://www.speedtest.net/");
        addLog("Internet", "OK");
        return;
    }

    if (comando.includes("filmes")) {
        atualizarStatus("🎬 Procurando filmes...");
        falar("Mostrando filmes");
        window.open("https://www.google.com/search?q=filmes+em+cartaz");
        addLog("Filmes", "OK");
        return;
    }

    if (comando.includes("próximo jogo")) {
        atualizarStatus("⚽ Consultando próximos jogos...");
        falar("Ainda não tenho acesso em tempo real, mas posso integrar uma API de esportes para isso.");
        addLog("Esportes", "INFO");
        return;
    }

    if (comando.includes("mercado de ações") || comando.includes("bolsa")) {
        atualizarStatus("📈 Analisando mercado...");
        falar("O mercado de ações varia diariamente. Posso integrar dados em tempo real para te informar melhor.");
        addLog("Mercado", "INFO");
        return;
    }

    if (comando.includes("criptomoedas")) {
        atualizarStatus("💰 Analisando criptomoedas...");
        falar("O mercado cripto é volátil. Bitcoin e Ethereum costumam liderar as tendências.");
        addLog("Cripto", "OK");
        return;
    }

    if (comando.includes("inteligência artificial") || comando.includes("ia")) {
        atualizarStatus("🤖 Analisando IA...");
        falar("A inteligência artificial está evoluindo rapidamente e impactando diversas áreas.");
        addLog("IA", "OK");
        return;
    }

    if (comando.includes("como estudar melhor")) {
        atualizarStatus("📚 Gerando dica de estudo...");
        falar("Use técnica pomodoro, elimine distrações e revise o conteúdo frequentemente.");
        addLog("Estudo", "OK");
        return;
    }

    if (comando.includes("dica de produtividade")) {
        atualizarStatus("⚡ Analisando produtividade...");
        falar("Foque em uma tarefa por vez e evite multitarefa.");
        addLog("Produtividade", "OK");
        return;
    }

    if (comando.includes("motivação")) {
        atualizarStatus("🔥 Gerando motivação...");
        falar("Disciplina supera motivação. Continue mesmo sem vontade.");
        addLog("Motivação", "OK");
        return;
    }

    if (comando.includes("como ganhar dinheiro")) {
        atualizarStatus("💸 Analisando oportunidades...");
        falar("Você pode ganhar dinheiro com freelancing, vendas online ou investimentos.");
        addLog("Dinheiro", "OK");
        return;
    }

    if (comando.includes("ideia de negócio")) {
        atualizarStatus("💡 Gerando ideias...");
        falar("Considere vender produtos digitais ou trabalhar com redes sociais.");
        addLog("Negócio", "OK");
        return;
    }

    if (comando.includes("como investir")) {
        atualizarStatus("📊 Analisando investimentos...");
        falar("Comece estudando renda fixa e depois avance para renda variável.");
        addLog("Investimento", "OK");
        return;
    }

    if (comando.includes("o que é bitcoin")) {
        atualizarStatus("💰 Explicando Bitcoin...");
        falar("Bitcoin é uma moeda digital descentralizada baseada em blockchain.");
        addLog("Bitcoin", "OK");
        return;
    }

    if (comando.includes("o que é programação")) {
        atualizarStatus("💻 Explicando programação...");
        falar("Programação é criar instruções para computadores resolverem problemas.");
        addLog("Programação", "OK");
        return;
    }

    if (comando.includes("como aprender programação")) {
        atualizarStatus("💻 Dica de programação...");
        falar("Pratique todos os dias e comece com HTML, CSS e JavaScript.");
        addLog("Programação", "OK");
        return;
    }

    if (comando.includes("como melhorar inglês")) {
        atualizarStatus("🇺🇸 Dica de inglês...");
        falar("Pratique todos os dias ouvindo, lendo e falando em inglês.");
        addLog("Inglês", "OK");
        return;
    }

    if (comando.includes("tech notices")) {
        atualizarStatus("📰 Tecnologia...");
        falar("Aqui estão as principais notícias de tecnologia de hoje: inteligência artificial dominando o mercado, novos smartphones com IA avançada, testes com internet 6G e crescimento da segurança digital.");
        addLog("Tecnologia", "OK");
        return;
    }

    if (comando.includes("notícia mundo")) {
        atualizarStatus("🌎 Notícias globais...");
        falar("O mundo está passando por mudanças econômicas e tecnológicas constantes.");
        addLog("Notícias", "OK");
        return;
    }

    if (comando.includes("quanto é")) {
        atualizarStatus("🧮 Calculando...");
        let conta = comando.replace("quanto é", "");
        try {
            let resultado = eval(conta);
            falar(`O resultado é ${resultado}`);
            addLog("Cálculo", "OK");
        } catch {
            falar("Não consegui calcular isso.");
            addLog("Cálculo", "ERRO");
        }
        return;
    }

    if (comando.includes("me conte um fato")) {
        atualizarStatus("📖 Curiosidade...");
        falar("O cérebro humano possui mais conexões que estrelas na galáxia.");
        addLog("Curiosidade", "OK");
        return;
    }

    if (comando.includes("dica de saúde")) {
        atualizarStatus("💪 Saúde...");
        falar("Beba água, durma bem e pratique exercícios regularmente.");
        addLog("Saúde", "OK");
        return;
    }

    if (comando.includes("como focar")) {
        atualizarStatus("🎯 Foco...");
        falar("Desative notificações e defina metas claras.");
        addLog("Foco", "OK");
        return;
    }

    if (comando.includes("definir meta")) {
        atualizarStatus("🎯 Meta...");
        falar("Crie metas específicas, mensuráveis e com prazo.");
        addLog("Meta", "OK");
        return;
    }

    if (comando.includes("como economizar dinheiro")) {
        atualizarStatus("💸 Economia...");
        falar("Evite gastos desnecessários e guarde uma parte da sua renda.");
        addLog("Economia", "OK");
        return;
    }

    if (comando.includes("como dormir melhor")) {
        atualizarStatus("😴 Sono...");
        falar("Evite telas antes de dormir e mantenha horários regulares.");
        addLog("Sono", "OK");
        return;
    }

    if (comando.includes("frase inspiradora")) {
        atualizarStatus("✨ Inspiração...");
        falar("O sucesso é a soma de pequenos esforços repetidos diariamente.");
        addLog("Frase", "OK");
        return;
    }

    if (comando.includes("quem criou você")) {
        atualizarStatus("🤖 Origem...");
        falar("Fui criado como um assistente virtual inspirado no Jarvis.");
        addLog("Sistema", "OK");
        return;
    }

    if (comando.includes("próximo jogo do flamengo")) {
        atualizarStatus("⚽ Buscando jogo do Flamengo...");
        falar("Consultando próximo jogo do Flamengo");
        window.open("https://www.google.com/search?q=próximo+jogo+do+Flamengo");
        addLog("Flamengo", "OK");
        return;
    }

    if (comando.includes("próximo jogo do brasil")) {
        atualizarStatus("🇧🇷 Buscando jogo da seleção...");
        falar("Consultando próximo jogo do Brasil");
        window.open("https://www.google.com/search?q=próximo+jogo+da+seleção+brasileira");
        addLog("Brasil", "OK");
        return;
    }

    if (comando.includes("tabela do brasileirão")) {
        atualizarStatus("📊 Buscando tabela...");
        falar("Mostrando tabela do Brasileirão");
        window.open("https://www.google.com/search?q=tabela+brasileirão");
        addLog("Brasileirão", "OK");
        return;
    }

    if (comando.includes("classificação champions")) {
        atualizarStatus("🏆 Buscando Champions...");
        falar("Mostrando classificação da Champions League");
        window.open("https://www.google.com/search?q=classificação+champions+league");
        addLog("Champions", "OK");
        return;
    }

    if (comando.includes("ações da petrobras")) {
        atualizarStatus("📈 Consultando Petrobras...");
        falar("Mostrando ações da Petrobras");
        window.open("https://www.google.com/search?q=PETR4+cotação");
        addLog("PETR4", "OK");
        return;
    }

    if (comando.includes("ações da vale")) {
        atualizarStatus("📈 Consultando Vale...");
        falar("Mostrando ações da Vale");
        window.open("https://www.google.com/search?q=VALE3+cotação");
        addLog("VALE3", "OK");
        return;
    }

    if (comando.includes("ibovespa")) {
        atualizarStatus("📊 Consultando Ibovespa...");
        falar("Mostrando índice Ibovespa");
        window.open("https://www.google.com/search?q=ibovespa+hoje");
        addLog("IBOV", "OK");
        return;
    }

    if (comando.includes("ethereum") || comando.includes("eth")) {
        atualizarStatus("💰 Consultando Ethereum...");
        falar("Mostrando preço do Ethereum");
        window.open("https://www.coingecko.com/pt/moedas/ethereum");
        addLog("Ethereum", "OK");
        return;
    }

    if (comando.includes("preço do ouro")) {
        atualizarStatus("🥇 Consultando ouro...");
        falar("Mostrando preço do ouro");
        window.open("https://www.google.com/search?q=preço+do+ouro");
        addLog("Ouro", "OK");
        return;
    }

    if (comando.includes("preço da gasolina")) {
        atualizarStatus("⛽ Consultando gasolina...");
        falar("Mostrando preço da gasolina");
        window.open("https://www.google.com/search?q=preço+da+gasolina+hoje");
        addLog("Gasolina", "OK");
        return;
    }

    if (comando.includes("cotação euro")) {
        atualizarStatus("💱 Consultando euro...");
        falar("Mostrando cotação do euro");
        window.open("https://www.google.com/search?q=euro+hoje");
        addLog("Euro", "OK");
        return;
    }

    if (comando.includes("clima amanhã")) {
        atualizarStatus("🌦️ Clima amanhã...");
        falar("Mostrando previsão do tempo para amanhã");
        window.open("https://www.google.com/search?q=clima+amanhã");
        addLog("Clima", "OK");
        return;
    }

    if (comando.includes("notícias de hoje")) {
        atualizarStatus("📰 Buscando notícias...");
        falar("Mostrando notícias de hoje");
        window.open("https://news.google.com/topstories?hl=pt-BR&gl=BR&ceid=BR:pt-419");
        addLog("Notícias", "OK");
        return;
    }

    if (comando.includes("últimas notícias tecnologia")) {
        atualizarStatus("💻 Notícias tech...");
        falar("Mostrando notícias de tecnologia");
        window.open("https://www.google.com/search?q=notícias+tecnologia");
        addLog("Tech", "OK");
        return;
    }

    if (comando.includes("resultado loteria")) {
        atualizarStatus("🎰 Consultando loteria...");
        falar("Mostrando resultados da loteria");
        window.open("https://www.google.com/search?q=resultado+loteria+hoje");
        addLog("Loteria", "OK");
        return;
    }

    if (comando.includes("cotação dólar turismo")) {
        atualizarStatus("💱 Dólar turismo...");
        falar("Mostrando dólar turismo");
        window.open("https://www.google.com/search?q=dólar+turismo+hoje");
        addLog("Dólar", "OK");
        return;
    }

    if (comando.includes("trânsito agora")) {
        atualizarStatus("🚗 Trânsito...");
        falar("Mostrando trânsito agora");
        window.open("https://www.google.com/maps/@-23.5505,-46.6333,12z/data=!5m1!1e1");
        addLog("Trânsito", "OK");
        return;
    }

    if (comando.includes("voos hoje")) {
        atualizarStatus("✈️ Consultando voos...");
        falar("Mostrando voos de hoje");
        window.open("https://www.google.com/search?q=voos+hoje");
        addLog("Voos", "OK");
        return;
    }

    if (comando.includes("status whatsapp")) {
        atualizarStatus("💬 Status WhatsApp...");
        falar("Abrindo status do WhatsApp Web");
        window.open("https://web.whatsapp.com/");
        addLog("WhatsApp", "OK");
        return;
    }

    if (comando.includes("tendências tiktok")) {
        atualizarStatus("🔥 Tendências TikTok...");
        falar("Mostrando tendências do TikTok");
        window.open("https://www.tiktok.com/trending");
        addLog("TikTok", "OK");
        return;
    }

    if (comando.includes("tendências youtube")) {
        atualizarStatus("🔥 Tendências YouTube...");
        falar("Mostrando tendências do YouTube");
        window.open("https://www.youtube.com/feed/trending");
        addLog("YouTube", "OK");
        return;
    }

    if (comando.includes("ranking fifa")) {
        atualizarStatus("🏆 Ranking FIFA...");
        falar("Mostrando ranking da FIFA");
        window.open("https://www.google.com/search?q=ranking+fifa");
        addLog("FIFA", "OK");
        return;
    }




    if (comando.includes("preço playstation 5")) {
        atualizarStatus("🎮 Consultando PS5...");
        falar("Mostrando preço do PlayStation 5");
        window.open("https://www.google.com/search?q=preço+ps5");
        addLog("PS5", "OK");
        return;
    }

    if (comando.includes("preço xbox series s")) {
        atualizarStatus("🎮 Consultando Xbox...");
        falar("Mostrando preço do Xbox Series S");
        window.open("https://www.google.com/search?q=preço+xbox+series+s");
        addLog("Xbox", "OK");
        return;
    }

    if (comando.includes("melhores jogos 2025")) {
        atualizarStatus("🎮 Buscando jogos...");
        falar("Mostrando melhores jogos de 2025");
        window.open("https://www.google.com/search?q=melhores+jogos+2025");
        addLog("Games", "OK");
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
    recognition.lang = "pt-br";

    recognition.onresult = (event) => {
        const comando = event.results[0][0].transcript;
        executarComando(comando);
    };

    recognition.start();
}