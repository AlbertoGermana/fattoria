// Lista animali con nomi IT/EN, immagini e suoni (placeholder)
const animals = [
  {it: 'Cane', en: 'Dog', img: 'img/dog.png', sound: 'sounds/dog.wav'},
  {it: 'Gatto', en: 'Cat', img: 'img/cat.png', sound: 'sounds/cat.mp3'},
  {it: 'Mucca', en: 'Cow', img: 'img/cow.png', sound: 'sounds/cow.mp3'},
  {it: 'Cavallo', en: 'Horse', img: 'img/horse.png', sound: 'sounds/horse.mp3'},
  {it: 'Pecora', en: 'Sheep', img: 'img/sheep.png', sound: 'sounds/sheep.wav'},
  {it: 'Maiale', en: 'Pig', img: 'img/pig.png', sound: 'sounds/pig.mp3'},
  {it: 'Gallina', en: 'Hen', img: 'img/hen.png', sound: 'sounds/hen.mp3'},
  {it: 'Anatra', en: 'Duck', img: 'img/duck.png', sound: 'sounds/duck.mp3'},
  {it: 'Capra', en: 'Goat', img: 'img/goat.png', sound: 'sounds/goat.mp3'},
  {it: 'Asino', en: 'Donkey', img: 'img/donkey.png', sound: 'sounds/donkey.mp3'},
  {it: 'Volpe', en: 'Fox', img: 'img/fox.png', sound: 'sounds/fox.mp3'},
  {it: 'Lupo', en: 'Wolf', img: 'img/wolf.png', sound: 'sounds/wolf.wav'},
  {it: 'Leone', en: 'Lion', img: 'img/lion.png', sound: 'sounds/lion.mp3'},
  {it: 'Tigre', en: 'Tiger', img: 'img/tiger.png', sound: 'sounds/tiger.wav'},
  {it: 'Elefante', en: 'Elephant', img: 'img/elephant.png', sound: 'sounds/elephant.mp3'},
  {it: 'Cammello', en: 'Camel', img: 'img/camel.png', sound: 'sounds/camel.mp3'},
  {it: 'Rinoceronte', en: 'Rhino', img: 'img/rhino.png', sound: 'sounds/rhino.mp3'},
  {it: 'Toro', en: 'Bull', img: 'img/bull.png', sound: 'sounds/bull.mp3'},
  {it: 'Corvo', en: 'Crow', img: 'img/crow.png', sound: 'sounds/crow.mp3'},
  {it: 'Gufo', en: 'Owl', img: 'img/owl.png', sound: 'sounds/owl.mp3'},
  {it: 'Aquila', en: 'Eagle', img: 'img/eagle.png', sound: 'sounds/eagle.wav'},
  {it: 'Canguro', en: 'Kangaroo', img: 'img/kangaroo.png', sound: 'sounds/kangaroo.mp3'},
  {it: 'Coccodrillo', en: 'Crocodile', img: 'img/crocodile.png', sound: 'sounds/crocodile.mp3'},
  {it: 'Gorilla', en: 'Gorilla', img: 'img/gorilla.png', sound: 'sounds/gorilla.mp3'},
  {it: 'Ippopotamo', en: 'Hippo', img: 'img/hippo.png', sound: 'sounds/hippo.mp3'},
  {it: 'Foca', en: 'Seal', img: 'img/seal.png', sound: 'sounds/seal.mp3'},
  {it: 'Panda', en: 'Panda', img: 'img/panda.png', sound: 'sounds/panda.mp3'},
  {it: 'Scimmia', en: 'Monkey', img: 'img/monkey.png', sound: 'sounds/monkey.mp3'},
  {it: 'Tartaruga', en: 'Turtle', img: 'img/turtle.png', sound: 'sounds/turtle.mp3'},
  {it: 'Balena', en: 'Whale', img: 'img/whale.png', sound: 'sounds/whale.wav'},
  {it: 'Delfino', en: 'Dolphin', img: 'img/dolphin.png', sound: 'sounds/dolphin.wav'},
  {it: 'Serpente', en: 'Snake', img: 'img/snake.png', sound: 'sounds/snake.mp3'},
  {it: 'Ape', en: 'Bee', img: 'img/bee.png', sound: 'sounds/bee.mp3'},
];

let currentLang = 'it';

