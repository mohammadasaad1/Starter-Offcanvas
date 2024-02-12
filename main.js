function toggle() {
  button.classList.toggle("none");
  lay.classList.toggle("lay");
}

let button = document.querySelector(".btn");
let lay = document.getElementsByTagName("div")[0];
let btn_side = document.querySelector(".right-side div").children[0];

button.addEventListener("click", toggle);
btn_side.addEventListener("click", toggle);
