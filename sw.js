const CACHE_NAME = "pwa-counter-v3";
const assetsToCache = [
  "./",
  "./index.html",
  "./assets/css/style.css",
  "./assets/js/app.js",
  "./manifest.json",
  "./assets/images/chilli.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Using individual cache.add calls with fallback logging to pinpoint failures
      return Promise.all(
        assetsToCache.map((path) => {
          return cache.add(path).catch((err) => {
            console.error("Failed to cache:", path, err);
          });
        }),
      );
    }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});
