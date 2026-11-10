

console.log('Hello depuis le service worker !')

self.addEventListener('install', (e)=>{
    console.log('install', e);
})

self.addEventListener('activate', (e)=>{
    console.log('activate: ', e)
})

// self.addEventListener('fetch', (e)=>{
//     console.log('fetch', e.request.url);
// });


//lors de l'installation
self.addEventListener('install' ,evt =>{
    console.log('install evt',evt);

})


//capture des events
self.addEventListener('fetch' ,evt =>{
    console.log('events captures : ');
    console.log('fetch evt sur url' ,evt.request.url);

})


