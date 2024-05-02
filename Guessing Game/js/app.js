// select
let btn = document.querySelector(".btn");

// this function for addEventListener
function events() {
  btn.addEventListener("click", buildNumber)
  btn.addEventListener("click", gettingInput)
}
events()

// this function for build number 1-100
function buildNumber() {
  let randomNumber = Math.floor(Math.random() * 100)
  console.log(randomNumber);
}

// this function for getting input from the user
function gettingInput() {
    let entrance = Number(prompt("be nazaet add chande haan?"))
    console.log(entrance);
    compare()
  }