let modal = document.getElementById("modalBox");
let btn = document.getElementById("editProfileButton");
let span = document.getElementsByClassName("close")[0];
let main = document.getElementById('main-content');

btn.onclick = function() {
  modal.style.display = "block";
  main.style.filter = "blur(4px)";
}
span.onclick = function() {
  modal.style.display = "none";
  main.style.filter = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    main.style.filter = "none";
  }
}