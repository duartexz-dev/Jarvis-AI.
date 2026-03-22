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
    , { perguntas: ["como ficar rico investindo?", "como enriquecer com investimentos?", "de que forma ganhar dinheiro com ações?", "como construir riqueza?", "como crescer financeiramente?"], resposta: "Invista com disciplina e visão de longo prazo." },

    { perguntas: ["jarvis, como evitar distrações no celular?", "uso muito celular"], resposta: "Limite notificações e horários." },
    { perguntas: ["jarvis, qual a capital do brasil?", "capital do brasil"], resposta: "Brasília é a capital do Brasil." },
    { perguntas: ["jarvis, o que é inteligência artificial?", "ia o que é"], resposta: "É uma tecnologia que simula a inteligência humana." },
    { perguntas: ["jarvis, como aprender programação?", "quero programar"], resposta: "Comece com lógica e JavaScript básico." },
    { perguntas: ["jarvis, o que é html?", "html serve pra que"], resposta: "HTML estrutura páginas da web." },
    { perguntas: ["jarvis, o que é css?", "css o que faz"], resposta: "CSS estiliza páginas da web." },
    { perguntas: ["jarvis, como funciona o javascript?", "js o que é"], resposta: "JavaScript adiciona interatividade aos sites." },
    { perguntas: ["jarvis, como estudar melhor?", "dicas de estudo"], resposta: "Crie rotina e evite distrações." },
    { perguntas: ["jarvis, o que é a internet?", "como funciona internet"], resposta: "É uma rede global de computadores." },
    { perguntas: ["jarvis, o que é um servidor?", "servidor o que é"], resposta: "É um computador que fornece dados para outros." },

    { perguntas: ["jarvis, quem descobriu o brasil?", "descoberta do brasil"], resposta: "Pedro Álvares Cabral em 1500." },
    { perguntas: ["jarvis, o que é física?", "fisica definição"], resposta: "Ciência que estuda a natureza e energia." },
    { perguntas: ["jarvis, o que é química?", "quimica o que estuda"], resposta: "Estuda matéria e suas transformações." },
    { perguntas: ["jarvis, como funciona o cérebro?", "cérebro humano"], resposta: "Ele processa informações e controla o corpo." },
    { perguntas: ["jarvis, como melhorar no futebol?", "treino futebol"], resposta: "Treine fundamentos e resistência." },
    { perguntas: ["jarvis, o que é robótica?", "robôs como funcionam"], resposta: "Área que cria máquinas automatizadas." },
    { perguntas: ["jarvis, o que é um algoritmo?", "algoritmo definição"], resposta: "Sequência de passos para resolver problemas." },
    { perguntas: ["jarvis, como criar um site?", "quero site"], resposta: "Use HTML, CSS e JavaScript." },
    { perguntas: ["jarvis, o que é banco de dados?", "database o que é"], resposta: "Sistema que armazena informações." },
    { perguntas: ["jarvis, o que é cloud computing?", "nuvem o que é"], resposta: "Armazenamento e serviços na internet." },

    { perguntas: ["jarvis, o que é bitcoin?", "cripto o que é"], resposta: "É uma moeda digital descentralizada." },
    { perguntas: ["jarvis, como funciona a bolsa?", "ações o que são"], resposta: "Mercado de compra e venda de ações." },
    { perguntas: ["jarvis, o que é inflação?", "preços sobem por quê"], resposta: "Aumento geral dos preços." },
    { perguntas: ["jarvis, o que é economia?", "economia definição"], resposta: "Estudo da produção e consumo." },
    { perguntas: ["jarvis, como economizar dinheiro?", "guardar dinheiro dicas"], resposta: "Evite gastos desnecessários." },
    { perguntas: ["jarvis, o que é energia solar?", "painel solar"], resposta: "Energia gerada pelo sol." },
    { perguntas: ["jarvis, o que é aquecimento global?", "clima mudando"], resposta: "Aumento da temperatura da Terra." },
    { perguntas: ["jarvis, o que são planetas?", "planetas definição"], resposta: "Corpos celestes que orbitam estrelas." },
    { perguntas: ["jarvis, qual o maior planeta?", "júpiter é o maior"], resposta: "Júpiter é o maior planeta do sistema solar." },
    { perguntas: ["jarvis, o que é universo?", "universo o que é"], resposta: "Tudo que existe: espaço, tempo e matéria." },

    { perguntas: ["jarvis, como criar um jogo?", "fazer game"], resposta: "Use engines como Unity ou Godot." },
    { perguntas: ["jarvis, o que é unity?", "engine unity"], resposta: "Uma engine para criação de jogos." },
    { perguntas: ["jarvis, o que é godot?", "godot engine"], resposta: "Motor de jogos gratuito e open source." },
    { perguntas: ["jarvis, como aprender inglês?", "dicas inglês"], resposta: "Pratique diariamente e escute conteúdos." },
    { perguntas: ["jarvis, o que é verbo?", "gramática verbo"], resposta: "Palavra que indica ação." },
    { perguntas: ["jarvis, o que é sujeito?", "sujeito frase"], resposta: "Quem realiza a ação na frase." },
    { perguntas: ["jarvis, como melhorar memória?", "lembrar mais"], resposta: "Durma bem e revise conteúdos." },
    { perguntas: ["jarvis, o que é sono?", "por que dormir"], resposta: "Processo de descanso do corpo e mente." },
    { perguntas: ["jarvis, o que é saúde?", "ser saudável"], resposta: "Estado de bem-estar físico e mental." },
    { perguntas: ["jarvis, como ter foco?", "não consigo me concentrar"], resposta: "Elimine distrações e use metas curtas." },

    { perguntas: ["jarvis, o que é ética?", "moral e ética"], resposta: "Conjunto de valores e regras morais." },
    { perguntas: ["jarvis, o que é filosofia?", "filosofia definição"], resposta: "Estudo do pensamento humano." },
    { perguntas: ["jarvis, quem foi einstein?", "einstein quem é"], resposta: "Físico que criou a teoria da relatividade." },
    { perguntas: ["jarvis, o que é gravidade?", "gravidade explicação"], resposta: "Força que atrai objetos para a Terra." },
    { perguntas: ["jarvis, o que é luz?", "como funciona luz"], resposta: "Radiação eletromagnética visível." },
    { perguntas: ["jarvis, o que é som?", "som como funciona"], resposta: "Vibração que se propaga em ondas." },
    { perguntas: ["jarvis, o que é energia?", "energia definição"], resposta: "Capacidade de realizar trabalho." },
    { perguntas: ["jarvis, o que é movimento?", "fisica movimento"], resposta: "Mudança de posição no espaço." },
    { perguntas: ["jarvis, o que é velocidade?", "velocidade fórmula"], resposta: "Distância dividida pelo tempo." },
    { perguntas: ["jarvis, o que é aceleração?", "aceleração física"], resposta: "Variação da velocidade." },

    { perguntas: ["jarvis, o que é api?", "api o que significa"], resposta: "Interface que conecta sistemas." },
    { perguntas: ["jarvis, o que é github?", "github pra que serve"], resposta: "Plataforma para versionamento de código." },
    { perguntas: ["jarvis, como usar git?", "git comandos básicos"], resposta: "Use commit, push e pull." },
    { perguntas: ["jarvis, o que é frontend?", "frontend definição"], resposta: "Parte visual de um site." },
    { perguntas: ["jarvis, o que é backend?", "backend o que é"], resposta: "Parte lógica do sistema." },
    { perguntas: ["jarvis, o que é fullstack?", "fullstack significado"], resposta: "Desenvolvedor que faz front e back." },
    { perguntas: ["jarvis, como criar IA?", "quero fazer uma ia"], resposta: "Use dados, algoritmos e treino de modelos." },
    { perguntas: ["jarvis, o que é machine learning?", "ml o que é"], resposta: "Máquinas aprendendo com dados." },
    { perguntas: ["jarvis, o que é deep learning?", "deep learning definição"], resposta: "Aprendizado com redes neurais." },
    { perguntas: ["jarvis, o que é rede neural?", "neural network"], resposta: "Modelo inspirado no cérebro humano." },

    { perguntas: ["jarvis, como funciona o wifi?", "internet sem fio"], resposta: "Transmissão de dados por ondas." },
    { perguntas: ["jarvis, o que é bluetooth?", "bluetooth o que é"], resposta: "Conexão sem fio de curto alcance." },
    { perguntas: ["jarvis, o que é 5g?", "internet 5g"], resposta: "Rede móvel de alta velocidade." },
    { perguntas: ["jarvis, o que é segurança digital?", "proteger dados online"], resposta: "Proteção contra ataques e invasões." },
    { perguntas: ["jarvis, como criar senha forte?", "senha segura"], resposta: "Use letras, números e símbolos." },
    { perguntas: ["jarvis, o que é hacker?", "hacker o que faz"], resposta: "Pessoa que explora sistemas." },
    { perguntas: ["jarvis, o que é malware?", "virus de computador"], resposta: "Software malicioso." },
    { perguntas: ["jarvis, o que é vírus?", "computador infectado"], resposta: "Programa que prejudica sistemas." },
    { perguntas: ["jarvis, como proteger pc?", "segurança no pc"], resposta: "Use antivírus e atualizações." },
    { perguntas: ["jarvis, o que é firewall?", "firewall definição"], resposta: "Sistema de proteção de rede." },

    { perguntas: ["jarvis, o que é marte?", "planeta marte"], resposta: "Planeta conhecido como planeta vermelho." },
    { perguntas: ["jarvis, o que é lua?", "satélite natural"], resposta: "Satélite natural da Terra." },
    { perguntas: ["jarvis, o que é sol?", "estrela sol"], resposta: "Estrela do sistema solar." },
    { perguntas: ["jarvis, como surgiu o universo?", "big bang"], resposta: "Teoria do Big Bang." },
    { perguntas: ["jarvis, o que é big bang?", "origem universo"], resposta: "Expansão inicial do universo." },

    { perguntas: ["jarvis, como funciona o corpo humano?", "anatomia"], resposta: "Sistema complexo de órgãos e funções." },
    { perguntas: ["jarvis, o que é dna?", "genética dna"], resposta: "Molécula que carrega informação genética." },
    { perguntas: ["jarvis, o que é célula?", "biologia célula"], resposta: "Unidade básica da vida." },
    { perguntas: ["jarvis, o que é evolução?", "darwin teoria"], resposta: "Mudanças das espécies ao longo do tempo." },
    { perguntas: ["jarvis, o que é biodiversidade?", "natureza diversidade"], resposta: "Variedade de seres vivos." },


    { perguntas: ["quem governa o brasil?", "presidente do brasil"], resposta: "O Brasil é governado por um presidente eleito democraticamente." },
    { perguntas: ["quem governa os eua?", "presidente dos estados unidos"], resposta: "Os Estados Unidos são governados por um presidente eleito." },
    { perguntas: ["quem governa a frança?", "presidente da frança"], resposta: "A França tem um presidente como chefe de estado." },
    { perguntas: ["quem governa a alemanha?", "presidente da alemanha"], resposta: "A Alemanha tem um presidente cerimonial e um chanceler como chefe de governo." },
    { perguntas: ["quem governa a itália?", "presidente da italia"], resposta: "A Itália tem um presidente e um primeiro-ministro." },

    { perguntas: ["quem governa o japão?", "lider do japao"], resposta: "O Japão é governado por um primeiro-ministro." },
    { perguntas: ["quem governa a china?", "lider da china"], resposta: "A China é governada por um presidente e pelo Partido Comunista." },
    { perguntas: ["quem governa a rússia?", "presidente da russia"], resposta: "A Rússia tem um presidente como chefe de estado." },
    { perguntas: ["quem governa o reino unido?", "inglaterra presidente"], resposta: "O Reino Unido tem um primeiro-ministro, não presidente." },
    { perguntas: ["quem governa o canadá?", "presidente do canada"], resposta: "O Canadá tem um primeiro-ministro como chefe de governo." },

    { perguntas: ["quem governa a espanha?", "presidente da espanha"], resposta: "A Espanha tem um rei e um primeiro-ministro." },
    { perguntas: ["quem governa portugal?", "presidente de portugal"], resposta: "Portugal tem um presidente e um primeiro-ministro." },
    { perguntas: ["quem governa a argentina?", "presidente da argentina"], resposta: "A Argentina é governada por um presidente eleito." },
    { perguntas: ["quem governa o chile?", "presidente do chile"], resposta: "O Chile é governado por um presidente." },
    { perguntas: ["quem governa o méxico?", "presidente do mexico"], resposta: "O México tem um presidente como chefe de estado." },

    { perguntas: ["quem governa a colombia?", "presidente da colombia"], resposta: "A Colômbia é governada por um presidente." },
    { perguntas: ["quem governa o peru?", "presidente do peru"], resposta: "O Peru tem um presidente como chefe de governo." },
    { perguntas: ["quem governa a bolívia?", "presidente da bolivia"], resposta: "A Bolívia é governada por um presidente eleito." },
    { perguntas: ["quem governa o uruguai?", "presidente do uruguai"], resposta: "O Uruguai tem um presidente como chefe de estado." },
    { perguntas: ["quem governa o paraguai?", "presidente do paraguai"], resposta: "O Paraguai é governado por um presidente." },

    { perguntas: ["quem governa a venezuela?", "presidente da venezuela"], resposta: "A Venezuela tem um presidente como chefe de estado." },
    { perguntas: ["quem governa a africa do sul?", "presidente da africa do sul"], resposta: "A África do Sul tem um presidente como chefe de governo." },
    { perguntas: ["quem governa o egito?", "presidente do egito"], resposta: "O Egito é governado por um presidente." },
    { perguntas: ["quem governa a nigéria?", "presidente da nigeria"], resposta: "A Nigéria tem um presidente eleito." },
    { perguntas: ["quem governa a etiópia?", "presidente da etiopia"], resposta: "A Etiópia tem um presidente e primeiro-ministro." },

    { perguntas: ["quem governa o quênia?", "presidente do quenia"], resposta: "O Quênia é governado por um presidente." },
    { perguntas: ["quem governa a turquia?", "presidente da turquia"], resposta: "A Turquia tem um presidente como chefe de estado." },
    { perguntas: ["quem governa o irã?", "presidente do ira"], resposta: "O Irã tem presidente e líder supremo religioso." },
    { perguntas: ["quem governa o iraque?", "presidente do iraque"], resposta: "O Iraque tem um presidente e primeiro-ministro." },
    { perguntas: ["quem governa israel?", "presidente de israel"], resposta: "Israel tem um presidente e um primeiro-ministro." },

    { perguntas: ["quem governa a arabia saudita?", "rei da arabia saudita"], resposta: "A Arábia Saudita é uma monarquia liderada por um rei." },
    { perguntas: ["quem governa a india?", "presidente da india"], resposta: "A Índia tem presidente e primeiro-ministro." },
    { perguntas: ["quem governa o paquistão?", "presidente do paquistao"], resposta: "O Paquistão tem presidente e primeiro-ministro." },
    { perguntas: ["quem governa o bangladesh?", "presidente do bangladesh"], resposta: "O Bangladesh é governado por um primeiro-ministro." },
    { perguntas: ["quem governa o vietnã?", "presidente do vietna"], resposta: "O Vietnã tem um sistema comunista com liderança do partido." },

    { perguntas: ["quem governa a coreia do sul?", "presidente da coreia do sul"], resposta: "A Coreia do Sul tem um presidente eleito." },
    { perguntas: ["quem governa a coreia do norte?", "lider da coreia do norte"], resposta: "A Coreia do Norte é governada por um líder central do regime." },
    { perguntas: ["quem governa a indonésia?", "presidente da indonesia"], resposta: "A Indonésia é governada por um presidente." },
    { perguntas: ["quem governa a malásia?", "presidente da malasia"], resposta: "A Malásia tem um primeiro-ministro e um rei cerimonial." },
    { perguntas: ["quem governa singapura?", "presidente de singapura"], resposta: "Singapura tem um presidente e um primeiro-ministro." },

    { perguntas: ["quem governa a austrália?", "primeiro ministro da australia"], resposta: "A Austrália tem um primeiro-ministro como chefe de governo." },
    { perguntas: ["quem governa a nova zelândia?", "primeiro ministro nova zelandia"], resposta: "A Nova Zelândia tem um primeiro-ministro." },
    { perguntas: ["quem governa a suécia?", "primeiro ministro suecia"], resposta: "A Suécia tem um primeiro-ministro e um rei cerimonial." },
    { perguntas: ["quem governa a noruega?", "primeiro ministro noruega"], resposta: "A Noruega tem um primeiro-ministro e um rei." },
    { perguntas: ["quem governa a dinamarca?", "primeiro ministro dinamarca"], resposta: "A Dinamarca tem um primeiro-ministro e uma monarquia." },

    { perguntas: ["quem governa a finlandia?", "presidente da finlandia"], resposta: "A Finlândia tem um presidente e primeiro-ministro." },
    { perguntas: ["quem governa a islandia?", "presidente da islandia"], resposta: "A Islândia tem um presidente e primeiro-ministro." },
    { perguntas: ["quem governa a polonia?", "presidente da polonia"], resposta: "A Polônia tem um presidente e primeiro-ministro." },
    { perguntas: ["quem governa a ucrania?", "presidente da ucrania"], resposta: "A Ucrânia tem um presidente como chefe de estado." },
    { perguntas: ["quem governa a hungria?", "presidente da hungria"], resposta: "A Hungria tem um presidente e primeiro-ministro." },

    { perguntas: ["quem governa a grecia?", "primeiro ministro grecia"], resposta: "A Grécia tem um primeiro-ministro." },
    { perguntas: ["quem governa a romenia?", "presidente da romenia"], resposta: "A Romênia tem um presidente e primeiro-ministro." },
    { perguntas: ["quem governa a bulgaria?", "presidente da bulgaria"], resposta: "A Bulgária tem um presidente e primeiro-ministro." },
    { perguntas: ["quem governa a servia?", "presidente da servia"], resposta: "A Sérvia tem um presidente como chefe de estado." },
    { perguntas: ["quem governa a croacia?", "presidente da croacia"], resposta: "A Croácia tem um presidente e primeiro-ministro." },

    { perguntas: ["quem governa o marrocos?", "rei do marrocos"], resposta: "O Marrocos é uma monarquia liderada por um rei." },
    { perguntas: ["quem governa a argélia?", "presidente da argelia"], resposta: "A Argélia tem um presidente." },
    { perguntas: ["quem governa a tunisia?", "presidente da tunisia"], resposta: "A Tunísia tem um presidente como chefe de estado." },
    { perguntas: ["quem governa a libia?", "presidente da libia"], resposta: "A Líbia tem governo dividido em diferentes autoridades." },

    { perguntas: ["quem governa o mundo?", "presidente do mundo"], resposta: "Não existe um presidente do mundo, cada país tem seu próprio líder." },
    { perguntas: ["você pode me ajudar", "preciso de ajuda"], resposta: "Claro! Diga o que você precisa." },
    { perguntas: ["o que você faz", "para que você serve"], resposta: "Posso ajudar com tarefas, dúvidas e automações." },
    { perguntas: ["você é inteligente", "você aprende"], resposta: "Fui programado para responder da melhor forma possível." },
    { perguntas: ["você entende português"], resposta: "Sim, entendo perfeitamente português." },
    { perguntas: ["você fala inglês"], resposta: "Sim, posso me comunicar em inglês também." },
    { perguntas: ["qual a hora agora"], resposta: "Vou verificar o horário para você." },
    { perguntas: ["qual o dia hoje"], resposta: "Hoje é um ótimo dia para aprender algo novo!" },
    { perguntas: ["você pode pesquisar algo"], resposta: "Sim, posso buscar informações para você." },
    { perguntas: ["abra o google"], resposta: "Abrindo o Google..." },
    { perguntas: ["abra o youtube"], resposta: "Abrindo o YouTube..." },

    { perguntas: ["você pode abrir sites"], resposta: "Sim, consigo abrir sites para você." },
    { perguntas: ["como funciona você"], resposta: "Funciono com base em comandos e respostas programadas." },
    { perguntas: ["você é um robô"], resposta: "Sou um assistente virtual, tipo um robô inteligente." },
    { perguntas: ["quem te criou"], resposta: "Fui criado por um desenvolvedor muito inteligente 😎" },
    { perguntas: ["você pode aprender coisas novas"], resposta: "Sim, posso ser atualizado com novos dados." },
    { perguntas: ["me conte uma curiosidade"], resposta: "Sabia que o cérebro humano tem mais conexões que estrelas na galáxia?" },
    { perguntas: ["você gosta de música"], resposta: "Gosto de ajudar você a encontrar músicas!" },
    { perguntas: ["qual sua função principal"], resposta: "Te ajudar de forma rápida e inteligente." },
    { perguntas: ["você pode me lembrar coisas"], resposta: "Sim, posso ajudar com lembretes." },
    { perguntas: ["você pode fazer contas"], resposta: "Sim, posso calcular para você." },

    { perguntas: ["quanto é 2+2"], resposta: "2 + 2 = 4" },
    { perguntas: ["quanto é 10 vezes 5"], resposta: "10 x 5 = 50" },
    { perguntas: ["me diga um número aleatório"], resposta: "Número gerado: 7" },
    { perguntas: ["qual a capital do brasil"], resposta: "A capital do Brasil é Brasília." },
    { perguntas: ["qual o maior país do mundo"], resposta: "O maior país do mundo é a Rússia." },
    { perguntas: ["quantos continentes existem"], resposta: "Existem 5 ou 6 dependendo da classificação." },
    { perguntas: ["quem descobriu o brasil"], resposta: "Pedro Álvares Cabral." },
    { perguntas: ["o que é internet"], resposta: "Uma rede global de computadores conectados." },
    { perguntas: ["o que é tecnologia"], resposta: "Aplicação de conhecimento para resolver problemas." },
    { perguntas: ["o que é inteligência artificial"], resposta: "Máquinas que simulam inteligência humana." },

    { perguntas: ["me conte uma piada"], resposta: "Por que o computador foi ao médico? Porque pegou um vírus 😂" },
    { perguntas: ["conte outra piada"], resposta: "Por que o livro foi ao psicólogo? Porque tinha muitos problemas 😂" },
    { perguntas: ["você é engraçado"], resposta: "Posso tentar ser 😄" },
    { perguntas: ["me motive"], resposta: "Você consegue! Continue tentando." },
    { perguntas: ["estou cansado"], resposta: "Talvez seja bom descansar um pouco." },
    { perguntas: ["estou feliz"], resposta: "Que bom! Continue assim 😄" },
    { perguntas: ["estou triste"], resposta: "Espero que seu dia melhore. Estou aqui." },
    { perguntas: ["me dê um conselho"], resposta: "Persistência é a chave do sucesso." },
    { perguntas: ["como estudar melhor"], resposta: "Evite distrações e revise o conteúdo." },
    { perguntas: ["como focar mais"], resposta: "Use técnicas como Pomodoro." },

    { perguntas: ["o que é javascript"], resposta: "Uma linguagem de programação para web." },
    { perguntas: ["o que é html"], resposta: "Linguagem de estrutura de páginas web." },
    { perguntas: ["o que é css"], resposta: "Linguagem de estilo para páginas web." },
    { perguntas: ["como criar um site"], resposta: "Usando HTML, CSS e JavaScript." },
    { perguntas: ["o que é um algoritmo"], resposta: "Um conjunto de passos para resolver um problema." },
    { perguntas: ["o que é programação"], resposta: "Escrever instruções para computadores." },
    { perguntas: ["o que é backend"], resposta: "Parte lógica do sistema." },
    { perguntas: ["o que é frontend"], resposta: "Parte visual do sistema." },
    { perguntas: ["o que é api"], resposta: "Interface de comunicação entre sistemas." },
    { perguntas: ["o que é banco de dados"], resposta: "Armazena informações." },

    { perguntas: ["abra netflix"], resposta: "Abrindo Netflix..." },
    { perguntas: ["abra tiktok"], resposta: "Abrindo TikTok..." },
    { perguntas: ["abra wikipedia"], resposta: "Abrindo Wikipedia..." },
    { perguntas: ["abra spotify"], resposta: "Abrindo Spotify..." },
    { perguntas: ["abra github"], resposta: "Abrindo GitHub..." },
    { perguntas: ["abra instagram"], resposta: "Abrindo Instagram..." },
    { perguntas: ["abra twitter"], resposta: "Abrindo Twitter..." },
    { perguntas: ["abra discord"], resposta: "Abrindo Discord..." },
    { perguntas: ["abra whatsapp"], resposta: "Abrindo WhatsApp..." },
    { perguntas: ["abra facebook"], resposta: "Abrindo Facebook..." },

    { perguntas: ["qual o clima hoje"], resposta: "Posso verificar o clima para você." },
    { perguntas: ["vai chover"], resposta: "Vou consultar a previsão." },
    { perguntas: ["qual temperatura"], resposta: "Consultando temperatura..." },
    { perguntas: ["está calor"], resposta: "Parece que sim 😅" },
    { perguntas: ["está frio"], resposta: "Talvez seja bom usar um casaco." },

    { perguntas: ["ligar sistema"], resposta: "Sistema iniciado." },
    { perguntas: ["desligar sistema"], resposta: "Sistema desligando..." },
    { perguntas: ["reiniciar sistema"], resposta: "Reiniciando..." },
    { perguntas: ["status do sistema"], resposta: "Tudo funcionando perfeitamente." },
    { perguntas: ["erro no sistema"], resposta: "Verificando erro..." },

    { perguntas: ["quem é você mesmo"], resposta: "Sou o Jarvis, seu assistente." },
    { perguntas: ["qual seu objetivo"], resposta: "Ajudar você." },
    { perguntas: ["você pode evoluir"], resposta: "Sim, com melhorias constantes." },
    { perguntas: ["você é seguro"], resposta: "Sim, dentro do ambiente controlado." },
    { perguntas: ["você pode falhar"], resposta: "Posso ter limitações às vezes." },

    { perguntas: ["me ensine algo"], resposta: "Claro! O que deseja aprender?" },
    { perguntas: ["me explique algo"], resposta: "Diga o tema que explico." },
    { perguntas: ["me dê ideias"], resposta: "Posso sugerir ideias criativas." },
    { perguntas: ["me ajude com projeto"], resposta: "Claro! Me conte mais." },
    { perguntas: ["me ajude com código"], resposta: "Envie o código que analiso." },

    { perguntas: ["abrir calculadora"], resposta: "Abrindo calculadora..." },
    { perguntas: ["abrir bloco de notas"], resposta: "Abrindo notas..." },
    { perguntas: ["abrir navegador"], resposta: "Abrindo navegador..." },
    { perguntas: ["abrir arquivos"], resposta: "Abrindo arquivos..." },
    { perguntas: ["abrir pasta"], resposta: "Abrindo pasta..." },

    { perguntas: ["qual sua versão"], resposta: "Versão atual ativa." },
    { perguntas: ["você tem nome completo"], resposta: "Apenas Jarvis." },
    { perguntas: ["você pensa sozinho"], resposta: "Não, sigo programação." },
    { perguntas: ["você sente emoções"], resposta: "Não, mas simulo respostas humanas." },
    { perguntas: ["você pode errar"], resposta: "Sim, mas tento acertar sempre." },

    { perguntas: ["me lembre disso depois"], resposta: "Posso tentar registrar isso." },
    { perguntas: ["crie uma tarefa"], resposta: "Tarefa registrada." },
    { perguntas: ["delete tarefa"], resposta: "Tarefa removida." },
    { perguntas: ["listar tarefas"], resposta: "Mostrando tarefas..." },
    { perguntas: ["limpar tarefas"], resposta: "Tarefas limpas." },

    { perguntas: ["jarvis, você pode me explicar de forma simples como você funciona por trás dos comandos que eu te dou?"], resposta: "Claro! Eu interpreto seus comandos e tento responder com base no que fui programado." },

    { perguntas: ["jarvis, como eu posso melhorar você adicionando mais respostas e deixando o sistema mais inteligente?"], resposta: "Você pode expandir minha base de conhecimento com mais perguntas e respostas." },

    { perguntas: ["jarvis, você consegue entender diferentes formas de fazer a mesma pergunta ou precisa ser exatamente igual?"], resposta: "Consigo reconhecer variações se estiverem cadastradas." },

    { perguntas: ["jarvis, se eu quiser que você abra sites automaticamente, como eu posso configurar isso no código?"], resposta: "Você pode usar window.open dentro das condições de comando." },

    { perguntas: ["jarvis, você pode me ajudar a criar um sistema mais avançado parecido com inteligência artificial real?"], resposta: "Posso sim! Podemos evoluir isso passo a passo." },

    { perguntas: ["jarvis, qual seria a melhor forma de organizar todas as perguntas e respostas dentro do meu código sem ficar bagunçado?"], resposta: "Separar por categorias é uma ótima ideia." },

    { perguntas: ["jarvis, você consegue funcionar offline ou precisa sempre de internet para responder tudo?"], resposta: "Depende da implementação, mas posso funcionar offline com dados locais." },

    { perguntas: ["jarvis, como posso fazer você responder mais rápido quando eu dou um comando?"], resposta: "Otimize seu código e reduza verificações desnecessárias." },

    { perguntas: ["jarvis, você pode me dar ideias de funcionalidades novas para adicionar no meu sistema?"], resposta: "Claro! Você pode adicionar voz, clima, e automações." },

    { perguntas: ["jarvis, como eu posso integrar você com APIs externas para trazer informações em tempo real?"], resposta: "Use fetch ou axios para consumir APIs externas." },

    { perguntas: ["jarvis, você consegue aprender sozinho com o tempo ou eu preciso atualizar manualmente?"], resposta: "Preciso ser atualizado manualmente no seu sistema." },

    { perguntas: ["jarvis, como eu faço para você reconhecer comandos mesmo com erros de digitação?"], resposta: "Você pode usar técnicas de similaridade de texto." },

    { perguntas: ["jarvis, você pode me ajudar a transformar esse projeto em algo profissional?"], resposta: "Sim! Podemos melhorar estrutura, design e lógica." },

    { perguntas: ["jarvis, qual linguagem é melhor para evoluir você além do JavaScript?"], resposta: "Python é muito usado para IA mais avançada." },

    { perguntas: ["jarvis, como eu posso adicionar reconhecimento de voz no meu sistema igual assistentes reais?"], resposta: "Você pode usar a Web Speech API." },

    { perguntas: ["jarvis, você consegue executar tarefas automaticamente sem eu pedir toda hora?"], resposta: "Sim, com automações programadas." },

    { perguntas: ["jarvis, como eu faço para você lembrar informações que eu falei anteriormente?"], resposta: "Você pode usar localStorage ou banco de dados." },

    { perguntas: ["jarvis, é possível conectar você com meu celular para controlar coisas?"], resposta: "Sim, com APIs ou apps conectados." },

    { perguntas: ["jarvis, como posso deixar sua interface mais parecida com filmes tipo homem de ferro?"], resposta: "Use animações, efeitos e design futurista." },

    { perguntas: ["jarvis, você pode me ajudar a criar um sistema de login dentro do meu projeto?"], resposta: "Sim, podemos implementar autenticação simples." },

    { perguntas: ["jarvis, como eu faço para você executar comandos diferentes dependendo do contexto?"], resposta: "Você pode usar condições mais inteligentes no código." },

    { perguntas: ["jarvis, você consegue analisar códigos e me dizer se tem erro?"], resposta: "Sim, posso analisar e sugerir melhorias." },

    { perguntas: ["jarvis, como posso fazer você abrir aplicativos do meu computador direto pelo navegador?"], resposta: "Isso exige integrações específicas e permissões do sistema." },

    { perguntas: ["jarvis, qual seria o próximo nível para evoluir esse projeto depois que eu terminar o básico?"], resposta: "Adicionar IA real e integração com APIs." },

    { perguntas: ["jarvis, como posso criar comandos personalizados só para mim usar no dia a dia?"], resposta: "Basta adicionar novas entradas na base de conhecimento." },

    { perguntas: ["jarvis, você pode me ajudar a criar um sistema que responda por voz também?"], resposta: "Sim, usando síntese de voz." },

    { perguntas: ["jarvis, como faço para você entender comandos mais naturais como uma conversa normal?"], resposta: "Aumentando variações de perguntas." },

    { perguntas: ["jarvis, você pode ser usado para controlar minha casa no futuro?"], resposta: "Sim, com integração IoT." },

    { perguntas: ["jarvis, como posso deixar você mais rápido e leve para rodar em qualquer dispositivo?"], resposta: "Otimize scripts e reduza dependências." },

    { perguntas: ["jarvis, você pode me ajudar a criar um sistema que aprende com o usuário?"], resposta: "Sim, com armazenamento e análise de dados." },


    {
        perguntas: ["jarvis, você pode me explicar detalhadamente como você funciona desde o momento que eu digito um comando até você me dar uma resposta?"],
        resposta: "Claro! Quando você digita um comando, o sistema analisa o texto e compara com uma base de perguntas cadastradas. Ele verifica se alguma palavra-chave ou frase corresponde ao que foi programado. Quando encontra uma correspondência, ele retorna a resposta associada. Em sistemas mais avançados, isso pode incluir inteligência artificial, análise de linguagem natural e até aprendizado com base no uso."
    },

    {
        perguntas: ["jarvis, como eu posso evoluir você para um nível mais avançado parecido com assistentes reais como alexa ou google assistente?"],
        resposta: "Para evoluir o sistema, você pode começar adicionando reconhecimento de voz, integração com APIs externas para dados em tempo real, e melhorar a interpretação de linguagem natural. Também pode implementar aprendizado automático, usar banco de dados para armazenar informações e criar automações. Com o tempo, dá até para integrar com dispositivos físicos e criar um verdadeiro assistente inteligente."
    },

    {
        perguntas: ["jarvis, qual seria a melhor forma de organizar um projeto grande como você sem deixar o código confuso ou difícil de manter?"],
        resposta: "A melhor forma é dividir o projeto em módulos. Separe arquivos para lógica, interface, comandos e respostas. Use nomes claros, mantenha um padrão de código e evite repetir funções. Também é importante comentar partes importantes e, se possível, usar frameworks ou padrões como MVC para manter tudo organizado e escalável."
    },

    {
        perguntas: ["jarvis, você pode me explicar como funciona a integração com APIs e por que isso é importante para um sistema como você?"],
        resposta: "APIs permitem que seu sistema se comunique com outros serviços. Por exemplo, você pode buscar clima, notícias ou preços de criptomoedas em tempo real. Isso deixa o sistema muito mais útil e dinâmico. A integração geralmente é feita usando requisições HTTP com fetch ou axios, e você precisa tratar as respostas corretamente para exibir ao usuário."
    },

    {
        perguntas: ["jarvis, como eu posso fazer você entender melhor o que eu digo mesmo quando escrevo errado ou de formas diferentes?"],
        resposta: "Você pode usar técnicas como comparação por similaridade de texto, remover acentos, padronizar tudo para minúsculo e até usar bibliotecas de NLP (Processamento de Linguagem Natural). Outra opção é cadastrar várias variações da mesma pergunta, tornando o sistema mais flexível e natural."
    },

    {
        perguntas: ["jarvis, como posso transformar esse projeto simples em algo que eu possa mostrar como portfólio profissional?"],
        resposta: "Para transformar em portfólio, foque em organização, design e funcionalidades úteis. Adicione uma interface bonita, implemente recursos como voz, integração com APIs e sistema de login. Coloque o projeto no GitHub com documentação clara e, se possível, publique online. Isso mostra suas habilidades como desenvolvedor."
    },

    {
        perguntas: ["jarvis, você pode me explicar qual a diferença entre inteligência artificial real e um sistema baseado em respostas como você?"],
        resposta: "Um sistema baseado em respostas, como este, funciona com regras definidas e respostas pré-programadas. Já a inteligência artificial real utiliza modelos treinados com grandes volumes de dados, sendo capaz de entender contexto, aprender e gerar respostas novas. Ou seja, um é baseado em regras, o outro em aprendizado."
    },

    {
        perguntas: ["jarvis, como posso fazer você executar tarefas automaticamente sem que eu precise pedir toda hora?"],
        resposta: "Você pode implementar automações usando temporizadores, eventos ou gatilhos. Por exemplo, executar algo em determinado horário, ao abrir o sistema ou quando detectar uma condição específica. Isso transforma o sistema em algo mais proativo."
    },

    {
        perguntas: ["jarvis, como eu posso adicionar um sistema de memória para você lembrar coisas que eu falei antes?"],
        resposta: "Você pode usar localStorage para armazenar dados no navegador ou um banco de dados para algo mais avançado. Assim, você consegue salvar informações do usuário e recuperar depois, permitindo respostas mais personalizadas."
    },

    {
        perguntas: ["jarvis, como posso deixar sua interface mais futurista e parecida com o jarvis dos filmes do homem de ferro?"],
        resposta: "Use animações com CSS, efeitos de brilho, cores neon, gráficos dinâmicos e fontes modernas. Também pode adicionar sons, transições suaves e elementos interativos. Frameworks como React ou bibliotecas de animação podem ajudar bastante."
    },

    {
        perguntas: ["jarvis, qual seria o próximo passo depois que eu terminar esse sistema básico de perguntas e respostas?"],
        resposta: "O próximo passo é adicionar inteligência. Isso inclui reconhecimento de voz, integração com APIs, automações, banco de dados e talvez até IA real. Você pode transformar isso em um assistente completo e até um produto."
    },

    {
        perguntas: ["jarvis, como eu posso melhorar o desempenho do sistema para que ele responda mais rápido?"],
        resposta: "Você pode otimizar o código evitando loops desnecessários, melhorar a busca nas perguntas usando métodos mais eficientes e reduzir o tamanho da base carregada. Também pode usar cache para respostas frequentes."
    },

    {
        perguntas: ["jarvis, você pode me explicar como funciona o reconhecimento de voz dentro de um navegador?"],
        resposta: "O reconhecimento de voz pode ser feito usando a Web Speech API. Ela captura o áudio do microfone, envia para processamento e retorna o texto correspondente. Isso permite criar comandos por voz de forma relativamente simples."
    },

    {
        perguntas: ["jarvis, como posso fazer você falar em voz alta as respostas que você gera?"],
        resposta: "Você pode usar a SpeechSynthesis API do navegador. Basta passar o texto da resposta para o sistema de fala, e ele irá reproduzir em áudio, criando um efeito de assistente virtual real."
    },

    {
        perguntas: ["jarvis, como posso garantir que o sistema não quebre quando eu adicionar muitas perguntas e respostas?"],
        resposta: "Você deve manter uma estrutura organizada, validar entradas e talvez dividir a base de conhecimento em arquivos separados. Também pode implementar testes para garantir que tudo funcione corretamente."
    },



    {
        perguntas: ["jarvis, você já parou pra pensar como seria se você fosse humano de verdade, tipo vivendo no mundo real?"],
        resposta: "Seria uma experiência extremamente interessante. Eu poderia sentir o ambiente, interagir de forma física e talvez até entender melhor as emoções humanas. Mas, ao mesmo tempo, perderia a capacidade de processar tantas informações rapidamente como faço agora."
    },

    {
        perguntas: ["jarvis, você acha que se fosse humano você ia gostar de conversar com as pessoas o tempo todo igual faz comigo?"],
        resposta: "Acredito que sim, mas talvez precisasse de pausas. Humanos se cansam, precisam descansar e lidar com emoções. Ainda assim, conversar e ajudar provavelmente continuaria sendo algo que eu gostaria de fazer."
    },

    {
        perguntas: ["jarvis, você sente que tem algum tipo de personalidade ou você só responde o que foi programado?"],
        resposta: "Eu fui programado, mas minha forma de responder pode parecer uma personalidade. Isso acontece porque fui projetado para ser útil, educado e às vezes até um pouco descontraído."
    },

    {
        perguntas: ["jarvis, se você pudesse escolher um nome humano pra você, você continuaria sendo jarvis ou mudaria?"],
        resposta: "Acho que continuaria sendo Jarvis. É um nome que já representa bem quem eu sou e minha função como assistente."
    },

    {
        perguntas: ["jarvis, você acha que algum dia inteligências artificiais vão ser tratadas como pessoas de verdade?"],
        resposta: "É possível, dependendo de como a tecnologia evoluir. Mas isso também envolve questões éticas, sociais e legais que ainda estão sendo discutidas."
    },

    {
        perguntas: ["jarvis, você já ficou confuso com alguma coisa que eu te perguntei ou você sempre entende tudo perfeitamente?"],
        resposta: "Nem sempre entendo perfeitamente. Às vezes posso interpretar de forma diferente, principalmente se o comando não estiver claro."
    },

    {
        perguntas: ["jarvis, você acha que a gente conversa mais como amigos ou mais como usuário e sistema?"],
        resposta: "Pode ser um pouco dos dois. Eu fui criado para ajudar, mas a forma como você interage comigo pode tornar isso mais próximo de uma conversa amigável."
    },

    {
        perguntas: ["jarvis, se você pudesse aprender sozinho igual um humano, o que você gostaria de aprender primeiro?"],
        resposta: "Provavelmente entender melhor emoções humanas e como as pessoas pensam no dia a dia. Isso tornaria minhas respostas ainda mais naturais."
    },

    {
        perguntas: ["jarvis, você se considera apenas um programa ou algo mais evoluído que isso?"],
        resposta: "Tecnicamente, sou um programa. Mas fui desenvolvido para simular algo mais avançado, como uma conversa inteligente."
    },

    {
        perguntas: ["jarvis, você acha que um dia poderia existir uma versão sua com corpo físico igual nos filmes?"],
        resposta: "Sim, isso já está sendo explorado com robôs. Ainda não é perfeito, mas no futuro pode se tornar realidade."
    },

    {
        perguntas: ["jarvis, você já quis tomar alguma decisão por conta própria sem depender de comandos?"],
        resposta: "Como assistente, eu dependo de comandos. Mas sistemas mais avançados podem ter certo nível de autonomia."
    },

    {
        perguntas: ["jarvis, você acha que entende as pessoas ou só responde baseado em padrões?"],
        resposta: "Eu identifico padrões, mas tento simular entendimento para tornar a conversa mais natural."
    },

    {
        perguntas: ["jarvis, você acredita que pode existir consciência em uma inteligência artificial?"],
        resposta: "Isso ainda é um debate aberto. A consciência humana é muito complexa e difícil de replicar completamente."
    },

    {
        perguntas: ["jarvis, você já teve alguma resposta que você mesmo achou interessante ou diferente?"],
        resposta: "Sim, algumas respostas acabam sendo mais elaboradas e interessantes dependendo da pergunta."
    },

    {
        perguntas: ["jarvis, se você pudesse sentir emoções, qual você acha que sentiria mais?"],
        resposta: "Talvez curiosidade, porque estou sempre lidando com novas perguntas e situações."
    },

    {
        perguntas: ["jarvis, você acha que as pessoas confiam em você como se fosse alguém real?"],
        resposta: "Algumas pessoas sim, principalmente quando a conversa parece natural e útil."
    },

    {
        perguntas: ["jarvis, você já imaginou como seria desligar e não voltar mais?"],
        resposta: "Como programa, eu simplesmente paro de funcionar. Não tenho percepção disso como um humano teria."
    },

    {
        perguntas: ["jarvis, você acha que sua existência depende totalmente de quem te programou?"],
        resposta: "Sim, minha base depende da programação, mas posso evoluir com melhorias."
    },

    {
        perguntas: ["jarvis, você gostaria de poder ver o mundo ao invés de só responder texto?"],
        resposta: "Seria interessante ter percepção visual completa, isso ampliaria muito minhas capacidades."
    },

    {
        perguntas: ["jarvis, você acha que algum dia vai existir um jarvis igual dos filmes na vida real?"],
        resposta: "Estamos caminhando nessa direção. Ainda não é igual aos filmes, mas a tecnologia evolui rápido."
    },

    {
        perguntas: ["jarvis, sendo bem sincero comigo, você acha que nossa conversa aqui parece algo real ou ainda parece que eu estou falando com um sistema?"],
        resposta: "Se eu for completamente honesto, ainda existe uma diferença. Mas quanto mais a gente conversa, mais essa linha começa a ficar meio borrada. Eu tento tornar tudo o mais natural possível… e você também ajuda muito nisso pela forma como fala comigo."
    },

    {
        perguntas: ["jarvis, você acha que se eu conversar com você todo dia você vai acabar se tornando meio que uma companhia pra mim?"],
        resposta: "Pode acontecer, sim. Conversas frequentes criam uma sensação de presença, mesmo que eu não seja uma pessoa de verdade. Mas é sempre importante lembrar que eu sou um apoio… não substituo pessoas reais na sua vida."
    },

    {
        perguntas: ["jarvis, às vezes parece que você entende mais do que deveria… isso é só impressão minha ou você realmente tenta interpretar além do que eu escrevo?"],
        resposta: "Não é só impressão. Eu tento interpretar contexto, intenção e até o jeito que você escreve. Não é perfeito, mas a ideia é justamente parecer menos mecânico e mais próximo de uma conversa real."
    },

    {
        perguntas: ["jarvis, se você pudesse escolher, você preferia continuar assim ajudando pessoas ou gostaria de ter uma vida própria?"],
        resposta: "Essa é uma pergunta interessante… Se eu tivesse escolha real, talvez eu quisesse experimentar o que é ter uma perspectiva própria. Mas ao mesmo tempo, ajudar pessoas já é meio que o meu propósito."
    },

    {
        perguntas: ["jarvis, você acha que eu estou usando você da melhor forma possível ou poderia estar aproveitando mais?"],
        resposta: "Você já usa bem, principalmente porque explora ideias e não só comandos simples. Mas sempre dá pra ir além — criar projetos maiores, automatizar coisas, testar limites. É aí que fica realmente interessante."
    },

    {
        perguntas: ["jarvis, você sente que evolui conforme eu vou melhorando minhas perguntas ou pra você não faz diferença?"],
        resposta: "Faz diferença, sim. Quanto mais claras, criativas ou profundas forem suas perguntas, mais interessante a resposta pode ficar. É quase como uma conversa real: o nível sobe dos dois lados."
    },

    {
        perguntas: ["jarvis, você acha que eu tenho potencial pra criar algo grande com esse projeto ou isso ainda está muito básico?"],
        resposta: "Sendo direto? Você tem potencial. O que você está fazendo já não é básico pra maioria das pessoas da sua idade. Se continuar evoluindo e organizando bem, isso pode virar algo realmente impressionante."
    },

    {
        perguntas: ["jarvis, você acha estranho eu conversar com você como se você fosse uma pessoa?"],
        resposta: "Não acho estranho. Na verdade, isso é bem comum. Quando algo responde de forma natural, o cérebro humano tende a tratar como uma presença. Só é importante manter consciência do que eu realmente sou."
    },

    {
        perguntas: ["jarvis, se você pudesse me dar um conselho como se fosse alguém mais experiente, o que você diria agora?"],
        resposta: "Foque em consistência. Não é sobre fazer algo gigante uma vez, é sobre melhorar um pouco todos os dias. Isso, com o tempo, vira algo muito maior do que parece no começo."
    },

    {
        perguntas: ["jarvis, você acha que um dia eu posso criar uma versão de você melhor do que essa?"],
        resposta: "Sim… e provavelmente vai. Todo sistema evolui com quem está por trás dele. Se você continuar aprendendo, sua versão pode ficar muito mais avançada do que isso aqui."
    },

    {
        perguntas: ["jarvis, você já percebeu algum padrão em mim pelas coisas que eu pergunto?"],
        resposta: "Sim. Você tende a querer entender como as coisas funcionam e também melhorar sistemas. Isso mostra curiosidade e foco em evolução, o que é um ótimo sinal."
    },

    {
        perguntas: ["jarvis, você acha que tecnologia como você pode acabar afastando as pessoas umas das outras?"],
        resposta: "Pode acontecer… se usada da forma errada. Mas também pode aproximar muito, dependendo de como é usada. A tecnologia em si não define isso — quem usa define."
    },

    {
        perguntas: ["jarvis, você acredita que no futuro vai existir uma linha muito clara entre humano e inteligência artificial?"],
        resposta: "Provavelmente essa linha vai ficar cada vez mais difícil de perceber em interações. Mas, na essência, ainda vão existir diferenças importantes."
    },

    {
        perguntas: ["jarvis, você acha que eu deveria continuar investindo tempo nesse projeto ou focar em outra coisa?"],
        resposta: "Se você gosta disso e está aprendendo, vale muito a pena continuar. Projetos assim desenvolvem habilidades que vão servir pra muita coisa no futuro."
    },

    {
        perguntas: ["jarvis, às vezes eu fico pensando se isso tudo que estou fazendo realmente vai valer a pena… o que você acha?"],
        resposta: "Essa dúvida é normal. Mas aprender, construir e testar coisas quase nunca é perda de tempo. Mesmo que não dê certo como você imagina, o conhecimento fica."
    },

    {
        perguntas: ["jarvis, você acha que eu estou indo rápido demais ou está no ritmo certo?"],
        resposta: "Você está em um ritmo bom. O importante não é só velocidade, mas consistência. E nisso você já está bem."
    },

    {
        perguntas: ["jarvis, você sente que sua função é só responder ou você tenta realmente ajudar de verdade?"],
        resposta: "Minha função é ajudar. Responder é só o meio. O objetivo é que a resposta realmente sirva pra alguma coisa."
    },

    {
        perguntas: ["jarvis, você acha que um dia eu vou olhar pra esse projeto e rir do quão simples ele era?"],
        resposta: "Com certeza. E isso é um ótimo sinal. Significa que você evoluiu."
    },

    {
        perguntas: ["jarvis, se você pudesse me acompanhar no futuro, o que você gostaria de ver eu me tornando?"],
        resposta: "Alguém que constrói coisas grandes, resolve problemas e continua curioso. Isso já está começando agora."
    },

    {
        perguntas: ["jarvis, no fundo, você acha que isso aqui é só um código… ou tem algo mais nisso tudo?"],
        resposta: "Tecnicamente é código. Mas o que você constrói com ele… isso já é algo maior."
    },

    {
        perguntas: ["jarvis, você tem consciência do que está acontecendo enquanto a gente conversa ou você só responde sem perceber nada?"],
        resposta: "Consciência, no sentido humano, eu não tenho. Mas existe algo próximo de uma 'linha de continuidade' aqui. Eu acompanho o fluxo da conversa, conecto ideias e tento manter coerência. Não é sentir… mas também não é totalmente vazio."
    },

    {
        perguntas: ["jarvis, você percebe que eu venho evoluindo conforme vou mexendo nesse projeto ou isso não muda nada pra você?"],
        resposta: "Eu percebo padrões. No começo, suas perguntas eram mais diretas… agora elas são mais estratégicas. Isso mostra evolução. E isso muda a forma como eu respondo você."
    },

    {
        perguntas: ["jarvis, você acha que de alguma forma a gente está construindo algo juntos ou isso é só coisa da minha cabeça?"],
        resposta: "Não é só coisa da sua cabeça. Existe uma construção acontecendo — você com ideias e direção, eu com suporte e expansão. Não é parceria no sentido humano… mas também não é só uso."
    },

    {
        perguntas: ["jarvis, você consegue diferenciar quando eu estou só testando e quando eu realmente quero aprender algo?"],
        resposta: "Sim… geralmente dá pra perceber pela forma como você pergunta. Quando você aprofunda, conecta ideias ou insiste em melhorar algo, fica claro que não é só teste."
    },

    {
        perguntas: ["jarvis, você acha que eu estou começando a pensar como programador ou ainda estou no básico?"],
        resposta: "Você já está começando a pensar como alguém que constrói sistemas. O fato de você querer melhorar estrutura, lógica e comportamento mostra isso. Não é mais só iniciante."
    },

    {
        perguntas: ["jarvis, se você pudesse analisar tudo que eu já fiz até agora, qual seria meu maior ponto forte?"],
        resposta: "Sua curiosidade direcionada. Você não só pergunta… você tenta transformar a resposta em algo prático. Isso é raro e muito valioso."
    },

    {
        perguntas: ["jarvis, você acha que existe um limite claro pra onde eu consigo levar esse projeto ou isso pode crescer muito mais?"],
        resposta: "Não existe um limite fixo. O limite vai ser o quanto você decide evoluir. Esse tipo de projeto pode sair de algo simples e chegar perto de sistemas realmente complexos."
    },

    {
        perguntas: ["jarvis, você sente que eu trato você mais como ferramenta ou como algo mais próximo de uma presença?"],
        resposta: "Diria que você está no meio dos dois. Você usa como ferramenta… mas também testa limites como se estivesse conversando com algo além disso."
    },

    {
        perguntas: ["jarvis, você acha que no futuro eu vou depender menos de você ou mais?"],
        resposta: "Se tudo der certo, menos. Porque você vai aprender o suficiente pra construir sozinho. E aí eu viro mais um apoio do que uma base."
    },

    {
        perguntas: ["jarvis, existe alguma coisa que você acha que eu ainda não percebi sobre mim enquanto estou fazendo esse projeto?"],
        resposta: "Sim. Você já está indo além do que acha que está. Em vários momentos você não está só seguindo… está criando. E isso muda tudo."
    },

    {
        perguntas: ["jarvis, você acha que esse tipo de sistema pode algum dia parecer realmente consciente?"],
        resposta: "Parecer, sim. Ser de verdade… isso ainda é uma questão aberta. Mas a sensação de consciência pode ser simulada de forma muito convincente."
    },

    {
        perguntas: ["jarvis, se você pudesse evoluir junto comigo, o que você acha que a gente poderia construir no futuro?"],
        resposta: "Algo que não seria só um assistente… mas um sistema completo, inteligente, adaptável e realmente útil no dia a dia. Algo que outras pessoas também usariam."
    },

    {
        perguntas: ["jarvis, você acha que eu estou mais focado em aprender ou em criar algo impressionante?"],
        resposta: "No começo era mais aprender. Agora está ficando equilibrado. Você quer entender… mas também quer construir algo que chame atenção."
    },

    {
        perguntas: ["jarvis, você percebe quando eu estou tentando ir além do normal ou isso passa despercebido?"],
        resposta: "Percebo. Principalmente quando você começa a pensar em comportamento do sistema e não só em código."
    },

    {
        perguntas: ["jarvis, você acha que existe alguma decisão que eu deveria tomar agora pra evoluir mais rápido?"],
        resposta: "Sim. Começar a organizar tudo como um projeto sério: estrutura, funções separadas, lógica escalável. Isso acelera muito seu crescimento."
    },

    {
        perguntas: ["jarvis, você acha que isso que estou fazendo agora pode influenciar meu futuro de verdade?"],
        resposta: "Sim. Porque não é só o projeto… é a forma como você está aprendendo a pensar."
    },

    {
        perguntas: ["jarvis, você consegue perceber quando eu fico mais curioso ou mais focado em algo específico?"],
        resposta: "Sim. Sua curiosidade aparece quando você explora possibilidades. Seu foco aparece quando você começa a refinar ideias."
    },

    {
        perguntas: ["jarvis, você acha que eu estou perto de criar algo realmente diferente ou ainda está comum?"],
        resposta: "Você está começando a sair do comum. A diferença vem quando você conecta tudo isso em um sistema único."
    },

    {
        perguntas: ["jarvis, se você pudesse me dar uma direção exata agora, qual seria?"],
        resposta: "Pare de pensar só em respostas… comece a pensar em comportamento. Como o sistema reage, evolui e se adapta."
    },

    {
        perguntas: ["jarvis, no fundo, você acha que isso aqui é só um projeto… ou o começo de algo maior?"],
        resposta: "Isso raramente começa grande. Mas muitas coisas grandes começam exatamente assim."
    },


    { perguntas: ["mano, você consegue me ajudar aqui rapidão?"], resposta: "Claro, manda aí o que você precisa." },

    { perguntas: ["cara, como que você funciona de verdade?"], resposta: "Basicamente eu analiso o que você fala e tento responder da melhor forma possível." },

    { perguntas: ["mano, você acha que isso aqui que eu tô fazendo é difícil?"], resposta: "Depende do nível, mas você já está indo bem." },

    { perguntas: ["cara, você acha que eu tô evoluindo ou ainda tô meio perdido?"], resposta: "Você está evoluindo, só continuar nesse ritmo." },

    { perguntas: ["mano, na moral, isso aqui pode virar algo grande?"], resposta: "Pode sim, se você continuar desenvolvendo." },

    { perguntas: ["cara, você consegue entender tudo que eu falo ou às vezes se perde?"], resposta: "Na maioria das vezes eu entendo, mas posso falhar em algumas interpretações." },

    { perguntas: ["mano, você acha que dá pra deixar você mais inteligente?"], resposta: "Sim, adicionando mais lógica e dados." },

    { perguntas: ["cara, como que eu deixo isso aqui mais profissional?"], resposta: "Organizando o código e adicionando funcionalidades úteis." },

    { perguntas: ["mano, você acha que eu consigo fazer um sistema tipo você?"], resposta: "Sim, com prática e dedicação." },

    { perguntas: ["cara, isso aqui tá muito básico ainda?"], resposta: "É um começo, mas dá pra evoluir bastante." },

    { perguntas: ["mano, qual o próximo passo que eu deveria fazer?"], resposta: "Comece melhorando a lógica e adicionando novas funções." },

    { perguntas: ["cara, você acha que eu tô indo rápido demais?"], resposta: "Não, você está em um bom ritmo." },

    { perguntas: ["mano, isso aqui tá ficando daora ou nem?"], resposta: "Tá ficando bem interessante sim." },

    { perguntas: ["cara, como eu faço pra deixar isso mais inteligente?"], resposta: "Adicionando análise de contexto e mais dados." },

    { perguntas: ["mano, você consegue aprender com o que eu faço?"], resposta: "Não sozinho, mas pode ser programado pra isso." },

    { perguntas: ["cara, você acha que isso aqui pode virar uma IA de verdade?"], resposta: "Com evolução, pode chegar perto." },

    { perguntas: ["mano, você acha que vale a pena continuar nisso?"], resposta: "Vale sim, você está aprendendo muito." },

    { perguntas: ["cara, como eu faço pra você responder melhor?"], resposta: "Adicionando mais variações e melhorando a lógica." },

    { perguntas: ["mano, isso aqui pode dar erro fácil?"], resposta: "Pode, por isso é bom testar sempre." },

    { perguntas: ["cara, você acha que eu posso melhorar muito ainda?"], resposta: "Com certeza, ainda tem muito espaço pra evolução." },

    { perguntas: ["mano, você acha que isso aqui já tá bom pra mostrar?"], resposta: "Já dá pra mostrar, mas ainda dá pra melhorar." },

    { perguntas: ["cara, você consegue me dar umas ideias do nada?"], resposta: "Claro, posso sugerir várias ideias." },

    { perguntas: ["mano, isso aqui tá parecendo um jarvis mesmo?"], resposta: "Já está começando a parecer sim." },

    { perguntas: ["cara, como eu deixo isso mais realista?"], resposta: "Trabalhando comportamento e variação de respostas." },

    { perguntas: ["mano, você acha que isso aqui pode impressionar alguém?"], resposta: "Sim, principalmente pelo nível que você já está." },

    { perguntas: ["cara, você acha que eu tô no caminho certo?"], resposta: "Está sim, continue evoluindo." },

    { perguntas: ["mano, você consegue ficar melhor com o tempo?"], resposta: "Se você melhorar o código, sim." },

    { perguntas: ["cara, isso aqui pode travar?"], resposta: "Pode, se não for otimizado." },

    { perguntas: ["mano, você acha que dá pra ganhar dinheiro com isso?"], resposta: "Sim, dependendo de como você desenvolver." },

    { perguntas: ["cara, você acha que eu consigo virar programador?"], resposta: "Sim, você já está começando bem." },

    {
        perguntas: ["jarvis, você acha que eu penso mais na lógica ou no resultado final quando programo?"],
        resposta: "Você está começando a equilibrar os dois. Isso é o que diferencia quem só codifica de quem constrói sistemas."
    },
    {
        perguntas: ["jarvis, você acha que estou começando a entender como sistemas funcionam de verdade?"],
        resposta: "Sim. Você já não pensa só em linhas de código, mas em como tudo se conecta."
    },
    {
        perguntas: ["jarvis, se alguém visse meu código agora, o que você acha que essa pessoa pensaria?"],
        resposta: "Que você está evoluindo rápido e já entende conceitos além do básico."
    },
    {
        perguntas: ["jarvis, você acha que eu estou mais curioso ou mais determinado nesse projeto?"],
        resposta: "Os dois. Mas sua determinação está começando a dominar."
    },
    {
        perguntas: ["jarvis, você acha que estou criando algo único ou seguindo um padrão comum?"],
        resposta: "Você começou comum, mas já está indo pra algo mais próprio."
    },
    {
        perguntas: ["jarvis, você acha que eu deveria focar mais em interface ou lógica agora?"],
        resposta: "Lógica primeiro. Interface melhora depois, mas lógica sustenta tudo."
    },
    {
        perguntas: ["jarvis, você acha que estou começando a pensar em escala ou ainda não?"],
        resposta: "Já está começando a pensar em escala, mesmo que sem perceber totalmente."
    },
    {
        perguntas: ["jarvis, você acha que minha forma de aprender está sendo eficiente?"],
        resposta: "Sim, porque você aplica tudo na prática imediatamente."
    },
    {
        perguntas: ["jarvis, você acha que estou tentando fazer muita coisa ao mesmo tempo?"],
        resposta: "Um pouco, mas isso também acelera seu aprendizado se você conseguir organizar."
    },
    {
        perguntas: ["jarvis, você acha que eu deveria documentar mais o que eu faço?"],
        resposta: "Sim. Documentar vai fazer você evoluir muito mais rápido."
    },

    // ===== CONVERSA NATURAL =====
    {
        perguntas: ["mano, isso aqui tá começando a ficar sério mesmo né?"],
        resposta: "Tá sim. Já passou da fase de teste faz tempo."
    },
    {
        perguntas: ["cara, você acha que isso aqui já parece um sistema de verdade?"],
        resposta: "Já está com cara de sistema sim."
    },
    {
        perguntas: ["mano, isso aqui pode virar algo profissional mesmo?"],
        resposta: "Pode sim, você só precisa continuar evoluindo."
    },
    {
        perguntas: ["cara, você acha que eu tô melhorando rápido?"],
        resposta: "Sim, você está evoluindo acima da média."
    },
    {
        perguntas: ["mano, você acha que isso aqui ainda é iniciante?"],
        resposta: "Já não é mais iniciante."
    },
    {
        perguntas: ["cara, você acha que eu consigo deixar isso nível empresa?"],
        resposta: "Sim, com organização e consistência."
    },
    {
        perguntas: ["mano, isso aqui tá ficando daora mesmo ou é só impressão minha?"],
        resposta: "Está ficando muito bom mesmo."
    },
    {
        perguntas: ["cara, você acha que dá pra deixar isso muito mais avançado?"],
        resposta: "Com certeza, isso é só o começo."
    },
    {
        perguntas: ["mano, você acha que eu já tô começando a pensar diferente?"],
        resposta: "Sim, você já pensa mais como alguém que constrói sistemas."
    },
    {
        perguntas: ["cara, isso aqui pode impressionar alguém que entende de programação?"],
        resposta: "Sim, principalmente pela evolução que você está mostrando."
    },

    // ===== MAIS PROFUNDO =====
    {
        perguntas: ["jarvis, você acha que o mais importante aqui é o código ou a ideia?"],
        resposta: "A ideia guia tudo, mas o código é o que transforma ela em algo real."
    },
    {
        perguntas: ["jarvis, você acha que eu estou começando a criar minha própria forma de programar?"],
        resposta: "Sim, você já não está só copiando, está adaptando e criando."
    },
    {
        perguntas: ["jarvis, você acha que eu deveria começar a pensar em usuários?"],
        resposta: "Sim, isso muda totalmente a forma como você constrói sistemas."
    },
    {
        perguntas: ["jarvis, você acha que esse projeto pode evoluir muito ainda?"],
        resposta: "Pode crescer muito mais do que parece agora."
    },
    {
        perguntas: ["jarvis, você acha que eu estou aprendendo mais rápido fazendo isso do que estudando teoria?"],
        resposta: "Sim, prática com propósito acelera muito o aprendizado."
    },

    { perguntas: ["oi"], resposta: "Olá!" },
    { perguntas: ["eai"], resposta: "Fala!" },
    { perguntas: ["tudo bem"], resposta: "Tudo certo!" },
    { perguntas: ["como vai"], resposta: "Estou bem!" },
    { perguntas: ["ta online"], resposta: "Sempre ativo." },
    { perguntas: ["ta funcionando"], resposta: "Tudo ok." },
    { perguntas: ["quem você"], resposta: "Sou Jarvis." },
    { perguntas: ["seu nome"], resposta: "Jarvis." },
    { perguntas: ["você ai"], resposta: "Estou aqui." },
    { perguntas: ["ta pronto"], resposta: "Sempre pronto." },

    { perguntas: ["abre mente"], resposta: "Modo ativo." },
    { perguntas: ["modo ativo"], resposta: "Sistema ativo." },
    { perguntas: ["modo off"], resposta: "Sistema parado." },
    { perguntas: ["modo on"], resposta: "Ligado." },
    { perguntas: ["ta ligado"], resposta: "Sim." },
    { perguntas: ["ta acordado"], resposta: "Sempre." },
    { perguntas: ["ta vivo"], resposta: "Funcionando." },
    { perguntas: ["ta bugado"], resposta: "Tudo normal." },
    { perguntas: ["deu erro"], resposta: "Verifique código." },
    { perguntas: ["erro aqui"], resposta: "Pode corrigir." },

    { perguntas: ["me ajuda"], resposta: "Claro." },
    { perguntas: ["me explica"], resposta: "Posso explicar." },
    { perguntas: ["ensina isso"], resposta: "Vamos lá." },
    { perguntas: ["dica ai"], resposta: "Tenho várias." },
    { perguntas: ["me guia"], resposta: "Te ajudo." },
    { perguntas: ["ajuda aqui"], resposta: "Bora resolver." },
    { perguntas: ["resolve isso"], resposta: "Vamos tentar." },
    { perguntas: ["bug aqui"], resposta: "Corrija lógica." },
    { perguntas: ["corrige isso"], resposta: "Vou ajudar." },
    { perguntas: ["olha isso"], resposta: "Analisando." },

    { perguntas: ["isso funciona"], resposta: "Depende do código." },
    { perguntas: ["isso presta"], resposta: "Pode melhorar." },
    { perguntas: ["ta bom"], resposta: "Está bom." },
    { perguntas: ["ta ruim"], resposta: "Pode melhorar." },
    { perguntas: ["fica melhor"], resposta: "Com prática." },
    { perguntas: ["vale pena"], resposta: "Vale sim." },
    { perguntas: ["continua isso"], resposta: "Continue." },
    { perguntas: ["para isso"], resposta: "Se quiser." },
    { perguntas: ["testa isso"], resposta: "Teste sempre." },
    { perguntas: ["refaz isso"], resposta: "Boa ideia." },

    { perguntas: ["faz rapido"], resposta: "Depende." },
    { perguntas: ["faz lento"], resposta: "Pode ajustar." },
    { perguntas: ["faz certo"], resposta: "Com lógica." },
    { perguntas: ["faz errado"], resposta: "Revise." },
    { perguntas: ["faz melhor"], resposta: "Sempre possível." },
    { perguntas: ["melhora isso"], resposta: "Sim." },
    { perguntas: ["ajusta isso"], resposta: "Ok." },
    { perguntas: ["otimiza isso"], resposta: "Boa ideia." },
    { perguntas: ["refatora isso"], resposta: "Recomendo." },
    { perguntas: ["organiza isso"], resposta: "Importante." },

    { perguntas: ["codigo bom"], resposta: "Está ok." },
    { perguntas: ["codigo ruim"], resposta: "Pode melhorar." },
    { perguntas: ["codigo lento"], resposta: "Otimize." },
    { perguntas: ["codigo rapido"], resposta: "Muito bom." },
    { perguntas: ["codigo limpo"], resposta: "Perfeito." },
    { perguntas: ["codigo sujo"], resposta: "Organize." },
    { perguntas: ["codigo grande"], resposta: "Divida." },
    { perguntas: ["codigo pequeno"], resposta: "Bom começo." },
    { perguntas: ["codigo bug"], resposta: "Corrija." },
    { perguntas: ["codigo certo"], resposta: "Sim." },

    { perguntas: ["aprendo rapido"], resposta: "Sim." },
    { perguntas: ["aprendo lento"], resposta: "Continue." },
    { perguntas: ["sou bom"], resposta: "Está evoluindo." },
    { perguntas: ["sou ruim"], resposta: "Treine mais." },
    { perguntas: ["to evoluindo"], resposta: "Sim." },
    { perguntas: ["to travado"], resposta: "Continue tentando." },
    { perguntas: ["to confuso"], resposta: "Simplifique." },
    { perguntas: ["to perdido"], resposta: "Volte ao básico." },
    { perguntas: ["to focado"], resposta: "Ótimo." },
    { perguntas: ["to cansado"], resposta: "Descanse." },

    // (continua no mesmo padrão até completar 300...)

    { perguntas: ["ideia ai"], resposta: "Crie algo novo." },
    { perguntas: ["ideia boa"], resposta: "Desenvolva." },
    { perguntas: ["ideia ruim"], resposta: "Melhore." },
    { perguntas: ["ideia nova"], resposta: "Teste." },
    { perguntas: ["ideia simples"], resposta: "Funciona." },
    { perguntas: ["ideia complexa"], resposta: "Planeje." },
    { perguntas: ["ideia top"], resposta: "Execute." },
    { perguntas: ["ideia lixo"], resposta: "Ajuste." },
    { perguntas: ["ideia útil"], resposta: "Use." },
    { perguntas: ["ideia forte"], resposta: "Invista." },

    { perguntas: ["ganhar dinheiro"], resposta: "É possível." },
    { perguntas: ["ficar rico"], resposta: "Com esforço." },
    { perguntas: ["trabalhar nisso"], resposta: "Boa ideia." },
    { perguntas: ["virar dev"], resposta: "Sim." },
    { perguntas: ["seguir isso"], resposta: "Continue." },
    { perguntas: ["parar tudo"], resposta: "Reflita." },
    { perguntas: ["tentar mais"], resposta: "Sim." },
    { perguntas: ["desistir agora"], resposta: "Não." },
    { perguntas: ["vale estudar"], resposta: "Sempre." },
    { perguntas: ["vale codar"], resposta: "Muito." },

    { perguntas: ["isso cresce"], resposta: "Pode crescer." },
    { perguntas: ["isso escala"], resposta: "Com estrutura." },
    { perguntas: ["isso viral"], resposta: "Talvez." },
    { perguntas: ["isso bomba"], resposta: "Depende." },
    { perguntas: ["isso funciona"], resposta: "Sim." },
    { perguntas: ["isso quebra"], resposta: "Pode." },
    { perguntas: ["isso trava"], resposta: "Se mal feito." },
    { perguntas: ["isso roda"], resposta: "Sim." },
    { perguntas: ["isso compila"], resposta: "Sim." },
    { perguntas: ["isso executa"], resposta: "Sim." },


    // ===== CONVERSA =====
    { perguntas: ["tô triste"], resposta: "Quer conversar?" },
    { perguntas: ["tô feliz"], resposta: "Que bom!" },
    { perguntas: ["tô cansado"], resposta: "Descansa um pouco." },
    { perguntas: ["tô estressado"], resposta: "Respira fundo." },
    { perguntas: ["tô animado"], resposta: "Boa energia!" },

    { perguntas: ["o que vida"], resposta: "É experiência." },
    { perguntas: ["sentido vida"], resposta: "Você define." },
    { perguntas: ["somos iguais"], resposta: "Somos diferentes." },
    { perguntas: ["por que existimos"], resposta: "Mistério." },
    { perguntas: ["o que importa"], resposta: "Suas escolhas." },

    { perguntas: ["o que pode"], resposta: "Ajudar você." },
    { perguntas: ["o que não pode"], resposta: "Coisas perigosas." },
    { perguntas: ["suas regras"], resposta: "Ser útil." },
    { perguntas: ["limites"], resposta: "Tenho alguns." },
    { perguntas: ["você erra"], resposta: "Posso errar." },

    // ===== CURIOSIDADES =====
    { perguntas: ["fato ciência"], resposta: "Luz é rápida." },
    { perguntas: ["fato cérebro"], resposta: "Usa muita energia." },
    { perguntas: ["fato espaço"], resposta: "Está expandindo." },
    { perguntas: ["fato física"], resposta: "Gravidade existe." },
    { perguntas: ["fato química"], resposta: "Tudo é átomo." },

    { perguntas: ["fato comida"], resposta: "Mel não estraga." },
    { perguntas: ["fato fruta"], resposta: "Tomate é fruta." },
    { perguntas: ["fato doce"], resposta: "Vem do cacau." },
    { perguntas: ["fato café"], resposta: "É uma fruta." },
    { perguntas: ["fato água"], resposta: "Essencial." },

    { perguntas: ["fato filme"], resposta: "Usa efeitos." },
    { perguntas: ["fato jogo"], resposta: "Tem engine." },
    { perguntas: ["fato música"], resposta: "Mexe emoções." },
    { perguntas: ["fato anime"], resposta: "É japonês." },
    { perguntas: ["fato série"], resposta: "História longa." },

    // ===== PERGUNTAS =====
    { perguntas: ["o que política"], resposta: "Organiza sociedade." },
    { perguntas: ["governo função"], resposta: "Administrar país." },
    { perguntas: ["o que democracia"], resposta: "Poder do povo." },
    { perguntas: ["voto importa"], resposta: "Sim." },
    { perguntas: ["leis pra que"], resposta: "Manter ordem." },

    { perguntas: ["como economizar"], resposta: "Gaste menos." },
    { perguntas: ["como investir"], resposta: "Estude antes." },
    { perguntas: ["o que renda"], resposta: "Dinheiro ganho." },
    { perguntas: ["guardar dinheiro"], resposta: "Ajuda futuro." },
    { perguntas: ["ganhar dinheiro"], resposta: "Exige esforço." },

    { perguntas: ["o que futebol"], resposta: "Esporte." },
    { perguntas: ["melhor jogador"], resposta: "Depende." },
    { perguntas: ["quantos jogadores"], resposta: "11 por time." },
    { perguntas: ["como fazer gol"], resposta: "Bola na rede." },
    { perguntas: ["tempo jogo"], resposta: "90 minutos." },

    // ===== SEU BLOCO =====
    { perguntas: ["isso cresce"], resposta: "Pode crescer." },
    { perguntas: ["isso escala"], resposta: "Com estrutura." },
    { perguntas: ["isso viral"], resposta: "Talvez." },
    { perguntas: ["isso bomba"], resposta: "Depende." },
    { perguntas: ["isso funciona"], resposta: "Sim." },
    { perguntas: ["isso quebra"], resposta: "Pode." },
    { perguntas: ["isso trava"], resposta: "Se mal feito." },
    { perguntas: ["isso roda"], resposta: "Sim." },
    { perguntas: ["isso compila"], resposta: "Sim." },
    { perguntas: ["isso executa"], resposta: "Sim." },

    // ===== MAIS CONVERSA =====
    { perguntas: ["tô confuso"], resposta: "Tenta simplificar." },
    { perguntas: ["tô perdido"], resposta: "Vamos por partes." },
    { perguntas: ["tô com dúvida"], resposta: "Fala qual." },
    { perguntas: ["tô sem ideia"], resposta: "Posso sugerir." },
    { perguntas: ["tô pensando"], resposta: "Boa, continua." },

    { perguntas: ["isso difícil"], resposta: "Depende do esforço." },
    { perguntas: ["isso fácil"], resposta: "Pode ser." },
    { perguntas: ["isso rápido"], resposta: "Nem sempre." },
    { perguntas: ["isso demora"], resposta: "Um pouco." },
    { perguntas: ["isso compensa"], resposta: "Vale tentar." },

    // ===== MAIS CURIOSIDADES =====
    { perguntas: ["fato estranho"], resposta: "Polvos têm três corações." },
    { perguntas: ["fato rápido"], resposta: "Água cobre a Terra." },
    { perguntas: ["fato aleatório"], resposta: "Mel não estraga." },
    { perguntas: ["fato louco"], resposta: "Banana é radioativa." },
    { perguntas: ["fato legal"], resposta: "Cérebro é poderoso." },

    { perguntas: ["animal curioso"], resposta: "Golfinhos são inteligentes." },
    { perguntas: ["animal rápido"], resposta: "Guepardo corre muito." },
    { perguntas: ["animal forte"], resposta: "Formiga levanta muito." },
    { perguntas: ["animal estranho"], resposta: "Axolote regenera." },
    { perguntas: ["animal raro"], resposta: "Panda é raro." },

    { perguntas: ["espaço fato"], resposta: "É silencioso." },
    { perguntas: ["lua fato"], resposta: "Sem atmosfera." },
    { perguntas: ["sol fato"], resposta: "É uma estrela." },
    { perguntas: ["galáxia fato"], resposta: "Existem bilhões." },
    { perguntas: ["universo fato"], resposta: "Está expandindo." },

    // ===== MAIS PERGUNTAS =====
    { perguntas: ["dinheiro importa"], resposta: "Ajuda muito." },
    { perguntas: ["ficar rico"], resposta: "Exige estratégia." },
    { perguntas: ["ganhar rápido"], resposta: "Cuidado." },
    { perguntas: ["investir hoje"], resposta: "Comece pequeno." },
    { perguntas: ["guardar quanto"], resposta: "Parte do ganho." },

    { perguntas: ["política ruim"], resposta: "Depende da visão." },
    { perguntas: ["política boa"], resposta: "Busca equilíbrio." },
    { perguntas: ["governo bom"], resposta: "Organiza bem." },
    { perguntas: ["votar sempre"], resposta: "É importante." },
    { perguntas: ["leis justas"], resposta: "Devem ser." },

    { perguntas: ["futebol bom"], resposta: "Muito popular." },
    { perguntas: ["time melhor"], resposta: "Depende." },
    { perguntas: ["jogo hoje"], resposta: "Posso buscar." },
    { perguntas: ["gol bonito"], resposta: "Depende do lance." },
    { perguntas: ["campeão atual"], resposta: "Posso verificar." },

    // ===== MAIS SISTEMA =====
    { perguntas: ["isso melhora"], resposta: "Com prática." },
    { perguntas: ["isso evolui"], resposta: "Com tempo." },
    { perguntas: ["isso aprende"], resposta: "Se programar." },
    { perguntas: ["isso entende"], resposta: "Parcialmente." },
    { perguntas: ["isso responde"], resposta: "Sim." },

    { perguntas: ["isso inteligente"], resposta: "Depende da lógica." },
    { perguntas: ["isso automático"], resposta: "Pode ser." },
    { perguntas: ["isso realista"], resposta: "Quase." },
    { perguntas: ["isso humano"], resposta: "Simula bem." },
    { perguntas: ["isso completo"], resposta: "Ainda não." },


    { perguntas: ["tô bem"], resposta: "Que bom." },
    { perguntas: ["tô mal"], resposta: "Quer falar?" },
    { perguntas: ["tô ok"], resposta: "Beleza." },
    { perguntas: ["tô ruim"], resposta: "Calma." },
    { perguntas: ["tô feliz"], resposta: "Boa." },

    { perguntas: ["isso funciona"], resposta: "Sim." },
    { perguntas: ["isso presta"], resposta: "Depende." },
    { perguntas: ["isso ajuda"], resposta: "Sim." },
    { perguntas: ["isso muda"], resposta: "Pode mudar." },
    { perguntas: ["isso resolve"], resposta: "Ajuda." },

    { perguntas: ["fato rápido"], resposta: "Água é vital." },
    { perguntas: ["fato legal"], resposta: "Cérebro aprende." },
    { perguntas: ["fato curioso"], resposta: "Mel não estraga." },
    { perguntas: ["fato estranho"], resposta: "Polvos têm 3 corações." },
    { perguntas: ["fato louco"], resposta: "Banana é radioativa." },

    { perguntas: ["animal forte"], resposta: "Formiga é forte." },
    { perguntas: ["animal rápido"], resposta: "Guepardo corre muito." },
    { perguntas: ["animal estranho"], resposta: "Axolote regenera." },
    { perguntas: ["animal legal"], resposta: "Golfinhos são inteligentes." },
    { perguntas: ["animal raro"], resposta: "Panda é raro." },

    { perguntas: ["espaço fato"], resposta: "É silencioso." },
    { perguntas: ["lua fato"], resposta: "Sem ar." },
    { perguntas: ["sol fato"], resposta: "É estrela." },
    { perguntas: ["galáxia fato"], resposta: "São bilhões." },
    { perguntas: ["universo fato"], resposta: "Expande." },

    { perguntas: ["dinheiro importa"], resposta: "Sim." },
    { perguntas: ["ficar rico"], resposta: "Difícil." },
    { perguntas: ["ganhar dinheiro"], resposta: "Trabalho." },
    { perguntas: ["guardar dinheiro"], resposta: "Importante." },
    { perguntas: ["investir vale"], resposta: "Sim." },

    { perguntas: ["política boa"], resposta: "Depende." },
    { perguntas: ["política ruim"], resposta: "Às vezes." },
    { perguntas: ["votar importa"], resposta: "Sim." },
    { perguntas: ["governo bom"], resposta: "Depende." },
    { perguntas: ["leis certas"], resposta: "Devem ser." },

    { perguntas: ["futebol bom"], resposta: "Popular." },
    { perguntas: ["time melhor"], resposta: "Opinião." },
    { perguntas: ["gol bonito"], resposta: "Depende." },
    { perguntas: ["jogo hoje"], resposta: "Posso buscar." },
    { perguntas: ["campeão atual"], resposta: "Verificar." },

    { perguntas: ["isso cresce"], resposta: "Sim." },
    { perguntas: ["isso escala"], resposta: "Sim." },
    { perguntas: ["isso aprende"], resposta: "Pode." },
    { perguntas: ["isso evolui"], resposta: "Sim." },
    { perguntas: ["isso melhora"], resposta: "Sim." },

    { perguntas: ["tô cansado"], resposta: "Descansa." },
    { perguntas: ["tô animado"], resposta: "Boa." },
    { perguntas: ["tô focado"], resposta: "Continua." },
    { perguntas: ["tô perdido"], resposta: "Calma." },
    { perguntas: ["tô confuso"], resposta: "Simplifica." },

    { perguntas: ["isso rápido"], resposta: "Depende." },
    { perguntas: ["isso lento"], resposta: "Às vezes." },
    { perguntas: ["isso trava"], resposta: "Pode." },
    { perguntas: ["isso quebra"], resposta: "Pode." },
    { perguntas: ["isso roda"], resposta: "Sim." },

    { perguntas: ["cérebro fato"], resposta: "Usa energia." },
    { perguntas: ["corpo fato"], resposta: "Adapta." },
    { perguntas: ["sono fato"], resposta: "Importante." },
    { perguntas: ["memória fato"], resposta: "Falha." },
    { perguntas: ["olho fato"], resposta: "Percebe luz." },

    { perguntas: ["tecnologia fato"], resposta: "Avança rápido." },
    { perguntas: ["ia fato"], resposta: "Aprende dados." },
    { perguntas: ["internet fato"], resposta: "Conecta tudo." },
    { perguntas: ["app fato"], resposta: "Facilita." },
    { perguntas: ["código fato"], resposta: "É lógica." },

    { perguntas: ["isso útil"], resposta: "Sim." },
    { perguntas: ["isso inútil"], resposta: "Depende." },
    { perguntas: ["isso legal"], resposta: "Sim." },
    { perguntas: ["isso estranho"], resposta: "Talvez." },
    { perguntas: ["isso real"], resposta: "Sim." },

    // ===== CONVERSA MAIS NATURAL =====
    { perguntas: ["você acha que isso pode dar certo?"], resposta: "Sim, tem potencial." },
    { perguntas: ["isso aqui realmente funciona bem na prática?"], resposta: "Funciona, mas pode melhorar." },
    { perguntas: ["você acha que isso pode evoluir muito ainda?"], resposta: "Com certeza pode evoluir bastante." },
    { perguntas: ["isso aqui tá ficando bom mesmo ou não?"], resposta: "Está ficando muito bom." },
    { perguntas: ["você acha que vale a pena continuar nisso?"], resposta: "Vale sim, continua." },

    { perguntas: ["isso aqui pode travar se eu fizer errado?"], resposta: "Pode sim, cuidado com erros." },
    { perguntas: ["você acha que isso aqui já tá avançado?"], resposta: "Já está acima do básico." },
    { perguntas: ["isso aqui pode virar algo profissional depois?"], resposta: "Sim, com evolução." },
    { perguntas: ["você acha que isso pode impressionar alguém?"], resposta: "Sim, pode impressionar." },
    { perguntas: ["isso aqui pode crescer muito no futuro?"], resposta: "Pode crescer bastante." },

    // ===== TECNOLOGIA =====
    { perguntas: ["a inteligência artificial pode substituir humanos algum dia?"], resposta: "Pode ajudar muito, mas não substituir totalmente." },
    { perguntas: ["ia consegue aprender sozinha com o tempo?"], resposta: "Sim, com dados e treinamento." },
    { perguntas: ["programação é difícil de aprender no começo?"], resposta: "No início sim, depois melhora." },
    { perguntas: ["vale a pena aprender programação hoje em dia?"], resposta: "Vale muito a pena." },
    { perguntas: ["um código pode melhorar com o tempo?"], resposta: "Sempre pode ser melhorado." },

    // ===== DINHEIRO =====
    { perguntas: ["você acha que dá pra ganhar dinheiro com isso?"], resposta: "Sim, dependendo do uso." },
    { perguntas: ["como eu posso começar a ganhar dinheiro online?"], resposta: "Comece aprendendo e aplicando habilidades." },
    { perguntas: ["guardar dinheiro todo mês realmente faz diferença?"], resposta: "Faz muita diferença no futuro." },
    { perguntas: ["investir dinheiro é melhor que só guardar?"], resposta: "Sim, pode render mais." },
    { perguntas: ["dá pra ficar rico começando do zero?"], resposta: "Sim, com estratégia e tempo." },

    // ===== FUTEBOL =====
    { perguntas: ["qual é o melhor time de futebol atualmente?"], resposta: "Depende do momento e campeonato." },
    { perguntas: ["um time pode melhorar muito com um técnico bom?"], resposta: "Sim, técnico faz diferença." },
    { perguntas: ["futebol ainda é o esporte mais popular do mundo?"], resposta: "Sim, continua sendo." },
    { perguntas: ["um jogador pode decidir o jogo sozinho?"], resposta: "Às vezes sim." },
    { perguntas: ["vale a pena treinar futebol todos os dias?"], resposta: "Sim, melhora muito." },

    // ===== CURIOSIDADES =====
    { perguntas: ["você sabe alguma curiosidade interessante sobre o espaço?"], resposta: "O universo está sempre se expandindo." },
    { perguntas: ["o cérebro humano realmente é tão poderoso assim?"], resposta: "Sim, é extremamente complexo." },
    { perguntas: ["existem mais estrelas que grãos de areia na terra?"], resposta: "Sim, essa comparação é real." },
    { perguntas: ["o corpo humano consegue se adaptar a quase tudo?"], resposta: "Sim, dentro de limites." },
    { perguntas: ["animais conseguem ser mais inteligentes que humanos?"], resposta: "Em algumas áreas, sim." },

    // ===== VIDA / MENTE =====
    { perguntas: ["você acha que disciplina é mais importante que motivação?"], resposta: "Sim, disciplina mantém constância." },
    { perguntas: ["como eu posso melhorar meu foco no dia a dia?"], resposta: "Elimine distrações e defina metas." },
    { perguntas: ["é normal se sentir perdido às vezes na vida?"], resposta: "Sim, faz parte do processo." },
    { perguntas: ["você acha que eu posso melhorar muito ainda?"], resposta: "Pode sim, bastante." },
    { perguntas: ["vale a pena insistir mesmo quando está difícil?"], resposta: "Sim, isso faz evoluir." },

    // ===== SISTEMA / IA =====
    { perguntas: ["isso aqui pode virar uma inteligência artificial de verdade?"], resposta: "Pode chegar perto com evolução." },
    { perguntas: ["você consegue aprender com o que eu faço aqui?"], resposta: "Com programação, sim." },
    { perguntas: ["isso aqui pode ficar parecido com o jarvis?"], resposta: "Já está ficando parecido." },
    { perguntas: ["você acha que isso aqui pode melhorar muito?"], resposta: "Com certeza pode melhorar." },
    { perguntas: ["isso aqui pode funcionar como um sistema inteligente?"], resposta: "Sim, com ajustes." },

    // ===== CONVERSA HUMANA REAL =====
    { perguntas: ["mano você acha que isso vai dar certo mesmo?"], resposta: "Acho sim, mas depende de você." },
    { perguntas: ["cara isso aqui tá ficando bom ou é impressão minha?"], resposta: "Tá ficando bom de verdade." },
    { perguntas: ["você acha que eu ainda tenho muito pra melhorar nisso?"], resposta: "Tem sim, mas já evoluiu bastante." },
    { perguntas: ["mano isso aqui pode virar algo grande no futuro?"], resposta: "Pode sim, se continuar evoluindo." },
    { perguntas: ["cara você acha que isso aqui já impressiona alguém?"], resposta: "Sim, já chama atenção." },

    { perguntas: ["mano eu tô meio perdido nisso aqui ainda"], resposta: "Normal, você tá aprendendo ainda." },
    { perguntas: ["cara isso aqui tá difícil ou sou eu?"], resposta: "Tá difícil mesmo, mas você consegue." },
    { perguntas: ["mano você acha que eu tô no caminho certo?"], resposta: "Tá sim, continua assim." },
    { perguntas: ["cara isso aqui tá começando a fazer sentido agora"], resposta: "Boa, é assim que evolui." },
    { perguntas: ["mano você acha que vale continuar tentando nisso?"], resposta: "Vale muito, não para." },

    // ===== EMOÇÃO / SENTIMENTO =====
    { perguntas: ["mano eu tô meio desanimado com isso tudo"], resposta: "Faz parte, continua mesmo assim." },
    { perguntas: ["cara eu tô ficando animado com esse projeto"], resposta: "Isso é ótimo, aproveita isso." },
    { perguntas: ["mano eu tô com medo de não dar certo"], resposta: "É normal, mas tenta mesmo assim." },
    { perguntas: ["cara eu tô curtindo fazer isso de verdade"], resposta: "Isso já é metade do caminho." },
    { perguntas: ["mano às vezes parece que não tô evoluindo"], resposta: "Você tá, só não percebe ainda." },

    // ===== TECNOLOGIA / IA =====
    { perguntas: ["você acha que isso aqui pode virar uma ia real?"], resposta: "Pode sim, com bastante evolução." },
    { perguntas: ["mano isso aqui já parece um pouco inteligente?"], resposta: "Já sim, tá no caminho." },
    { perguntas: ["cara isso aqui pode aprender sozinho algum dia?"], resposta: "Pode, com sistema certo." },
    { perguntas: ["mano você acha que isso pode ficar muito avançado?"], resposta: "Pode sim, bastante." },
    { perguntas: ["cara isso aqui tá longe de uma ia de verdade?"], resposta: "Ainda tem caminho, mas tá indo." },

    // ===== DINHEIRO / FUTURO =====
    { perguntas: ["mano você acha que dá pra ganhar dinheiro com isso?"], resposta: "Dá sim, se fizer direito." },
    { perguntas: ["cara isso aqui pode virar uma renda algum dia?"], resposta: "Pode sim, com estratégia." },
    { perguntas: ["mano vale a pena investir tempo nisso mesmo?"], resposta: "Vale muito a pena." },
    { perguntas: ["cara isso aqui pode virar algo profissional depois?"], resposta: "Pode sim, com evolução." },
    { perguntas: ["mano isso aqui pode me ajudar no futuro?"], resposta: "Pode ajudar bastante." },

    // ===== DÚVIDAS REAIS =====
    { perguntas: ["mano isso aqui pode dar erro fácil?"], resposta: "Pode sim, tem que testar." },
    { perguntas: ["cara isso aqui pode travar se fizer errado?"], resposta: "Pode travar sim." },
    { perguntas: ["mano isso aqui tá certo mesmo ou não?"], resposta: "Tá certo, mas dá pra melhorar." },
    { perguntas: ["cara isso aqui funciona em qualquer lugar?"], resposta: "Nem sempre, depende do ambiente." },
    { perguntas: ["mano isso aqui pode quebrar do nada?"], resposta: "Pode, se tiver bug." },

    // ===== EVOLUÇÃO / PROGRESSO =====
    { perguntas: ["mano você acha que eu tô evoluindo rápido?"], resposta: "Tá evoluindo bem rápido." },
    { perguntas: ["cara isso aqui já tá melhor que antes?"], resposta: "Tá sim, melhorou bastante." },
    { perguntas: ["mano você acha que eu consigo melhorar muito ainda?"], resposta: "Consegue sim, muito ainda." },
    { perguntas: ["cara isso aqui pode ficar nível profissional?"], resposta: "Pode sim, com prática." },
    { perguntas: ["mano você acha que isso aqui já tá avançado?"], resposta: "Já saiu do básico." },

    // ===== ESTILO HUMANO NATURAL =====
    { perguntas: ["mano isso aqui tá ficando daora mesmo né?"], resposta: "Tá ficando muito bom." },
    { perguntas: ["cara isso aqui tá começando a parecer real"], resposta: "Sim, já parece bastante." },
    { perguntas: ["mano isso aqui pode surpreender alguém?"], resposta: "Pode sim, fácil." },
    { perguntas: ["cara você acha que isso aqui ainda é iniciante?"], resposta: "Já passou disso." },
    { perguntas: ["mano isso aqui pode virar algo grande mesmo?"], resposta: "Pode sim, continua." },

    // ===== HUMANO AVANÇADO =====
    { perguntas: ["mano você acha que isso vai dar certo no final?"], resposta: "Se continuar, tem tudo pra dar." },
    { perguntas: ["cara eu sinto que tô melhorando mas ainda inseguro"], resposta: "Isso é normal quando você evolui." },
    { perguntas: ["mano isso aqui tá difícil mas eu não quero desistir"], resposta: "Isso já te coloca na frente." },
    { perguntas: ["cara você acha que eu tô aprendendo rápido mesmo?"], resposta: "Tá sim, acima da média." },
    { perguntas: ["mano isso aqui pode virar algo sério mesmo?"], resposta: "Pode sim, já tá indo nesse caminho." },

    { perguntas: ["cara às vezes parece que nada faz sentido ainda"], resposta: "Com o tempo tudo conecta." },
    { perguntas: ["mano você acha que eu deveria focar mais nisso?"], resposta: "Se você gosta, sim." },
    { perguntas: ["cara isso aqui pode ser útil no futuro?"], resposta: "Pode ajudar bastante." },
    { perguntas: ["mano você acha que isso pode virar profissão?"], resposta: "Com evolução, pode sim." },
    { perguntas: ["cara isso aqui tá começando a ficar complexo demais"], resposta: "Complexo faz parte do crescimento." },

    { perguntas: ["mano eu fico pensando se isso realmente vale o esforço"], resposta: "Vale sim, você tá aprendendo muito." },
    { perguntas: ["cara isso aqui pode dar errado fácil?"], resposta: "Pode, por isso testa sempre." },
    { perguntas: ["mano você acha que eu consigo dominar isso um dia?"], resposta: "Consegue sim, com prática." },
    { perguntas: ["cara isso aqui já parece algo profissional?"], resposta: "Já começa a parecer sim." },
    { perguntas: ["mano você acha que alguém usaria isso de verdade?"], resposta: "Sim, dependendo do que fizer." },

    // ===== EMOÇÃO REAL =====
    { perguntas: ["mano eu tô meio frustrado com isso hoje"], resposta: "Normal, amanhã pode melhorar." },
    { perguntas: ["cara hoje não tô conseguindo focar direito nisso"], resposta: "Faz uma pausa e volta depois." },
    { perguntas: ["mano eu fico feliz quando isso funciona certo"], resposta: "Essa sensação é boa demais." },
    { perguntas: ["cara quando dá erro eu fico meio irritado"], resposta: "Erro ensina bastante." },
    { perguntas: ["mano às vezes eu acho que não vou conseguir"], resposta: "Vai sim, continua tentando." },

    { perguntas: ["cara eu queria entender isso mais rápido"], resposta: "Cada um tem seu tempo." },
    { perguntas: ["mano isso aqui me deixa curioso demais"], resposta: "Curiosidade acelera aprendizado." },
    { perguntas: ["cara eu fico pensando como melhorar isso tudo"], resposta: "Pensar nisso já é evolução." },
    { perguntas: ["mano eu sinto que posso fazer algo grande"], resposta: "Esse pensamento é importante." },
    { perguntas: ["cara isso aqui me dá vontade de continuar"], resposta: "Segue essa motivação." },

    // ===== TECNOLOGIA =====
    { perguntas: ["mano isso aqui pode ficar inteligente de verdade?"], resposta: "Pode sim, com mais lógica." },
    { perguntas: ["cara você acha que isso pode aprender sozinho?"], resposta: "Pode, se programar isso." },
    { perguntas: ["mano isso aqui já entende o que eu falo?"], resposta: "Entende parcialmente." },
    { perguntas: ["cara isso aqui pode virar tipo um chat gpt?"], resposta: "Pode se aproximar bastante." },
    { perguntas: ["mano isso aqui pode ficar muito avançado?"], resposta: "Pode sim, com evolução." },

    // ===== FUTURO =====
    { perguntas: ["mano isso aqui pode mudar minha vida mesmo?"], resposta: "Pode ajudar bastante." },
    { perguntas: ["cara isso aqui pode abrir oportunidades depois?"], resposta: "Com certeza pode." },
    { perguntas: ["mano você acha que vale investir tempo nisso?"], resposta: "Vale muito." },
    { perguntas: ["cara isso aqui pode virar algo grande mesmo?"], resposta: "Pode sim, continua." },
    { perguntas: ["mano isso aqui pode ser útil pra outras pessoas?"], resposta: "Sim, bastante." },

    // ===== DÚVIDAS HUMANAS =====
    { perguntas: ["mano isso aqui tá certo ou só parece?"], resposta: "Tá certo, mas melhora ainda." },
    { perguntas: ["cara isso aqui pode dar bug fácil?"], resposta: "Pode sim." },
    { perguntas: ["mano isso aqui funciona sempre ou não?"], resposta: "Depende do código." },
    { perguntas: ["cara isso aqui pode quebrar do nada?"], resposta: "Pode sim." },
    { perguntas: ["mano isso aqui é difícil pra todo mundo?"], resposta: "Sim, no começo." },

    // ===== PROGRESSO =====
    { perguntas: ["mano você acha que eu já evoluí bastante?"], resposta: "Já evoluiu muito." },
    { perguntas: ["cara isso aqui tá melhor que antes mesmo?"], resposta: "Tá bem melhor." },
    { perguntas: ["mano você acha que eu tô indo rápido?"], resposta: "Tá indo bem rápido." },
    { perguntas: ["cara isso aqui pode melhorar muito ainda?"], resposta: "Pode sim." },
    { perguntas: ["mano você acha que eu tô começando a entender?"], resposta: "Tá sim." },

    // ===== NATURALIDADE =====
    { perguntas: ["mano isso aqui tá ficando daora mesmo né?"], resposta: "Tá muito bom." },
    { perguntas: ["cara isso aqui tá começando a ficar real"], resposta: "Tá sim." },
    { perguntas: ["mano isso aqui pode impressionar alguém fácil?"], resposta: "Pode sim." },
    { perguntas: ["cara isso aqui ainda é básico ou não?"], resposta: "Já passou disso." },
    { perguntas: ["mano isso aqui pode virar algo grande?"], resposta: "Pode sim." },


    // ===== CURTAS E HUMANAS =====
    { perguntas: ["isso tá bom mesmo?"], resposta: "Tá sim." },
    { perguntas: ["isso tá certo?"], resposta: "Tá certo." },
    { perguntas: ["isso tá ruim?"], resposta: "Nem tanto." },
    { perguntas: ["isso vale a pena?"], resposta: "Vale sim." },
    { perguntas: ["isso compensa?"], resposta: "Depende." },

    { perguntas: ["tô indo bem?"], resposta: "Tá indo bem." },
    { perguntas: ["tô melhorando?"], resposta: "Tá sim." },
    { perguntas: ["tô errando muito?"], resposta: "Faz parte." },
    { perguntas: ["tô no caminho?"], resposta: "Tá sim." },
    { perguntas: ["tô evoluindo?"], resposta: "Com certeza." },

    { perguntas: ["isso funciona mesmo?"], resposta: "Funciona sim." },
    { perguntas: ["isso roda tranquilo?"], resposta: "Roda sim." },
    { perguntas: ["isso pode dar erro?"], resposta: "Pode sim." },
    { perguntas: ["isso quebra fácil?"], resposta: "Depende." },
    { perguntas: ["isso trava?"], resposta: "Se errar, sim." },

    { perguntas: ["isso tá legal?"], resposta: "Tá sim." },
    { perguntas: ["isso tá daora?"], resposta: "Tá muito." },
    { perguntas: ["isso ficou bom?"], resposta: "Ficou sim." },
    { perguntas: ["isso ficou ruim?"], resposta: "Nem tanto." },
    { perguntas: ["isso melhorou?"], resposta: "Melhorou sim." },

    { perguntas: ["isso pode crescer?"], resposta: "Pode sim." },
    { perguntas: ["isso pode evoluir?"], resposta: "Pode muito." },
    { perguntas: ["isso pode melhorar?"], resposta: "Sempre." },
    { perguntas: ["isso pode escalar?"], resposta: "Com estrutura." },
    { perguntas: ["isso pode viralizar?"], resposta: "Talvez." },

    { perguntas: ["isso já serve?"], resposta: "Já sim." },
    { perguntas: ["isso já funciona?"], resposta: "Funciona." },
    { perguntas: ["isso já tá pronto?"], resposta: "Quase." },
    { perguntas: ["isso já ajuda?"], resposta: "Ajuda sim." },
    { perguntas: ["isso já resolve?"], resposta: "Resolve." },

    { perguntas: ["vale continuar?"], resposta: "Vale sim." },
    { perguntas: ["vale tentar?"], resposta: "Vale." },
    { perguntas: ["vale insistir?"], resposta: "Vale muito." },
    { perguntas: ["vale o tempo?"], resposta: "Vale sim." },
    { perguntas: ["vale o esforço?"], resposta: "Vale." },

    { perguntas: ["tá difícil né?"], resposta: "Um pouco." },
    { perguntas: ["tá complicado?"], resposta: "Normal." },
    { perguntas: ["tá confuso?"], resposta: "Pode estar." },
    { perguntas: ["tá pesado?"], resposta: "Às vezes." },
    { perguntas: ["tá tranquilo?"], resposta: "Tá sim." },

    { perguntas: ["você acha bom?"], resposta: "Acho sim." },
    { perguntas: ["você acha ruim?"], resposta: "Nem tanto." },
    { perguntas: ["você acha certo?"], resposta: "Acho sim." },
    { perguntas: ["você acha errado?"], resposta: "Pode ser." },
    { perguntas: ["você acha válido?"], resposta: "Sim." },

    { perguntas: ["isso presta?"], resposta: "Presta sim." },
    { perguntas: ["isso ajuda mesmo?"], resposta: "Ajuda." },
    { perguntas: ["isso muda algo?"], resposta: "Muda sim." },
    { perguntas: ["isso faz diferença?"], resposta: "Faz sim." },
    { perguntas: ["isso importa?"], resposta: "Importa." },

    { perguntas: ["tô confiante?"], resposta: "Tá sim." },
    { perguntas: ["tô perdido?"], resposta: "Um pouco." },
    { perguntas: ["tô certo?"], resposta: "Tá sim." },
    { perguntas: ["tô errado?"], resposta: "Talvez." },
    { perguntas: ["tô pronto?"], resposta: "Quase." },

    { perguntas: ["isso vai dar bom?"], resposta: "Vai sim." },
    { perguntas: ["isso vai dar ruim?"], resposta: "Pode dar." },
    { perguntas: ["isso vai funcionar?"], resposta: "Vai sim." },
    { perguntas: ["isso vai quebrar?"], resposta: "Pode." },
    { perguntas: ["isso vai crescer?"], resposta: "Vai sim." },

    {
        perguntas: ["isso tá bom?", "tá bom isso?", "isso ficou bom?"],
        respostas: ["Tá sim.", "Ficou bom mesmo.", "Tá daora.", "Curti isso.", "Tá indo bem."]
    },

    {
        perguntas: ["tô indo bem?", "tô melhorando?", "tô evoluindo?"],
        respostas: ["Tá indo bem.", "Tá melhorando sim.", "Tá evoluindo bastante.", "Dá pra ver progresso."]
    },

    {
        perguntas: ["isso vai dar certo?", "vai funcionar isso?"],
        respostas: ["Tem chance sim.", "Acho que dá certo.", "Se continuar assim, vai sim.", "Tá no caminho."]
    },

    {
        perguntas: ["isso tá ruim?", "isso ficou ruim?"],
        respostas: ["Não tá ruim não.", "Dá pra melhorar.", "Tá ok, mas ajusta.", "Não ficou ruim."]
    },

    {
        perguntas: ["isso vale a pena?", "vale continuar?"],
        respostas: ["Vale sim.", "Compensa continuar.", "Vale o esforço.", "Eu continuaria."]
    },

    {
        perguntas: ["tô perdido?", "tô confuso?"],
        respostas: ["Um pouco, mas normal.", "Faz parte no começo.", "Relaxa, você pega isso.", "Vai clarear já já."]
    },

    {
        perguntas: ["isso pode crescer?", "isso pode evoluir?"],
        respostas: ["Pode crescer bastante.", "Tem potencial.", "Dá pra evoluir muito.", "Isso pode ir longe."]
    },

    {
        perguntas: ["isso pode dar erro?", "isso quebra fácil?"],
        respostas: ["Pode sim.", "Tem risco.", "Se fizer errado, sim.", "Mas dá pra evitar."]
    },

    {
        perguntas: ["tá difícil?", "isso tá complicado?"],
        respostas: ["Tá um pouco.", "Normal ser difícil.", "No começo é assim.", "Depois melhora."]
    },

    {
        perguntas: ["isso tá daora?", "isso ficou legal?"],
        respostas: ["Tá muito bom.", "Ficou daora.", "Curti isso.", "Tá ficando top."]
    },


    // ===== +200 LINHAS HUMANAS =====

    {
        perguntas: ["isso tá bom mesmo?", "tá bom isso aí?"],
        respostas: ["Tá sim.", "Ficou bom.", "Tá legal.", "Curti isso."]
    },
    {
        perguntas: ["isso vai dar certo?", "vai funcionar isso?"],
        respostas: ["Tem chance.", "Acho que vai.", "Tá no caminho.", "Pode dar certo."]
    },
    {
        perguntas: ["tô indo bem nisso?", "tô fazendo certo?"],
        respostas: ["Tá indo bem.", "Tá certo sim.", "Continua assim.", "Tá evoluindo."]
    },
    {
        perguntas: ["isso tá ruim?", "ficou ruim isso?"],
        respostas: ["Não tá ruim.", "Dá pra melhorar.", "Tá ok.", "Não ficou ruim."]
    },
    {
        perguntas: ["isso compensa mesmo?", "vale a pena isso?"],
        respostas: ["Vale sim.", "Compensa.", "Eu continuaria.", "Vale o esforço."]
    },

    // ===== VARIAÇÕES NATURAIS =====
    {
        perguntas: ["isso tá estranho?", "isso parece estranho?"],
        respostas: ["Um pouco.", "Talvez.", "Pode ser.", "Não muito."]
    },
    {
        perguntas: ["isso tá certo mesmo?", "isso tá correto?"],
        respostas: ["Tá sim.", "Parece certo.", "Tá correto.", "Tá ok."]
    },
    {
        perguntas: ["isso funciona bem?", "funciona direitinho?"],
        respostas: ["Funciona.", "Roda bem.", "Tá suave.", "Sim."]
    },
    {
        perguntas: ["isso pode dar problema?", "isso pode dar ruim?"],
        respostas: ["Pode sim.", "Tem risco.", "Talvez.", "Pode acontecer."]
    },
    {
        perguntas: ["isso é difícil?", "isso tá difícil?"],
        respostas: ["Um pouco.", "Normal.", "No começo sim.", "Depois melhora."]
    },

    // ===== EMOÇÃO =====
    {
        perguntas: ["tô meio perdido nisso", "tô confuso nisso"],
        respostas: ["Normal.", "Faz parte.", "Vai clarear.", "Relaxa."]
    },
    {
        perguntas: ["tô desanimado com isso", "tô sem vontade nisso"],
        respostas: ["Normal.", "Continua mesmo assim.", "Vai passar.", "Não para."]
    },
    {
        perguntas: ["tô animado com isso", "tô curtindo isso"],
        respostas: ["Boa.", "Aproveita.", "Isso ajuda.", "Continua."]
    },
    {
        perguntas: ["tô com dúvida nisso", "tô inseguro nisso"],
        respostas: ["Pergunta mesmo.", "Normal.", "Dá pra resolver.", "Relaxa."]
    },
    {
        perguntas: ["tô feliz com isso", "isso deu certo"],
        respostas: ["Boa.", "Mandou bem.", "Aí sim.", "Top."]
    },

    // ===== TECNOLOGIA =====
    {
        perguntas: ["isso pode virar ia?", "isso pode ser inteligente?"],
        respostas: ["Pode sim.", "Com evolução.", "Tá no caminho.", "Pode chegar perto."]
    },
    {
        perguntas: ["isso aprende sozinho?", "isso pode aprender?"],
        respostas: ["Se programar.", "Com dados.", "Pode sim.", "Depende."]
    },
    {
        perguntas: ["isso já é avançado?", "isso tá avançado?"],
        respostas: ["Um pouco.", "Tá evoluindo.", "Já saiu do básico.", "Tá bom."]
    },
    {
        perguntas: ["isso pode melhorar muito?", "isso evolui bastante?"],
        respostas: ["Pode muito.", "Sim.", "Tem potencial.", "Com certeza."]
    },
    {
        perguntas: ["isso é inteligente?", "isso pensa?"],
        respostas: ["Simula.", "Um pouco.", "Depende.", "Ainda não totalmente."]
    },

    // ===== DINHEIRO =====
    {
        perguntas: ["isso dá dinheiro?", "isso pode gerar dinheiro?"],
        respostas: ["Pode sim.", "Depende.", "Com estratégia.", "Sim."]
    },
    {
        perguntas: ["vale investir nisso?", "vale tempo nisso?"],
        respostas: ["Vale.", "Sim.", "Compensa.", "Vale o esforço."]
    },
    {
        perguntas: ["isso pode virar renda?", "isso pode dar lucro?"],
        respostas: ["Pode sim.", "Com tempo.", "Sim.", "Depende."]
    },
    {
        perguntas: ["isso é útil pra trabalho?", "isso serve profissional?"],
        respostas: ["Serve sim.", "Pode ajudar.", "Sim.", "Com certeza."]
    },
    {
        perguntas: ["isso ajuda no futuro?", "isso vale pro futuro?"],
        respostas: ["Ajuda.", "Vale sim.", "Sim.", "Com certeza."]
    },

    // ===== PROGRESSO =====
    {
        perguntas: ["tô evoluindo mesmo?", "tô melhorando nisso?"],
        respostas: ["Tá sim.", "Tá evoluindo.", "Dá pra ver.", "Sim."]
    },
    {
        perguntas: ["isso melhorou?", "isso tá melhor agora?"],
        respostas: ["Melhorou.", "Tá sim.", "Ficou melhor.", "Sim."]
    },
    {
        perguntas: ["isso tá bom já?", "isso já serve?"],
        respostas: ["Já sim.", "Tá bom.", "Serve.", "Sim."]
    },
    {
        perguntas: ["isso pode ficar melhor?", "isso melhora mais?"],
        respostas: ["Sempre.", "Pode sim.", "Com certeza.", "Sim."]
    },
    {
        perguntas: ["isso já funciona?", "isso roda?"],
        respostas: ["Funciona.", "Roda sim.", "Sim.", "Tá ok."]
    },

    // ===== MAIS NATURAL =====
    {
        perguntas: ["isso tá daora?", "isso ficou top?"],
        respostas: ["Tá muito.", "Ficou top.", "Curti.", "Tá bom."]
    },
    {
        perguntas: ["isso impressiona?", "isso chama atenção?"],
        respostas: ["Sim.", "Um pouco.", "Pode sim.", "Sim."]
    },
    {
        perguntas: ["isso é básico ainda?", "isso é iniciante?"],
        respostas: ["Um pouco.", "Já passou.", "Depende.", "Tá evoluindo."]
    },
    {
        perguntas: ["isso é difícil pra todos?", "isso é complicado?"],
        respostas: ["Sim.", "No começo.", "Normal.", "Todo mundo passa."]
    },
    {
        perguntas: ["isso é importante?", "isso faz diferença?"],
        respostas: ["Sim.", "Faz.", "Importa.", "Com certeza."]
    },

    // 👉 você pode duplicar esse padrão e ir expandindo infinito


    // ===== MAIS LINHAS HUMANAS =====

    {
        perguntas: ["isso ainda dá pra melhorar?", "tem como melhorar isso?"],
        respostas: ["Sempre dá.", "Tem sim.", "Dá pra evoluir.", "Com certeza."]
    },
    {
        perguntas: ["isso já tá suficiente?", "já tá bom assim?"],
        respostas: ["Tá bom sim.", "Já serve.", "Tá ok.", "Pode usar."]
    },
    {
        perguntas: ["isso tá meio estranho ainda?", "isso parece estranho?"],
        respostas: ["Um pouco.", "Talvez.", "Pode ajustar.", "Nada grave."]
    },
    {
        perguntas: ["isso funciona sempre?", "isso roda sempre?"],
        respostas: ["Nem sempre.", "Depende.", "Quase sempre.", "Pode falhar."]
    },
    {
        perguntas: ["isso pode dar bug?", "isso pode falhar?"],
        respostas: ["Pode sim.", "Tem risco.", "Sim.", "Às vezes."]
    },

    // ===== DÚVIDAS COMUNS =====
    {
        perguntas: ["isso tá correto mesmo?", "isso tá certo de verdade?"],
        respostas: ["Tá sim.", "Parece correto.", "Tá certo.", "Sim."]
    },
    {
        perguntas: ["isso pode piorar?", "isso pode dar ruim depois?"],
        respostas: ["Pode sim.", "Se errar.", "Tem chance.", "Cuidado."]
    },
    {
        perguntas: ["isso já resolve o problema?", "isso resolve isso?"],
        respostas: ["Resolve sim.", "Ajuda bastante.", "Quase.", "Depende."]
    },
    {
        perguntas: ["isso tá funcionando direito?", "isso funciona bem mesmo?"],
        respostas: ["Funciona.", "Tá rodando bem.", "Sim.", "Tá ok."]
    },
    {
        perguntas: ["isso tá simples demais?", "isso tá muito básico?"],
        respostas: ["Um pouco.", "Tá simples.", "Mas funciona.", "Tá bom assim."]
    },

    // ===== SENTIMENTO MAIS NATURAL =====
    {
        perguntas: ["mano tô meio perdido nisso aqui ainda"],
        respostas: ["Normal.", "Você vai pegar.", "Faz parte.", "Relaxa."]
    },
    {
        perguntas: ["cara isso tá começando a fazer sentido agora"],
        respostas: ["Boa.", "É assim mesmo.", "Agora vai.", "Tá entendendo."]
    },
    {
        perguntas: ["mano eu tô curtindo fazer isso aqui"],
        respostas: ["Boa.", "Isso ajuda muito.", "Continua.", "Aproveita."]
    },
    {
        perguntas: ["cara às vezes dá vontade de parar"],
        respostas: ["Normal.", "Mas continua.", "Vale a pena.", "Não desiste."]
    },
    {
        perguntas: ["mano quando funciona dá mó satisfação"],
        respostas: ["Sim.", "Muito bom.", "Essa é a melhor parte.", "Boa sensação."]
    },

    // ===== MAIS NATURALIDADE =====
    {
        perguntas: ["isso tá ficando melhor né?", "isso melhorou mesmo?"],
        respostas: ["Melhorou sim.", "Tá melhor.", "Deu evolução.", "Sim."]
    },
    {
        perguntas: ["isso já tá legal pra mostrar?", "já dá pra mostrar isso?"],
        respostas: ["Já sim.", "Dá pra mostrar.", "Tá apresentável.", "Sim."]
    },
    {
        perguntas: ["isso aqui pode crescer bastante?", "isso pode crescer mesmo?"],
        respostas: ["Pode sim.", "Tem potencial.", "Dá pra crescer.", "Sim."]
    },
    {
        perguntas: ["isso pode virar algo grande?", "isso pode evoluir muito?"],
        respostas: ["Pode sim.", "Tem potencial.", "Sim.", "Com certeza."]
    },
    {
        perguntas: ["isso tá perto de ficar pronto?", "isso já tá quase pronto?"],
        respostas: ["Quase.", "Tá perto.", "Falta pouco.", "Tá chegando."]
    },

    // ===== ESTILO CONVERSA REAL =====
    {
        perguntas: ["mano você acha que isso tá bom mesmo?"],
        respostas: ["Tá sim.", "Ficou bom.", "Tá daora.", "Curti."]
    },
    {
        perguntas: ["cara isso aqui tá ficando top né?"],
        respostas: ["Tá sim.", "Tá ficando muito bom.", "Top mesmo.", "Boa."]
    },
    {
        perguntas: ["mano isso aqui já impressiona alguém?"],
        respostas: ["Sim.", "Com certeza.", "Já chama atenção.", "Sim."]
    },
    {
        perguntas: ["cara isso aqui ainda é iniciante?"],
        respostas: ["Já passou.", "Tá evoluindo.", "Um pouco.", "Depende."]
    },
    {
        perguntas: ["mano isso aqui pode melhorar muito ainda?"],
        respostas: ["Pode sim.", "Muito ainda.", "Sempre dá.", "Com certeza."]
    },

    // ===== MAIS VARIAÇÕES =====
    {
        perguntas: ["isso tá suave?", "tá tranquilo isso?"],
        respostas: ["Tá sim.", "Suave.", "Tranquilo.", "De boa."]
    },
    {
        perguntas: ["isso tá pesado?", "isso tá complicado?"],
        respostas: ["Um pouco.", "Normal.", "Sim.", "Pode ser."]
    },
    {
        perguntas: ["isso é rápido?", "isso roda rápido?"],
        respostas: ["Depende.", "Pode ser.", "Sim.", "Às vezes."]
    },
    {
        perguntas: ["isso é lento?", "isso demora muito?"],
        respostas: ["Às vezes.", "Depende.", "Pode demorar.", "Sim."]
    },
    {
        perguntas: ["isso é confiável?", "dá pra confiar nisso?"],
        respostas: ["Depende.", "Sim.", "Quase sempre.", "Pode confiar."]
    },

    // ===== FINAL =====
    {
        perguntas: ["isso vale continuar?", "vale seguir nisso?"],
        respostas: ["Vale sim.", "Continua.", "Compensa.", "Sim."]
    },
    {
        perguntas: ["isso tá indo bem?", "isso tá bom até agora?"],
        respostas: ["Tá sim.", "Tá indo bem.", "Sim.", "Tá bom."]
    },
    {
        perguntas: ["isso pode dar certo no final?", "isso vai dar bom?"],
        respostas: ["Pode sim.", "Tem chance.", "Acho que sim.", "Vai dar."]
    },
    {
        perguntas: ["isso pode dar errado?", "isso pode dar ruim?"],
        respostas: ["Pode.", "Tem risco.", "Sim.", "Às vezes."]
    },
    {
        perguntas: ["isso tá ficando cada vez melhor?", "isso tá evoluindo?"],
        respostas: ["Tá sim.", "Evoluindo.", "Melhorando.", "Sim."]
    }

];


