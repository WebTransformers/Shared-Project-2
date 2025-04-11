/*Display menu links*/
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const nameInput = document.getElementById("fullname");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const userName = nameInput.value.trim();

    if (userName) {
      alert(`Thanks for subscribing, ${userName}!`); 
    } else {
      alert("Thanks for subscribing!");
    }

    form.reset();
  });
});