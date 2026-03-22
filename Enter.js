function iniciar() {

    let btnName = document.getElementById("nomeInput")
    let btn = document.getElementById("btn-confirm")
    btn.style.display = "flex"
    btnName.style.display = "flex"


}
function confirmar() {
    let name = document.getElementById("nomeInput").value
    let res = document.getElementById("res")
    let btn = document.getElementById("btn-enter")

    if (name) {
        res.innerHTML = `Olá ${name}! Para continuar, clique em Enter!`
        btn.style.display = "flex"
    } else {
        alert("Olá! coloque seus dados.")
    }

    localStorage.setItem("nome", name)


}




// ===== PARTÍCULAS (FUNDO) =====
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.zIndex = "0";
canvas.style.pointerEvents = "none";

const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let particles = [];

for (let i = 0; i < 80; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.2
    });
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.y -= p.speed;

        if (p.y < 0) {
            p.y = canvas.height;
            p.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
    });

    requestAnimationFrame(animateParticles);
}
animateParticles();


// ===== PARALLAX (PC) =====
document.addEventListener("mousemove", (e) => {
    const card = document.querySelector(".glass-card");
    if (!card) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;

    card.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
});


// ===== MOBILE TOUCH FIX =====
document.addEventListener("touchstart", () => {
    document.body.style.cursor = "default";
});


// ===== SISTEMA =====
function iniciarSistema() {
    const status = document.getElementById("status");

    status.innerText = "Inicializando sistema...";

    setTimeout(() => {
        status.innerText = "Carregando módulos...";
    }, 1000);

    setTimeout(() => {
        status.innerText = "Sistema pronto";

        document.getElementById("nomeInput").style.display = "block";
        document.getElementById("btn-confirm").style.display = "block";
    }, 2000);
}

function confirmarNome() {
    const nome = document.getElementById("nomeInput").value;
    const status = document.getElementById("status");

    if (nome.trim() === "") {
        status.innerText = "Digite um nome válido";
        return;
    }

    status.innerText = `Bem-vindo, ${nome}`;
    document.getElementById("btn-enter").style.display = "block";
}

function entrarSistema() {
    window.location.href = "Interface/interface.html";
}