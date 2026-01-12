
const inputBox = document.getElementById("inputbox");
const listBox = document.getElementById("listbox");

function Add(){
    if (inputBox.value == "") {
        alert("You must write something!")
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listBox.appendChild(li);
    }
    inputBox.value = "";
};