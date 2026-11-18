'use strict';
const CACHE = 'interval-bolt-shell-v1';
const BASE = self.registration.scope;
const files = ['index.html','manifest.webmanifest','icon-192.png','icon-512.png'];
const home = new URL('index.html',BASE).href;

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(files.map(file=>new URL(file,BASE).href))));
});
self.addEventListener('activate',event=>{
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch',event=>{
  const url=new URL(event.request.url);
  if (event.request.method!=='GET'||!url.href.startsWith(BASE)) return;
  if (event.request.mode==='navigate') {
    event.respondWith(fetch(event.request).catch(()=>caches.open(CACHE).then(cache=>cache.match(home))));
  } else if (files.includes(url.pathname.slice(new URL(BASE).pathname.length))) {
    event.respondWith(caches.open(CACHE).then(async cache=>await cache.match(event.request)||fetch(event.request)));
  }
});
