function escolhaTrilha() {
    document.getElementById("game-text").textContent = "Você escolheu seguir pela trilha iluminada. O caminho parece seguro e tranquilo. Mais adiante, você encontra uma bifurcação.";
    document.getElementById("choices").innerHTML = `
        <button onclick="finalFeliz()">1. Continuar pela trilha principal</button>
        <button onclick="cabanaMisteriosa()">2. Entrar em uma pequena cabana</button>
    `;
}

function escolhaCaminhoSombrio() {
    document.getElementById("game-text").textContent = "Você escolheu o caminho sombrio. As árvores parecem se inclinar sobre você, e os sussurros aumentam conforme você avança.";
    document.getElementById("choices").innerHTML = `
        <button onclick="pontePerigosa()">1. Atravessar a ponte</button>
        <button onclick="finalFeliz()">2. Procurar outro caminho seguro</button>
    `;
}

function cabanaMisteriosa() {
    document.getElementById("game-text").textContent = "Você entra na cabana e sente o ar gelado e parado. Ao abrir um livro antigo, percebe que contém um aviso: 'Quem busca respostas na escuridão encontrará seu destino final.' A porta se fecha sozinha, e você sente uma presença atrás de você. Fim - Final Inesperado!";
    document.getElementById("choices").innerHTML = `<button onclick="inicioJogo()">Reiniciar</button>`;
}

function pontePerigosa() {
    document.getElementById("game-text").textContent = "Você decide atravessar a ponte com cuidado. Quando está no meio da ponte, algo agarra seu pé. Com um último esforço, você consegue se libertar e chegar ao outro lado. Fim - Final Feliz!";
    document.getElementById("choices").innerHTML = `<button onclick="inicioJogo()">Reiniciar</button>`;
}

function finalFeliz() {
    document.getElementById("game-text").textContent = "Parabéns! Você tomou decisões cuidadosas e superou os desafios da floresta. Fim - Final Feliz!";
    document.getElementById("choices").innerHTML = `<button onclick="inicioJogo()">Reiniciar</button>`;
}

function inicioJogo() {
    document.getElementById("game-text").textContent = "Você está em uma antiga floresta chamada 'Sombria' que, segundo lendas, guarda segredos há muito esquecidos.";
    document.getElementById("choices").innerHTML = `
        <button onclick="escolhaTrilha()">1. Seguir pela trilha iluminada</button>
        <button onclick="escolhaCaminhoSombrio()">2. Ir pelo caminho sombrio</button>
    `;
}
