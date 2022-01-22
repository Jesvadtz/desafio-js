let container = document.createElement("section");
container.classList.add("container_principal");

let divContainer = document.createElement("div");
divContainer.classList.add("divContainer");

let title = document.createElement("h2");
title.classList.add("title");
title.innerText = "Frases de grandes científicos";

let text = document.createElement("p");
text.innerText =
  "“Nada en la vida es para ser temido, es sólo para ser comprendido. Ahora es el momento de entender más, de modo que podamos temer menos” Marie Curie";
text.id = "changeText01";

let text02 = document.createElement("p");
text02.innerText =
  "“No existe una ley excepto la ley de que no hay ley” John Archibald";
text02.id = "changeText02";

let text03 = document.createElement("p");
text03.innerText =
  "“Me parece haber sido sólo un niño jugando en la orilla del mar, divirtiéndose y buscando una piedra más lisa o una concha más bonita de lo normal, mientras el gran océano de la verdad yacía ante mis ojos con todo por descubrir” Isaac Newton";
text03.id = "changeText03";

let button = document.createElement("button");
button.onclick = cita01;
button.innerText = "Nueva Frase";
button.classList.add("button_principal");

let button02 = document.createElement("button");
button02.onclick = cita02;
button02.innerText = "Nueva Frase";
button02.classList.add("button_principal");

let button03 = document.createElement("button");
button03.onclick = cita03;
button03.innerText = "Nueva Frase";
button03.classList.add("button_principal");

//Función para cambiar texto
function cita01() {
  document.getElementById("changeText01").innerHTML =
    "“No se puede enseñar nada a un hombre, sólo se le puede ayudar a descubrirse a sí mismo” Galileo Galilei";
}
function cita02() {
  document.getElementById("changeText02").innerHTML =
    "“Un hombre que se atreve a perder una hora no ha descubierto el valor de la vida” Charles Darwin";
}
function cita03() {
  document.getElementById("changeText03").innerHTML =
    "“Lo bueno de la ciencia es que es cierta independientemente de si crees o no en ella” Neil deGrasse Tyson";
}

// Función para agregar elementos
let notes = [title, text, button, text02, button02, text03, button03];

notes.forEach((cita) => {
  divContainer.appendChild(cita);
});

document.body.appendChild(container);
container.appendChild(divContainer);
