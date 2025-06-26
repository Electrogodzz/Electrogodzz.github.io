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
const phrases = [
  "Hello there!",
  "Welcome to my site!",
  "Have a great day!",
  "Enjoy the games!",
  "Click around!",
  "Thanks for visiting!",
  "I like being a head",
  "You are a great person",
  "I love you friend!",
  "Z z z, JK i am fully awake 24/7"
];

function sayRandom() {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  speech.textContent = phrases[randomIndex];
}

// Example: change speech every 3 seconds
setInterval(sayRandom, 3000);

// Call it once immediately to show text at start
sayRandom();

