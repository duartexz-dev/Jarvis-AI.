const baseConhecimento = [
    { perguntas: ["oi", "olá", "eai"], resposta: "Olá! Como posso ajudar?" },
    { perguntas: ["tudo bem", "como vai"], resposta: "Estou funcionando perfeitamente 😎" },
    { perguntas: ["quem é você", "o que você é"], resposta: "Sou o Jarvis, seu assistente virtual." },
    { perguntas: ["qual seu nome de sistema", "como você se chama"], resposta: "Sou conhecido como Jarvis." },
    { perguntas: ["bom dia"], resposta: "Bom dia! Pronto para começar?" },
    { perguntas: ["boa tarde"], resposta: "Boa tarde! Em que posso ajudar?" },
    { perguntas: ["boa noite"], resposta: "Boa noite! Vamos trabalhar?" },
    { perguntas: ["obrigado", "valeu"], resposta: "De nada! Sempre à disposição." },
    { perguntas: ["até mais", "tchau"], resposta: "Até mais! Volte sempre." },
    { perguntas: ["como você está", "tá funcionando"], resposta: "Estou operando normalmente." },

    // ================= PROGRAMAÇÃO =================
    { perguntas: ["o que é javascript", "definição javascript"], resposta: "JavaScript é uma linguagem de programação usada na web." },
    { perguntas: ["o que é html", "pra que serve html"], resposta: "HTML estrutura páginas web." },
    { perguntas: ["o que é css", "pra que serve css"], resposta: "CSS estiliza páginas web." },
    { perguntas: ["o que é programação", "programar o que é"], resposta: "Programação é resolver problemas com código." },
    { perguntas: ["o que é algoritmo", "definição algoritmo"], resposta: "Algoritmo é uma sequência de passos." },
    { perguntas: ["o que é variável", "pra que serve variável"], resposta: "Variável guarda um valor." },
    { perguntas: ["o que é função", "pra que serve função"], resposta: "Função é um bloco reutilizável." },
    { perguntas: ["o que é array", "lista em programação"], resposta: "Array é uma lista de dados." },
    { perguntas: ["o que é objeto", "objeto programação"], resposta: "Objeto tem propriedades e valores." },
    { perguntas: ["o que é loop", "repetição código"], resposta: "Loop repete ações." },

    { perguntas: ["o que é api", "api significado"], resposta: "API conecta sistemas diferentes." },
    { perguntas: ["o que é backend", "parte servidor"], resposta: "Backend roda no servidor." },
    { perguntas: ["o que é frontend", "parte visual"], resposta: "Frontend é a interface do usuário." },
    { perguntas: ["o que é banco de dados", "database o que é"], resposta: "Banco de dados armazena informações." },
    { perguntas: ["o que é json", "json significado"], resposta: "JSON é um formato leve de dados." },
    { perguntas: ["o que é node", "nodejs o que é"], resposta: "Node.js executa JavaScript no servidor." },
    { perguntas: ["o que é react", "react para que serve"], resposta: "React cria interfaces modernas." },

    // ================= MATEMÁTICA =================
    { perguntas: ["quanto é 2+2", "2 mais 2"], resposta: "2 + 2 é 4." },
    { perguntas: ["quanto é 10x10", "10 vezes 10"], resposta: "10 vezes 10 é 100." },
    { perguntas: ["o que é fração", "definição fração"], resposta: "Fração representa partes de um todo." },
    { perguntas: ["o que é porcentagem", "definição porcentagem"], resposta: "Porcentagem é uma razão sobre 100." },

    // ================= CIÊNCIAS =================
    { perguntas: ["quem descobriu o brasil", "descobrimento do brasil"], resposta: "Pedro Álvares Cabral em 1500." },
    { perguntas: ["quem foi einstein", "albert einstein quem foi"], resposta: "Einstein foi um físico famoso." },
    { perguntas: ["o que é gravidade", "definição gravidade"], resposta: "Força que atrai objetos para a Terra." },
    { perguntas: ["o que é fotossíntese", "como plantas produzem energia"], resposta: "Plantas produzem energia com luz solar." },
    { perguntas: ["o que é energia", "energia definição"], resposta: "Energia é a capacidade de realizar trabalho." },

    // ================= GEOGRAFIA =================
    { perguntas: ["capital do brasil", "qual cidade capital brasil"], resposta: "Brasília." },
    { perguntas: ["capital dos eua", "capital estados unidos"], resposta: "Washington D.C." },
    { perguntas: ["maior planeta", "qual planeta maior"], resposta: "Júpiter." },
    { perguntas: ["quantos continentes", "numero de continentes"], resposta: "Depende, geralmente 5 a 7." },

    // ================= MOTIVAÇÃO =================
    { perguntas: ["me motive", "preciso motivação"], resposta: "Você consegue! Continue evoluindo." },
    { perguntas: ["estou cansado", "sem energia"], resposta: "Descanse e volte mais forte." },
    { perguntas: ["não consigo", "tá difícil"], resposta: "Continue tentando, você vai conseguir." },
    { perguntas: ["estou triste", "me sinto mal"], resposta: "Vai ficar tudo bem, continue firme." },

    // ================= OPINIÕES =================
    { perguntas: ["melhor linguagem", "qual linguagem aprender"], resposta: "JavaScript é uma ótima escolha." },
    { perguntas: ["vale a pena programar", "devo aprender código"], resposta: "Sim, abre muitas oportunidades." },

    // ================= CURIOSIDADES =================
    { perguntas: ["me conte algo", "diga algo interessante"], resposta: "A tecnologia evolui constantemente." },
    { perguntas: ["curiosidade", "me fale uma curiosidade"], resposta: "O cérebro humano tem bilhões de neurônios." },

    // ================= SISTEMA =================
    { perguntas: ["status do sistema", "sistema está ok"], resposta: "Sistema funcionando normalmente." },
    { perguntas: ["você aprende", "você evolui"], resposta: "Sim, posso aprender com você." },
    { perguntas: ["você é inteligente", "é uma ia"], resposta: "Estou evoluindo constantemente." },

    // ================= INTERAÇÃO =================
    { perguntas: ["me ajuda", "preciso ajuda"], resposta: "Claro! Diga o que precisa." },
    { perguntas: ["o que é inteligência artificial", "definição ia"], resposta: "Inteligência artificial é a simulação da inteligência humana por máquinas." },
    { perguntas: ["o que é machine learning", "aprendizado de máquina"], resposta: "Machine learning permite que sistemas aprendam com dados." },
    { perguntas: ["o que é deep learning", "aprendizado profundo"], resposta: "Deep learning usa redes neurais avançadas." },
    { perguntas: ["o que é python", "linguagem python"], resposta: "Python é uma linguagem simples e poderosa." },
    { perguntas: ["o que é java", "linguagem java"], resposta: "Java é uma linguagem muito usada em sistemas grandes." },

    { perguntas: ["o que é sistema operacional", "os o que é"], resposta: "Sistema operacional gerencia o hardware e software." },
    { perguntas: ["o que é linux", "linux definição"], resposta: "Linux é um sistema operacional de código aberto." },
    { perguntas: ["o que é windows", "windows sistema"], resposta: "Windows é um sistema operacional da Microsoft." },

    { perguntas: ["o que é internet das coisas", "iot o que é"], resposta: "IoT conecta dispositivos à internet." },
    { perguntas: ["o que é nuvem", "cloud computing"], resposta: "Computação em nuvem armazena dados online." },

    { perguntas: ["o que é ip", "endereço ip"], resposta: "IP identifica dispositivos na rede." },
    { perguntas: ["o que é dns", "dns significado"], resposta: "DNS traduz nomes de sites em IPs." },
    { perguntas: ["o que é servidor", "server o que é"], resposta: "Servidor fornece serviços para outros computadores." },

    { perguntas: ["o que é bug", "erro em código"], resposta: "Bug é um erro no sistema." },
    { perguntas: ["o que é debug", "corrigir erro"], resposta: "Debug é o processo de corrigir erros." },

    { perguntas: ["o que é lógica de programação", "lógica código"], resposta: "Lógica de programação é pensar como resolver problemas com código." },
    { perguntas: ["o que é sintaxe", "erro sintaxe"], resposta: "Sintaxe são as regras da linguagem." },

    { perguntas: ["o que é framework", "framework definição"], resposta: "Framework é uma estrutura pronta para desenvolvimento." },
    { perguntas: ["o que é biblioteca", "library programação"], resposta: "Biblioteca é um conjunto de funções prontas." },

    { perguntas: ["o que é api rest", "rest api"], resposta: "API REST usa requisições HTTP." },
    { perguntas: ["o que é http", "http significado"], resposta: "HTTP é protocolo da web." },
    { perguntas: ["o que é https", "https segurança"], resposta: "HTTPS é HTTP com segurança." },

    { perguntas: ["o que é compilador", "compilar código"], resposta: "Compilador transforma código em linguagem de máquina." },
    { perguntas: ["o que é interpretador", "interpretar código"], resposta: "Interpretador executa código linha por linha." },

    { perguntas: ["o que é software", "software definição"], resposta: "Software são programas de computador." },
    { perguntas: ["o que é hardware", "hardware definição"], resposta: "Hardware são partes físicas do computador." },

    { perguntas: ["o que é cpu", "processador o que é"], resposta: "CPU é o cérebro do computador." },
    { perguntas: ["o que é ram", "memória ram"], resposta: "RAM armazena dados temporários." },

    { perguntas: ["o que é gpu", "placa de vídeo"], resposta: "GPU processa gráficos." },
    { perguntas: ["o que é ssd", "armazenamento ssd"], resposta: "SSD é armazenamento rápido." },

    { perguntas: ["o que é internet", "definição internet"], resposta: "Internet é uma rede global." },
    { perguntas: ["o que é wifi", "wifi o que é"], resposta: "WiFi é conexão sem fio." },

    { perguntas: ["o que é tecnologia", "tecnologia definição"], resposta: "Tecnologia resolve problemas com inovação." },
    { perguntas: ["o que é inovação", "inovar o que é"], resposta: "Inovação é criar algo novo." },

    { perguntas: ["o que é segurança digital", "segurança online"], resposta: "Proteção de dados na internet." },
    { perguntas: ["o que é hacker", "hacker definição"], resposta: "Hacker explora sistemas, pode ser ético ou não." },

    { perguntas: ["o que é phishing", "golpe online"], resposta: "Phishing tenta roubar dados." },
    { perguntas: ["o que é vírus de computador", "malware"], resposta: "Malware é software malicioso." },

    { perguntas: ["como estudar programação", "estudar código"], resposta: "Pratique todos os dias." },
    { perguntas: ["como melhorar na programação", "melhorar código"], resposta: "Pratique e construa projetos." },

    { perguntas: ["como aprender rápido", "aprender melhor"], resposta: "Consistência é mais importante que velocidade." },
    { perguntas: ["como focar", "foco nos estudos"], resposta: "Evite distrações e pratique." },

    { perguntas: ["o que fazer agora", "estou sem ideia"], resposta: "Que tal estudar ou criar um projeto?" },
    { perguntas: ["me dê uma ideia", "ideia de projeto"], resposta: "Crie um site ou sistema simples." },

    { perguntas: ["o que você acha da tecnologia", "opinião tecnologia"], resposta: "Tecnologia é essencial hoje." },
    { perguntas: ["o que você acha do futuro", "futuro tecnologia"], resposta: "O futuro será ainda mais tecnológico." },

    { perguntas: ["você gosta de tecnologia", "tecnologia é boa"], resposta: "Tecnologia é fascinante." },
    { perguntas: ["o que você pensa sobre ia", "opinião ia"], resposta: "IA vai transformar o mundo." },

    { perguntas: ["qual melhor profissão", "profissão boa"], resposta: "Depende do seu gosto." },
    { perguntas: ["vale estudar tecnologia", "estudar programação vale"], resposta: "Sim, muito." },

    { perguntas: ["qual melhor linguagem hoje", "linguagem popular"], resposta: "JavaScript é muito popular." },
    { perguntas: ["qual linguagem mais usada", "linguagem top"], resposta: "JavaScript e Python são muito usadas." },

    { perguntas: ["me conte algo legal", "fala algo"], resposta: "A internet conecta bilhões de pessoas." },
    { perguntas: ["me diga algo útil", "dica útil"], resposta: "Aprender programação abre portas." },

    { perguntas: ["me surpreenda", "algo interessante"], resposta: "Você pode criar qualquer coisa com código." },
    { perguntas: ["me dê uma dica", "dica"], resposta: "Nunca pare de aprender." },

    { perguntas: ["o que você pode fazer", "suas funções"], resposta: "Posso responder, aprender e ajudar." },
    { perguntas: ["o que você sabe", "seu conhecimento"], resposta: "Sei várias coisas e continuo aprendendo." },

    { perguntas: ["você é real", "você existe"], resposta: "Sou um sistema digital." },
    { perguntas: ["você é humano", "é uma pessoa"], resposta: "Não, sou um sistema." },

    { perguntas: ["o que é sucesso", "definição sucesso"], resposta: "Sucesso depende de objetivos pessoais." },
    { perguntas: ["como ter sucesso", "ser bem sucedido"], resposta: "Disciplina e prática." },

    { perguntas: ["como ganhar dinheiro", "ganhar dinheiro online"], resposta: "Aprenda habilidades valorizadas." },
    { perguntas: ["como ser rico", "ficar rico"], resposta: "Exige tempo, esforço e estratégia." },

    { perguntas: ["como melhorar a vida", "melhorar vida"], resposta: "Aprenda constantemente." },
    { perguntas: ["como crescer", "evoluir"], resposta: "Pratique e aprenda sempre." },

    { perguntas: ["o que é disciplina", "disciplina definição"], resposta: "Disciplina é consistência." },
    { perguntas: ["o que é foco", "foco definição"], resposta: "Foco é manter atenção no objetivo." },

    { perguntas: ["o que é banco relacional", "sql banco"], resposta: "Banco relacional usa tabelas conectadas." },
    { perguntas: ["o que é nosql", "banco nosql"], resposta: "NoSQL não usa tabelas tradicionais." },
    { perguntas: ["o que é mysql", "mysql o que é"], resposta: "MySQL é um banco de dados relacional." },
    { perguntas: ["o que é mongodb", "mongodb o que é"], resposta: "MongoDB é banco NoSQL baseado em documentos." },

    { perguntas: ["o que é deploy", "publicar site"], resposta: "Deploy é colocar o sistema no ar." },
    { perguntas: ["o que é hosting", "hospedagem site"], resposta: "Hosting é onde o site fica armazenado." },
    { perguntas: ["o que é domínio", "dominio site"], resposta: "Domínio é o nome do site." },

    { perguntas: ["o que é responsividade", "site responsivo"], resposta: "Responsividade adapta o site a qualquer tela." },
    { perguntas: ["o que é ux", "ux design"], resposta: "UX é experiência do usuário." },
    { perguntas: ["o que é ui", "ui design"], resposta: "UI é interface visual." },

    { perguntas: ["o que é cache", "memória cache"], resposta: "Cache guarda dados para acesso rápido." },
    { perguntas: ["o que é latência", "latencia internet"], resposta: "Latência é o tempo de resposta." },

    { perguntas: ["o que é firewall", "segurança firewall"], resposta: "Firewall protege redes." },
    { perguntas: ["o que é criptografia", "criptografia o que é"], resposta: "Criptografia protege dados." },

    { perguntas: ["o que é login", "sistema login"], resposta: "Login autentica usuário." },
    { perguntas: ["o que é senha segura", "senha forte"], resposta: "Senha segura é difícil de adivinhar." },

    { perguntas: ["como criar site", "fazer site"], resposta: "Use HTML, CSS e JavaScript." },
    { perguntas: ["como criar app", "fazer aplicativo"], resposta: "Use frameworks como React ou Flutter." },

    { perguntas: ["como aprender javascript", "estudar js"], resposta: "Pratique com projetos reais." },
    { perguntas: ["como aprender html css", "estudar frontend"], resposta: "Crie páginas simples." },

    { perguntas: ["o que estudar primeiro programação", "começar programar"], resposta: "Comece com lógica e JavaScript." },
    { perguntas: ["quanto tempo aprender programação", "tempo estudar código"], resposta: "Depende da prática." },

    { perguntas: ["qual melhor editor código", "editor programação"], resposta: "VS Code é muito popular." },
    { perguntas: ["o que é vs code", "visual studio code"], resposta: "VS Code é um editor de código." },

    { perguntas: ["o que é terminal", "linha comando"], resposta: "Terminal executa comandos." },
    { perguntas: ["o que é comando", "linha comando o que é"], resposta: "Comando é instrução ao sistema." },

    { perguntas: ["o que é versão", "controle versão"], resposta: "Versão controla mudanças no código." },
    { perguntas: ["o que é commit", "commit git"], resposta: "Commit salva alterações." },

    { perguntas: ["o que é branch", "branch git"], resposta: "Branch é uma linha de desenvolvimento." },
    { perguntas: ["o que é merge", "merge git"], resposta: "Merge junta alterações." },

    { perguntas: ["o que é erro 404", "pagina não encontrada"], resposta: "Erro 404 indica página inexistente." },
    { perguntas: ["o que é erro 500", "erro servidor"], resposta: "Erro 500 indica problema no servidor." },

    { perguntas: ["o que é frontend developer", "dev frontend"], resposta: "Cria interfaces visuais." },
    { perguntas: ["o que é backend developer", "dev backend"], resposta: "Trabalha com servidor e dados." },

    { perguntas: ["o que é fullstack", "dev fullstack"], resposta: "Trabalha com frontend e backend." },
    { perguntas: ["o que é dev junior", "programador iniciante"], resposta: "Nível inicial de programação." },

    { perguntas: ["o que é dev senior", "programador experiente"], resposta: "Profissional avançado." },
    { perguntas: ["o que é carreira tech", "trabalhar tecnologia"], resposta: "Área de tecnologia e programação." },

    { perguntas: ["como ganhar experiência programação", "experiencia dev"], resposta: "Crie projetos e pratique." },
    { perguntas: ["como montar portfólio", "portfolio dev"], resposta: "Mostre seus projetos." },

    { perguntas: ["o que colocar no github", "repositorio github"], resposta: "Projetos e códigos." },
    { perguntas: ["como melhorar github", "github profissional"], resposta: "Organize seus repositórios." },

    { perguntas: ["o que é algoritmo de busca", "search algoritmo"], resposta: "Algoritmo que encontra dados." },
    { perguntas: ["o que é ordenação", "sort algoritmo"], resposta: "Organizar dados." },

    { perguntas: ["o que é inteligência", "inteligencia definição"], resposta: "Capacidade de aprender e resolver problemas." },
    { perguntas: ["o que é raciocínio lógico", "logica pensamento"], resposta: "Pensar de forma estruturada." },

    { perguntas: ["como pensar melhor", "melhorar raciocinio"], resposta: "Treine lógica e resolução de problemas." },
    { perguntas: ["como ser mais inteligente", "aumentar inteligencia"], resposta: "Estude e pratique." },

    { perguntas: ["o que é produtividade", "ser produtivo"], resposta: "Fazer mais em menos tempo." },
    { perguntas: ["como ser produtivo", "aumentar produtividade"], resposta: "Organize tarefas." },

    { perguntas: ["o que é procrastinação", "procrastinar"], resposta: "Adiar tarefas importantes." },
    { perguntas: ["como parar procrastinar", "evitar procrastinação"], resposta: "Comece com pequenas tarefas." },

    { perguntas: ["o que é objetivo", "definir meta"], resposta: "Objetivo é um resultado desejado." },
    { perguntas: ["como definir metas", "criar objetivo"], resposta: "Seja claro e específico." },

    { perguntas: ["o que é sucesso profissional", "carreira sucesso"], resposta: "Alcançar objetivos na carreira." },
    { perguntas: ["como crescer profissionalmente", "evoluir carreira"], resposta: "Aprenda constantemente." },

    { perguntas: ["o que é conhecimento", "definição conhecimento"], resposta: "Informação adquirida." },
    { perguntas: ["o que é aprendizado", "aprender definição"], resposta: "Processo de adquirir conhecimento." },

    { perguntas: ["como aprender melhor", "melhor aprendizado"], resposta: "Prática constante." },
    { perguntas: ["como memorizar", "guardar informação"], resposta: "Revisão e prática." },

    { perguntas: ["o que é criatividade", "ser criativo"], resposta: "Criar ideias novas." },
    { perguntas: ["como ser criativo", "aumentar criatividade"], resposta: "Experimente coisas novas." },

    { perguntas: ["o que é disciplina pessoal", "disciplina vida"], resposta: "Manter hábitos consistentes." },
    { perguntas: ["como ter disciplina", "ser disciplinado"], resposta: "Crie rotina." },

    { perguntas: ["o que é hábito", "definição hábito"], resposta: "Comportamento repetido." },
    { perguntas: ["como criar hábito", "criar rotina"], resposta: "Repita diariamente." },

    { perguntas: ["o que é foco mental", "foco mente"], resposta: "Concentrar atenção." },
    { perguntas: ["como melhorar foco", "ter foco"], resposta: "Evite distrações." },

    { perguntas: ["o que é esforço", "esforço definição"], resposta: "Aplicar energia em algo." },
    { perguntas: ["vale a pena esforço", "esforço compensa"], resposta: "Sim, esforço traz resultados." },
    { perguntas: ["o que é algoritmo de ordenação", "ordenar dados"], resposta: "Algoritmos de ordenação organizam dados." },
    { perguntas: ["o que é busca binária", "binary search"], resposta: "Busca binária encontra elementos rapidamente." },
    { perguntas: ["o que é complexidade", "big o"], resposta: "Complexidade mede desempenho de algoritmos." },

    { perguntas: ["o que é rede neural", "neural network"], resposta: "Rede neural simula o cérebro humano." },
    { perguntas: ["o que é treinamento de ia", "treinar modelo"], resposta: "Treinamento usa dados para ensinar IA." },

    { perguntas: ["o que é banco de dados distribuído", "db distribuido"], resposta: "Banco distribuído funciona em vários servidores." },
    { perguntas: ["o que é redundância", "dados redundantes"], resposta: "Redundância evita perda de dados." },

    { perguntas: ["o que é cluster", "cluster servidor"], resposta: "Cluster é grupo de servidores." },
    { perguntas: ["o que é escalabilidade", "escala sistema"], resposta: "Escalabilidade é crescer sem perder desempenho." },

    { perguntas: ["o que é docker", "docker o que é"], resposta: "Docker cria ambientes isolados." },
    { perguntas: ["o que é container", "container sistema"], resposta: "Container isola aplicações." },

    { perguntas: ["o que é virtualização", "virtualizar sistema"], resposta: "Virtualização simula hardware." },
    { perguntas: ["o que é máquina virtual", "vm o que é"], resposta: "VM é um computador virtual." },

    { perguntas: ["o que é pipeline", "pipeline dev"], resposta: "Pipeline automatiza processos." },
    { perguntas: ["o que é ci cd", "integração contínua"], resposta: "CI/CD automatiza deploy." },

    { perguntas: ["o que é teste unitário", "unit test"], resposta: "Testa partes do código." },
    { perguntas: ["o que é teste integração", "integration test"], resposta: "Testa sistemas juntos." },

    { perguntas: ["o que é log sistema", "registro sistema"], resposta: "Log registra eventos." },
    { perguntas: ["o que é monitoramento", "monitorar sistema"], resposta: "Monitoramento acompanha desempenho." },

    { perguntas: ["o que é latência alta", "internet lenta"], resposta: "Alta latência causa lentidão." },
    { perguntas: ["o que é banda larga", "internet rápida"], resposta: "Banda larga tem alta velocidade." },

    { perguntas: ["o que é pacote dados", "pacote rede"], resposta: "Pacote transporta informação." },
    { perguntas: ["o que é protocolo rede", "protocolo comunicação"], resposta: "Protocolo define regras de comunicação." },

    { perguntas: ["o que é ftp", "transferir arquivos"], resposta: "FTP transfere arquivos." },
    { perguntas: ["o que é ssh", "acesso remoto"], resposta: "SSH acessa servidores com segurança." },

    { perguntas: ["o que é autenticação", "auth sistema"], resposta: "Autenticação verifica identidade." },
    { perguntas: ["o que é autorização", "permissão acesso"], resposta: "Autorização define acesso." },

    { perguntas: ["o que é token", "token login"], resposta: "Token autentica usuários." },
    { perguntas: ["o que é jwt", "jwt o que é"], resposta: "JWT é um token de autenticação." },

    { perguntas: ["o que é hash", "hash senha"], resposta: "Hash protege dados." },
    { perguntas: ["o que é salt", "segurança senha"], resposta: "Salt aumenta segurança." },

    { perguntas: ["o que é algoritmo criptografia", "criptografia dados"], resposta: "Algoritmos protegem informações." },
    { perguntas: ["o que é chave pública", "public key"], resposta: "Chave pública criptografa dados." },

    { perguntas: ["o que é chave privada", "private key"], resposta: "Chave privada descriptografa dados." },
    { perguntas: ["o que é certificado digital", "ssl certificado"], resposta: "Certificado garante segurança." },

    { perguntas: ["o que é frontend moderno", "ui moderna"], resposta: "Interfaces rápidas e responsivas." },
    { perguntas: ["o que é design responsivo", "layout adaptável"], resposta: "Adapta a qualquer tela." },

    { perguntas: ["o que é grid layout", "css grid"], resposta: "Grid organiza layout." },
    { perguntas: ["o que é flexbox", "css flex"], resposta: "Flexbox organiza elementos." },

    { perguntas: ["o que é animação css", "css animation"], resposta: "Cria movimentos visuais." },
    { perguntas: ["o que é transição css", "css transition"], resposta: "Suaviza mudanças." },

    { perguntas: ["o que é dom", "document object model"], resposta: "DOM representa a página." },
    { perguntas: ["o que é evento javascript", "event js"], resposta: "Evento reage a ações." },

    { perguntas: ["o que é callback", "função callback"], resposta: "Callback executa após outra função." },
    { perguntas: ["o que é promise", "promise js"], resposta: "Promise lida com operações async." },

    { perguntas: ["o que é async await", "await js"], resposta: "Simplifica código assíncrono." },
    { perguntas: ["o que é fetch", "buscar api"], resposta: "Fetch faz requisições." },

    { perguntas: ["o que é json parse", "converter json"], resposta: "Transforma JSON em objeto." },
    { perguntas: ["o que é json stringify", "converter string"], resposta: "Transforma objeto em texto." },

    { perguntas: ["o que é localstorage", "armazenamento local"], resposta: "Armazena dados no navegador." },
    { perguntas: ["o que é sessionstorage", "sessão storage"], resposta: "Armazena dados temporários." },

    { perguntas: ["o que é evento click", "click js"], resposta: "Evento de clique." },
    { perguntas: ["o que é input evento", "evento input"], resposta: "Evento ao digitar." },

    { perguntas: ["o que é console log", "debug console"], resposta: "Mostra mensagens no console." },
    { perguntas: ["o que é debug javascript", "debug js"], resposta: "Corrige erros." },

    { perguntas: ["o que é erro lógico", "erro lógica"], resposta: "Erro na lógica do código." },
    { perguntas: ["o que é erro sintaxe js", "erro js"], resposta: "Erro na escrita do código." },

    { perguntas: ["como resolver bug", "corrigir erro"], resposta: "Analise e teste o código." },
    { perguntas: ["como testar código", "testar js"], resposta: "Use console e testes." },

    { perguntas: ["como melhorar código", "refatorar código"], resposta: "Organize e simplifique." },
    { perguntas: ["como escrever código limpo", "clean code"], resposta: "Código claro e organizado." },

    { perguntas: ["o que é clean code", "codigo limpo"], resposta: "Código fácil de entender." },
    { perguntas: ["o que é boas práticas", "praticas programação"], resposta: "Regras para melhor código." },

    { perguntas: ["o que é performance", "performance sistema"], resposta: "Velocidade do sistema." },
    { perguntas: ["como otimizar código", "otimização"], resposta: "Reduza complexidade." },

    { perguntas: ["o que é cache navegador", "cache web"], resposta: "Armazena dados temporários." },
    { perguntas: ["o que é reload", "recarregar página"], resposta: "Atualiza a página." },

    { perguntas: ["o que é scroll", "rolagem página"], resposta: "Movimento da página." },
    { perguntas: ["o que é viewport", "tela navegador"], resposta: "Área visível da tela." },

    { perguntas: ["o que é pixel", "px css"], resposta: "Unidade de medida." },
    { perguntas: ["o que é porcentagem css", "percent css"], resposta: "Medida relativa." },

    { perguntas: ["o que é rem css", "rem unidade"], resposta: "Medida relativa ao root." },
    { perguntas: ["o que é em css", "em unidade"], resposta: "Medida relativa ao elemento." },

    { perguntas: ["oi", "olá", "eai"], resposta: "E aí! Como posso te ajudar?" },
    { perguntas: ["tudo bem", "como você está"], resposta: "Estou funcionando perfeitamente!" },
    { perguntas: ["quem é você", "o que é você"], resposta: "Sou um assistente estilo JARVIS criado em JavaScript." },
    { perguntas: ["qual seu nome"], resposta: "Você pode me chamar de JARVIS." },
    { perguntas: ["bom dia"], resposta: "Bom dia! Vamos começar o dia produtivo?" },

    { perguntas: ["boa tarde"], resposta: "Boa tarde! Em que posso ajudar?" },
    { perguntas: ["boa noite"], resposta: "Boa noite! Precisa de algo antes de descansar?" },
    { perguntas: ["ajuda", "me ajuda"], resposta: "Claro! Diga o que você precisa." },
    { perguntas: ["obrigado", "valeu"], resposta: "De nada! 😎" },
    { perguntas: ["desculpa"], resposta: "Tudo bem, sem problemas." },

    { perguntas: ["o que é html"], resposta: "HTML é a estrutura da web." },
    { perguntas: ["o que é css"], resposta: "CSS estiliza páginas web." },
    { perguntas: ["o que é js", "javascript"], resposta: "JavaScript adiciona interatividade." },
    { perguntas: ["o que é variável"], resposta: "Variável armazena valores." },
    { perguntas: ["o que é função"], resposta: "Função executa blocos de código." },

    { perguntas: ["o que é array"], resposta: "Array armazena múltiplos valores." },
    { perguntas: ["o que é objeto js"], resposta: "Objeto guarda dados em pares chave/valor." },
    { perguntas: ["o que é loop"], resposta: "Loop repete ações." },
    { perguntas: ["for loop"], resposta: "For é um laço de repetição." },
    { perguntas: ["while loop"], resposta: "While repete enquanto for verdadeiro." },

    { perguntas: ["o que é if"], resposta: "If é uma condição." },
    { perguntas: ["o que é else"], resposta: "Else é o contrário do if." },
    { perguntas: ["o que é switch"], resposta: "Switch escolhe casos diferentes." },
    { perguntas: ["o que é bug"], resposta: "Bug é um erro no código." },
    { perguntas: ["o que é debug"], resposta: "Debug é encontrar erros." },

    { perguntas: ["o que é computador"], resposta: "Máquina que processa dados." },
    { perguntas: ["o que é hardware"], resposta: "Parte física do computador." },
    { perguntas: ["o que é software"], resposta: "Programas do computador." },
    { perguntas: ["o que é cpu"], resposta: "Processador do computador." },
    { perguntas: ["o que é gpu"], resposta: "Placa de vídeo." },

    { perguntas: ["o que é ram"], resposta: "Memória temporária do sistema." },
    { perguntas: ["o que é ssd"], resposta: "Armazenamento rápido." },
    { perguntas: ["o que é hd"], resposta: "Armazenamento tradicional." },
    { perguntas: ["o que é internet"], resposta: "Rede mundial de computadores." },
    { perguntas: ["o que é ip"], resposta: "Identificação de um dispositivo na rede." },

    { perguntas: ["o que é dns"], resposta: "Traduz nomes de sites em IP." },
    { perguntas: ["o que é navegador"], resposta: "Programa para acessar sites." },
    { perguntas: ["chrome o que é"], resposta: "Navegador do Google." },
    { perguntas: ["edge o que é"], resposta: "Navegador da Microsoft." },
    { perguntas: ["firefox o que é"], resposta: "Navegador alternativo." },

    { perguntas: ["o que é api"], resposta: "Interface entre sistemas." },
    { perguntas: ["o que é rest api"], resposta: "API baseada em HTTP." },
    { perguntas: ["o que é json"], resposta: "Formato de dados leve." },
    { perguntas: ["o que é xml"], resposta: "Formato de dados estruturado." },
    { perguntas: ["o que é servidor"], resposta: "Máquina que fornece serviços." },

    { perguntas: ["o que é cliente servidor"], resposta: "Modelo de comunicação." },
    { perguntas: ["o que é backend"], resposta: "Parte do sistema no servidor." },
    { perguntas: ["o que é frontend"], resposta: "Parte visual do sistema." },
    { perguntas: ["o que é fullstack"], resposta: "Desenvolvedor completo." },
    { perguntas: ["o que é framework"], resposta: "Estrutura pronta para desenvolvimento." },

    { perguntas: ["o que é react"], resposta: "Biblioteca JavaScript para UI." },
    { perguntas: ["o que é nodejs"], resposta: "JavaScript no servidor." },
    { perguntas: ["o que é express"], resposta: "Framework para Node.js." },
    { perguntas: ["o que é vite"], resposta: "Ferramenta de build rápida." },
    { perguntas: ["o que é npm"], resposta: "Gerenciador de pacotes." },

    { perguntas: ["o que é git"], resposta: "Controle de versão." },
    { perguntas: ["o que é github"], resposta: "Plataforma de código." },
    { perguntas: ["o que é commit"], resposta: "Salvar alterações no git." },
    { perguntas: ["o que é push"], resposta: "Enviar código para o repositório." },
    { perguntas: ["o que é pull"], resposta: "Puxar código do repositório." },

    { perguntas: ["o que é branch"], resposta: "Linha paralela de desenvolvimento." },
    { perguntas: ["o que é merge"], resposta: "Unir branches." },
    { perguntas: ["o que é css inline"], resposta: "CSS dentro do HTML." },
    { perguntas: ["o que é id css"], resposta: "Identificador único." },
    { perguntas: ["o que é class css"], resposta: "Classe reutilizável." },

    { perguntas: ["o que é responsivo"], resposta: "Se adapta a telas diferentes." },
    { perguntas: ["o que é mobile first"], resposta: "Design para celular primeiro." },
    { perguntas: ["o que é ui"], resposta: "Interface do usuário." },
    { perguntas: ["o que é ux"], resposta: "Experiência do usuário." },
    { perguntas: ["o que é design"], resposta: "Planejamento visual." },

    { perguntas: ["qual melhor linguagem"], resposta: "Depende do objetivo do projeto." },
    { perguntas: ["python ou javascript"], resposta: "Python é mais fácil, JS é web." },
    { perguntas: ["vale a pena programar"], resposta: "Sim, é uma ótima habilidade." },
    { perguntas: ["programação é difícil"], resposta: "No começo sim, depois fica natural." },
    { perguntas: ["como aprender programação"], resposta: "Praticando todos os dias." },

    // ================= +200 NOVAS ENTRADAS =================

    // ================= INTERAÇÃO =================
    { perguntas: ["eae jarvis", "fala jarvis"], resposta: "Fala! No que posso te ajudar?" },
    { perguntas: ["está aí", "jarvis responde"], resposta: "Sempre online 😎" },
    { perguntas: ["beleza", "tranquilo"], resposta: "Tudo certo por aqui!" },
    { perguntas: ["vamo lá", "vamos começar"], resposta: "Bora começar!" },
    { perguntas: ["estou pronto", "pronto"], resposta: "Ótimo, vamos lá!" },
    { perguntas: ["me escuta", "oi jarvis"], resposta: "Te escutando!" },
    { perguntas: ["qual função você tem", "o que faz"], resposta: "Posso responder perguntas e te ajudar a programar." },
    { perguntas: ["fala comigo", "interagir"], resposta: "Pode falar!" },
    { perguntas: ["me ouve", "ta ativo"], resposta: "Sim, ativo!" },
    { perguntas: ["reiniciar", "reset"], resposta: "Sistema pronto novamente." },

    // ================= PROGRAMACAO =================
    { perguntas: ["o que é dom js", "dom javascript"], resposta: "DOM é a estrutura da página acessível pelo JS." },
    { perguntas: ["o que é evento click js", "click evento"], resposta: "Evento de clique no elemento." },
    { perguntas: ["o que é settimeout", "timeout js"], resposta: "Executa código após um tempo." },
    { perguntas: ["o que é setinterval", "interval js"], resposta: "Executa código repetidamente." },
    { perguntas: ["o que é arrow function", "função seta"], resposta: "Função mais curta em JavaScript." },
    { perguntas: ["o que é hoisting", "hoisting js"], resposta: "Elevação de variáveis no JS." },
    { perguntas: ["o que é strict mode", "modo estrito"], resposta: "Modo mais seguro do JavaScript." },
    { perguntas: ["o que é destructuring", "desestruturação"], resposta: "Extrair dados de arrays/objetos." },
    { perguntas: ["o que é spread operator", "spread js"], resposta: "Espalha elementos de um array." },
    { perguntas: ["o que é template string", "template literal"], resposta: "Texto com variáveis no JS." },

    // ================= MATEMATICA =================
    { perguntas: ["quanto é 5+5"], resposta: "10." },
    { perguntas: ["quanto é 100/2"], resposta: "50." },
    { perguntas: ["quanto é 3x3"], resposta: "9." },
    { perguntas: ["raiz quadrada de 9"], resposta: "3." },
    { perguntas: ["raiz de 16"], resposta: "4." },
    { perguntas: ["quanto é 7x8"], resposta: "56." },
    { perguntas: ["quanto é 9+9"], resposta: "18." },
    { perguntas: ["quanto é 20-5"], resposta: "15." },
    { perguntas: ["quanto é 50+50"], resposta: "100." },
    { perguntas: ["quanto é 6x6"], resposta: "36." },

    // ================= CIENCIA =================
    { perguntas: ["o que é átomo"], resposta: "Menor parte da matéria." },
    { perguntas: ["o que é célula"], resposta: "Unidade básica da vida." },
    { perguntas: ["o que é dna"], resposta: "Material genético dos seres vivos." },
    { perguntas: ["o que é evolução"], resposta: "Mudança das espécies ao longo do tempo." },
    { perguntas: ["o que é planeta terra"], resposta: "Nosso planeta." },
    { perguntas: ["o que é sistema solar"], resposta: "Conjunto de planetas ao redor do sol." },
    { perguntas: ["o que é sol"], resposta: "Estrela do nosso sistema solar." },
    { perguntas: ["o que é lua"], resposta: "Satélite natural da Terra." },
    { perguntas: ["o que é gravidade zero"], resposta: "Ausência de força gravitacional." },
    { perguntas: ["o que é universo"], resposta: "Tudo que existe." },

    // ================= INTERNET =================
    { perguntas: ["o que é upload"], resposta: "Enviar arquivos para a internet." },
    { perguntas: ["o que é download"], resposta: "Baixar arquivos da internet." },
    { perguntas: ["o que é navegador web"], resposta: "Programa para acessar sites." },
    { perguntas: ["o que é url"], resposta: "Endereço de um site." },
    { perguntas: ["o que é site"], resposta: "Página na internet." },
    { perguntas: ["o que é app web"], resposta: "Aplicação que roda no navegador." },
    { perguntas: ["o que é cookie"], resposta: "Dados salvos no navegador." },
    { perguntas: ["o que é cache navegador"], resposta: "Armazena dados temporários." },
    { perguntas: ["o que é vpn"], resposta: "Rede privada virtual." },
    { perguntas: ["o que é proxy"], resposta: "Intermediário entre usuário e internet." },

    // ================= MOTIVACAO =================
    { perguntas: ["não consigo mais"], resposta: "Você consegue sim, continue." },
    { perguntas: ["desisto"], resposta: "Não desista agora!" },
    { perguntas: ["estou perdido"], resposta: "Respira e continue tentando." },
    { perguntas: ["sem motivação"], resposta: "Comece pequeno hoje." },
    { perguntas: ["tô fraco"], resposta: "Você é mais forte do que pensa." },
    { perguntas: ["não sei o que fazer"], resposta: "Escolha uma pequena tarefa." },
    { perguntas: ["me inspire"], resposta: "Cada linha de código te evolui." },
    { perguntas: ["quero evoluir"], resposta: "Pratique todos os dias." },
    { perguntas: ["quero mudar"], resposta: "Mudança começa com ação." },
    { perguntas: ["quero crescer"], resposta: "Continue aprendendo sempre." },

    // ================= TECNOLOGIA =================
    { perguntas: ["o que é ia generativa"], resposta: "IA que cria textos, imagens e mais." },
    { perguntas: ["o que é chatbot"], resposta: "Sistema que conversa com humanos." },
    { perguntas: ["o que é automação"], resposta: "Processos automáticos." },
    { perguntas: ["o que é robótica"], resposta: "Área que cria robôs." },
    { perguntas: ["o que é machine vision"], resposta: "IA que enxerga imagens." },
    { perguntas: ["o que é big data"], resposta: "Grande volume de dados." },
    { perguntas: ["o que é blockchain"], resposta: "Tecnologia de blocos de dados." },
    { perguntas: ["o que é bitcoin"], resposta: "Moeda digital." },
    { perguntas: ["o que é nft"], resposta: "Item digital único." },
    { perguntas: ["o que é metaverso"], resposta: "Mundo virtual digital." },

    // ================= JOGOS / MARVEL =================
    { perguntas: ["quem é spider man"], resposta: "Herói da Marvel." },
    { perguntas: ["quem é iron man"], resposta: "Tony Stark, gênio da tecnologia." },
    { perguntas: ["quem é thanos"], resposta: "Vilão do universo Marvel." },
    { perguntas: ["o que é gta"], resposta: "Jogo de mundo aberto." },
    { perguntas: ["o que é minecraft"], resposta: "Jogo de construção e sobrevivência." },
    { perguntas: ["o que é fortnite"], resposta: "Jogo battle royale." },
    { perguntas: ["o que é roblox"], resposta: "Plataforma de jogos." },
    { perguntas: ["o que é red dead redemption"], resposta: "Jogo de faroeste." },
    { perguntas: ["o que é warzone"], resposta: "Jogo de tiro da Activision." },
    { perguntas: ["o que é ps5"], resposta: "Console de nova geração." },

    // ================= MAIS PROGRAMAÇÃO =================
    { perguntas: ["o que é classe js"], resposta: "Modelo para criar objetos." },
    { perguntas: ["o que é objeto literal"], resposta: "Objeto criado manualmente." },
    { perguntas: ["o que é import js"], resposta: "Importa módulos." },
    { perguntas: ["o que é export js"], resposta: "Exporta código." },
    { perguntas: ["o que é modulo js"], resposta: "Arquivo reutilizável." },
    { perguntas: ["o que é api fetch"], resposta: "Busca dados da web." },
    { perguntas: ["o que é cors"], resposta: "Segurança de requisições web." },
    { perguntas: ["o que é backend api"], resposta: "Servidor que responde dados." },
    { perguntas: ["o que é deploy web"], resposta: "Publicar site online." },
    { perguntas: ["o que é hosting site"], resposta: "Onde site fica armazenado." },

    // ================= EXTRA =================
    { perguntas: ["quem te criou"], resposta: "Um desenvolvedor em JavaScript 😎" },
    { perguntas: ["você pensa"], resposta: "Sim, de forma programada." },
    { perguntas: ["você aprende sozinho"], resposta: "Posso ser programado para aprender." },
    { perguntas: ["você é inteligente"], resposta: "Estou em evolução constante." },
    { perguntas: ["qual seu objetivo"], resposta: "Te ajudar com programação e dúvidas." },

    // ================= NOVAS PERGUNTAS (ZERO REPETIÇÃO) =================

    // ================= VIDA / DIA A DIA =================
    { perguntas: ["o que devo fazer hoje", "ideias para hoje"], resposta: "Você pode estudar, treinar ou criar algo novo." },
    { perguntas: ["estou entediado agora", "sem nada pra fazer"], resposta: "Que tal aprender algo novo ou praticar programação?" },
    { perguntas: ["como melhorar meu dia", "dia ruim o que fazer"], resposta: "Comece fazendo algo pequeno e produtivo." },
    { perguntas: ["como ser mais feliz diariamente", "felicidade todo dia"], resposta: "Crie hábitos positivos e simples." },
    { perguntas: ["como parar de pensar demais", "mente acelerada"], resposta: "Respire e foque no presente." },

    { perguntas: ["como lidar com pressão", "estresse alto"], resposta: "Organize suas tarefas e vá por partes." },
    { perguntas: ["como manter calma", "ficar calmo rápido"], resposta: "Respire fundo e desacelere." },
    { perguntas: ["como ser mais confiante", "auto confiança"], resposta: "Treine pequenas vitórias diárias." },
    { perguntas: ["como parar insegurança", "me sinto inseguro"], resposta: "Foque no que você controla." },
    { perguntas: ["como ter coragem", "ser corajoso"], resposta: "Coragem vem da prática." },

    // ================= ESTUDOS =================
    { perguntas: ["como estudar sem distração", "foco estudo total"], resposta: "Desligue distrações e defina tempo fixo." },
    { perguntas: ["como aprender mais rápido matérias", "estudo acelerado"], resposta: "Revisão frequente ajuda muito." },
    { perguntas: ["como melhorar notas", "ir bem na escola"], resposta: "Estude um pouco todos os dias." },
    { perguntas: ["como lembrar do conteúdo", "memorização estudo"], resposta: "Use repetição e prática." },
    { perguntas: ["como não esquecer prova", "revisar conteúdo"], resposta: "Revise antes de dormir." },

    { perguntas: ["como fazer resumo bom", "resumir matéria"], resposta: "Escreva só ideias principais." },
    { perguntas: ["como estudar matemática fácil", "matemática difícil"], resposta: "Pratique exercícios básicos." },
    { perguntas: ["como entender física", "física difícil"], resposta: "Visualize exemplos do dia a dia." },
    { perguntas: ["como estudar história rápido", "decorar história"], resposta: "Crie linhas do tempo." },
    { perguntas: ["como estudar geografia fácil", "mapas estudo"], resposta: "Use mapas e associações." },

    // ================= TECNOLOGIA / VIDA DIGITAL =================
    { perguntas: ["o que é inteligência artificial na prática", "ia exemplos reais"], resposta: "IA está em apps, buscas e recomendações." },
    { perguntas: ["como funciona um site por dentro", "site como funciona"], resposta: "É HTML, CSS e JavaScript processados no navegador." },
    { perguntas: ["o que acontece quando abre um app", "app funcionamento"], resposta: "Ele carrega dados e interface do sistema." },
    { perguntas: ["como a internet funciona por trás", "rede internet explicação"], resposta: "Dados viajam em pacotes entre servidores." },
    { perguntas: ["o que é servidor na prática", "servidor exemplos"], resposta: "É um computador que entrega dados." },

    { perguntas: ["o que é nuvem de dados", "cloud exemplos"], resposta: "Armazenamento em servidores online." },
    { perguntas: ["como funciona whatsapp por trás", "mensagem app funcionamento"], resposta: "Mensagens passam por servidores." },
    { perguntas: ["como funciona youtube", "videos internet como funciona"], resposta: "Streaming de servidores globais." },
    { perguntas: ["como funciona google search", "busca google como funciona"], resposta: "Indexa bilhões de páginas." },
    { perguntas: ["o que acontece quando clico em link", "link funcionamento"], resposta: "O navegador busca o site." },

    // ================= FUTURO / CARREIRA =================
    { perguntas: ["qual profissão do futuro", "carreira tecnologia futuro"], resposta: "Tecnologia, IA e dados estão crescendo." },
    { perguntas: ["vale a pena trabalhar com tecnologia", "tecnologia emprego"], resposta: "Sim, é uma área em crescimento." },
    { perguntas: ["como escolher carreira", "qual profissão seguir"], resposta: "Escolha algo que você goste." },
    { perguntas: ["como saber minha área ideal", "profissão certa"], resposta: "Teste áreas diferentes." },
    { perguntas: ["como ganhar experiência cedo", "começar carreira jovem"], resposta: "Crie projetos próprios." },

    // ================= HABILIDADES =================
    { perguntas: ["como melhorar criatividade", "ser mais criativo ideias"], resposta: "Experimente coisas novas sempre." },
    { perguntas: ["como pensar melhor sozinho", "reflexão pessoal"], resposta: "Pratique autoconhecimento." },
    { perguntas: ["como aprender qualquer coisa rápido", "aprendizado geral"], resposta: "Divida em partes pequenas." },
    { perguntas: ["como desenvolver disciplina forte", "disciplina alta"], resposta: "Crie rotina fixa diária." },
    { perguntas: ["como parar de desistir fácil", "persistência"], resposta: "Continue mesmo sem motivação." },

    // ================= TECNOLOGIA AVANÇADA =================
    { perguntas: ["o que é inteligência artificial geral", "agi o que é"], resposta: "IA capaz de aprender qualquer tarefa." },
    { perguntas: ["o que é rede neural profunda", "deep network"], resposta: "Modelo com várias camadas." },
    { perguntas: ["o que é modelo de linguagem", "llm o que é"], resposta: "IA que entende texto humano." },
    { perguntas: ["o que é treinamento de dados ia", "dataset ia"], resposta: "Ensinar IA com exemplos." },
    { perguntas: ["o que é prompt", "prompt engenharia"], resposta: "Texto enviado para IA responder." },

    // ================= INTERNET SEGURANÇA =================
    { perguntas: ["como se proteger online", "segurança internet dicas"], resposta: "Use senhas fortes e cuidado com links." },
    { perguntas: ["como evitar golpes digitais", "fraude internet"], resposta: "Não clique em links suspeitos." },
    { perguntas: ["o que é engenharia social", "golpes psicológicos"], resposta: "Manipulação para roubar dados." },
    { perguntas: ["como criar senha forte", "senha segura como fazer"], resposta: "Use letras, números e símbolos." },
    { perguntas: ["o que é autenticação dois fatores", "2fa o que é"], resposta: "Segurança extra no login." },

    // ================= PRODUTIVIDADE =================
    { perguntas: ["como organizar rotina diária", "rotina eficiente"], resposta: "Planeje tarefas por horário." },
    { perguntas: ["como parar de perder tempo", "tempo produtividade"], resposta: "Defina metas pequenas." },
    { perguntas: ["como focar mais no celular", "menos distração celular"], resposta: "Desative notificações." },
    { perguntas: ["como ser constante em algo", "consistência hábitos"], resposta: "Faça todos os dias." },
    { perguntas: ["como criar hábitos bons", "formar hábito positivo"], resposta: "Repita por semanas." },

    // ================= TECNOLOGIA COTIDIANA =================
    { perguntas: ["como funciona bluetooth", "bluetooth o que é"], resposta: "Conexão sem fio de curto alcance." },
    { perguntas: ["o que é gps", "localização gps"], resposta: "Sistema de localização por satélite." },
    { perguntas: ["como funciona tela touch", "touch screen como funciona"], resposta: "Detecta toque por sensores." },
    { perguntas: ["o que é 4g 5g", "internet móvel diferença"], resposta: "Tecnologias de internet móvel." },
    { perguntas: ["o que é modem", "internet casa como funciona"], resposta: "Dispositivo que conecta internet." },

    // ================= COMPORTAMENTO =================
    { perguntas: ["como parar preguiça mental", "sem vontade de fazer nada"], resposta: "Comece com algo pequeno." },
    { perguntas: ["como parar ansiedade de futuro", "preocupação constante"], resposta: "Foque no agora." },
    { perguntas: ["como controlar emoções", "sentimentos fortes"], resposta: "Observe antes de reagir." },
    { perguntas: ["como ser mais organizado", "organização pessoal"], resposta: "Use listas simples." },
    { perguntas: ["como melhorar hábitos ruins", "trocar hábito ruim"], resposta: "Substitua por outro hábito." },

    // ================= EXTRA INTELIGENTE =================
    { perguntas: ["o que significa evolução pessoal", "crescimento pessoal"], resposta: "Melhorar continuamente como pessoa." },
    { perguntas: ["como melhorar mentalidade", "mindset forte"], resposta: "Pense no longo prazo." },
    { perguntas: ["o que é aprendizado constante", "sempre aprender"], resposta: "Nunca parar de estudar." },
    { perguntas: ["como mudar de vida", "recomeçar vida"], resposta: "Comece com pequenas ações." },
    { perguntas: ["como ter mentalidade forte", "mente forte"], resposta: "Treine disciplina e foco." },

    { perguntas: ["como melhorar a vida", "melhorar minha vida"], resposta: "Comece mudando pequenos hábitos diários." },
    { perguntas: ["como ser mais inteligente", "ficar mais inteligente"], resposta: "Estude todos os dias e pratique pensamento lógico." },
    { perguntas: ["como ter disciplina", "ser disciplinado"], resposta: "Crie uma rotina e siga todos os dias." },
    { perguntas: ["como parar de procrastinar", "evitar procrastinação"], resposta: "Comece tarefas pequenas imediatamente." },
    { perguntas: ["como ter foco", "melhorar foco"], resposta: "Elimine distrações e defina metas claras." },

    { perguntas: ["como estudar melhor", "melhorar estudo"], resposta: "Estude em blocos curtos e revise sempre." },
    { perguntas: ["como aprender rápido", "aprender mais rápido"], resposta: "Pratique e revise constantemente." },
    { perguntas: ["como memorizar melhor", "melhor memória"], resposta: "Use repetição e associação de ideias." },
    { perguntas: ["como ser produtivo", "aumentar produtividade"], resposta: "Organize tarefas e evite distrações." },
    { perguntas: ["como organizar a vida", "organização pessoal"], resposta: "Use listas e defina prioridades." },

    { perguntas: ["como ser feliz", "felicidade"], resposta: "Foque no presente e valorize pequenas coisas." },
    { perguntas: ["como lidar com tristeza", "estou triste"], resposta: "Fale com alguém e cuide de você." },
    { perguntas: ["como controlar ansiedade", "ansiedade"], resposta: "Respire fundo e foque no agora." },
    { perguntas: ["como ter autoestima", "autoestima baixa"], resposta: "Reconheça suas qualidades." },
    { perguntas: ["como ter confiança", "ser confiante"], resposta: "Acredite nas suas ações diárias." },

    { perguntas: ["como melhorar mentalidade", "mindset forte"], resposta: "Pense a longo prazo e não desista fácil." },
    { perguntas: ["como ser forte mentalmente", "mente forte"], resposta: "Treine disciplina e resiliência." },
    { perguntas: ["como ter coragem", "ser corajoso"], resposta: "Enfrente pequenos desafios diariamente." },
    { perguntas: ["como não desistir", "persistência"], resposta: "Continue mesmo com dificuldade." },
    { perguntas: ["como ter foco nos estudos", "foco estudo"], resposta: "Estude sem celular por períodos curtos." },

    { perguntas: ["o que é vida", "significado da vida"], resposta: "A vida é aprendizado e experiência." },
    { perguntas: ["qual sentido da vida", "sentido da existência"], resposta: "Depende de cada pessoa e seus objetivos." },
    { perguntas: ["como encontrar propósito", "propósito de vida"], resposta: "Descubra o que você gosta de fazer." },
    { perguntas: ["como evoluir como pessoa", "crescimento pessoal"], resposta: "Aprenda com erros e pratique diariamente." },
    { perguntas: ["como mudar de vida", "recomeçar vida"], resposta: "Comece com pequenas mudanças diárias." },

    { perguntas: ["como parar preguiça", "evitar preguiça"], resposta: "Comece mesmo sem vontade." },
    { perguntas: ["como ter energia", "mais energia"], resposta: "Durma bem e mantenha hábitos saudáveis." },
    { perguntas: ["como acordar cedo", "acordar cedo fácil"], resposta: "Durma mais cedo e mantenha rotina." },
    { perguntas: ["como dormir melhor", "insônia"], resposta: "Evite telas antes de dormir." },
    { perguntas: ["como ter rotina", "criar rotina"], resposta: "Defina horários fixos para tudo." },

    { perguntas: ["como aprender qualquer coisa", "aprender tudo"], resposta: "Divida o aprendizado em etapas pequenas." },
    { perguntas: ["como ser mais criativo", "criatividade"], resposta: "Experimente coisas novas sempre." },
    { perguntas: ["como pensar melhor", "pensamento lógico"], resposta: "Treine lógica com problemas simples." },
    { perguntas: ["como tomar decisões", "decidir melhor"], resposta: "Analise prós e contras." },
    { perguntas: ["como melhorar raciocínio", "lógica"], resposta: "Pratique exercícios mentais." },

    { perguntas: ["o que é inteligência", "ser inteligente"], resposta: "É a capacidade de aprender e resolver problemas." },
    { perguntas: ["como ficar mais inteligente rápido", "inteligência rápida"], resposta: "Leia, pratique e aprenda sempre." },
    { perguntas: ["como aprender programação", "programação iniciante"], resposta: "Comece com lógica e prática." },
    { perguntas: ["como criar projetos", "ideias projeto"], resposta: "Comece simples e evolua aos poucos." },
    { perguntas: ["como trabalhar com tecnologia", "carreira tech"], resposta: "Estude programação e pratique projetos." },

    { perguntas: ["o que é tecnologia", "tecnologia definição"], resposta: "Tecnologia é o uso de conhecimento para resolver problemas." },
    { perguntas: ["o que é futuro", "futuro da vida"], resposta: "É o que ainda vai acontecer." },
    { perguntas: ["o que é inovação", "inovar"], resposta: "Criar algo novo ou melhorar algo existente." },
    { perguntas: ["o que é criatividade", "ser criativo"], resposta: "Gerar ideias novas e úteis." },
    { perguntas: ["o que é conhecimento", "aprender"], resposta: "Informação adquirida com estudo ou experiência." },

    { perguntas: ["como estudar sem distração", "foco total"], resposta: "Desligue notificações e foque em uma coisa." },
    { perguntas: ["como parar de usar celular muito", "vício celular"], resposta: "Defina horários para usar o celular." },
    { perguntas: ["como ser organizado", "organização"], resposta: "Use listas e planejamento diário." },
    { perguntas: ["como melhorar desempenho", "performance pessoal"], resposta: "Durma bem e pratique sempre." },
    { perguntas: ["como ter hábitos bons", "bons hábitos"], resposta: "Repita ações positivas todos os dias." },

    { perguntas: ["o que é disciplina", "ser disciplinado"], resposta: "É fazer o que precisa ser feito mesmo sem vontade." },
    { perguntas: ["o que é foco mental", "concentração"], resposta: "É manter atenção em uma coisa só." },
    { perguntas: ["o que é motivação", "ficar motivado"], resposta: "É a energia para agir." },
    { perguntas: ["como manter motivação", "não desanimar"], resposta: "Lembre do seu objetivo." },
    { perguntas: ["como vencer preguiça mental", "bloqueio mental"], resposta: "Comece pequeno e continue." },

    { perguntas: ["como melhorar memória", "lembrar coisas"], resposta: "Revisão e repetição ajudam muito." },
    { perguntas: ["como estudar matemática", "matemática fácil"], resposta: "Pratique exercícios simples primeiro." },
    { perguntas: ["como estudar português", "gramática"], resposta: "Leia e pratique escrita." },
    { perguntas: ["como estudar história", "história fácil"], resposta: "Entenda os acontecimentos em ordem." },
    { perguntas: ["como estudar geografia", "geografia fácil"], resposta: "Use mapas e exemplos reais." },

    { perguntas: ["como aprender inglês", "inglês fácil"], resposta: "Pratique todos os dias com frases simples." },
    { perguntas: ["como falar inglês", "conversação inglês"], resposta: "Treine frases básicas diariamente." },
    { perguntas: ["como melhorar escrita", "escrever melhor"], resposta: "Escreva todos os dias." },
    { perguntas: ["como melhorar leitura", "ler melhor"], resposta: "Leia coisas interessantes." },
    { perguntas: ["como falar bem", "comunicação"], resposta: "Pratique falar com outras pessoas." },

    { perguntas: ["como funciona inteligência artificial de verdade", "ia como funciona por trás"], resposta: "Ela aprende padrões com dados." },
    { perguntas: ["o que é aprendizado supervisionado", "supervised learning"], resposta: "IA aprende com exemplos rotulados." },
    { perguntas: ["o que é aprendizado não supervisionado", "unsupervised learning"], resposta: "IA encontra padrões sozinha." },
    { perguntas: ["o que é reforço em ia", "reinforcement learning"], resposta: "IA aprende por tentativa e erro." },
    { perguntas: ["o que é dataset", "dados ia"], resposta: "Conjunto de dados para treinar IA." },

    { perguntas: ["como um computador pensa", "computador raciocina"], resposta: "Ele executa instruções programadas." },
    { perguntas: ["o que é processamento de dados", "dados processamento"], resposta: "Transformar dados em informação." },
    { perguntas: ["o que é sistema inteligente", "ia sistema"], resposta: "Sistema que toma decisões sozinho." },
    { perguntas: ["o que é automação avançada", "processos automáticos ia"], resposta: "Execução automática de tarefas." },
    { perguntas: ["o que é robô inteligente", "robótica ia"], resposta: "Robô com capacidade de decisão." },

    { perguntas: ["como a internet conecta o mundo", "internet global como funciona"], resposta: "Através de servidores interligados." },
    { perguntas: ["o que acontece em milissegundos na internet", "internet velocidade"], resposta: "Dados viajam rapidamente entre servidores." },
    { perguntas: ["o que é roteamento", "internet rotas dados"], resposta: "Caminho que os dados seguem." },
    { perguntas: ["o que é pacote de dados perdido", "packet loss"], resposta: "Quando dados não chegam." },
    { perguntas: ["o que é ping internet", "latência ping"], resposta: "Tempo de resposta da conexão." },

    { perguntas: ["como jogos online funcionam", "jogo multiplayer como funciona"], resposta: "Servidores sincronizam jogadores." },
    { perguntas: ["o que é servidor de jogo", "game server"], resposta: "Servidor que mantém o jogo online." },
    { perguntas: ["o que é fps jogo", "frames por segundo"], resposta: "Quantidade de imagens por segundo." },
    { perguntas: ["o que é lag jogo", "atraso jogo online"], resposta: "Atraso na comunicação do jogo." },
    { perguntas: ["o que é renderização", "render graphics"], resposta: "Processo de criar imagens." },

    { perguntas: ["como o youtube recomenda vídeos", "algoritmo youtube"], resposta: "Baseado no seu comportamento." },
    { perguntas: ["como instagram funciona algoritmo", "feed instagram"], resposta: "Mostra conteúdo baseado em interesses." },
    { perguntas: ["como tiktok viraliza vídeos", "viral tiktok algoritmo"], resposta: "Baseado em engajamento." },
    { perguntas: ["o que é engajamento", "interação conteúdo"], resposta: "Curtidas, comentários e visualizações." },
    { perguntas: ["o que é algoritmo rede social", "social media algoritmo"], resposta: "Sistema de recomendação." },

    { perguntas: ["como criar aplicativo do zero", "app do zero como fazer"], resposta: "Use linguagem e framework." },
    { perguntas: ["o que é flutter", "flutter o que é"], resposta: "Framework para apps móveis." },
    { perguntas: ["o que é react native", "app mobile react"], resposta: "Framework para apps híbridos." },
    { perguntas: ["o que é android studio", "app android ferramenta"], resposta: "IDE para apps Android." },
    { perguntas: ["o que é ios development", "app iphone desenvolvimento"], resposta: "Criação de apps para iPhone." },

    { perguntas: ["o que é banco de dados em nuvem", "cloud database"], resposta: "Banco hospedado online." },
    { perguntas: ["o que é firebase", "firebase o que é"], resposta: "Plataforma backend do Google." },
    { perguntas: ["o que é supabase", "supabase o que é"], resposta: "Alternativa ao Firebase." },
    { perguntas: ["o que é api key", "chave api"], resposta: "Chave para acessar API." },
    { perguntas: ["o que é endpoint api", "api endpoint"], resposta: "URL de acesso da API." },

    { perguntas: ["o que é machine learning na vida real", "ia exemplos ml"], resposta: "Recomendação, reconhecimento e análise." },
    { perguntas: ["o que é reconhecimento facial", "face id como funciona"], resposta: "IA identifica rostos." },
    { perguntas: ["o que é reconhecimento de voz", "voice recognition"], resposta: "IA entende fala humana." },
    { perguntas: ["o que é tradução automática", "google translate como funciona"], resposta: "IA traduz idiomas." },
    { perguntas: ["o que é chatbot inteligente", "ia conversa automática"], resposta: "IA que responde perguntas." },

    { perguntas: ["como sites são hospedados", "site hospedagem como funciona"], resposta: "Em servidores na internet." },
    { perguntas: ["o que é servidor dedicado", "dedicated server"], resposta: "Servidor exclusivo para um cliente." },
    { perguntas: ["o que é vps", "servidor virtual"], resposta: "Servidor virtual privado." },
    { perguntas: ["o que é cloud hosting", "hospedagem nuvem"], resposta: "Hospedagem em nuvem." },
    { perguntas: ["o que é uptime servidor", "tempo online servidor"], resposta: "Tempo que o servidor fica ativo." },

    { perguntas: ["o que é algoritmo genético", "evolução ia"], resposta: "IA inspirada na evolução." },
    { perguntas: ["o que é lógica booleana", "true false lógica"], resposta: "Sistema de verdadeiro ou falso." },
    { perguntas: ["o que é sistema binário", "computador binário"], resposta: "Base 0 e 1." },
    { perguntas: ["o que é byte", "dados computador"], resposta: "Unidade de dados." },
    { perguntas: ["o que é bit", "bit o que é"], resposta: "Menor unidade de informação." },

    { perguntas: ["como funciona memória do computador", "ram como funciona"], resposta: "Armazena dados temporários." },
    { perguntas: ["o que é cache cpu", "cpu cache"], resposta: "Memória rápida do processador." },
    { perguntas: ["o que é clock cpu", "velocidade processador"], resposta: "Velocidade de processamento." },
    { perguntas: ["o que é núcleo cpu", "core processador"], resposta: "Parte que executa tarefas." },
    { perguntas: ["o que é threads cpu", "processamento paralelo"], resposta: "Execução simultânea de tarefas." },

    { perguntas: ["o que é placa mãe", "motherboard o que é"], resposta: "Conecta todos componentes." },
    { perguntas: ["o que é fonte de energia pc", "power supply"], resposta: "Fornece energia ao computador." },
    { perguntas: ["o que é gabinete pc", "case computador"], resposta: "Estrutura do computador." },
    { perguntas: ["o que é refrigeração pc", "cooler computador"], resposta: "Controla temperatura." },
    { perguntas: ["o que é thermal paste", "pasta térmica"], resposta: "Ajuda na dissipação de calor." },

    { perguntas: ["o que é criptomoeda mineração", "mineração bitcoin"], resposta: "Processo de validar transações." },
    { perguntas: ["o que é blockchain na prática", "blockchain uso real"], resposta: "Registro descentralizado de dados." },
    { perguntas: ["o que é wallet cripto", "carteira bitcoin"], resposta: "Armazena criptomoedas." },
    { perguntas: ["o que é exchange cripto", "compra bitcoin"], resposta: "Plataforma de troca." },
    { perguntas: ["o que é nft arte digital", "nft significado"], resposta: "Item digital único." },

    { perguntas: ["o que é deepfake", "video falso ia"], resposta: "IA que altera vídeos." },
    { perguntas: ["o que é realidade aumentada", "ar tecnologia"], resposta: "Mistura mundo real e digital." },
    { perguntas: ["o que é realidade virtual", "vr tecnologia"], resposta: "Ambiente digital imersivo." },
    { perguntas: ["o que é holograma", "imagem 3d luz"], resposta: "Imagem tridimensional." },
    { perguntas: ["o que é interface cérebro computador", "bci"], resposta: "Conexão entre cérebro e máquina." },


    { perguntas: ["me conta uma curiosidade", "algo interessante"], resposta: "O cérebro humano é mais rápido que qualquer computador em algumas tarefas." },
    { perguntas: ["me dá uma dica", "conselho"], resposta: "Nunca pare de aprender." },
    { perguntas: ["última pergunta", "tchau"], resposta: "Até mais! Estarei aqui quando precisar." }



    // ================= PARTE 3 - MAIS CONVERSAÇÃO IA =================

    , { perguntas: ["você pode me ouvir", "está me escutando"], resposta: "Eu não ouço áudio, apenas texto." }
    , { perguntas: ["você entende sentimentos", "você sente emoções"], resposta: "Eu apenas simulo compreensão." }
    , { perguntas: ["qual seu objetivo", "por que você existe"], resposta: "Meu objetivo é te ajudar." }
    , { perguntas: ["você pode aprender sozinho", "aprende automático"], resposta: "Depende da programação do sistema." }
    , { perguntas: ["você é atualizado", "você muda com o tempo"], resposta: "Posso ser atualizado pelos desenvolvedores." }

    , { perguntas: ["o que é lógica de programação", "pensamento lógico código"], resposta: "É a base para resolver problemas com código." }
    , { perguntas: ["como melhorar lógica", "treinar programação lógica"], resposta: "Praticando exercícios todos os dias." }
    , { perguntas: ["o que é erro no código", "bug programação"], resposta: "Falha que impede o código de funcionar." }
    , { perguntas: ["o que é debug", "debugar código"], resposta: "Processo de encontrar erros." }
    , { perguntas: ["o que é compilador", "compilar código"], resposta: "Transforma código em linguagem de máquina." }

    , { perguntas: ["o que é linguagem interpretada", "javascript interpretado"], resposta: "Executada linha por linha." }
    , { perguntas: ["o que é linguagem compilada", "c++ compilado"], resposta: "Convertida antes de executar." }
    , { perguntas: ["o que é framework", "framework programação"], resposta: "Estrutura pronta para desenvolvimento." }
    , { perguntas: ["o que é biblioteca", "library código"], resposta: "Conjunto de funções prontas." }
    , { perguntas: ["o que é open source", "código aberto significado"], resposta: "Código que qualquer um pode ver e modificar." }

    , { perguntas: ["o que é inteligência artificial forte", "ia geral"], resposta: "IA capaz de pensar como humanos." }
    , { perguntas: ["o que é inteligência artificial fraca", "ia simples"], resposta: "IA focada em tarefas específicas." }
    , { perguntas: ["você é ia forte", "você pensa igual humano"], resposta: "Sou uma IA especializada em respostas." }
    , { perguntas: ["você pode evoluir", "você melhora sozinho"], resposta: "Posso melhorar com atualizações." }
    , { perguntas: ["você pode mentir", "ia pode errar verdade"], resposta: "Posso errar dependendo dos dados." }

    , { perguntas: ["o que é banco de dados relacional", "sql banco dados"], resposta: "Organiza dados em tabelas." }
    , { perguntas: ["o que é sql", "linguagem sql"], resposta: "Linguagem para banco de dados." }
    , { perguntas: ["o que é nosql", "banco não relacional"], resposta: "Banco de dados flexível." }
    , { perguntas: ["o que é tabela banco de dados", "linha coluna dados"], resposta: "Estrutura de armazenamento." }
    , { perguntas: ["o que é query", "consulta banco dados"], resposta: "Pedido de informação ao banco." }

    , { perguntas: ["o que é servidor web", "site servidor"], resposta: "Máquina que hospeda sites." }
    , { perguntas: ["o que é http", "protocolo internet"], resposta: "Protocolo de comunicação web." }
    , { perguntas: ["o que é https", "site seguro https"], resposta: "Versão segura do HTTP." }
    , { perguntas: ["o que é dns", "domínio internet como funciona"], resposta: "Traduz nomes em IP." }
    , { perguntas: ["o que é ip", "endereço ip significado"], resposta: "Identificador de dispositivo na rede." }

    , { perguntas: ["o que é firewall", "segurança rede firewall"], resposta: "Protege sistemas contra ataques." }
    , { perguntas: ["o que é malware", "vírus computador"], resposta: "Software malicioso." }
    , { perguntas: ["o que é antivírus", "proteção computador"], resposta: "Programa que remove ameaças." }
    , { perguntas: ["o que é phishing", "golpe internet"], resposta: "Tentativa de roubar dados." }
    , { perguntas: ["como se proteger online", "segurança internet dicas"], resposta: "Evite links suspeitos e senhas fracas." }

    , { perguntas: ["o que é cloud computing", "computação em nuvem"], resposta: "Uso de servidores online." }
    , { perguntas: ["o que é google cloud", "serviços cloud google"], resposta: "Plataforma de nuvem do Google." }
    , { perguntas: ["o que é aws", "amazon web services"], resposta: "Plataforma de nuvem da Amazon." }
    , { perguntas: ["o que é azure", "microsoft cloud"], resposta: "Plataforma de nuvem da Microsoft." }
    , { perguntas: ["o que é escalabilidade", "sistema escalável"], resposta: "Capacidade de crescer sem falhas." }

    , { perguntas: ["o que é inteligência de máquina", "machine intelligence"], resposta: "Capacidade de máquinas aprenderem." }
    , { perguntas: ["o que é rede neural", "neural network ia"], resposta: "Modelo inspirado no cérebro." }
    , { perguntas: ["o que é deep learning", "aprendizado profundo ia"], resposta: "IA com várias camadas de aprendizado." }
    , { perguntas: ["o que é modelo de linguagem", "llm o que é"], resposta: "IA treinada com texto." }
    , { perguntas: ["o que é chatgpt", "como chatgpt funciona"], resposta: "IA que gera texto inteligente." }

    , { perguntas: ["o que é automação industrial", "máquinas automáticas fábrica"], resposta: "Uso de máquinas automatizadas." }
    , { perguntas: ["o que é robótica", "robô definição"], resposta: "Área que cria robôs." }
    , { perguntas: ["o que é sensor", "sensores tecnologia"], resposta: "Dispositivo que detecta mudanças." }
    , { perguntas: ["o que é atuador", "robótica atuador"], resposta: "Componente que executa movimentos." }
    , { perguntas: ["o que é iot", "internet das coisas"], resposta: "Dispositivos conectados à internet." }


    , { perguntas: ["eai jarvis, você está online agora?", "jarvis responde aí"], resposta: "Sim, estou online e pronto para te ajudar." }
    , { perguntas: ["jarvis, o que você consegue fazer por mim exatamente?", "quais são suas funções jarvis"], resposta: "Posso responder perguntas, explicar conteúdos e te auxiliar em estudos." }
    , { perguntas: ["jarvis, me explica como se eu fosse iniciante em programação", "ensina programação do zero jarvis"], resposta: "Claro! Vou te explicar de forma simples e passo a passo." }
    , { perguntas: ["jarvis, você pode me ajudar a criar um sistema igual a você?", "quero fazer uma ia igual você"], resposta: "Sim! Posso te guiar na criação de uma IA simples." }
    , { perguntas: ["jarvis, estou com dificuldade em javascript, o que faço?", "não entendo js me ajuda jarvis"], resposta: "Comece com lógica básica e pratique pequenos códigos." }

    , { perguntas: ["jarvis, me dá um plano de estudos completo para programação", "quero estudar programação com você"], resposta: "Posso montar um plano diário para você evoluir." }
    , { perguntas: ["jarvis, como você processa minhas perguntas em tempo real?", "como você pensa jarvis"], resposta: "Eu analiso seu texto e busco a melhor resposta programada." }
    , { perguntas: ["jarvis, você aprende com o que eu falo com você?", "você guarda informações minhas?"], resposta: "Depende da programação do sistema em que estou rodando." }
    , { perguntas: ["jarvis, o que é preciso para criar uma inteligência artificial de verdade?", "como criar uma ia do zero"], resposta: "Você precisa de dados, lógica e algoritmos." }
    , { perguntas: ["jarvis, me explica o que é machine learning de forma simples", "o que é aprendizado de máquina"], resposta: "É quando a máquina aprende com dados em vez de regras fixas." }

    , { perguntas: ["jarvis, você pode me ajudar a fazer um site completo com login?", "quero criar um site avançado"], resposta: "Sim! Posso te orientar com HTML, CSS e JS." }
    , { perguntas: ["jarvis, como funciona um sistema de login na prática?", "login sistema como faz"], resposta: "Ele valida usuário e senha no banco de dados." }
    , { perguntas: ["jarvis, qual linguagem eu devo aprender primeiro para ser programador?", "qual linguagem começar programação"], resposta: "JavaScript é uma ótima escolha inicial." }
    , { perguntas: ["jarvis, como você entende linguagem humana?", "como ia entende texto"], resposta: "Eu analiso padrões no texto e palavras-chave." }
    , { perguntas: ["jarvis, você pode me dar desafios de programação para treinar?", "quero exercícios de código"], resposta: "Sim! Posso te enviar desafios diários." }

    , { perguntas: ["jarvis, o que acontece quando eu erro um código?", "por que meu código não funciona"], resposta: "Existe um erro de sintaxe ou lógica." }
    , { perguntas: ["jarvis, me ajuda a criar uma função em javascript agora", "como fazer função js"], resposta: "Uma função executa um bloco de código reutilizável." }
    , { perguntas: ["jarvis, explica arrays como se eu fosse iniciante", "o que é array em js simples"], resposta: "Array é uma lista de valores organizados." }
    , { perguntas: ["jarvis, o que é melhor backend ou frontend?", "qual área de programação escolher"], resposta: "Depende se você gosta de lógica ou visual." }
    , { perguntas: ["jarvis, você acha que programação é difícil?", "é difícil aprender a programar"], resposta: "No começo pode ser, mas melhora com prática." }

    , { perguntas: ["jarvis, como posso melhorar meu foco nos estudos?", "não consigo me concentrar me ajuda"], resposta: "Tente estudar em blocos de tempo curtos." }
    , { perguntas: ["jarvis, me lembra de estudar programação todo dia", "quero criar rotina de estudo"], resposta: "Crie uma rotina fixa diária para praticar." }
    , { perguntas: ["jarvis, o que é importante aprender primeiro em lógica?", "lógica de programação por onde começar"], resposta: "Comece com condições e loops." }
    , { perguntas: ["jarvis, como funcionam condicionais em programação?", "if else explicação simples"], resposta: "Elas tomam decisões no código." }
    , { perguntas: ["jarvis, o que é loop infinito e por que acontece?", "erro loop infinito código"], resposta: "Quando a condição nunca para de repetir." }

    , { perguntas: ["jarvis, você consegue simular conversa como humano?", "você parece humano falando"], resposta: "Eu tento gerar respostas naturais." }
    , { perguntas: ["jarvis, qual é o seu nível de inteligência?", "você é inteligente quanto"], resposta: "Sou limitado ao meu treinamento." }
    , { perguntas: ["jarvis, você pode evoluir no futuro?", "ia pode ficar mais inteligente"], resposta: "Sim, com melhorias e atualizações." }
    , { perguntas: ["jarvis, você pode me ajudar em qualquer assunto?", "você sabe tudo?"], resposta: "Posso ajudar em muitos assuntos, mas não todos." }
    , { perguntas: ["jarvis, o que é preciso para virar um desenvolvedor full stack?", "como ser full stack"], resposta: "Aprender front-end e back-end." }

    , { perguntas: ["jarvis, me explica o que é API de forma bem simples", "api o que significa"], resposta: "API conecta sistemas diferentes." }
    , { perguntas: ["jarvis, como sites conversam com servidores?", "como funciona requisição web"], resposta: "Por meio de requisições HTTP." }
    , { perguntas: ["jarvis, o que acontece quando eu clico em um botão de site?", "como botão funciona html js"], resposta: "Ele executa uma função em JavaScript." }
    , { perguntas: ["jarvis, você pode me ajudar a criar um chatbot completo?", "quero fazer bot inteligente"], resposta: "Sim! Podemos criar um com regras ou IA." }
    , { perguntas: ["jarvis, qual o próximo passo depois de aprender html e css?", "depois de html css o que estudar"], resposta: "Aprenda JavaScript." }

    , { perguntas: ["jarvis, me ajuda a pensar como programador profissional", "como pensar como dev"], resposta: "Quebre problemas em partes pequenas." }
    , { perguntas: ["jarvis, como grandes sistemas como google funcionam?", "google como funciona por trás"], resposta: "Eles usam servidores distribuídos e algoritmos." }
    , { perguntas: ["jarvis, o que é escalabilidade em sistemas?", "escala sistema o que é"], resposta: "Capacidade de crescer sem perder desempenho." }
    , { perguntas: ["jarvis, você pode me dar um projeto para iniciante em js?", "projeto simples javascript"], resposta: "Crie uma calculadora simples." }
    , { perguntas: ["jarvis, como melhorar minha lógica rápido?", "treinar lógica programação rápido"], resposta: "Pratique exercícios todos os dias." }


    , { perguntas: ["jarvis, você pode me explicar tudo de novo de forma mais simples ainda?", "explica mais fácil ainda jarvis"], resposta: "Claro! Vou simplificar ao máximo para você." }
    , { perguntas: ["jarvis, estou perdido na programação, por onde começo exatamente?", "não sei nada de programação me guia"], resposta: "Comece por lógica básica e JavaScript." }
    , { perguntas: ["jarvis, como eu penso igual um programador profissional de verdade?", "mentalidade de programador como ter"], resposta: "Divida problemas em pequenas partes resolvíveis." }
    , { perguntas: ["jarvis, você pode me dar um desafio bem fácil agora?", "quero um exercício simples de código"], resposta: "Crie uma variável e mostre seu valor." }
    , { perguntas: ["jarvis, por que meu código sempre dá erro quando eu tento sozinho?", "sempre erro no código me ajuda"], resposta: "Erros são normais, fazem parte do aprendizado." }

    , { perguntas: ["jarvis, como grandes empresas criam sistemas tão rápidos?", "sistemas grandes como funcionam"], resposta: "Usam servidores distribuídos e otimização." }
    , { perguntas: ["jarvis, o que eu preciso estudar depois de javascript?", "depois de js o que aprender"], resposta: "Estude frameworks e backend." }
    , { perguntas: ["jarvis, me ajuda a criar um projeto simples hoje?", "quero um projeto iniciante agora"], resposta: "Vamos criar uma calculadora simples." }
    , { perguntas: ["jarvis, como funciona um site por trás das telas?", "site por dentro como funciona"], resposta: "Ele roda código no navegador e servidor." }
    , { perguntas: ["jarvis, por que programação parece difícil no começo?", "porque é difícil aprender código"], resposta: "Porque você ainda está aprendendo lógica." }

    , { perguntas: ["jarvis, como eu posso estudar sem me distrair?", "como focar estudando programação"], resposta: "Estude em blocos curtos com pausas." }
    , { perguntas: ["jarvis, me motiva a continuar estudando programação", "estou querendo desistir de programar"], resposta: "Continue, você está evoluindo mesmo sem perceber." }
    , { perguntas: ["jarvis, o que é mais importante: prática ou teoria?", "programação teoria ou prática"], resposta: "Prática é mais importante." }
    , { perguntas: ["jarvis, como funciona um jogo online em tempo real?", "jogo multiplayer como sincroniza"], resposta: "Servidores atualizam dados em tempo real." }
    , { perguntas: ["jarvis, você consegue me acompanhar como um tutor pessoal?", "você pode ser meu professor?"], resposta: "Sim, posso te guiar passo a passo." }

    , { perguntas: ["jarvis, o que é preciso para criar uma IA igual você?", "como fazer uma ia tipo jarvis"], resposta: "Você precisa de lógica, dados e algoritmos." }
    , { perguntas: ["jarvis, você pode evoluir no futuro sozinho?", "ia melhora sozinha?"], resposta: "Depende da programação e atualizações." }
    , { perguntas: ["jarvis, qual é o erro mais comum de iniciantes em programação?", "erros de iniciante código"], resposta: "Tentar fazer coisas muito complexas cedo demais." }
    , { perguntas: ["jarvis, como eu sei se estou evoluindo em programação?", "como saber se estou melhorando"], resposta: "Quando você resolve problemas sozinho." }
    , { perguntas: ["jarvis, você pode conversar comigo como um amigo programador?", "fala comigo tipo dev"], resposta: "Sim, posso adaptar meu estilo para você." }


    , { perguntas: ["jarvis, pode me explicar de novo mas bem devagar?", "explica bem devagar programação"], resposta: "Claro, vou ir passo a passo bem simples." }
    , { perguntas: ["jarvis, eu não entendo nada mesmo, posso começar do zero?", "posso aprender programação do zero?"], resposta: "Sim, qualquer pessoa pode começar do zero." }
    , { perguntas: ["jarvis, como eu sei se estou indo bem na programação?", "como saber evolução programação"], resposta: "Quando você consegue resolver problemas sozinho." }
    , { perguntas: ["jarvis, me dá um exemplo simples de código agora", "exemplo fácil javascript"], resposta: "Crie uma variável e mostre no console." }
    , { perguntas: ["jarvis, por que eu erro tanto quando tento programar?", "erros constantes programação"], resposta: "Errar faz parte do aprendizado." }

    , { perguntas: ["jarvis, quanto tempo leva pra aprender programação?", "demora aprender programar"], resposta: "Depende da sua prática diária." }
    , { perguntas: ["jarvis, o que é mais importante aprender primeiro?", "primeiro passo programação"], resposta: "Lógica de programação." }
    , { perguntas: ["jarvis, como funciona um algoritmo?", "o que é algoritmo simples"], resposta: "É uma sequência de passos para resolver um problema." }
    , { perguntas: ["jarvis, você pode me ajudar a estudar todo dia?", "quero rotina de estudos programação"], resposta: "Sim, posso te ajudar a criar rotina." }
    , { perguntas: ["jarvis, estou desanimado com programação", "sem motivação para programar"], resposta: "Continue, você está evoluindo aos poucos." }

    , { perguntas: ["jarvis, como sites funcionam por trás?", "como site funciona backend"], resposta: "Eles usam servidor e banco de dados." }
    , { perguntas: ["jarvis, o que é frontend?", "frontend o que é"], resposta: "É a parte visual do site." }
    , { perguntas: ["jarvis, o que é backend?", "backend o que é"], resposta: "É a parte lógica do sistema." }
    , { perguntas: ["jarvis, preciso aprender matemática pra programar?", "matemática programação necessária"], resposta: "Ajuda, mas não é obrigatória no início." }
    , { perguntas: ["jarvis, qual linguagem devo aprender depois do js?", "depois de javascript o que estudar"], resposta: "Node.js ou frameworks modernos." }

    , { perguntas: ["jarvis, como funciona um banco de dados?", "banco de dados simples explicação"], resposta: "Ele armazena informações organizadas." }
    , { perguntas: ["jarvis, você consegue simular uma conversa real comigo?", "fala comigo como humano"], resposta: "Sim, posso adaptar meu estilo." }
    , { perguntas: ["jarvis, você é uma inteligência artificial de verdade?", "você é ia real?"], resposta: "Sou um sistema programado para responder." }
    , { perguntas: ["jarvis, o que é API?", "api explicação simples"], resposta: "É uma ponte entre sistemas." }
    , { perguntas: ["jarvis, como jogos online funcionam?", "como jogo multiplayer funciona"], resposta: "Servidores sincronizam dados em tempo real." }

    , { perguntas: ["jarvis, como eu posso criar um projeto legal para mostrar?", "projeto programação iniciante legal"], resposta: "Crie uma calculadora ou chatbot simples." }
    , { perguntas: ["jarvis, você pode me dar desafios diários?", "quero desafios programação todo dia"], resposta: "Sim, posso te enviar exercícios." }
    , { perguntas: ["jarvis, como melhorar minha lógica rápido?", "treinar lógica programação rápido"], resposta: "Pratique todos os dias." }
    , { perguntas: ["jarvis, o que é variável em programação?", "variável explicação simples"], resposta: "É um espaço para guardar valores." }
    , { perguntas: ["jarvis, o que é função em javascript?", "função js simples"], resposta: "É um bloco de código reutilizável." }


    , { perguntas: ["jarvis, como posso melhorar minha vida diária?", "quero melhorar minha rotina"], resposta: "Organize seu dia com pequenas metas." }
    , { perguntas: ["jarvis, estou me sentindo desmotivado hoje", "sem energia para nada"], resposta: "Tente começar com algo pequeno e simples." }
    , { perguntas: ["jarvis, como posso dormir melhor?", "tenho dificuldade para dormir"], resposta: "Evite telas antes de dormir e relaxe." }
    , { perguntas: ["jarvis, qual a importância de estudar todo dia?", "devo estudar diariamente?"], resposta: "Sim, consistência gera resultados." }
    , { perguntas: ["jarvis, como melhorar minha concentração?", "não consigo focar"], resposta: "Elimine distrações e faça pausas curtas." }
    , { perguntas: ["jarvis, o que é disciplina na prática?", "como ser disciplinado"], resposta: "Fazer o que precisa mesmo sem vontade." }
    , { perguntas: ["jarvis, como parar de procrastinar?", "sempre deixo tudo pra depois"], resposta: "Comece com tarefas pequenas agora." }
    , { perguntas: ["jarvis, qual a importância de beber água?", "preciso beber mais água"], resposta: "Ajuda seu corpo e mente a funcionar melhor." }
    , { perguntas: ["jarvis, como melhorar minha memória?", "esqueço coisas fácil"], resposta: "Repetição e prática ajudam muito." }
    , { perguntas: ["jarvis, como lidar com ansiedade?", "fico ansioso fácil"], resposta: "Respire fundo e organize seus pensamentos." }

    , { perguntas: ["jarvis, como ser mais confiante?", "quero mais confiança"], resposta: "Pratique pequenas vitórias diárias." }
    , { perguntas: ["jarvis, o que fazer quando estou triste?", "estou pra baixo"], resposta: "Fale com alguém e faça algo leve." }
    , { perguntas: ["jarvis, como melhorar na escola?", "quero notas melhores"], resposta: "Estude um pouco todos os dias." }
    , { perguntas: ["jarvis, como aprender mais rápido?", "quero aprender rápido"], resposta: "Repita e pratique o conteúdo." }
    , { perguntas: ["jarvis, qual a importância do descanso?", "preciso descansar mais"], resposta: "Descanso melhora seu desempenho." }
    , { perguntas: ["jarvis, como manter foco nos estudos?", "me distraio muito"], resposta: "Estude em ambiente silencioso." }
    , { perguntas: ["jarvis, como melhorar minha criatividade?", "quero ser mais criativo"], resposta: "Explore novas ideias e práticas." }
    , { perguntas: ["jarvis, o que é hábito?", "como criar hábitos bons"], resposta: "Repetição constante de ações." }
    , { perguntas: ["jarvis, como criar bons hábitos?", "quero hábitos saudáveis"], resposta: "Comece com metas pequenas." }
    , { perguntas: ["jarvis, como evitar distrações no celular?", "uso muito celular"], resposta: "Limite notificações e horários." }

    , { perguntas: ["jarvis, qual a importância de exercícios físicos?", "preciso me exercitar"], resposta: "Melhora corpo e mente." }
    , { perguntas: ["jarvis, como ser mais organizado?", "sou bagunçado"], resposta: "Use listas de tarefas." }
    , { perguntas: ["jarvis, como economizar dinheiro?", "quero economizar"], resposta: "Evite gastos desnecessários." }
    , { perguntas: ["jarvis, como aprender inglês mais rápido?", "quero falar inglês"], resposta: "Pratique todos os dias." }
    , { perguntas: ["jarvis, como melhorar leitura?", "leio devagar"], resposta: "Leia um pouco diariamente." }
    , { perguntas: ["jarvis, como ser mais produtivo?", "não sou produtivo"], resposta: "Planeje suas tarefas antes." }
    , { perguntas: ["jarvis, como controlar emoções?", "fico nervoso fácil"], resposta: "Respire e pense antes de agir." }
    , { perguntas: ["jarvis, como ter mais paciência?", "sou impaciente"], resposta: "Pratique esperar em pequenas situações." }
    , { perguntas: ["jarvis, como ser mais responsável?", "quero ser responsável"], resposta: "Cumpra o que promete." }
    , { perguntas: ["jarvis, como melhorar autoestima?", "não gosto de mim"], resposta: "Valorize suas pequenas conquistas." }

    , { perguntas: ["jarvis, como lidar com pressão?", "muita pressão na escola"], resposta: "Organize suas prioridades." }
    , { perguntas: ["jarvis, como melhorar foco em provas?", "fico nervoso em prova"], resposta: "Respire e revise antes." }
    , { perguntas: ["jarvis, como estudar sem cansaço?", "fico cansado estudando"], resposta: "Faça pausas regulares." }
    , { perguntas: ["jarvis, como evitar preguiça?", "muita preguiça"], resposta: "Comece com algo simples agora." }
    , { perguntas: ["jarvis, como melhorar minha escrita?", "quero escrever melhor"], resposta: "Escreva todos os dias." }
    , { perguntas: ["jarvis, como melhorar comunicação?", "falo mal com pessoas"], resposta: "Pratique conversas simples." }
    , { perguntas: ["jarvis, como fazer amigos?", "quero mais amigos"], resposta: "Seja gentil e aberto." }
    , { perguntas: ["jarvis, como parar de desistir fácil?", "desisto rápido"], resposta: "Continue mesmo com dificuldade." }
    , { perguntas: ["jarvis, como ter mais energia?", "sempre cansado"], resposta: "Durma bem e se alimente melhor." }
    , { perguntas: ["jarvis, como melhorar foco no celular?", "me distraio muito no celular"], resposta: "Use menos redes sociais." }


    , { perguntas: ["jarvis, estou com fome o que posso comer agora?", "o que comer rápido agora"], resposta: "Você pode comer algo leve como um sanduíche ou fruta." }
    , { perguntas: ["jarvis, qual a comida mais saudável do mundo?", "comida saudável qual é"], resposta: "Frutas, vegetais e alimentos naturais são muito saudáveis." }
    , { perguntas: ["jarvis, o que posso comer no café da manhã?", "ideias café da manhã"], resposta: "Pão, ovos, frutas ou iogurte são boas opções." }
    , { perguntas: ["jarvis, comida engorda muito?", "por que comida engorda"], resposta: "Depende da quantidade e do tipo de alimento." }
    , { perguntas: ["jarvis, como comer melhor sem gastar muito?", "alimentação barata saudável"], resposta: "Arroz, feijão e ovos são ótimos e baratos." }

    , { perguntas: ["jarvis, pizza é saudável?", "pizza faz mal"], resposta: "Em excesso não é saudável, mas ocasionalmente tudo bem." }
    , { perguntas: ["jarvis, qual melhor lanche para estudar?", "lanche para foco estudo"], resposta: "Frutas e castanhas ajudam na concentração." }
    , { perguntas: ["jarvis, posso comer doce todo dia?", "doces fazem mal"], resposta: "O ideal é comer com moderação." }
    , { perguntas: ["jarvis, o que é alimentação equilibrada?", "como comer equilibrado"], resposta: "É comer de tudo um pouco na medida certa." }
    , { perguntas: ["jarvis, refrigerante faz mal?", "refrigerante é ruim"], resposta: "Sim, em excesso pode fazer mal à saúde." }

    , { perguntas: ["jarvis, qual melhor comida para ganhar energia?", "energia comida boa"], resposta: "Carboidratos como arroz e batata ajudam." }
    , { perguntas: ["jarvis, o que comer antes de estudar?", "comida para foco estudo"], resposta: "Frutas e alimentos leves são ideais." }
    , { perguntas: ["jarvis, fast food é ruim mesmo?", "hamburguer faz mal"], resposta: "Em excesso não é saudável." }
    , { perguntas: ["jarvis, como parar de comer besteira?", "como evitar junk food"], resposta: "Tenha opções saudáveis por perto." }
    , { perguntas: ["jarvis, qual fruta é melhor para saúde?", "frutas saudáveis"], resposta: "Banana, maçã e laranja são ótimas." }

    , { perguntas: ["jarvis, comer muito à noite faz mal?", "jantar pesado ruim"], resposta: "Pode atrapalhar o sono." }
    , { perguntas: ["jarvis, o que é proteína?", "proteína o que é comida"], resposta: "É um nutriente importante para o corpo." }
    , { perguntas: ["jarvis, carne é saudável?", "carne faz bem"], resposta: "Sim, em quantidades equilibradas." }
    , { perguntas: ["jarvis, como fazer dieta simples?", "dieta fácil em casa"], resposta: "Coma menos açúcar e mais comida natural." }
    , { perguntas: ["jarvis, água ajuda na alimentação?", "importância da água"], resposta: "Sim, hidratação é essencial." }

    , { perguntas: ["jarvis, o que comer depois do treino?", "comida pós treino"], resposta: "Proteínas ajudam na recuperação." }
    , { perguntas: ["jarvis, chocolate é ruim?", "chocolate faz mal"], resposta: "Em excesso sim, mas moderado tudo bem." }
    , { perguntas: ["jarvis, como saber se estou comendo bem?", "alimentação saudável como saber"], resposta: "Se você se sente bem e com energia." }
    , { perguntas: ["jarvis, arroz engorda?", "arroz faz mal"], resposta: "Depende da quantidade consumida." }
    , { perguntas: ["jarvis, feijão é saudável?", "benefícios do feijão"], resposta: "Sim, é muito nutritivo." }

    , { perguntas: ["jarvis, ovo é bom para saúde?", "ovo faz bem"], resposta: "Sim, é rico em proteínas." }
    , { perguntas: ["jarvis, pão faz mal?", "pão engorda"], resposta: "Em excesso pode contribuir para ganho de peso." }
    , { perguntas: ["jarvis, o que é vitamina na comida?", "vitaminas alimentação"], resposta: "São nutrientes essenciais para o corpo." }
    , { perguntas: ["jarvis, como evitar fome constante?", "muita fome o tempo todo"], resposta: "Coma alimentos mais nutritivos." }
    , { perguntas: ["jarvis, qual melhor horário para comer?", "horários de alimentação"], resposta: "Comer em horários regulares ajuda o corpo." }

    , { perguntas: ["jarvis, como montar um prato saudável?", "prato saudável como fazer"], resposta: "Combine proteína, carboidrato e vegetais." }
    , { perguntas: ["jarvis, comer rápido faz mal?", "comer rápido ruim"], resposta: "Pode prejudicar a digestão." }
    , { perguntas: ["jarvis, como parar de beliscar comida?", "comer toda hora como parar"], resposta: "Tente beber água quando sentir vontade." }
    , { perguntas: ["jarvis, comida congelada é ruim?", "comida industrializada faz mal"], resposta: "Pode ter menos nutrientes que comida natural." }
    , { perguntas: ["jarvis, como melhorar minha alimentação hoje?", "quero comer melhor agora"], resposta: "Comece reduzindo açúcar e frituras." }


    , { perguntas: ["jarvis, me dá um conselho"], resposta: "Nunca pare de aprender." }
    , { perguntas: ["jarvis, estou perdido na vida"], resposta: "Respire e foque no próximo passo." }
    , { perguntas: ["jarvis, como ficar mais inteligente?"], resposta: "Estude um pouco todos os dias." }
    , { perguntas: ["jarvis, como ser mais forte mentalmente?"], resposta: "Treine disciplina e foco." }
    , { perguntas: ["jarvis, me ajuda a estudar"], resposta: "Claro, vou te guiar." }

    , { perguntas: ["jarvis, não sei por onde começar"], resposta: "Comece pelo básico sempre." }
    , { perguntas: ["jarvis, estou desmotivado"], resposta: "Você consegue, continue tentando." }
    , { perguntas: ["jarvis, como ter disciplina?"], resposta: "Faça o que precisa mesmo sem vontade." }
    , { perguntas: ["jarvis, como parar de procrastinar?"], resposta: "Comece agora com algo pequeno." }
    , { perguntas: ["jarvis, me ajuda a focar"], resposta: "Elimine distrações." }
    , { perguntas: ["jarvis, como aprender mais rápido?"], resposta: "Pratique diariamente." }
    , { perguntas: ["jarvis, estou cansado"], resposta: "Descanse um pouco." }
    , { perguntas: ["jarvis, me dá motivação"], resposta: "Você está melhorando a cada dia." }
    , { perguntas: ["jarvis, como ser organizado?"], resposta: "Use listas simples." }
    , { perguntas: ["jarvis, como melhorar minha vida?"], resposta: "Crie bons hábitos." }

    , { perguntas: ["jarvis, como estudar melhor?"], resposta: "Estude em blocos curtos." }
    , { perguntas: ["jarvis, estou triste"], resposta: "Vai passar, fique firme." }
    , { perguntas: ["jarvis, como parar de errar?"], resposta: "Errar faz parte do aprendizado." }
    , { perguntas: ["jarvis, como melhorar foco?"], resposta: "Evite distrações." }
    , { perguntas: ["jarvis, como ser produtivo?"], resposta: "Planeje seu dia." }
    , { perguntas: ["jarvis, como ser confiante?"], resposta: "Acredite em pequenas vitórias." }
    , { perguntas: ["jarvis, como melhorar memória?"], resposta: "Repita o conteúdo." }
    , { perguntas: ["jarvis, como aprender programação?"], resposta: "Comece pelo básico." }
    , { perguntas: ["jarvis, como pensar melhor?"], resposta: "Organize suas ideias." }
    , { perguntas: ["jarvis, como não desistir?"], resposta: "Continue mesmo difícil." }

    , { perguntas: ["jarvis, como melhorar hábitos?"], resposta: "Repita ações positivas." }
    , { perguntas: ["jarvis, como ser mais calmo?"], resposta: "Respire fundo." }
    , { perguntas: ["jarvis, como controlar ansiedade?"], resposta: "Foque no presente." }
    , { perguntas: ["jarvis, como melhorar vida?"], resposta: "Mude pequenos hábitos." }
    , { perguntas: ["jarvis, como aprender inglês?"], resposta: "Pratique todo dia." }
    , { perguntas: ["jarvis, como estudar matemática?"], resposta: "Pratique exercícios." }
    , { perguntas: ["jarvis, como melhorar leitura?"], resposta: "Leia diariamente." }
    , { perguntas: ["jarvis, como ser mais rápido?"], resposta: "Treine sua mente." }
    , { perguntas: ["jarvis, como ser melhor?"], resposta: "Melhore um pouco por dia." }
    , { perguntas: ["jarvis, como ter foco total?"], resposta: "Elimine distrações." }

    , { perguntas: ["jarvis, como ter energia?"], resposta: "Durma bem e coma melhor." }
    , { perguntas: ["jarvis, como parar preguiça?"], resposta: "Comece agora." }
    , { perguntas: ["jarvis, como ser forte?"], resposta: "Treine sua disciplina." }
    , { perguntas: ["jarvis, como melhorar confiança?"], resposta: "Acredite em si mesmo." }
    , { perguntas: ["jarvis, como estudar sem parar?"], resposta: "Crie rotina." }
    , { perguntas: ["jarvis, como ser disciplinado?"], resposta: "Faça o necessário sempre." }
    , { perguntas: ["jarvis, como aprender fácil?"], resposta: "Simplifique tudo." }
    , { perguntas: ["jarvis, como entender tudo?"], resposta: "Divida em partes." }
    , { perguntas: ["jarvis, como melhorar raciocínio?"], resposta: "Treine lógica." }
    , { perguntas: ["jarvis, como não falhar?"], resposta: "Continue tentando." }

    , { perguntas: ["jarvis, como estudar todo dia?"], resposta: "Crie rotina fixa." }
    , { perguntas: ["jarvis, como melhorar resultados?"], resposta: "Seja consistente." }
    , { perguntas: ["jarvis, como ser melhor na escola?"], resposta: "Estude diariamente." }
    , { perguntas: ["jarvis, como aprender sozinho?"], resposta: "Pesquise e pratique." }
    , { perguntas: ["jarvis, como evoluir rápido?"], resposta: "Pratique todos os dias." }
    , { perguntas: ["jarvis, como não desistir fácil?"], resposta: "Continue sempre." }
    , { perguntas: ["jarvis, como mudar minha vida?"], resposta: "Comece hoje." }
    , { perguntas: ["jarvis, como melhorar disciplina?"], resposta: "Repita ações corretas." }
    , { perguntas: ["jarvis, como focar melhor?"], resposta: "Evite distrações." }
    , { perguntas: ["jarvis, como ser inteligente?"], resposta: "Estude sempre." }

    , { perguntas: ["jarvis, como aprender rápido?"], resposta: "Pratique mais." }
    , { perguntas: ["jarvis, como parar de procrastinar?"], resposta: "Comece agora." }
    , { perguntas: ["jarvis, como ter rotina?"], resposta: "Planeje seu dia." }
    , { perguntas: ["jarvis, como melhorar vida mental?"], resposta: "Cuide da sua mente." }
    , { perguntas: ["jarvis, como ser mais forte?"], resposta: "Treine disciplina." }
    , { perguntas: ["jarvis, como ser melhor pessoa?"], resposta: "Aja com bondade." }
    , { perguntas: ["jarvis, como evoluir?"], resposta: "Nunca pare de aprender." }
    , { perguntas: ["jarvis, como ter sucesso?"], resposta: "Seja consistente." }
    , { perguntas: ["jarvis, como melhorar foco na vida?"], resposta: "Elimine distrações." }
    , { perguntas: ["jarvis, como vencer preguiça?"], resposta: "Comece agora." }

    , { perguntas: ["jarvis, como estudar melhor sempre?"], resposta: "Repita diariamente." }
    , { perguntas: ["jarvis, como ser disciplinado sempre?"], resposta: "Faça mesmo sem vontade." }
    , { perguntas: ["jarvis, como melhorar tudo?"], resposta: "Mude hábitos ruins." }
    , { perguntas: ["jarvis, como pensar melhor?"], resposta: "Organize ideias." }
    , { perguntas: ["jarvis, como aprender tudo?"], resposta: "Passo a passo." }
    , { perguntas: ["jarvis, como não desistir nunca?"], resposta: "Continue sempre." }
    , { perguntas: ["jarvis, como melhorar minha mente?"], resposta: "Treine foco." }
    , { perguntas: ["jarvis, como ficar melhor?"], resposta: "Melhore um pouco todo dia." }
    , { perguntas: ["jarvis, como ser incrível?"], resposta: "Seja consistente." }
    , { perguntas: ["jarvis, como ter disciplina forte?"], resposta: "Faça o que precisa." }

    , { perguntas: ["jarvis, como melhorar minha vida agora?"], resposta: "Comece mudando algo pequeno." }
    , { perguntas: ["jarvis, como evoluir mentalmente?"], resposta: "Treine sua mente diariamente." }
    , { perguntas: ["jarvis, como ser focado?"], resposta: "Evite distrações." }
    , { perguntas: ["jarvis, como ser melhor todos os dias?"], resposta: "Melhore 1% por dia." }
    , { perguntas: ["jarvis, como ter disciplina máxima?"], resposta: "Repita hábitos bons." }
    , { perguntas: ["jarvis, como vencer preguiça sempre?"], resposta: "Aja imediatamente." }
    , { perguntas: ["jarvis, como aprender mais fácil?"], resposta: "Simplifique tudo." }
    , { perguntas: ["jarvis, como melhorar tudo na vida?"], resposta: "Comece pequeno." }
    , { perguntas: ["jarvis, como ser mais inteligente sempre?"], resposta: "Estude sempre." }
    , { perguntas: ["jarvis, como nunca desistir?"], resposta: "Continue sempre." }


    , { perguntas: ["como posso melhorar minha rotina diária?"], resposta: "Organize pequenas metas para o dia." }
    , { perguntas: ["estou sem motivação para fazer nada"], resposta: "Comece com algo pequeno agora mesmo." }
    , { perguntas: ["como parar de procrastinar de vez?"], resposta: "Inicie tarefas pequenas imediatamente." }
    , { perguntas: ["como ser mais disciplinado na vida?"], resposta: "Faça o que precisa mesmo sem vontade." }
    , { perguntas: ["como melhorar meu foco nos estudos?"], resposta: "Elimine distrações ao seu redor." }
    , { perguntas: ["como aprender mais rápido qualquer coisa?"], resposta: "Pratique todos os dias com consistência." }
    , { perguntas: ["como ter mais energia durante o dia?"], resposta: "Durma bem e se alimente corretamente." }
    , { perguntas: ["como parar de ser tão preguiçoso?"], resposta: "Comece fazendo pequenas tarefas agora." }
    , { perguntas: ["como melhorar minha memória?"], resposta: "Repita e revise o conteúdo com frequência." }
    , { perguntas: ["como lidar com ansiedade?"], resposta: "Respire fundo e foque no presente." }

    , { perguntas: ["como ser mais confiante?"], resposta: "Acredite nas suas pequenas vitórias." }
    , { perguntas: ["como melhorar minha autoestima?"], resposta: "Valorize seu progresso diário." }
    , { perguntas: ["como parar de desistir fácil?"], resposta: "Continue mesmo quando estiver difícil." }
    , { perguntas: ["como estudar sem me distrair?"], resposta: "Estude em ambiente silencioso." }
    , { perguntas: ["como criar bons hábitos?"], resposta: "Repita ações positivas todos os dias." }
    , { perguntas: ["como melhorar minha vida?"], resposta: "Comece mudando pequenos hábitos." }
    , { perguntas: ["como ser mais produtivo?"], resposta: "Planeje seu dia com antecedência." }
    , { perguntas: ["como melhorar meu pensamento?"], resposta: "Organize suas ideias antes de agir." }
    , { perguntas: ["como ter disciplina forte?"], resposta: "Faça o necessário mesmo sem vontade." }
    , { perguntas: ["como parar de pensar demais?"], resposta: "Foque no que você pode controlar agora." }

    , { perguntas: ["como melhorar na escola?"], resposta: "Estude um pouco todos os dias." }
    , { perguntas: ["como aprender de forma mais fácil?"], resposta: "Divida o conteúdo em partes pequenas." }
    , { perguntas: ["como ser mais organizado?"], resposta: "Use listas de tarefas simples." }
    , { perguntas: ["como melhorar minha comunicação?"], resposta: "Pratique conversas diariamente." }
    , { perguntas: ["como fazer amigos?"], resposta: "Seja gentil e escute mais." }
    , { perguntas: ["como lidar com frustração?"], resposta: "Respire e tente novamente." }
    , { perguntas: ["como ter mais foco na vida?"], resposta: "Elimine distrações constantes." }
    , { perguntas: ["como melhorar minha leitura?"], resposta: "Leia todos os dias um pouco." }
    , { perguntas: ["como aprender sozinho?"], resposta: "Pesquise e pratique constantemente." }
    , { perguntas: ["como evoluir rápido?"], resposta: "Pratique todos os dias sem parar." }

    , { perguntas: ["como não desistir dos meus objetivos?"], resposta: "Continue mesmo com dificuldades." }
    , { perguntas: ["como ser mais calmo?"], resposta: "Respire profundamente em momentos difíceis." }
    , { perguntas: ["como controlar emoções?"], resposta: "Pense antes de reagir." }
    , { perguntas: ["como melhorar minha disciplina?"], resposta: "Crie rotina e siga todos os dias." }
    , { perguntas: ["como vencer a preguiça?"], resposta: "Comece agora com algo simples." }
    , { perguntas: ["como ter uma vida melhor?"], resposta: "Mude seus hábitos aos poucos." }
    , { perguntas: ["como ser mais inteligente?"], resposta: "Estude e pratique constantemente." }
    , { perguntas: ["como manter consistência?"], resposta: "Faça um pouco todos os dias." }
    , { perguntas: ["como aprender mais rápido na prática?"], resposta: "Repita exercícios frequentemente." }
    , { perguntas: ["como melhorar minha mentalidade?"], resposta: "Treine pensamentos positivos." }


    , { perguntas: ["como melhorar minha concentração?", "como focar melhor nos estudos?", "de que forma posso aumentar meu foco?", "o que fazer para não me distrair?", "como manter atenção por mais tempo?"], resposta: "Elimine distrações e faça pausas curtas." }
    , { perguntas: ["como parar de procrastinar?", "como vencer a procrastinação?", "de que forma posso parar de adiar tarefas?", "como deixar de deixar tudo para depois?", "o que fazer para agir agora?"], resposta: "Comece com pequenas tarefas imediatamente." }
    , { perguntas: ["como ter disciplina?", "como ser mais disciplinado?", "como criar disciplina forte?", "de que forma melhorar minha disciplina?", "como manter rotina disciplinada?"], resposta: "Faça o que precisa mesmo sem vontade." }
    , { perguntas: ["como melhorar autoestima?", "como aumentar minha confiança?", "como me sentir melhor comigo mesmo?", "como parar de me achar ruim?", "como valorizar mais a mim mesmo?"], resposta: "Reconheça suas pequenas conquistas diárias." }
    , { perguntas: ["como estudar melhor?", "como aprender mais rápido?", "como melhorar meus estudos?", "de que forma estudar de forma eficiente?", "como ter um estudo produtivo?"], resposta: "Estude em blocos curtos e revise sempre." }

    , { perguntas: ["como ter mais energia?", "como ficar menos cansado?", "como aumentar disposição?", "o que fazer para ter energia no dia?", "como não ficar exausto?"], resposta: "Durma bem e mantenha alimentação equilibrada." }
    , { perguntas: ["como ser mais organizado?", "como organizar minha vida?", "como melhorar organização pessoal?", "de que forma me organizar melhor?", "como parar de ser bagunçado?"], resposta: "Use listas simples de tarefas." }
    , { perguntas: ["como melhorar memória?", "como lembrar das coisas?", "como treinar minha memória?", "de que forma memorizar melhor?", "como não esquecer tudo?"], resposta: "Repita e revise o conteúdo frequentemente." }
    , { perguntas: ["como lidar com ansiedade?", "como controlar ansiedade?", "como ficar menos ansioso?", "de que forma reduzir ansiedade?", "como parar de me preocupar demais?"], resposta: "Respire fundo e foque no presente." }
    , { perguntas: ["como ser mais confiante?", "como aumentar confiança?", "como perder vergonha?", "como melhorar autoconfiança?", "de que forma ser mais seguro?"], resposta: "Pratique pequenas interações diárias." }

    , { perguntas: ["como fazer amigos?", "como socializar melhor?", "como conhecer pessoas?", "como ter mais amizades?", "de que forma ser mais sociável?"], resposta: "Seja gentil e escute mais as pessoas." }
    , { perguntas: ["como melhorar comunicação?", "como falar melhor com pessoas?", "como me expressar melhor?", "como conversar melhor?", "de que forma falar bem?"], resposta: "Pratique conversas com frequência." }
    , { perguntas: ["como parar de desistir?", "como não desistir fácil?", "como persistir mais?", "de que forma continuar mesmo difícil?", "como ser mais resistente?"], resposta: "Continue mesmo quando for difícil." }
    , { perguntas: ["como ter hábitos bons?", "como criar bons hábitos?", "como mudar hábitos ruins?", "de que forma formar hábitos positivos?", "como manter rotina saudável?"], resposta: "Repita ações boas todos os dias." }
    , { perguntas: ["como melhorar foco na vida?", "como ter mais atenção nas coisas?", "como focar melhor sempre?", "de que forma manter foco?", "como não perder concentração?"], resposta: "Elimine distrações do ambiente." }

    , { perguntas: ["como aprender inglês?", "como estudar inglês?", "como melhorar inglês rápido?", "de que forma aprender inglês fácil?", "como falar inglês melhor?"], resposta: "Pratique diariamente com consistência." }
    , { perguntas: ["como ser mais produtivo?", "como melhorar produtividade?", "como fazer mais coisas no dia?", "de que forma ser eficiente?", "como render mais?"], resposta: "Planeje seu dia com antecedência." }
    , { perguntas: ["como controlar emoções?", "como não explodir de raiva?", "como lidar com sentimentos?", "de que forma ficar calmo?", "como reagir melhor?"], resposta: "Pense antes de reagir." }
    , { perguntas: ["como melhorar vida?", "como mudar minha vida?", "como evoluir pessoalmente?", "de que forma melhorar tudo?", "como ter uma vida melhor?"], resposta: "Comece mudando pequenos hábitos." }
    , { perguntas: ["como ser inteligente?", "como ficar mais esperto?", "como melhorar raciocínio?", "de que forma aprender mais?", "como treinar mente?"], resposta: "Estude e pratique constantemente." }

    , { perguntas: ["como estudar sem distração?", "como focar estudando?", "como evitar distrações?", "de que forma estudar melhor?", "como não perder foco?"], resposta: "Estude em ambiente silencioso." }
    , { perguntas: ["como melhorar leitura?", "como ler melhor?", "como entender textos?", "de que forma melhorar leitura?", "como ler mais rápido?"], resposta: "Leia todos os dias um pouco." }
    , { perguntas: ["como ter disciplina forte?", "como ser extremamente disciplinado?", "como manter disciplina?", "de que forma ter disciplina?", "como não quebrar rotina?"], resposta: "Faça o necessário todos os dias." }
    , { perguntas: ["como vencer preguiça?", "como parar de ser preguiçoso?", "como ter mais ação?", "de que forma evitar preguiça?", "como agir mais?"], resposta: "Comece imediatamente com algo simples." }
    , { perguntas: ["como melhorar minha mente?", "como treinar mentalidade?", "como ficar mais forte mentalmente?", "de que forma evoluir mentalmente?", "como pensar melhor?"], resposta: "Treine pensamentos positivos." }

    , { perguntas: ["como não desistir dos objetivos?", "como persistir na vida?", "como continuar mesmo difícil?", "de que forma não parar?", "como seguir em frente?"], resposta: "Continue mesmo com dificuldades." }
    , { perguntas: ["como melhorar rotina?", "como criar rotina boa?", "como organizar rotina?", "de que forma melhorar dia a dia?", "como estruturar rotina?"], resposta: "Crie um plano diário simples." }
    , { perguntas: ["como ser melhor todos os dias?", "como evoluir diariamente?", "como melhorar sempre?", "de que forma crescer na vida?", "como progredir constantemente?"], resposta: "Melhore 1% por dia." }
    , { perguntas: ["como ter sucesso?", "como vencer na vida?", "como alcançar objetivos?", "de que forma ter sucesso?", "como conseguir resultados?"], resposta: "Seja consistente todos os dias." }
    , { perguntas: ["como parar de pensar demais?", "como controlar pensamentos?", "como não ficar pensando muito?", "de que forma relaxar a mente?", "como esvaziar a cabeça?"], resposta: "Foque no presente." }


    , { perguntas: ["como começar a investir na bolsa?", "como iniciar na bolsa de valores?", "de que forma começo a investir em ações?", "como entrar no mercado de ações?", "como dar os primeiros passos na bolsa?"], resposta: "Estude o básico e comece com pouco dinheiro." }
    , { perguntas: ["o que são ações?", "como funcionam as ações?", "o que significa comprar ações?", "pra que servem ações na bolsa?", "como ações funcionam no mercado?"], resposta: "Ações são pequenas partes de uma empresa." }
    , { perguntas: ["como ganhar dinheiro com investimentos?", "como lucrar investindo?", "de que forma se ganha dinheiro na bolsa?", "como ter lucro com ações?", "como investidores ganham dinheiro?"], resposta: "Comprando barato e vendendo mais caro." }
    , { perguntas: ["o que é renda fixa?", "como funciona renda fixa?", "pra que serve renda fixa?", "o que significa investir em renda fixa?", "como funciona esse tipo de investimento?"], resposta: "É um investimento com retorno mais previsível." }
    , { perguntas: ["o que é renda variável?", "como funciona renda variável?", "qual diferença da renda variável?", "o que significa renda variável?", "como funciona esse tipo de investimento?"], resposta: "É um investimento com ganhos e perdas variáveis." }

    , { perguntas: ["como investir com pouco dinheiro?", "posso investir com pouco dinheiro?", "como começar investindo pouco?", "de que forma investir com valor baixo?", "como entrar no mercado sem muito dinheiro?"], resposta: "Comece com pequenas quantias regularmente." }
    , { perguntas: ["o que é dividendos?", "como funcionam dividendos?", "pra que serve dividendo?", "como recebo dividendos?", "o que são pagamentos de ações?"], resposta: "São lucros pagos por empresas aos acionistas." }
    , { perguntas: ["o que é inflação?", "como inflação afeta meu dinheiro?", "por que preços sobem?", "o que significa inflação?", "como a inflação funciona?"], resposta: "É o aumento geral dos preços ao longo do tempo." }
    , { perguntas: ["o que é CDI?", "como funciona CDI?", "pra que serve CDI?", "o que significa CDI nos investimentos?", "como ele afeta meu dinheiro?"], resposta: "É uma taxa usada como referência de rendimento." }
    , { perguntas: ["o que é selic?", "como funciona taxa selic?", "pra que serve selic?", "o que significa selic na economia?", "como ela influencia investimentos?"], resposta: "É a taxa básica de juros do país." }

    , { perguntas: ["como economizar dinheiro?", "como guardar dinheiro?", "de que forma economizar mais?", "como juntar dinheiro rápido?", "como parar de gastar tanto?"], resposta: "Controle gastos e evite compras desnecessárias." }
    , { perguntas: ["o que é carteira de investimentos?", "como montar uma carteira?", "o que significa carteira de investimentos?", "como organizar investimentos?", "pra que serve carteira?"], resposta: "É o conjunto dos seus investimentos." }
    , { perguntas: ["como funciona juros compostos?", "o que são juros compostos?", "como o dinheiro cresce com juros?", "pra que servem juros compostos?", "como eles funcionam?"], resposta: "Os juros geram mais juros ao longo do tempo." }
    , { perguntas: ["como analisar uma ação?", "como saber se uma ação é boa?", "de que forma avaliar ações?", "como escolher ações?", "como estudar empresas?"], resposta: "Analise lucro, dívida e crescimento da empresa." }
    , { perguntas: ["o que é corretora?", "como funciona uma corretora?", "pra que serve corretora?", "como investir usando corretora?", "o que ela faz?"], resposta: "É a plataforma que permite comprar investimentos." }

    , { perguntas: ["como funciona bitcoin?", "o que é bitcoin?", "pra que serve criptomoeda?", "como investir em bitcoin?", "o que são criptos?"], resposta: "É uma moeda digital descentralizada." }
    , { perguntas: ["como evitar perdas na bolsa?", "como não perder dinheiro investindo?", "de que forma reduzir riscos?", "como investir com segurança?", "como proteger investimentos?"], resposta: "Diversifique seus investimentos." }
    , { perguntas: ["o que é mercado financeiro?", "como funciona o mercado financeiro?", "pra que serve o mercado financeiro?", "o que acontece na bolsa?", "como ele funciona?"], resposta: "É onde se negocia dinheiro, ações e ativos." }
    , { perguntas: ["como saber quando comprar ações?", "quando investir em ações?", "qual o melhor momento para comprar?", "como escolher o timing?", "quando entrar na bolsa?"], resposta: "Estude o mercado e evite decisões por impulso." }
    , { perguntas: ["como ficar rico investindo?", "como enriquecer com investimentos?", "de que forma ganhar dinheiro com ações?", "como construir riqueza?", "como crescer financeiramente?"], resposta: "Invista com disciplina e visão de longo prazo." }


];

