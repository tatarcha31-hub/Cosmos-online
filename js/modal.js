
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
