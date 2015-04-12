define([
    'backbone',
    'router/ApplicationRouter',
    'views/abstract/AbstractView'
], function(
    Backbone,
    ApplicationRouter,
    AbstractView
){
    var ApplicationView=AbstractView.extend({

        el: '.app',

        router: null,

        initialize: function(){
            this.cid='application_view';

            AbstractView.prototype.initialize.call(this);

            this.render();
        },
        
        render: function(){
            document.addEventListener('deviceready', function(){
                alert('juhu');
            }, false);
            this.initRouter();
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