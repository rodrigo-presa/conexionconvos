// Service Worker mínimo: no cachea nada, solo deja pasar los pedidos.
// Existe únicamente para que el navegador habilite "Instalar app".
self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => { self.clients.claim(); });
self.addEventListener('fetch', e => { e.respondWith(fetch(e.request)); });
