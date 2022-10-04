

self.addEventListener('fetch', event => {

    if ( event.request.url.includes('styles.css') ) {
        event.respondWtih( null );
    } else {
        event.respondWtih( fetch( event.request ) );
    }
});