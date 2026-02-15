const cacheName = 'wpt-v1';
const assets = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json'
];

// ဖိုင်တွေကို သိမ်းဆည်းခြင်း (Install event)
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// အင်တာနက် မရှိရင် သိမ်းထားတဲ့ ဖိုင်တွေကို ထုတ်ပေးခြင်း (Fetch event)
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});