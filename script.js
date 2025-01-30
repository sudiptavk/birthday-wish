// Floating balloons effect
const balloonContainer = document.querySelector('.balloon-container');
const colors = ['#ff6f61', '#ffa07a', '#ff69b4', '#ffb6c1', '#ff1493'];

function createBalloon() {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');
  balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  balloon.style.left = `${Math.random() * 100}%`;
  balloon.style.animationDuration = `${Math.random() * 3 + 5}s`;
  balloonContainer.appendChild(balloon);

  setTimeout(() => {
    balloon.remove();
  }, 8000);
}

setInterval(createBalloon, 500);

// Gift box click event
const giftBox = document.querySelector('.gift-box');
const messageCard = document.querySelector('.message-card');

giftBox.addEventListener('click', () => {
  giftBox.style.display = 'none';
  messageCard.style.display = 'block';
});
