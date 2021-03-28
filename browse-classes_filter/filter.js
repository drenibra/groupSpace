let projects = document.getElementById('projectsBtn'),
    tutorials = document.getElementById('tutorialsBtn'),
    blogs = document.getElementById('blogsBtn'),
    all = document.getElementById('allBtn');

    
class Classes {
    constructor(_array) {
        this.array = _array;
    }
    print() {
        for (let card of this.array) {
            document.write(`<div class="card ${card.type}">`);
            document.write(`<figure class="card-image">`);
            document.write(`<img ${card.image}/>`);
            document.write(`<figcaption class="card-caption">${card.title}</figcaption>`);
            document.write(`</figure>`);
            document.write(`<div class="user-feedback">`);
            document.write(`<span class="like icon">`);
            document.write(`<i class="fas fa-heart"></i>${card.likes}`);
            document.write(`</span>`);
            document.write(`<span class="comment icon">`);
            document.write(`<i class="fas fa-comment"></i>${card.comments}`);
            document.write(`</span>`);
            document.write(`</div>`);
            document.write(`</div>`);
        }
    }
}
    
var classesArray = [
    {
        title: 'How I create avatars using Adobe Illustrator',
        image: 'src="../images/card1.png"',
        likes: '11',
        comments: '4',
        type: 'tutorials'
    },
    {
        title: 'How I create avatars using Adobe Illustrator',
        image: 'src="../images/card2.png"',
        likes: '11',
        comments: '4',
        type: 'tutorials'
    },
    {
        title: 'I made this fire in Adobe After Effects',
        image: 'src="../images/card3.png"',
        likes: '11',
        comments: '4',
        type: 'projects'
    },
    {
        title: 'Work-to-do list in HTML&CSS',
        image: 'src="../images/card4.png"',
        likes: '11',
        comments: '4',
        type: 'tutorials'
    },
    {
        title: 'My portait done in Adobe Illustrator',
        image: 'src="../images/card5.png"',
        likes: '11',
        comments: '4',
        type: 'projects'
    },
    {
        title: '10 Steps to Improve Your Photoshop Skills',
        image: 'src="../images/card6.png"',
        likes: '11',
        comments: '4',
        type: 'blogs'
    },
    {
        title: 'Build your website using HTML&CSS',
        image: 'src="../images/card7.png"',
        likes: '11',
        comments: '4',
        type: 'projects'
    },
    {
        title: 'Lion shattering in pieces Done in Adobe Illustrator',
        image: 'src="../images/card8.png"',
        likes: '11',
        comments: '4',
        type: 'projects'
    },
    {
        title: 'Importance of Colors in Graphic Design',
        image: 'src="../images/card9.png"',
        likes: '11',
        comments: '4',
        type: 'blogs'
    },
    {
        title: 'Steps to building the perfect CV',
        image: 'src="../images/card10.png"',
        likes: '11',
        comments: '4',
        type: 'tutorials'
    },
    {
        title: 'How to become a Graphic Designer',
        image: 'src="../images/card11.png"',
        likes: '11',
        comments: '4',
        type: 'blogs'
    },
    {
        title: 'This cool low-poly cat I created in Adobe Illustrator',
        image: 'src="../images/card12.png"',
        likes: '11',
        comments: '4',
        type: 'projects'
    },
];

var printClasses = new Classes(classesArray);
printClasses.print();
let projectsArray = [];
let tutorialsArray = [];
let blogsArray = [];
for (let card of classesArray) {
    if (card.type == 'projects') {
        projectsArray.push(card);
    }
    else if (card.type == 'tutorials') {
        tutorialsArray.push(card);
    } else if (card.type == 'blogs') {
        blogsArray.push(card);
    }
}
console.log(projectsArray);
console.log(tutorialsArray);
console.log(blogsArray);
function findElement (element, display) {
    var elem = document.getElementsByClassName(element);
    for (var i=0;i<elem.length;i+=1){
        elem[i].style.display = display;
    }
}
projects.addEventListener('click', function() {
    findElement('blogs', 'none');
    findElement('projects', 'flex');
    findElement('tutorials', 'none');
});
tutorials.addEventListener('click', function() {
    findElement('blogs', 'none');
    findElement('projects', 'none');
    findElement('tutorials', 'flex');
});
blogs.addEventListener('click', function() {
    findElement('blogs', 'flex');
    findElement('projects', 'none');
    findElement('tutorials', 'none');
});
all.addEventListener('click', function() {
    findElement('blogs', 'flex');
    findElement('projects', 'flex');
    findElement('tutorials', 'flex');
});