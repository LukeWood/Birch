/*importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|svg)$/,
  new workbox.strategies.StaleWhileRevalidate({cacheName: "image-cache"})
);
workbox.routing.registerRoute(
  /^.*\.js$/,
  new workbox.strategies.NetworkOnly()
);
workbox.routing.registerRoute(
  /^.*\.css$/,
  new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.registerRoute(
  // Cache CSS files.
  /^.*\.woff$/,
  // Use cache but update in the background.
  new workbox.strategies.CacheFirst()
);

const OFFLINE_CACHE = 'offline-cache';
const FILES_TO_CACHE = [
  "/offline"
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(OFFLINE_CACHE).then(function(cache) {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate' || (event.request.method === 'GET') && (event.request.headers.get('accept').includes('text/html'))) {
    event.respondWith(
      fetch(event.request).catch(error => {
        return caches.match("/offline");
      })
    );
  }
});
*/
