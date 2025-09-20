// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    //capturar el campo de entrada usando el id "amigo"
    const nombre_amigo_input = document.getElementById('amigo');
    const nombre_amigo = nombre_amigo_input.value.trim(); //trim hace que cuando se agrega espacios antes o despues se eliminen

    //se revisa que el campo no esté vacío
    if(nombre_amigo === ''){
            alert('Por favor, inserta un nombre');
        return;
    }

    //agregamos el nombre al array "amigos"
    amigos.push(nombre_amigo);

    //se limpia el nombre, Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
    nombre_amigo_input.value = '';
    mostrarAmigos();       
} 

function mostrarAmigos(){
    const listaAmigosUl = document.getElementById('listaAmigos');
    //evitar duplicados
    listaAmigosUl.innerHTML = '';

    //iteración
    for (let i=0; i< amigos.length; i++){
        //se crea el <li></li>
        const nuevoLi = document.createElement('li');
        //se asigna el nombre del amigo como contenido de texto
        nuevoLi.textContent = amigos[i];
        //se agrega el elemento a la lista
        listaAmigosUl.appendChild(nuevoLi);
    }
}

function sortearAmigo(){
    //verificar que la lista no está vacía
    if(amigos.length === 0){
        alert('No agregaste amigos a la lista para sortear');
        return;
    }
    //se sortea al amigo elegido 
    const amigoRandom = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[amigoRandom];
    
    
    alert(`El amigo elegido es: ${amigoSecreto}`)
}
