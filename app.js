// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let NombreAmigos = [];
let lista = document.getElementById('listaAmigos');
let resultadoFinal = document.getElementById('resultado');

//Agregamos el nombre de cada amigo a una lista que se ira visualizando en pantalla.
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

//Esta función actualiza la lista en pantalla cada vez que se agrega un integrante nuevo
function actualizarListaAmigos(){
    lista.innerHTML = '';
    NombreAmigos.forEach(nombres => {
        let nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = nombres;
        lista.appendChild(nuevoAmigo);
    });
}
//Esta función Elige un amigo de forma Random y lo muestra en pantalla.
function sortearAmigo(){
    if(NombreAmigos.length == 0){
        alert('inserte amigos por favor');
    }
    else{
        let indiceAleatorio = Math.floor(Math.random() * NombreAmigos.length);
        lista.innerHTML = '';
        resultadoFinal.innerHTML = '';
        resultadoFinal.innerHTML += `el amigo secreto sorteado es: ${NombreAmigos[indiceAleatorio]}`; 
    }
}