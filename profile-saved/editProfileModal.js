let modal = document.getElementById("modalBox"),
    btn = document.getElementById("editProfileButton"),
    closeBtn = document.getElementsByClassName("close")[0],
    closeBtnSave = document.getElementsByClassName("save")[0],
    main = document.getElementById('main-content');

btn.onclick = function() {
  modal.style.display = "block";
  main.style.filter = "blur(4px)";
}
closeBtn.onclick = function() {
  modal.style.display = "none";
  main.style.filter = "none";
} 
closeBtnSave.onclick = function() {
  modal.style.display = "none";
  main.style.filter = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    main.style.filter = "none";
  }
}