

self.addEventListener('fetch', event => {

    if ( event.request.url.includes('style.css') ) {

        let resp = fetch('img/main-patas-arriba.jpg');

        event.respondWith( resp );
    }
});