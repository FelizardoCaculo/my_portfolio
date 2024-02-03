let portuguese = 'Olá, Seja bem vindo ao meu Portfólio, por favor Selecione o menú (Português) se deseja ver o conteúdo na língua Portuguesa.';
let english = 'Hello, Welcome to my Portfolio, please go to the menu and select (English) if you want to see the content in english linguage.';
alert(`${portuguese}\nClique o botão (ok) para Fechar Essa Menssagem! \n\n${english} \nClick (ok) to close this message! `);

navigator.serviceWorker.register('/serviceWorker.js').then(registration => {
    console.log('Service Worker resgistered');
    if(registration.installing){
        registration.installing.postMessage('Hi from your installing page');
    } else {
        err => {
            console.error('installing the worker failed!', err);
        }
    }
});
if('serviceWorker' in navigator){
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/serviceWorker.js')
            .then(res => console.log('Service is now registered'))
            .catch(err => console.log('Service Worker not registered', err));
    });
}