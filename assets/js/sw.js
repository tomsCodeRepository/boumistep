

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


// // Listen for request events
// self.addEventListener('fetch', function (event) {
//
//     // Get the request
//     let request = event.request;
//
//     // Bug fix
//     // https://stackoverflow.com/a/49719964
//     if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') return;
//
//     // HTML files
//     // Network-first
//     if (request.headers.get('Accept').includes('text/html')) {
//         // Handle HTML files...
//         return;
//     }
//
//     // CSS & JavaScript
//     // Offline-first
//     if (request.headers.get('Accept').includes('text/css') || request.headers.get('Accept').includes('text/javascript')) {
//         // Handle CSS and JavaScript files...
//         return;
//     }
//
//     // Images
//     // Offline-first
//     if (request.headers.get('Accept').includes('image')) {
//         // Handle images...
//     }
//
// });


