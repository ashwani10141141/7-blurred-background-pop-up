const btnEle = document.querySelector("#btns");
const mainEle = document.querySelector("#mainContainer");
const popEle = document.querySelector("#popup")

const timeEle = document.querySelector(".time-icon")
btnEle.addEventListener("click", ()=>{
  mainEle.classList.add("active");
  popEle.classList.remove("active")
})
timeEle.addEventListener("click", ()=>{
  mainEle.classList.remove("active");
  popEle.classList.add("active");
})
