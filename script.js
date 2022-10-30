
let order = [];
let clickedOrder = [];
let score = 0;


const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');


//Cria ordem aleatoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = creatColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//Chama a opacidade e acente as cores
let lightColor = (element, number) => {
    number = number + 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//Verifica se o usuario clicou é o mesmo da ordem do jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniando o próximo nível!`);
        nextLevel();
    }
}

//Função de clique do usuario no jogo
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    creatColorElement(color).classList.add('selected');

    setTimeout(() => {
        creatColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);

}

//Botão que retormna a cor 
let creatColorElement = (color)=> {
    if(color == 0) {
        return green
    } else if (color == 1) {
        return red;
    }else if(color == 2) {
        return yellow;
    }else if (color == 3) {
        return blue;
    }
}

//função proximo nivel 
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//Função para game over
let gameOver = () => {
    alert(`Pontuação:  ${score}!\nVocê perdeu o jogo\n Clique em OK para tentar de novo`);
    order = [];
    clickedOrder = [];

    playGame();
}

//Inicio do Jogo 
let playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando novo jogo')
    score = 0;

    nextLevel();
}



//Ativar os cliques do usuario

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
green.onclick = () => click(3);

// green.addEventListener('click', click[0]);
// red.addEventListener('click', click[1]);
// yellow.addEventListener('click', click[2]);
// blue.addEventListener('click', click[3]);

//Começar jogo
playGame();

