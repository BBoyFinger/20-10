const letterButton = document.querySelector("#letter-button");
const letterPanel = document.querySelector("#love-letter");
const letterCard = document.querySelector(".letter-card");
const buttonLabel = document.querySelector("#button-label");

letterButton.addEventListener("click", () => {
  const isOpening = letterButton.getAttribute("aria-expanded") !== "true";

  letterButton.setAttribute("aria-expanded", String(isOpening));
  letterPanel.hidden = !isOpening;
  letterCard.classList.toggle("is-open", isOpening);
  buttonLabel.textContent = isOpening ? "Gấp lá thư lại" : "Mở lá thư";
});
