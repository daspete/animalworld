define([
    'backbone',
    'router/ApplicationRouter',
    'views/abstract/AbstractView',
    'modules/AnimalGame'
], function(
    Backbone,
    ApplicationRouter,
    AbstractView,
    AnimalGame
){
    var ApplicationView=AbstractView.extend({

        el: '.app',

        router: null,

        animal_game: null,

        initialize: function(){
            this.cid='application_view';

            AbstractView.prototype.initialize.call(this);

            this.render();
        },
        
        render: function(){
            document.addEventListener('deviceready', this.onDeviceReady, false);
            this.onDeviceReady();
            
            this.initRouter();
        },

        onDeviceReady: function(){
            this.animal_game = new AnimalGame({
                container: this.el
            });
        },


        setURL: function(url){
            Backbone.history.navigate('#'+url);
        },

        initRouter: function(){
            this.router=new ApplicationRouter({ view: this });
            Backbone.history.start({ pushState: false });
        }
    });

    return ApplicationView;
});