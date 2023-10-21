const openModal = document.getElementById("open-modal")
const closeModal = document.getElementById("close-modal")
const modal = document.querySelector(".modal")

openModal.addEventListener("click", () => {
  console.log("Open button clicked")
  modal.classList.add("modal-open")
})

closeModal.addEventListener("click", () => {
  console.log("Close button clicked")
  modal.classList.remove("modal-open")
})
