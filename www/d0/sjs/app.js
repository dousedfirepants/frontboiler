// Initialize the main Marionette Application
var Kso = new Marionette.Application();

// Set up the main layout
Kso.addRegions({
    headerRegion: '#mainhdr',
    mainRegion: '#main',
    footerRegion: '#mainftr',
    dialogRegion: Marionette.Region.Dialog.extend({
        el: '#main-dialog'
    })
});

// History helpers
Kso.navigate = function (route, options) {
    options || (options = {});
    Backbone.history.navigate(route, options);
};
Kso.getCurrentRoute = function () {
    return Backbone.history.fragment;
};

// Entry point: Go to welcome screen if no other route in URL
Kso.on('initialize:after', function () {
    Backbone.history.start();

    if (this.getCurrentRoute() === '') {
        Kso.trigger('welcome');
    }
});
