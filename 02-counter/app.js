let count = 0;
let intervalId = null;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("auto-decrease")) {
      autoCounter("decrease");
    } else if (styles.contains("auto-increase")) {
      autoCounter("increase");
    } else if (styles.contains("stop")) {
      clearInterval(intervalId);
    } else {
      count = 0;
    }

    value.textContent = count;
    setColor();
  });
});

const setColor = () => {
  if (count > 0) {
    value.style.color = "green";
  }

  if (count < 0) {
    value.style.color = "red";
  }

  if (count === 0) {
    value.style.color = "#222";
  }
};

const autoCounter = (type) => {
  stopCounter();
  intervalId = setInterval(() => {
    if (type === "increase") {
      count++;
    } else {
      count--;
    }
    value.textContent = count;
    setColor();
  }, 1000);
};

const stopCounter = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
};
