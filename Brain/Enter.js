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