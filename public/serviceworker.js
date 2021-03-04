const CACHE_NAME = "version-1";
const urlsToCache = [
  "./",
  "./index.html",
  "./offline.html",
  "./static/js/bundle.js",
  "./static/js/vendors~main.chunk.js",
  "./static/js/main.chunk.js",
  "./static/js/0.chunk.js",
  "./static/js/3.chunk.js",
  "./static/js/1.chunk.js",
  "./static/js/2.chunk.js",
  "./static/media/bgImg1.9784f425.png",
  "./static/media/bgImg2.2f2b81e9.png",
  "./static/media/Noise.bc8c1f21.png",
  "./static/media/gothic.b194aa2b.ttf",
  "./images/logo.png",
  "./manifest.json",
  "./images/icon-192x192.png"
];

const self = this;

// Install SW
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");

      return cache.addAll(urlsToCache);
    })
  );
});

// Listen for requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cacheRes) => {
      return cacheRes || fetch(event.request);
    })
  );
});

// Activate the SW
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
