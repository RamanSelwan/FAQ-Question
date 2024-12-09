const feqAnswer = document.querySelectorAll(".faq-answer");
const toggleButton = document.querySelectorAll(".toggle-btn");

toggleButton.forEach(function (button, index) {
  button.addEventListener("click", function () {
    const ans = feqAnswer[index]; 

    if (ans.style.display === "block") {
 
      ans.style.display = "none";
      button.textContent = "+";
    } else {

      feqAnswer.forEach((answer, idx) => {
        answer.style.display = "none";
        toggleButton[idx].textContent = "+";
      });

    
      ans.style.display = "block";
      button.textContent = "-";
    }
  });
});
