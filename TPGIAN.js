// primer ejercicio
const calcularCuadrado = () => {
    let inputNumero = prompt("Ingresa un número para calcular su cuadrado:");
    let resultadoCuadrado = parseInt(inputNumero) * parseInt(inputNumero);

    const elementoResultado = document.getElementById("cuadrado");
    elementoResultado.innerHTML = "Resultado de la operación: " + resultadoCuadrado;
}

// segundo ejercicio
const cambiarMensaje = () => {
    const divContenedor = document.getElementById("cambiazo");
    divContenedor.innerHTML = "Dragon Ball esta sobrevalorado."
}

// tercer ejercicio
const filtrarValoresAltos = () => {
    let listaNumeros = [12, 18, 17, 16, 15, 19];
  
    let numerosFiltrados = listaNumeros.filter(valor => valor >= 17);
    let contenedorVector = document.getElementById("vector")
    contenedorVector.innerHTML = numerosFiltrados;
}

// cuarto ejercicio
const buscarSubcadena = () => {
    let cadenaCompleta = prompt("Introduce un texto para buscar una palabra clave:");
    const elementoBusqueda = document.getElementById("subcadena");

  
    if (cadenaCompleta.includes("JoJo")) {
        elementoBusqueda.style.color = "green";
        elementoBusqueda.innerHTML = "El texto contiene la palabra clave 'JoJo'";
    } else {
        elementoBusqueda.style.color = "red";
        elementoBusqueda.innerHTML = "Aviso: El texto NO contiene la palabra clave 'JoJo'";
    }
}
// quinto ejercicio
const unirCadenas = () => {
    let textoUno = prompt("Ingresa el primer segmento de texto:");
    let textoDos = prompt("Ingresa el segundo segmento de texto:");
    
    let textoFinal = textoUno.concat(" - ", textoDos).toUpperCase();

    const elementoFinal = document.getElementById("cadenas");
    elementoFinal.style.color = "blue";
    elementoFinal.className = "destacado"; 
    elementoFinal.innerHTML = textoFinal;
}
// sexto ejercicio
const sumarArrays = () => {
    let vectorA = [1880, 1999, 2012];
    let vectorB = [1888, 2012, 2022];
    // Suma cada elemento correspondiente
    let vectorSuma = vectorA.map((valor, indice) => valor + vectorB[indice]);

    const elementoResultado = document.getElementById("suma");
    elementoResultado.innerHTML = "La suma elemento por elemento es: " + vectorSuma;
}

// septimo ejercicio
const obtenerMayusculas = () => {
    let listaPalabras = ["Jamon", "Espiritu", "Peinado", "Flecha", "DIO"];
  
    let soloMayusculas = listaPalabras.filter(palabra => palabra === palabra.toUpperCase());

    const elementoMostrar = document.getElementById("mayus");
    
    elementoMostrar.innerHTML = "Palabras completamente en mayúsculas: " + soloMayusculas;
}
// octavo ejercicio
const contarLetrasVocales = () => {
    let textoUsuario = prompt("Escribe un texto para contar sus vocales:");
    let contadorVocales = 0;
    const listaVocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

    for (let caracter of textoUsuario) {
        if (listaVocales.includes(caracter)) {
            contadorVocales++;
        }
    }

    const elementoConteo = document.getElementById("vocales");
    elementoConteo.innerHTML = "Total de vocales encontradas: " + contadorVocales;
}

// noveno ejercicio
const cambiarFrase = () => {
    let textoBase = prompt("Ingresa el texto principal:");
    let palabraAntigua = prompt("¿Qué palabra quieres reemplazar?");
    let palabraNueva = prompt("¿Con qué palabra quieres reemplazarla?");
    
    let textoModificado = textoBase.replace(new RegExp(palabraAntigua, 'g'), palabraNueva);

    const elementoModificado = document.getElementById("reemplazo");
    elementoModificado.innerHTML = "Texto final después del cambio: " + textoModificado;
}

// decimo ejercicio
const ordenarLista = () => {
    
    let ciudades = ["Londres", "Venecia", "Cairo", "Morioh", "Roma", "Florida"];
    
    let listaOrdenada = ciudades.sort().join(" | "); 

    const elementoOrden = document.getElementById("ordenado");
    elementoOrden.innerHTML = "Lista de ciudades ordenadas: " + listaOrdenada;
}