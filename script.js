// Variable para almacenar el precio inicial
let price = 6050;

// Función para decrementar el valor
function decrementValue(element) {
    if (element.classList.contains("disabled")) return;

    price -= 2500; // Disminuye el precio en 10000 (puedes ajustar este valor)
    updatePrice();

    // Desactiva la celda de la "X" y activa la celda de la "✔"
    element.classList.add("disabled");
    element.nextElementSibling.classList.remove("disabled");
}

// Función para incrementar el valor
function incrementValue(element) {
    if (element.classList.contains("disabled")) return;

    price += 2500; // Incrementa el precio en 10000 (puedes ajustar este valor)
    updatePrice();

    // Desactiva la celda de la "✔" y activa la celda de la "X"
    element.classList.add("disabled");
    element.previousElementSibling.classList.remove("disabled");
}

// Función para actualizar el texto en la página
function updatePrice() {
    document.getElementById("price").innerText = price;
}
