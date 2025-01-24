// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];


function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    
    if (nombre === "") {
        alert("Por favor, introduce un nombre.");
        return;
    }

    
    if (nombres.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        input.value = "";
        return;
    }

    
    nombres.push(nombre);
    actualizarLista();
    input.value = "";
}


function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    
    nombres.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    const nombreSorteado = nombres[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.textContent = `¡El amigo secreto es: ${nombreSorteado}!`;
}
