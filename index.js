const addition = document.querySelectorAll(".add");
const message = document.querySelector(".text");

addition.forEach((button) => {
  button.addEventListener("click", () => {
    message.textContent = "Added Successfully";
    message.style.color = "red";
  });
});
