let btnDetalhes = document.getElementById("btn-detalhes");

btnDetalhes.onclick = function displayCont(){
    const display = document.getElementById("display");

    const detalhesDiv = document.createElement("div");
    detalhesDiv.classList.add("detalhes-div");
    const titulo = document.createElement("h1");
    titulo.classList.add("detalhes-titulo");
    const paragrafo = document.createElement("p");
    paragrafo.classList.add("detalhes-texto");

    titulo.textContent = "SOBRE A BEBIDA";
    paragrafo.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    detalhesDiv.appendChild(titulo);
    detalhesDiv.appendChild(paragrafo);
    display.appendChild(detalhesDiv);
};