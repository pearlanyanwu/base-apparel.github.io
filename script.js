let submitButton = document.getElementById("submit-button");
let email = document.getElementById("email");
const regex = /^[a-zA-Z0-9_]+@[a-zA-Z]+\.[a-z]{3}$/;

submitButton.addEventListener("click", () => {
  // if (email.value == "" || !regex.test(email.value)) {
  //   alert("Please enter a valid email.")
  // } else {
  //   alert("Subscribed!");
  // }

  return email.value == "" || !regex.test(email.value) ? alert("Please enter a valid email") : alert("Subscribed!");
})