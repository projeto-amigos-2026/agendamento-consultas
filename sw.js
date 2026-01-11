self.addEventListener('install', (e) => {
  console.log('Service Worker Instalado');
});

self.addEventListener('fetch', (e) => {
  // Necessário para o navegador permitir a instalação
  e.respondWith(fetch(e.request));
});