// Crea particelle animate di sfondo
function createParticles() {
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'particles';
  document.body.appendChild(particlesContainer);
  
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    particlesContainer.appendChild(particle);
  }
}

// Crea effetto sonoro visivo
function createSoundEffect(btn) {
  const effect = document.createElement('div');
  effect.className = 'sound-effect';
  btn.appendChild(effect);
  
  setTimeout(() => {
    if (effect.parentNode) {
      effect.parentNode.removeChild(effect);
    }
  }, 600);
}

// Crea effetti di coriandoli quando si clicca un bottone
function createConfetti(btn) {
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
  const rect = btn.getBoundingClientRect();
  
  for (let i = 0; i < 10; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '6px';
    confetti.style.height = '6px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = (rect.left + rect.width / 2) + 'px';
    confetti.style.top = (rect.top + rect.height / 2) + 'px';
    confetti.style.pointerEvents = 'none';
    confetti.style.borderRadius = '50%';
    confetti.style.zIndex = '1000';
    
    document.body.appendChild(confetti);
    
    const angle = (Math.random() * 360) * Math.PI / 180;
    const velocity = Math.random() * 150 + 50;
    const gravity = 300;
    
    let x = 0;
    let y = 0;
    let vx = Math.cos(angle) * velocity;
    let vy = Math.sin(angle) * velocity;
    
    const animate = () => {
      x += vx * 0.016;
      y += vy * 0.016;
      vy += gravity * 0.016;
      
      confetti.style.transform = `translate(${x}px, ${y}px)`;
      confetti.style.opacity = Math.max(0, 1 - y / 300);
      
      if (y < 300 && confetti.parentNode) {
        requestAnimationFrame(animate);
      } else if (confetti.parentNode) {
        confetti.parentNode.removeChild(confetti);
      }
    };
    
    requestAnimationFrame(animate);
  }
}

function renderButtons() {
  const container = document.getElementById('animal-buttons');
  container.innerHTML = '';
  animals.forEach((animal, idx) => {
    const btn = document.createElement('button');
    btn.className = 'animal-btn';
    btn.innerHTML = `<img src="${animal.img}" alt="${animal[currentLang]}" class="animal-img"><span>${animal[currentLang]}</span>`;
    btn.onclick = () => {
      btn.classList.add('selected');
      createSoundEffect(btn);
      createConfetti(btn);
      playSound(animal.sound, btn);
    };
    container.appendChild(btn);
  });
}

function playSound(soundPath, btn) {
  const audio = new Audio(soundPath);
  audio.volume = 0.7; // Volume al 70%
  
  audio.play().catch(error => {
    console.log('Errore nella riproduzione audio:', error);
  });
  
  audio.onended = () => {
    if (btn) btn.classList.remove('selected');
  };
  
  // Fallback nel caso l'audio non finisca
  setTimeout(() => {
    if (btn) btn.classList.remove('selected');
  }, 3000);
}

document.getElementById('langSwitch').addEventListener('change', function() {
  currentLang = this.checked ? 'en' : 'it';
  document.getElementById('switchLabel').textContent = this.checked ? 'English' : 'Italiano';
  renderButtons();
});

// Inizializza l'applicazione
window.onload = () => {
  createParticles();
  renderButtons();
  
  // Aggiungi un titolo dinamico
  const title = document.querySelector('h1');
  const messages = {
    it: ['🌾 Fattoria degli Animali 🐄', '🎵 Ascolta i loro versi! 🎵', '🌈 Divertiti e impara! 🌈'],
    en: ['🌾 Animal Farm 🐄', '🎵 Listen to their sounds! 🎵', '🌈 Have fun and learn! 🌈']
  };
  
  let messageIndex = 0;
  
  setInterval(() => {
    title.textContent = messages[currentLang][messageIndex];
    messageIndex = (messageIndex + 1) % messages[currentLang].length;
  }, 4000);
  
  // Registra il Service Worker per PWA
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('./sw.js')
        .then(function(registration) {
          console.log('Service Worker registrato con successo:', registration.scope);
        })
        .catch(function(error) {
          console.log('Registrazione Service Worker fallita:', error);
        });
    });
  }
  
  // Gestione parametri URL per shortcuts
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  if (langParam === 'en') {
    document.getElementById('langSwitch').checked = true;
    currentLang = 'en';
    document.getElementById('switchLabel').textContent = 'English';
  }
};
