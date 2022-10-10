const password = document.getElementById("password");
const background = document.getElementById("background");

password.addEventListener("input", (e) => {
  background.style.filter = `blur(${20 - e.target.value.length * 2}px)`;
});
