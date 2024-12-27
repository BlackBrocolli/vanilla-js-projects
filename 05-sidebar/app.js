const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const dropdownBtns = document.querySelectorAll(".dropdown-btn");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});

dropdownBtns.forEach((btn) => {
  /* btn.classList.toggle("show-dropdown"); */
  btn.addEventListener("click", () => {
    btn.classList.toggle("show-dropdown");
  });
});
