document.addEventListener("DOMContentLoaded", setEventListeners);

function setEventListeners() {
  rangeInput.addEventListener("input", updateRangeValue);
}
// function setEventListeners() {
//   rangeInput.addEventListener("input", function () {
//     console.log("range");
//     rangeValue.textContent = rangeInput.value;
//     if (rangeInput.value <= 50) {
//       rangeInput.parentNode.style.accentColor = "var(--info-color)";
//       rangeInput.style.backgroundColor = "var(--info-color)";
//     } else if (rangeInput.value > 50 && rangeInput.value < 90) {
//       rangeInput.parentNode.style.accentColor = "var(--warning-color)";
//       rangeInput.style.backgroundColor = "var(--warning-color)";
//     } else {
//       rangeInput.parentNode.style.accentColor = "var(--danger-color)";
//       rangeInput.style.backgroundColor = "var(--danger-color)";
//     }
//   });
// }

const rangeInput = document.querySelector("input[type='range']");
const rangeValue = document.querySelector("#range-value");

function updateRangeValue() {
  console.log("range");
  rangeValue.textContent = rangeInput.value;
  if (rangeInput.value <= 45) {
    rangeInput.style.accentColor = "var(--info-color)";
  } else if (rangeInput.value > 45 && rangeInput.value < 89) {
    rangeInput.style.accentColor = "var(--warning-color)";
  } else {
    rangeInput.style.accentColor = "var(--danger-color)";
  }
}
