const intro = document.getElementById('intro');
const prof = document.getElementById('profiles');
const main = document.getElementById('main');
let done = false;

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

const t = setTimeout(showProfiles, 3400);

intro.addEventListener('click', function() {
  clearTimeout(t);
  showProfiles();
});

intro.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' || e.key === ' ') {
    clearTimeout(t);
    showProfiles();
  }
});

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

window.addEventListener('scroll', function() {
  document.getElementById('nav').classList.toggle('solid', window.scrollY >= 80);
});