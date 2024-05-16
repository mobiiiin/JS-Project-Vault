// Select in to html
const sendBtn = document.querySelector("#sendBtn"),
  email = document.querySelector("#email"),
  subject = document.querySelector("#subject"),
  message = document.querySelector("#message"),
  resetBtn = document.querySelector("#resetBtn"),
  form = document.querySelector("#email-form"),
  loaders = document.querySelector("#loaders"),
  spinner = document.querySelector("#spinner"),
  error = document.querySelectorAll(".error")

// Creating a variable in JS
let m = subject && email && message;
let sendEmailImg = document.createElement("img");

// this function just for events
function eventListener() {
  document.addEventListener("DOMContentLoaded", settings);
  email.addEventListener("blur", nemidonam);
  subject.addEventListener("blur", nemidonam);
  message.addEventListener("blur", nemidonam);
  sendBtn.addEventListener("click", activeSendBtn);
  resetBtn.addEventListener("click", activeResetBtn);
  form.addEventListener("submit", submitForm);
  // sendBtn.addEventListener("click",submitForm)
}
eventListener()

// For project settings, we can put some other things in it
function settings() {
  sendBtn.disabled = true;
  resetBtn.disabled = true

}

// 
function nemidonam() {
  checkInputsValue(this)

  if (this.type === "email") {
    checkInputEmail(this);
  }

  activeSendBtn()
  activeResetBtn()
}

// To check whether the inputs are empty or not
function checkInputsValue(inputs) {
  if (inputs.value.length > 0) {
    inputs.style.borderBottomColor = "green";
    inputs.classList.add("success")
  }
  else {
    inputs.style.borderBottomColor = "red";
    inputs.classList.remove("error")

  }
}

// To check whether the email input has "@" or not
function checkInputEmail(inputs) {
  if (inputs.value.includes("@")) {
    inputs.style.borderBottomColor = "green";
    inputs.classList.add("success")

  } else {
    inputs.style.borderBottomColor = "red";
    inputs.classList.remove("error")

  }
}
