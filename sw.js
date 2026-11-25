
const CACHE_NAME = 'lumen-sp-v4';

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
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ARQUIVOS_CACHE);
    })
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((nomesCaches) => {
        return Promise.all(
          nomesCaches
            .filter((nome) => nome !== CACHE_NAME)
            .map((nome) => caches.delete(nome))
        );
      })
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  // Não intercepta requisições de outros domínios (Firebase, USP, fontes, etc.)
  if (new URL(e.request.url).origin !== self.location.origin) {
    return;
  }

  // Para navegação (abertura da página), busca sempre a versão mais recente online
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request)
        .then((response) => {
          const copia = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, copia));
          return response;
        })
        .catch(() => {
          return caches.match(e.request).then((cached) => cached || caches.match('offline.html'));
        })
    );
    return;
  }

  // Para arquivos estáticos, tenta rede primeiro para JS/CSS/JSON e cai no cache se offline
  const destino = e.request.destination;
  if (destino === 'script' || destino === 'style' || destino === 'manifest') {
    e.respondWith(
      fetch(e.request)
        .then((response) => {
          const copia = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, copia));
          return response;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // Demais recursos (imagens, ícones): Cache First com fallback na rede
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});