<script>
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
    // move 10% toward the cursor each frame
    followerX += (mouseX - followerX - 20) * 0.1;
    followerY += (mouseY - followerY - 20) * 0.1;

    follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
    requestAnimationFrame(animateFollower);
  }

  animateFollower();
</script>

