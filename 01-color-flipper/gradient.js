const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "btn-to-bottom":
      setGradient("to bottom");
      break;
    case "btn-to-right":
      setGradient("to right");
      break;
    case "btn-to-left":
      setGradient("to left");
      break;
    case "btn-to-top":
      setGradient("to top");
  }
});

const getRandomNumber = () => Math.floor(Math.random() * hex.length);

const getRandomColor = () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  return hexColor;
};

const setGradient = (direction) => {
  const hexColor1 = getRandomColor();
  const hexColor2 = getRandomColor();
  document.body.style.backgroundImage = `linear-gradient(${direction}, ${hexColor1}, ${hexColor2})`;
  color.textContent = `linear-gradient(to bottom, ${hexColor1}, ${hexColor2})`;
};
