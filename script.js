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
  {it: 'Canguro', en: 'Kangaroo', img: 'img/kangaroo.png', sound: 'sounds/kangaroo.mp3'},
  {it: 'Koala', en: 'Koala', img: 'img/koala.png', sound: 'sounds/koala.mp3'},
  {it: 'Panda', en: 'Panda', img: 'img/panda.png', sound: 'sounds/panda.mp3'},
  {it: 'Scimmia', en: 'Monkey', img: 'img/monkey.png', sound: 'sounds/monkey.mp3'},
  {it: 'Ippopotamo', en: 'Hippo', img: 'img/hippo.png', sound: 'sounds/hippo.mp3'},
  {it: 'Rinoceronte', en: 'Rhino', img: 'img/rhino.png', sound: 'sounds/rhino.mp3'},
  {it: 'Coccodrillo', en: 'Crocodile', img: 'img/crocodile.png', sound: 'sounds/crocodile.mp3'},
  {it: 'Serpente', en: 'Snake', img: 'img/snake.png', sound: 'sounds/snake.mp3'},
  {it: 'Tartaruga', en: 'Turtle', img: 'img/turtle.png', sound: 'sounds/turtle.mp3'},
  {it: 'Foca', en: 'Seal', img: 'img/seal.png', sound: 'sounds/seal.mp3'},
  {it: 'Delfino', en: 'Dolphin', img: 'img/dolphin.png', sound: 'sounds/dolphin.mp3'},
  {it: 'Balena', en: 'Whale', img: 'img/whale.png', sound: 'sounds/whale.mp3'},
  {it: 'Squalo', en: 'Shark', img: 'img/shark.png', sound: 'sounds/shark.mp3'},
  {it: 'Pinguino', en: 'Penguin', img: 'img/penguin.png', sound: 'sounds/penguin.mp3'},
  {it: 'Aquila', en: 'Eagle', img: 'img/eagle.png', sound: 'sounds/eagle.mp3'},
  {it: 'Falco', en: 'Falcon', img: 'img/falcon.png', sound: 'sounds/falcon.mp3'},
  {it: 'Gufo', en: 'Owl', img: 'img/owl.png', sound: 'sounds/owl.mp3'},
  {it: 'Corvo', en: 'Crow', img: 'img/crow.png', sound: 'sounds/crow.mp3'},
  {it: 'Fenicottero', en: 'Flamingo', img: 'img/flamingo.png', sound: 'sounds/flamingo.mp3'},
  {it: 'Cigno', en: 'Swan', img: 'img/swan.png', sound: 'sounds/swan.mp3'},
  {it: 'Colomba', en: 'Dove', img: 'img/dove.png', sound: 'sounds/dove.mp3'},
  {it: 'Toro', en: 'Bull', img: 'img/bull.png', sound: 'sounds/bull.mp3'},
  {it: 'Pipistrello', en: 'Bat', img: 'img/bat.png', sound: 'sounds/bat.mp3'},
  {it: 'Gorilla', en: 'Gorilla', img: 'img/gorilla.png', sound: 'sounds/gorilla.mp3'},
];

let currentLang = 'it';

function renderButtons() {
  const container = document.getElementById('animal-buttons');
  container.innerHTML = '';
  animals.forEach((animal, idx) => {
    const btn = document.createElement('button');
    btn.className = 'animal-btn';
    btn.innerHTML = `<img src="${animal.img}" alt="${animal[currentLang]}" class="animal-img"><span>${animal[currentLang]}</span>`;
    btn.onclick = () => {
      btn.classList.add('selected');
      playSound(animal.sound, btn);
    };
    container.appendChild(btn);
  });
}

function playSound(soundPath, btn) {
  const audio = new Audio(soundPath);
  audio.play();
  audio.onended = () => {
    if (btn) btn.classList.remove('selected');
  };
}

document.getElementById('langSwitch').addEventListener('change', function() {
  currentLang = this.checked ? 'en' : 'it';
  document.getElementById('switchLabel').textContent = this.checked ? 'English' : 'Italiano';
  renderButtons();
});

window.onload = renderButtons;
