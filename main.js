const follower = document.getElementById('cursor-follower');
let mouseX = 0;
let mouseY = 0;
let followerX = 0;
let followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateFollower() {
  // Move 10% toward cursor each frame, offset by 20px so it lags a little
  followerX += (mouseX - followerX - 20) * 0.1;
  followerY += (mouseY - followerY - 20) * 0.1;

  follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
  requestAnimationFrame(animateFollower);
}

animateFollower();
