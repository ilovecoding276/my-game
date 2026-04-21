let player = document.getElementById("player");
let gameArea = document.getElementById("gameArea");

let score = 0;
let lives = 3;

document.addEventListener("keydown", movePlayer);

function movePlayer(event) {
    let left = player.offsetLeft;

    if (event.key === "ArrowLeft" && left > 0) {
        player.style.left = left + 20 + "px";
}

if (event.key === "ArrowRight" && left < 350) {
    player.style.left = left + 20 + "px";
}
}

function createEnemy() {
    let enemy = document.createElement("div");
    enemy.classList.add("enemy");

    enemy.style.left =
    Math.random() * 360 + "px";

    gameArea.appendChild(enemy);

    let fall = setInterval(function() {
        let top = enemy.offsetTop;
        enemy.style.top = top + 5 + "px";

        if (top > 360) {
            enemy.remove();
            score = score + 1;
            document.getElementById("score").textContent = score;
            clearInterval(fall);
        }

        if (
            enemy.offsetTop > 320 &&
            enemy.offsetLeft < player.offsetLeft + 50 &&
            enemy.offsetLeft + 40 > player.offsetLeft
        ) {
            enemy.remove();
            lives = lives - 1

            document.getElementById("lives").textContent = lives;

            clearInterval(fall);

            if (lives === 0) {
                alert ("Game Over!");
            }
        }

    }, 50);
}

setInterval(createEnemy, 1500);