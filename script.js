const dropdown = document.querySelector(".dropdown")
const dropdownItems = document.querySelector(".dropdown__items")

dropdown.addEventListener("click", () => {
  dropdownItems.classList.toggle("show")
  dropdown.style.transition = "all 0.5s ease"
})