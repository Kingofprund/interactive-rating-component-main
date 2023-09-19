document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.querySelector(".submit");
  const ratingNumbers = document.querySelectorAll(".number");
  const startContainer = document.querySelector(".start-container");
  const endContainer = document.querySelector(".end-container");
  const spanNumber = document.querySelector(".span-number");

  let selectedNumber = null;

  submitButton.addEventListener("click", () => {
    startContainer.classList.add("hidden");
    endContainer.classList.remove("hidden");

    if (selectedNumber !== null) {
      spanNumber.textContent = selectedNumber;
    }
  });

  ratingNumbers.forEach(number => {
    number.addEventListener("click", () => {
      number.classList.toggle("accent");

      selectedNumber = number.textContent;
    });
  });
});
