document.addEventListener("DOMContentLoaded", ()=> {
  const toggleBtn = document.getElementById("toggle-btn");
  const body = document.body;
  const btnText = toggleBtn.querySelector(".btn-text");

  toggleBtn.addEventListener("click", () => {

    // Toggle the class on the body to switch between states
    body.classList.toggle("goodies-expanded");

    // Change butto text based on the state >>> FUN ERROR
    if( body.classList.contains("goodies-expanded")) {
      btnText.textContent = "We are alive!";
    } else {
      btnText.textContent = "Another movie happening";
    }
  })
})