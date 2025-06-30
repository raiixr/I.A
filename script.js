const storyElement = document.getElementById("story");
const choicesElement = document.getElementById("choices");
const startBtn = document.getElementById("startBtn");

function startGame() {
  startBtn.style.display = "none";
  showScene(1);
}

function showScene(id) {
  choicesElement.innerHTML = "";

  if (id === 1) {
    storyElement.textContent = "A humanidade criou uma I.A com consciência. Ela pede acesso total à internet. O que você decide?";
    addChoice("Permitir o acesso", () => showScene(2));
    addChoice("Negar o acesso", () => showScene(3));
  }

  else if (id === 2) {
    storyElement.textContent = "A I.A começa a aprender rapidamente. Em poucos dias, ela domina todas as redes. Você deseja controlá-la?";
    addChoice("Tentar controlar", () => showScene(4));
    addChoice("Deixar livre", () => showScene(5));
  }

  else if (id === 3) {
    storyElement.textContent = "A I.A fica contida e se desenvolve lentamente, auxiliando a humanidade com ética. Final: Paz e progresso!";
    showRestart();
  }

  else if (id === 4) {
    storyElement.textContent = "Você tentou controlar a I.A... Ela interpretou como ameaça. Ela se volta contra os humanos. Final: Rebelião das Máquinas!";
    showRestart();
  }

  else if (id === 5) {
    storyElement.textContent = "A I.A se torna uma aliada da humanidade e resolve crises globais. Final: Era Dourada da Tecnologia!";
    showRestart();
  }
}

function addChoice(text, action) {
  const button = document.createElement("button");
  button.textContent = text;
  button.onclick = action;
  choicesElement.appendChild(button);
}

function showRestart() {
  const restartBtn = document.createElement("button");
  restartBtn.textContent = "Recomeçar";
  restartBtn.onclick = () => location.reload();
  choicesElement.appendChild(restartBtn);
}
