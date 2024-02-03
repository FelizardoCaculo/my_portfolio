const myPortfolioFc = "my_portfolio_fc";
const assets = [
    "/",
    "/src/assets/images/image9.webp",
    "/src/assets/images/image18.webp",
    "/src/assets/images/image20.webp",
    "/src/assets/icons/icon-72x72.png",
    "/src/assets/icons/icon-96x96.png",
    "/src/assets/icons/icon-128x128.png",
    "/src/assets/icons/icon-144x144.png",
    "/src/assets/icons/icon-152x152.png",
    "/src/assets/icons/icon-192x192.png",
    "/src/assets/icons/maskable_icon.png",
    "/src/assets/icons/icon-384x384.png",
    "/src/assets/icons/icon-512x512.png",
    "/manifest.json",
    "/src/assets/css/style.css",
    "/src/assets/javascript/main.js",
    "/src/assets/pages/portuguese.html"
]
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(myPortfolioFc).then((cache) => {
            return cache.addAll(assets)
        })
    );
});
this.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request).then((response) => {
                let responseClone = response.clone();
                caches.open(myPortfolioFc).then((cache) => {
                    cache.put(event.request, responseClone);
                    return response;
                })
            });
        })
    );
});