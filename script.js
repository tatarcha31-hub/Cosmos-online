const planetBtn = document.querySelector('#planet-btn')
const planrtMenu = document.querySelector('.dropdown')

planetBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    planrtMenu.classList.toggle('show');
});
document.addEventListener('click', () => {
    planrtMenu.classList.remove('show');
});


const articleBtn = document.querySelector('#Article-btn');
const articleMenu = document.querySelector('#Article-menu');

articleBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    articleMenu.classList.toggle('show');
});
document.addEventListener('click', () => {
    articleMenu.classList.remove('show');
});

