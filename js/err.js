const player = document.getElementById("player");
const game = document.getElementById("game");
const scoreEl = document.getElementById("score");

let playerX = 180;
let score = 0;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") playerX -= 20;
  if (e.key === "ArrowRight") playerX += 20;

  if (playerX < 0) playerX = 0;
  if (playerX > 360) playerX = 360;

  player.style.left = playerX + "px";
});

function createAsteroid() {
  const asteroid = document.createElement("div");
  asteroid.classList.add("asteroid");
  asteroid.innerHTML = "☄️";

  let x = Math.random() * 360;
  let y = -40;

  asteroid.style.left = x + "px";
  game.appendChild(asteroid);

  let fall = setInterval(() => {
    y += 5;
    asteroid.style.top = y + "px";

    if (
      y > 520 &&
      x > playerX - 30 &&
      x < playerX + 30
    ) {
      alert("💥 ИГРА ОКОНЧЕНА! Очки: " + score);
      location.reload();
    }

    if (y > 600) {
      asteroid.remove();
      clearInterval(fall);
      score++;
      scoreEl.innerText = "Очки: " + score;
    }
  }, 30);
}

setInterval(createAsteroid, 1000);