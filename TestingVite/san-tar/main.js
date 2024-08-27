const myName = "Ei Sandy Phyo";
const app = document.querySelector("#app");

const showMyName = function(name){
  app.innerText = name;
  console.log(name);
}

showMyName(myName);