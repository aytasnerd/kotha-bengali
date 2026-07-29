const C='kotha-v3';
const ASSETS=['./','./app.html','./index.html','./styles.css','./app.js','./data.js','./manifest.webmanifest','./icon.svg','./icon-192.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(ASSETS)).catch(()=>{}))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request; if(r.method!=='GET') return;
  e.respondWith(
    fetch(r).then(res=>{ const cp=res.clone(); caches.open(C).then(c=>c.put(r,cp).catch(()=>{})); return res; })
      .catch(()=>caches.match(r).then(m=>m||caches.match('./app.html')))
  );
});
