// select modal-btn,modal-overlay,close-btn
const modalBtn = document.querySelector(".modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
const timerCountdown = document.getElementById("timer-countdown");

let time = 5;
let countdown;

// listen for click events on modal-btn and close-btn
modalBtn.addEventListener("click", () => {
  timerCountdown.innerHTML = time;
  // when user clicks modal-btn add .open-modal to modal-overlay
  modalOverlay.classList.add("open-modal");

  countdown = setInterval(() => {
    time--;
    timerCountdown.innerHTML = time;

    if (time === 0) {
      clearInterval(countdown);
      modalOverlay.classList.remove("open-modal");
      time = 5;
    }
  }, 1000);
});

closeBtn.addEventListener("click", () => {
  // when user clicks close-btn remove .open-modal from modal-overlay
  modalOverlay.classList.remove("open-modal");
});

modalOverlay.addEventListener("click", (e) => {
  modalOverlay.classList.remove("open-modal");
});
