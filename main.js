const introInput = document.getElementById("intro-toggle")
const conciseText = document.querySelector(".intro-text ul")
const interestingText = document.querySelectorAll(".intro-text > p")
const conciseLabel = document.getElementById("concise")
const interestingLabel = document.getElementById("interesting")

introInput.addEventListener("change", function() {
  const isChecked = introInput.checked
  conciseText.style.visibility = isChecked ? "hidden" : "visible"
  interestingText.forEach(function(p) {
    p.style.visibility = isChecked ? "visible" : "hidden"
  })

  conciseLabel.style.color = isChecked ? "#888888" : "#5e7ff8"
  interestingLabel.style.color = isChecked ? "#5e7ff8" : "#888888"
})
