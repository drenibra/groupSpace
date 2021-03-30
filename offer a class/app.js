let postBtn = document.getElementById('post')
// let closeBtn = document.getElementById('close')
// let mainContent = document.getElementById('main-content-posts')

let add = () => {
    let spaceTitle = document.getElementById('space-title').value;
    let spaceDesc = document.getElementById('space-desc').value;
    let categorySelect = document.getElementById('category-select').value;
    let spaceTags = document.getElementById('space-tags').value;
    let spaceFile = document.getElementById('space-file').value;
    console.log(spaceFile);
    let html = `
    <div class="contentblock2">
    <div class="contentphotoimg2">
      <p>${spaceTitle}</p>
    </div>
    <div class="likecomment2">
      <p>${spaceDesc}</p>
      <p>${categorySelect}</p>
      <p>${spaceTags}</p>
    </div>
  </div>`

  localStorage.setItem('html', html)
  location.href = '../profile-saved/posts.html'
}

postBtn.addEventListener('click', add)