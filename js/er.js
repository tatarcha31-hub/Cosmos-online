let countdownEl = document.getElementById("countdown");
let rocket = document.getElementById("rocket");
let fire = document.getElementById("fire");

function startLaunch() {
  let time = 5;

  countdownEl.innerText = "Подготовка...";

  let interval = setInterval(() => {
    countdownEl.innerText = time;

    if (time <= 0) {
      clearInterval(interval);
      launchRocket();
    }

    time--;
  }, 1000);
}

function launchRocket() {
  countdownEl.innerText = "🚀 ПУСК!";

  fire.style.opacity = 1;

  rocket.style.transform = "translateX(-50%) translateY(-600px)";
}