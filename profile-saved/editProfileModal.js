let modal = document.getElementById("modalBox"),
    btn = document.getElementById("editProfileButton"),
    closeBtn = document.getElementsByClassName("close")[0],
    saveBtn = document.getElementsByClassName("save")[0],
    main = document.getElementById('main-content');

btn.onclick = function() {
  modal.style.display = "block";
  main.style.filter = "blur(4px)";
}
closeBtn.onclick = function() {
  modal.style.display = "none";
  main.style.filter = "none";
} 
saveBtn.onclick = function() {
  modal.style.display = "none";
  main.style.filter = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    main.style.filter = "none";
  }
}

let fName = document.getElementById('fName');
let jobTitle = document.getElementById('jobTitle');
let quote = document.getElementById('quote');

saveBtn.addEventListener('click', function () {
  let nameInput = document.getElementById('name-input').value;
  let bioInput = document.getElementById('bio-input').value;
  let quoteInput = document.getElementById('quote-input').value;
  fName.innerHTML = nameInput;
  jobTitle.innerHTML = bioInput;
  quote.innerHTML = quoteInput;
});

let mainContent = document.getElementById('main-content-posts')
mainContent.innerHTML = localStorage.getItem('html')


