let submitButton = document.getElementById("submit-button");
let email = document.getElementById("email");
const regex = /^[a-zA-Z0-9_]+@[a-zA-Z]+\.[a-z]{3}$/;

submitButton.addEventListener("click", () => {
  if (email.value == "") {
    alert("Input field cannot be empty if you intend to subscribe.");
  } else {
    if (regex.test(email.value)) {
      alert("Subscribed!");
    } else {
      alert("Incorrect email format. Please try again.");
    }
  }
});