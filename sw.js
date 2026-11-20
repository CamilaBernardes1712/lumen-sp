
const CACHE_NAME = 'lumen-sp-v3';

const ARQUIVOS_CACHE = [
  'index.html',
  'offline.html',
  'style.css',
  'script.js',
  'manifest.json',
  'icons/icon-192.png',
  'icons/icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ARQUIVOS_CACHE);
    })
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((nomesCaches) => {
      return Promise.all(
        nomesCaches
          .filter((nome) => nome !== CACHE_NAME)
          .map((nome) => caches.delete(nome))
      );
    })
  );
});



self.addEventListener('fetch', (e) => {

  // Não intercepta requisições de outros domínios
  if (new URL(e.request.url).origin !== self.location.origin) {
    return;
  }

  if (e.request.mode === 'navigate') {
    e.respondWith(
      caches.match(e.request).then((response) => {
        return response || fetch(e.request).catch(() => {
          return caches.match('offline.html');
        });
      })
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );

});



