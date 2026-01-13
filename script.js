const inputBox = document.getElementById("inputbox");
const listBox = document.getElementById("listbox");

function Add() {
  if (inputBox.value == "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listBox.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    li.appendChild(span);
  }
  inputBox.value = "";
}

listBox.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      
    } else if (e.target.closest("span")) {
      e.stopPropagation();
      e.target.closest("li").remove();
    }
  },
  false
);
