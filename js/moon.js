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





const div = document.querySelector('.div')
const textarea = document.querySelector('.inp')
const btnComent = document.querySelector('.btn-coment')

let created = false;

textarea.addEventListener('click', () => {

    if (created) return;

    const newInput = document.createElement('input');
    const secondInput = document.createElement('input');
    const newBtn = document.createElement('button')
    const div2 = document.querySelector('.result-coment');

    newBtn.textContent = "Отправить";
    newBtn.classList.add('new-btn')

    secondInput.type = "text";
    secondInput.placeholder = "Введите вашу фамилию"
    secondInput.classList.add('new-input')

    newInput.type = "text";
    newInput.placeholder = "Введите ваше имя";
    newInput.classList.add('new-input')

    newBtn.addEventListener('click', () => {
        const newDiv = document.createElement('div');
        newDiv.textContent = (`${newInput.value} ${secondInput.value} ${'Оставил коментарий:'}   ${textarea.value}`)
        newDiv.classList.add('new-coment')
        div2.append(newDiv);
    })

    div.append(newInput)
    div.append(secondInput)
    div.append(newBtn);

    created = true;
});


const newInput = document.querySelector('.new-input');
const newBtn = document.querySelector('.new-btn');
const div2 = document.querySelector('.result-coment');

newBtn.addEventListener('click', () => {
    const newDiv = document.createElement('div')
    newDiv.textContent = textarea.value
    div2.append(newDiv)

})


