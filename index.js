
const playButton = document.getElementsByTagName('button');

const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');

const winner = document.getElementById('winner');

function playGame() {
    const player1Got = Math.floor(Math.random() * 3 + 1);
    const player2Got = Math.floor(Math.random() * 3 + 1);

    player1.setAttribute('src', `assets/${assetsName(player1Got)}.jpg`);
    player2.setAttribute('src', `assets/${assetsName(player2Got)}.jpg`);

    winner.innerHTML = winnerIs(player1Got, player2Got);
}

function assetsName(playerGot) {
    switch (playerGot) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissor';
        default:
            return 'rock'
    }
}

function winnerIs(player1Got, player2Got) {
    if (player1Got === player2Got) {
        return 'ohh ! it\'s draw'
    } else if (
        (player1Got === 1 && player2Got === 2) ||
        (player1Got === 2 && player2Got === 3) ||
        (player1Got === 3 && player2Got === 1)
    ) {
        return 'congratulations ! player 2 won'
    } else {
        return 'congratulations ! player 1 won'
    }
}
