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
    { perguntas: ["como ter mentalidade forte", "mente forte"], resposta: "Treine disciplina e foco." }
];

