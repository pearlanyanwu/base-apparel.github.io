let submitButton = document.getElementById("submit-button");
let email = document.getElementById("email");
let errorIcon = document.getElementById("error-icon")
const regex = /^[a-zA-Z0-9_]+@[a-zA-Z]+\.[a-z]{3}$/;

submitButton.addEventListener("click", () => {
  if (email.value == "" || !regex.test(email.value)) {
    email.style.borderColor = "hsl(0, 36%, 70%)";
    errorIcon.style.visibility = "visible";
  } else {
    alert("Subscribed!");
  }
});