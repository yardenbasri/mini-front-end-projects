const questions = document.querySelectorAll(".question")

questions.forEach((question) => {
  question.addEventListener("click", () => {
    if (question.classList.contains("open")) {
      question.classList.remove("open")
    } else {
      questions.forEach((question) => {
        question.classList.remove("open")
      })
      question.classList.add("open")
    }
  })
})
