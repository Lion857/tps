

const calcularCuadrado = (numero) => {
    const cuadrado = numero * numero;
    const resultadoElement = document.getElementById("resultado1");
    if (resultadoElement) {
        resultadoElement.innerHTML = `El cuadrado de ${numero} es: <strong>${cuadrado}</strong>`;
    }
};


function convertirTextoYMostrar() {
    const textoOriginal = "ejemplo de texto para convertir";
    const textoTransformado = textoOriginal.toUpperCase();
    const resultadoElement = document.getElementById("resultado2");

    if (resultadoElement) {
        resultadoElement.innerHTML = `Texto original: "${textoOriginal}"<br>Texto transformado: <strong>${textoTransformado}</strong>`;
    }
}


function filtrarNumerosYCrearElementos() {
    const numeros = [5, 12, 8, 25, 3, 15, 9];
    const numerosFiltrados = numeros.filter(num => num > 10);
    const resultadoElement = document.getElementById("resultado3");

    if (resultadoElement) {
        resultadoElement.innerHTML = ''; 
        
        const pOriginal = document.createElement('p');
        pOriginal.textContent = `Array original: [${numeros.join(', ')}]`;
        resultadoElement.appendChild(pOriginal);

        const pFiltrado = document.createElement('p');
        pFiltrado.innerHTML = `Array filtrado (mayores a 10): <strong>[${numerosFiltrados.join(', ')}]</strong>`;
        resultadoElement.appendChild(pFiltrado);
    }
}


function verificarSubcadenaYCambiarColor(texto, subcadena) {
    const resultadoElement = document.getElementById("resultado4");
    const estaContenida = texto.includes(subcadena);

    if (resultadoElement) {
        resultadoElement.textContent = `Texto: "${texto}" | Subcadena: "${subcadena}" | Resultado: ${estaContenida ? 'ENCONTRADA' : 'NO ENCONTRADA'}`;
        
        if (estaContenida) {
            resultadoElement.style.backgroundColor = "lightgreen"; 
            resultadoElement.style.color = "black";
        } else {
            resultadoElement.style.backgroundColor = "lightcoral"; 
            resultadoElement.style.color = "white";
        }
    }
}



function unirCadenasYAgregarClase(cadena1, cadena2) {
    const cadenaUnida = cadena1.concat(" ", cadena2);
    const resultadoMayusculas = cadenaUnida.toUpperCase();
    const contenedor = document.getElementById("contenedor5"); 

    if (contenedor) {
        contenedor.innerHTML = ''; 
        
        const parrafoResultado = document.createElement('p');
        parrafoResultado.textContent = resultadoMayusculas;
        parrafoResultado.classList.add("resaltado"); 
        
        contenedor.appendChild(parrafoResultado);
    }
}


function sumarArrayYMostrar() {
    const numeros = [10, 5, 20, 15];
    const suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    const resultadoElement = document.getElementById("resultado6");

    if (resultadoElement) {
        resultadoElement.innerHTML = `Array a sumar: [${numeros.join(', ')}]<br>La suma total es: <strong>${suma}</strong>`;
    }
}



function filtrarMayusculasYCrearElementos() {
    const palabras = ["casa", "computadora", "sol", "algoritmo", "luz", "desarrollo"];
    const palabrasFiltradas = palabras
        .filter(palabra => palabra.length > 5)
        .map(palabra => palabra.toUpperCase());

    const resultadoElement = document.getElementById("resultado7");

    if (resultadoElement) {
        resultadoElement.innerHTML = '<h4>Palabras filtradas (> 5 letras) en mayúsculas:</h4>';

        palabrasFiltradas.forEach(palabra => {
            const parrafo = document.createElement('p');
            parrafo.textContent = palabra;
            resultadoElement.appendChild(parrafo);
        });
    }
}

function contarVocalesYMostrar(texto) {
    const textoMinusculas = texto.toLowerCase();
    const vocales = textoMinusculas.match(/[aeiouáéíóú]/g);
    const numVocales = vocales ? vocales.length : 0;
    
    const resultadoElement = document.getElementById("resultado8");

    if (resultadoElement) {
        resultadoElement.textContent = `Texto: "${texto}" | Número de vocales: ${numVocales}`;
        
        if (numVocales > 5) {
            resultadoElement.style.fontSize = "24px";
        } else {
            resultadoElement.style.fontSize = "16px";
        }
    }
}


function reemplazarPalabraYMostrar(texto, buscar, reemplazar) {
    const textoReemplazado = texto.replace(buscar, reemplazar);
    
    const resultadoElement = document.getElementById("resultado9");

    if (resultadoElement) {
        const nuevoParrafo = document.createElement('p');
        nuevoParrafo.innerHTML = `Original: "${texto}"<br>Reemplazado: <strong>${textoReemplazado}</strong> (se reemplazó "${buscar}" por "${reemplazar}")`;
        resultadoElement.appendChild(nuevoParrafo);
    }
}


function ordenarUnirYMostrar() {
    const palabras = ["jamon", "rana", "bombon", "tortitas",  "rokaka"];
    const palabrasOrdenadas = palabras.sort();
    const resultadoUnido = palabrasOrdenadas.join(" - ");
    
    const resultadoElement = document.getElementById("resultado10");

    if (resultadoElement) {
        resultadoElement.innerHTML = `Array original: [${palabras.join(', ')}]<br>Resultado ordenado y unido: <strong>${resultadoUnido}</strong>`;
        

        resultadoElement.classList.toggle("destacado"); 
    }
}


document.addEventListener('DOMContentLoaded', () => {
    calcularCuadrado(7); 
    convertirTextoYMostrar();
    filtrarNumerosYCrearElementos();
    verificarSubcadenaYCambiarColor("quiero aprobar", "aprobar");
    unirCadenasYAgregarClase("Johnny", "Joestar");
    sumarArrayYMostrar();
    filtrarMayusculasYCrearElementos();
    contarVocalesYMostrar("la constitucion nacional Argentina");
    reemplazarPalabraYMostrar("la vida de forma definitiva", "forma", "vida");
    ordenarUnirYMostrar("jamon", "rana", "tortitas", "bombon", "Rokaka");
});