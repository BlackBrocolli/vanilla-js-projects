const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const container = document.querySelector(".container");
const directionContainer = document.getElementById("direction");
const color1Container = document.getElementById("color1");
const color2Container = document.getElementById("color2");

container.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "btn-to-bottom":
      setGradient("to bottom");
      setDirectionContainer("down");
      break;
    case "btn-to-right":
      setGradient("to right");
      setDirectionContainer("right");
      break;
    case "btn-to-left":
      setGradient("to left");
      setDirectionContainer("left");
      break;
    case "btn-to-top":
      setGradient("to top");
      setDirectionContainer("up");
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
  color.textContent = `linear-gradient(${direction}, ${hexColor1}, ${hexColor2})`;
  setColorRectangle(hexColor1, hexColor2);
};

const setDirectionContainer = (direction) => {
  directionContainer.innerHTML = `<i class="fa-solid fa-arrow-${direction}"></i>`;
};

const setColorRectangle = (color1, color2) => {
  color1Container.style.backgroundColor = color1;
  color2Container.style.backgroundColor = color2;
};
