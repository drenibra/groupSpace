// Search filter

const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', () => {
  mainContent.innerHTML = '';
  let userSearch = document.getElementById('userSearch').value; // value from input
  let filteredSearch = classesArray.filter((item) => {
    return (
      item.title.toLowerCase().includes(userSearch) ||
      item.type.toLowerCase().includes(userSearch)
    );
  });

  template(filteredSearch);
});
