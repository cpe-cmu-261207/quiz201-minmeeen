const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
const s = document.querySelector("#search");
const r = document.querySelector("#reser");

// define more constants and variables here

btn_toggle.onclick = () => {
  const newTodo = document.getElementById("author");
  if (newTodo.innerText === "630610768") {
    newTodo.innerText = "630610768 Sirapat Panyathong";
  } else {
    newTodo.innerText = "630610768";
  }

}

// s.onclick = () => {
//   const f
// }


// r.onclick = () => {
//   const t = document.getElementById("text");
//   t = JSON.parse(localStorage.getItem("ts"));


//   let newLiTag = "";
//   ts.forEach((element) => {
//     newLiTag = `<li">${element}</li>`;
//   });
//   tList.innerHTML = newLiTag;
// }
