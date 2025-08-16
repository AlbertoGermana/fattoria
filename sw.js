const CACHE_NAME = 'fattoria-animali-v1';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  // Immagini degli animali
  './img/dog.png',
  './img/cat.png',
  './img/cow.png',
  './img/horse.png',
  './img/sheep.png',
  './img/pig.png',
  './img/hen.png',
  './img/duck.png',
  './img/goat.png',
  './img/donkey.png',
  './img/fox.png',
  './img/wolf.png',
  './img/lion.png',
  './img/tiger.png',
  './img/elephant.png',
  './img/camel.png',
  './img/rhino.png',
  './img/bull.png',
  './img/crow.png',
  './img/owl.png',
  './img/eagle.png',
  './img/kangaroo.png',
  './img/crocodile.png',
  './img/gorilla.png',
  './img/hippo.png',
  './img/seal.png',
  './img/panda.png',
  './img/monkey.png',
  './img/turtle.png',
  './img/whale.png',
  './img/dolphin.png',
  './img/snake.png',
  './img/bee.png',
  // Suoni degli animali
  './sounds/dog.wav',
  './sounds/cat.mp3',
  './sounds/cow.mp3',
  './sounds/horse.mp3',
  './sounds/sheep.wav',
  './sounds/pig.mp3',
  './sounds/hen.mp3',
  './sounds/duck.mp3',
  './sounds/goat.mp3',
  './sounds/donkey.mp3',
  './sounds/fox.mp3',
  './sounds/wolf.wav',
  './sounds/lion.mp3',
  './sounds/tiger.wav',
  './sounds/elephant.mp3',
  './sounds/camel.mp3',
  './sounds/rhino.mp3',
  './sounds/bull.mp3',
  './sounds/crow.mp3',
  './sounds/owl.mp3',
  './sounds/eagle.wav',
  './sounds/kangaroo.mp3',
  './sounds/crocodile.mp3',
  './sounds/gorilla.mp3',
  './sounds/hippo.mp3',
  './sounds/seal.mp3',
  './sounds/panda.mp3',
  './sounds/monkey.mp3',
  './sounds/turtle.mp3',
  './sounds/whale.wav',
  './sounds/dolphin.wav',
  './sounds/snake.wav',
  './sounds/bee.mp3',
  // Font Google
  'https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700&display=swap'
];

// Installazione del Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache aperta');
        return cache.addAll(urlsToCache);
      })
  );
});

// Intercettazione delle richieste
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Restituisci la risorsa dalla cache se disponibile
        if (response) {
          return response;
        }
        
        // Altrimenti, effettua la richiesta alla rete
        return fetch(event.request).then(function(response) {
          // Controlla se abbiamo ricevuto una risposta valida
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clona la risposta
          var responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then(function(cache) {
              cache.put(event.request, responseToCache);
            });

          return response;
        }).catch(function() {
          // Se la rete non è disponibile, mostra una pagina offline personalizzata
          if (event.request.destination === 'document') {
            return caches.match('./index.html');
          }
        });
      })
  );
});

// Aggiornamento del Service Worker
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('Eliminazione cache vecchia:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Gestione dei messaggi
self.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
