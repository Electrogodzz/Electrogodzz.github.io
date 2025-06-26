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
  // Move 10% toward cursor each frame, offset by 20px so it lags a little
  followerX += (mouseX - followerX - 20) * 0.1;
  followerY += (mouseY - followerY - 20) * 0.1;

  // Flip horizontally if cursor is left of follower
  const scaleX = mouseX < followerX ? -1 : 1;

  follower.style.transform = `translate(${followerX}px, ${followerY}px) scaleX(${scaleX})`;

  // Position speech bubble slightly above and centered horizontally to the follower
  speech.style.left = `${followerX}px`;
  speech.style.top = `${followerY - 60}px`;  // adjust vertical offset as needed
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
