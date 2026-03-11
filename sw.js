// Minimal service worker: no caching logic
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());