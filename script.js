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


function openModal() {
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

/* через 10 секунд открывается автоматически */
setTimeout(() => {
  openModal();
}, 10000);


window.onclick = function(e) {
  let modal = document.getElementById("modal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
