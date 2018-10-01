var cachename="pwa";
var filescache=[
  'index.html',
  'resumed.html',
  'get.js',
  'resumed.css'
]
self.addEventListener('install',function(e){
  console.log("installed successfully....");
  e.waitUntil(
    caches.open(cachename).then(function(ca){
      console.log("catching files from cache");
       return ca.addAll(filescache);
    })
  )
});
self.addEventListener('activate',function(e){
  console.log("iactivated successfully....");
  e.waitUntil(
    caches.keys().then(function(c){
      return Promise.all(c.map(thiscache){
        if(thiscache !==cachename){
          return caches.delete(thiscache);
       console.log("serviceWorker removing files");
      }
    })
  })
)
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {

        if (response) {
          return response;
        }

        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            var responseToCache = response.clone();

            caches.open(cachename)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});
