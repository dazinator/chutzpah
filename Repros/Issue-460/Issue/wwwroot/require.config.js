var require = {
    baseUrl: "/",
    paths: {
        "jquery": "/lib/jquery/dist/jquery",
        "bootstrap": "/lib/bootstrap/dist/js/bootstrap"
    },
    shim: {
        "bootstrap": { deps: ["jquery"] }
    }
};