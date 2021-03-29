const projectsBtn = document.getElementById('projectsBtn');
const tutorialsBtn = document.getElementById('tutorialsBtn');
const blogsBtn = document.getElementById('blogsBtn');
const allBtn = document.getElementById('allBtn');
let mainContent = document.getElementById('main-content');

// prettier-ignore
classesArray = [
    {title: 'How I create avatars using Adobe Illustrator',image: 'src="../images/card1.png"',likes: '11',comments: '4',type: 'tutorials'},
    {title: 'How I create avatars using Adobe Illustrator',image: 'src="../images/card2.png"',likes: '11',comments: '4',type: 'tutorials'},
    {title: 'I made this fire in Adobe After Effects',image: 'src="../images/card3.png"',likes: '11',comments: '4',type: 'projects'},
    {title: 'Work-to-do list in HTML&CSS',image: 'src="../images/card4.png"',likes: '11',comments: '4',type: 'tutorials'},
    {title: 'My portait done in Adobe Illustrator',image: 'src="../images/card5.png"',likes: '11',comments: '4',type: 'projects'},
    {title: '10 Steps to Improve Your Photoshop Skills',image: 'src="../images/card6.png"',likes: '11',comments: '4',type: 'blogs'},
    {title: 'Build your website using HTML&CSS',image: 'src="../images/card7.png"',likes: '11',comments: '4',type: 'projects'},
    {title: 'Lion shattering in pieces Done in Adobe Illustrator',image: 'src="../images/card8.png"',likes: '11',comments: '4',type: 'projects'},
    {title: 'Importance of Colors in Graphic Design',image: 'src="../images/card9.png"',likes: '11',comments: '4',type: 'blogs'},
    {title: 'Steps to building the perfect CV',image: 'src="../images/card10.png"',likes: '11',comments: '4',type: 'tutorials'},
    {title: 'How to become a Graphic Designer',image: 'src="../images/card11.png"',likes: '11',comments: '4',type: 'blogs'},
    {title: 'This cool low-poly cat I created in Adobe Illustrator',image: 'src="../images/card12.png"',likes: '11',comments: '4',type: 'projects'},
];

let showProjects = () => {
  mainContent.innerHTML = '';
  let projects = classesArray.filter((item) => {
    return item.type == 'projects';
  });

  template(projects);
};

let showTutorials = () => {
  mainContent.innerHTML = '';
  let tutorials = classesArray.filter((item) => {
    return item.type == 'tutorials';
  });

  template(tutorials);
};

let showBlogs = () => {
  mainContent.innerHTML = '';
  let blogs = classesArray.filter((item) => {
    return item.type == 'blogs';
  });

  template(blogs);
};

let showAll = () => {
  mainContent.innerHTML = '';
  let all = classesArray.filter((item) => {
    return item.type;
  });

  template(all);
};

let template = (arr) => {
  arr.forEach((project) => {
    let html = `<div class="card">
        <figure class="card-image">
          <img ${project.image} alt="" />
          <figcaption class="card-caption">
            ${project.title}
          </figcaption>
        </figure>
        <div class="user-feedback">
          <span class="like icon"> <i class="fas fa-heart"></i>${project.likes}</span>
          <span class="comment icon"><i class="fas fa-comment"></i>${project.comments}</span>
        </div>  
      </div>`;

    mainContent.innerHTML += html;
  });
};

projectsBtn.addEventListener('click', showProjects);
tutorialsBtn.addEventListener('click', showTutorials);
blogsBtn.addEventListener('click', showBlogs);
allBtn.addEventListener('click', showAll);

showAll();
