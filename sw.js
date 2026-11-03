const V="wl-lp-p6-v1";
const CORE=["./","index.html","app.js","manifest.webmanifest","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png","data/u5.js","data/u6.js","data/u7.js","media.html","media.js","data/m5.js"];
const FONT_HOSTS=["fonts.googleapis.com","fonts.gstatic.com"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  const r=e.request;if(r.method!=="GET")return;
  const u=new URL(r.url);
  if(FONT_HOSTS.includes(u.hostname)){
    e.respondWith(caches.match(r).then(m=>m||fetch(r).then(x=>{if(x.ok||x.type==="opaque"){const c=x.clone();caches.open(V).then(ca=>ca.put(r,c))}return x})));
    return}
  if(u.origin!==location.origin)return;
  e.respondWith(fetch(r).then(x=>{if(x.ok){const c=x.clone();caches.open(V).then(ca=>ca.put(r,c))}return x})
    .catch(()=>caches.match(r).then(m=>m||caches.match("index.html"))));
});
