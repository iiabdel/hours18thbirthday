
const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score');
let score = 0;

function createHeart() {
const heart = document.createElement('div');
heart.classList.add('heart');
heart.style.left = Math.random() * (gameArea.offsetWidth - 30) + 'px';
heart.style.top = '-30px';

gameArea.appendChild(heart);

let fall = setInterval(() => {
    let top = parseInt(heart.style.top);
    if (top >= gameArea.offsetHeight) {
    heart.remove();
    clearInterval(fall);
    } else {
    heart.style.top = top + 3 + 'px';
    }
}, 20);

heart.onclick = () => {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    heart.remove();
    clearInterval(fall);
};
}

setInterval(createHeart, 800);
