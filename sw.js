const C='kotha-v1785330256';
const ASSETS=['./','./app.html','./index.html','./styles.css','./app.js','./data.js','./strokes.js',
  './manifest.webmanifest','./icon.svg','./icon-192.png','./apple-touch-icon.png','./icon-512.png'];
self.addEventListener('install',e=>{ self.skipWaiting();
  e.waitUntil(caches.open(C).then(c=>Promise.allSettled(ASSETS.map(a=>c.add(a))))); });
self.addEventListener('activate',e=>{ e.waitUntil(
  caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())); });
/* cache first, refresh in the background, so launch is instant even on a weak signal */
self.addEventListener('fetch',e=>{
  const r=e.request; if(r.method!=='GET' || new URL(r.url).origin!==location.origin) return;
  e.respondWith(caches.match(r).then(hit=>{
    const net=fetch(r).then(res=>{ const cp=res.clone();
      caches.open(C).then(c=>c.put(r,cp).catch(()=>{})); return res; }).catch(()=>hit);
    return hit||net;
  }));
});
