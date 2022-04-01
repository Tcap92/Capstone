export function test() {
  console.log("test");
}
export function btn() {
  document.querySelector("#btn");
  const radioButtons = document.querySelectorAll('input[name="question"]');
  btn.addEventListener("click", () => {
    let selectedAnswer;
    for (const radioButton of radioButtons) {
      if (radioButton.checked) {
        selectedAnswer = radioButton.value;
        break;
      }
    }
  });
}
