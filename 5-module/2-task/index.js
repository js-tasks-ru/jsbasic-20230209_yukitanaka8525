function toggleText() {
  let x = document.getElementById("text");
  document.querySelector(".toggle-text-button").onclick = function(){
  if (window.getComputedStyle(x, null).display === "none") {
    x.hidden = false;
  }
  else {
    x.hidden = true;
  }
}
}
