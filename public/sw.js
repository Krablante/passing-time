
const CACHE_NAME = 'memento-mori-cache-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html', // Often '/' maps to 'index.html', caching both for robustness
  // Removed source files that won't exist as-is after Vite build:
  // '/index.tsx',
  // '/App.tsx',
  // '/types.ts',
  '/manifest.json',
  '/favicon.ico',
  '/icon-192x192.png',
  '/icon-512x512.png',
  'https://cdn.tailwindcss.com'
  // Note: esm.sh URLs for react/react-dom are not cached here for simplicity,
  // browser's HTTP cache will handle them. For full offline, these would need specific URLs
  // or a Vite PWA plugin to manage hashed asset caching.
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        // Add all URLs to cache, but don't fail install if some fail (e.g. external CDN offline during install)
        const cachePromises = URLS_TO_CACHE.map(urlToCache => {
            return cache.add(urlToCache).catch(err => {
                console.warn(`Failed to cache ${urlToCache}: ${err}`);
            });
        });
        return Promise.all(cachePromises);
      })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', event => {
  // For navigation requests, try network first, then cache (online-first for HTML)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => caches.match(event.request))
        .then(response => response || caches.match('/index.html')) // Fallback to cached index.html
    );
    return;
  }

  // For other requests (assets), try cache first, then network (cache-first)
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Serve from cache
        }
        return fetch(event.request).then(
          networkResponse => {
            // Optionally, cache newly fetched resources if needed
            // A more robust solution for Vite would involve a PWA plugin
            // to handle caching of hashed assets.
            // if (networkResponse && networkResponse.status === 200 &&
            //     !URLS_TO_CACHE.includes(event.request.url) && // Example: Don't re-cache already defined static assets
            //      event.request.url.startsWith(self.location.origin) // Cache only own-origin assets
            // ) {
            //   const responseToCache = networkResponse.clone();
            //   caches.open(CACHE_NAME).then(cache => {
            //     cache.put(event.request, responseToCache);
            //   });
            // }
            return networkResponse; // Serve from network
          }
        ).catch(error => {
          console.error('Fetching failed:', error);
          // You could return a custom offline fallback for specific asset types here
        });
      })
  );
});