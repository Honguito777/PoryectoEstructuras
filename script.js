let array = [10, 20, 30, 40, 50];

function displayArray() {
    const arrayContainer = document.getElementById('array');
    arrayContainer.innerHTML = ''; // Limpia el contenido previo del contenedor
    array.forEach((element, index) => {    // Recorre cada elemento del array y su índice
        const div = document.createElement('div');// se crea para cada elemento del array
        div.className = 'array-element';
        div.innerHTML = `<span>${index})</span> <span>${element}</span>`;
        arrayContainer.appendChild(div);        // Añade el div al contenedor del array
    });
}

function accessElement() {
    const index = document.getElementById('index').value;  // Obtiene el valor del índice ingresado por el usuario
    const result = document.getElementById('result');    // Obtiene el elemento HTML donde se mostrará el resultado
    if (index < array.length && index >= 0) {
        result.textContent = `Elemento en índice ${index}: ${array[index]}`;
    } else {
        result.textContent = 'Índice fuera de rango';
    }
}

function searchElement() {
    const value = document.getElementById('value').value; // Obtiene el valor ingresado por el usuario
    const result = document.getElementById('result');    // Obtiene el elemento HTML donde se mostrará el resultado
    const index = array.indexOf(Number(value));// busca el valor
    if (index !== -1) {
        result.textContent = `Valor ${value} encontrado en índice ${index}`;
    } else {
        result.textContent = `Valor ${value} no encontrado en el array`;
    }
}

function insertElement() {
    const value = document.getElementById('value').value;    // Obtiene el valor ingresado por el usuario
    const index = document.getElementById('index').value;    // Obtiene el índice donde se desea insertar el nuevo valor
    const result = document.getElementById('result');    // Obtiene el elemento HTML donde se mostrará el resultado
    if (index <= array.length && index >= 0) {
        array.splice(index, 0, Number(value));        // Inserta el nuevo valor en el índice especificado
        displayArray();                              // Actualiza la visualización del array
        result.textContent = `Valor ${value} insertado en índice ${index}`;
    } else {
        result.textContent = 'Índice fuera de rango';
    }
}

function deleteElement() {
    const index = document.getElementById('index').value;    // Obtiene el valor del índice ingresado por el usuario
    const result = document.getElementById('result');// Obtiene el elemento HTML donde se mostrará el resultado
    if (index < array.length && index >= 0) {
        const removed = array.splice(index, 1);
        displayArray();// Actualiza la visualización del array
        result.textContent = `Valor ${removed} eliminado de índice ${index}`;
    } else {
        result.textContent = 'Índice fuera de rango';
    }
}
window.onload = displayArray;// para que la pagina se cargue
