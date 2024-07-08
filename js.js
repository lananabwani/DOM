'use strict'
    
const addClass = () => {
    const el = document.getElementById("Paragraph1");
    if (document.getElementById("addClass").value == "highlight")
      el.className = "highlight";
    if (document.getElementById("addClass").value == "underline")
      el.className = "underline";
    if (document.getElementById("addClass").value == "bold")
      el.className = "bold";
  };
  
  function toggleVisibility(elementId) {
  const element = document.getElementById(elementId);
  element.classList.toggle('hidden');
}
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", function() {
myButton.textContent = "Clicked!";
myButton.style.pointerEvents = "none";
});