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
  // Calculate vector and distance between follower and mouse
  const dx = mouseX - followerX;
  const dy = mouseY - followerY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  const minDistance = 50; // Minimum distance from cursor (change as you want)

  if (distance > minDistance) {
    // Normalize direction vector
    const dirX = dx / distance;
    const dirY = dy / distance;

    // Target position at minDistance away from mouse
    const targetX = mouseX - dirX * minDistance;
    const targetY = mouseY - dirY * minDistance;

    // Smoothly move follower 10% closer to target position each frame
    followerX += (targetX - followerX) * 0.1;
    followerY += (targetY - followerY) * 0.1;
  }
  // If closer than minDistance, don’t move closer

  // Flip horizontally if cursor is left of follower
  const scaleX = mouseX < followerX ? -1 : 1;
  follower.style.transform = `translate(${followerX}px, ${followerY}px) scaleX(${scaleX})`;

  // Position speech bubble above and horizontally centered on follower
  speech.style.left = `${followerX}px`;
  speech.style.top = `${followerY - 60}px`; // adjust vertical offset if needed
  speech.style.transform = 'translateX(-50%)'; // center horizontally

  requestAnimationFrame(animateFollower);
}

animateFollower();

const phrases = [
  "Hello there!",
  "Welcome to my site!",
  "Have a great day!",
  "Enjoy the games!",
  "Click around!",
  "Thanks for visiting!",
  "My name is Orbit, nice to meet you!",
  "Z z z, JK I would never fall asleep on you!",
  "I am as happy as can be to be your friend!",
  "I love being your friend!",
  "Hope you enjoy being on this site!",
  "My creator put a lot of effort into me and this here site so I hope you enjoy!"
];

function sayRandom() {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  speech.textContent = phrases[randomIndex];
}

// Change speech text every 3 seconds
setInterval(sayRandom, 3000);

// Show initial speech immediately
sayRandom();

let count = 0;
function increment() {
  count++;
  document.getElementById('click-count').textContent = count;
}
