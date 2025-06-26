const follower = document.getElementById('cursor-follower');
const speech = document.getElementById('speech-bubble');

let mouseX = 0;
let mouseY = 0;
let followerX = 0;
let followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateFollower() {
  followerX += (mouseX - followerX - 20) * 0.1;
  followerY += (mouseY - followerY - 20) * 0.1;

  const scaleX = mouseX < followerX ? -1 : 1;
  follower.style.transform = `translate(${followerX}px, ${followerY}px) scaleX(${scaleX})`;

  // Position speech bubble slightly above and centered horizontally to the follower
  speech.style.left = `${followerX}px`;
  speech.style.top = `${followerY - 60}px`;  // 60px above sprite, adjust as needed
  speech.style.transform = 'translateX(-50%)'; // center horizontally

  requestAnimationFrame(animateFollower);
}

animateFollower();

// Optional: change speech text over time or on events
function say(text) {
  speech.textContent = text;
}

// Example: change speech after 3 seconds
setTimeout(() => {
  say("Welcome to my site!");
}, 3000);
