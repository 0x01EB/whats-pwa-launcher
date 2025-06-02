// service-worker.js
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installed');
  // Forces the waiting service worker to become the active service worker.
  self.skipWaiting(); 
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activated');
  // Ensures that the service worker controls all clients immediately.
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // We're not doing any custom caching or routing here,
  // just letting the browser handle the network request directly.
  // This service worker primarily exists to enable PWA features like "Add to Home Screen".
});