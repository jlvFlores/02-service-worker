

self.addEventListener('fetch', event => {

    const resp = fetch( event.request )
        .resp( resp => {
            return resp.ok ? resp : fetch('img/main.jpg');
        });

    event.respondWith( resp );
});