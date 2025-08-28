// Obtenha referências aos elementos HTML
const backgroundElement = document.getElementById('background');
const characterElement = document.getElementById('character');
const dialogueBoxElement = document.getElementById('dialogue-box');
const characterNameElement = document.getElementById('character-name');
const dialogueTextElement = document.getElementById('dialogue-text');

// Defina sua história como um array de objetos
// Cada objeto representa uma "linha" da história
const story = [
{
    name: "Narrador",
    text: "Era uma vez, em um reino distante...",
    background: "C:\Users\julio.chuvinski_matc\Documents\GitHub\SolaScriptura\Imagens\cenario", // Caminho para sua imagem de fundo
    character: null // Narrador não tem sprite
},
{
    name: "Heroína",
    text: "Oh, que dia lindo para uma aventura!",
    background: null, // Mantém o fundo anterior
    character: "assets/heroina_feliz.png" // Caminho para sua imagem de personagem
},
{
    name: "Vilão",
    text: "Hehehe... mal sabe ela o que a espera!",
    background: "assets/fundo_castelo.jpg", // Novo fundo
    character: "assets/vilao_malvado.png" // Novo personagem
},
{
    name: "Heroína",
    text: "Quem está aí?!",
    background: null,
    character: "assets/heroina_assustada.png"
},
{
    name: "Narrador",
    text: "E assim, a aventura começou...",
    background: null,
    character: null
},
{
    name: "Fim",
    text: "Obrigado por jogar!",
    background: null,
    character: null
}
];

let currentLineIndex = 0; // Índice da linha atual da história

// Função para exibir a linha atual da história
function displayCurrentLine() {
if (currentLineIndex < story.length) {
    const line = story[currentLineIndex];

    characterNameElement.textContent = line.name;
    dialogueTextElement.textContent = line.text;

    // Atualiza o fundo se houver um novo
    if (line.background) {
        backgroundElement.src = line.background;
    }

    // Atualiza o sprite do personagem se houver um novo
    if (line.character) {
        characterElement.src = line.character;
        characterElement.style.display = 'block'; // Mostra o personagem
    } else {
        characterElement.style.display = 'none'; // Esconde o personagem
    }
} else {
    // Fim da história
    characterNameElement.textContent = "Fim";
    dialogueTextElement.textContent = "A história terminou. Recarregue a página para jogar novamente.";
    dialogueBoxElement.style.cursor = 'default'; // Remove o cursor de clique
    dialogueBoxElement.removeEventListener('click', advanceStory); // Remove o evento de clique
}
}

// Função para avançar a história
function advanceStory() {
currentLineIndex++;
displayCurrentLine();
}

// Adiciona um ouvinte de evento de clique à caixa de diálogo
// Quando o usuário clicar na caixa de diálogo, a história avança
dialogueBoxElement.addEventListener('click', advanceStory);

// Exibe a primeira linha da história ao carregar a página
document.addEventListener('DOMContentLoaded', displayCurrentLine);