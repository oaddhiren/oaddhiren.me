const intro = document.getElementById('intro');
const prof = document.getElementById('profiles');
const main = document.getElementById('main');
const introSound = document.getElementById('introSound');
let done = false;

// Function to move to profiles screen
function showProfiles() {
  if (done) return;
  done = true;
  intro.style.opacity = '0';
  setTimeout(function() {
    intro.style.display = 'none';
    prof.style.display = 'flex';
    void prof.offsetWidth; // Trigger reflow
    prof.style.opacity = '1';
  }, 700);
}

// User interaction allows audio to play and triggers intro skip
intro.addEventListener('click', function() {
  if (!done) {
    // Play the Netflix sound on user interaction
    introSound.volume = 0.5; // adjust volume if needed
    introSound.play().catch(e => console.log("Audio play prevented", e));
    
    // Give time for the animation and sound before moving to profiles
    setTimeout(showProfiles, 3000); // 3 seconds matching the main animation
  }
});

intro.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' || e.key === ' ') {
    introSound.play().catch(e => console.log("Audio play prevented", e));
    setTimeout(showProfiles, 3000);
  }
});

// Profile Selection
document.querySelectorAll('.profile').forEach(function(btn) {
  btn.addEventListener('click', function() {
    const name = btn.getAttribute('data-name');
    document.getElementById('who').textContent = name;
    document.getElementById('meName').textContent = name;
    
    const av = document.getElementById('meAvatar');
    av.className = 'avatar ' + btn.querySelector('.avatar').className.split(' ')[1];
    
    prof.style.opacity = '0';
    setTimeout(function() {
      prof.style.display = 'none';
      main.style.display = 'block';
      void main.offsetWidth; // Trigger reflow
      main.style.opacity = '1';
      window.scrollTo(0, 0);
    }, 500);
  });
});

// Navigation Background Shift on Scroll
window.addEventListener('scroll', function() {
  document.getElementById('nav').classList.toggle('solid', window.scrollY >= 80);
});

// Connect Dropdown Toggle Logic
const connectBtn = document.getElementById('connectBtn');
const connectDropdown = document.getElementById('connectDropdown');

connectBtn.addEventListener('click', function(e) {
  e.preventDefault();
  connectDropdown.classList.toggle('show');
});

// Close dropdown if clicked outside
window.addEventListener('click', function(e) {
  if (!connectBtn.contains(e.target) && !connectDropdown.contains(e.target)) {
    connectDropdown.classList.remove('show');
  }
});
