// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let NombreAmigos = [];
function agregarAmigo(){
    let inputAmigo = document.getElementById('amigo').value;
    if(inputAmigo === ''){
        alert("ingrese un amigo");
    }
    else{
        NombreAmigos.push(inputAmigo); 
        actualizarListaAmigos();
        document.getElementById('amigo').value = '';
    }
}

function actualizarListaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    NombreAmigos.forEach(nombres => {
        let nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = nombres;

        lista.appendChild(nuevoAmigo);
    });
}

function sortearAmigo(){
    if(NombreAmigos.length == 0){
        alert('inserte amigos por favor');
    }
    else{
        let indiceAleatorio = Math.floor(Math.random() * NombreAmigos.length);
        let resultadoFinal = document.getElementById('resultado');
        resultadoFinal.innerHTML = '';
        resultadoFinal.innerHTML += NombreAmigos[indiceAleatorio]; 
    }
}