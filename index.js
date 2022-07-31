const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

cards.forEach(card => {
  card.addEventListener('dragstart', dragstart);
  card.addEventListener('dragend', dragend);
});

dropzones.forEach(dropzone => {
  dropzone.addEventListener('dragover', dragover);
  dropzone.addEventListener('dragleave', dragleave);
  dropzone.addEventListener('drop', drop);
});

function dragstart() {
  dropzones.forEach(dropzone => dropzone.classList.add('highlight'));
  this.classList.add('is-dragging');
}

function dragend() {
  dropzones.forEach(dropzone => dropzone.classList.remove('highlight'));
  this.classList.remove('is-dragging');
}

function dragover() {
  const draggingCard = document.querySelector('.is-dragging');

  this.classList.add('is-over');
  this.appendChild(draggingCard);
}

function dragleave() {
  this.classList.remove('is-over');
}

function drop() {
  this.classList.remove('is-over');
}