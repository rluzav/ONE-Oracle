let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora del Desafío";


function botonConsole() {
   console.log("El botón fue clicado");
    
}

function botonPromt() {
    let pregunta = prompt("Indica nombre de ciudad de Brasil");
    alert(`Estuve en la ${pregunta} y me acrode de tí`);
    
}

function botonAlert() {
    alert("Yo amo JS" );
    
}
function botonSumar() {
    let num1 = parseInt(prompt("Ingrese primer numero"));
    let num2 = parseInt(prompt("Ingrese segundo numero"));
    alert(`La suma de ${num1+num2} `);
    
}