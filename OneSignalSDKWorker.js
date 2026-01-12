// OneSignal Service Worker (Self-Hosted Fallback)
// This imports the official worker but handles failures gracefully.

try {
    importScripts('https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js');
} catch (e) {
    console.warn("Primary import failed. Attempting fallback logic or ignoring.", e);
}

// Basic Service Worker logic to keep the PWA valid even if OneSignal fails
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});
