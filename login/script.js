const container = document.getElementById("container");
const registerBtn = document.getElementById("register");//sign up//
const registerBtn1 = document.getElementById("register1");//create account//
const loginBtn = document.getElementById("login");//sign in//
const loginBtn1 = document.getElementById("login1");//already have an account//

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

registerBtn1.addEventListener("click", () => {
  container.classList.add("active");
  registerBtn1.style.display = "none";
  loginBtn1.style.display = "block";
});

loginBtn1.addEventListener("click", () => {
  container.classList.remove("active");
  loginBtn1.style.display = "none";
  registerBtn1.style.display = "block";
});
loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});
