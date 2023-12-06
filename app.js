function Player(scoree, button, display) {
    this.score = scoree,
    this.button = button,
    this.display = display;
}

const player1 = new Player(0, document.querySelector('#player1Button'), document.querySelector('#player1Display'));
const player2 = new Player(0, document.querySelector('#player2Button'), document.querySelector('#player2Display'));

const resetButton = document.querySelector('#resetButton');

let winningScore = 3;

const selectLimitScore = document.querySelector('#selectLimitScore');

selectLimitScore.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
});

let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver){
        if (player.score !== winningScore) {
            player.score += 1;
            player.display.textContent = player.score;
            if (player.score === winningScore) {
                isGameOver = true;
                player.display.classList.add('has-text-success');
                opponent.display.classList.add('has-text-danger');
                player.button.disabled = true;
                opponent.button.disabled = true;
            }
        }
    }
}

player1Button.addEventListener('click', function(){
    updateScores(player1, player2)
});

player2Button.addEventListener('click', function() {
    updateScores(player2, player1)
});

resetButton.addEventListener('click', reset);

const players = [player1, player2];

function reset() {
    isGameOver = false;
    for (const player of players) {
        player.score = 0;
        player.display.textContent = player.score;
        player.display.classList.remove('has-text-success', 'has-text-danger');
        player.button.disabled = false;
    }
};