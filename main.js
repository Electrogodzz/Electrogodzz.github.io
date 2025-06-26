const follower = document.getElementById('cursor-follower');
// initial positions
let mouseX = 0;
let mouseY = 0;
let followerX = 0;
let followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateFollower() {
  // Move follower 10% toward cursor with 20px offset
  followerX += (mouseX - followerX - 20) * 0.1;
  followerY += (mouseY - followerY - 20) * 0.1;

  // Flip horizontally if mouse is to the left of the follower's current position
  if (mouseX < followerX) {
    follower.style.transform = `translate(${followerX}px, ${followerY}px) scaleX(-1)`;
  } else {
    follower.style.transform = `translate(${followerX}px, ${followerY}px) scaleX(1)`;
  }

  requestAnimationFrame(animateFollower);
}

animateFollower();
