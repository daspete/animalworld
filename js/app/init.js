if (typeof console === 'undefined' || typeof console.log === 'undefined') {
    console = {
        log: function(o){},
        dir: function(o){}
    };
}
 
if(Function.prototype.bind){
    log=Function.prototype.bind.call(console.log, console);
    dir=Function.prototype.bind.call(console.dir, console);
}else{
    log=function(){
        Function.prototype.apply.call(console.log, console, arguments);
    }
    dir=function(){
        Function.prototype.apply.call(console.dir, console, arguments);
    }
}


require.config({

    urlArgs: 'cache='+(new Date()).getTime(),

    baseUrl: 'js/app',

    paths: {
        jquery: '../../vendor/jquery/dist/jquery',
        
        TweenMax: '../../vendor/gsap/src/uncompressed/TweenMax',
        
        underscore: '../../vendor/underscore/underscore',
        backbone: '../../vendor/backbone/backbone'
        
    },

    shim: {
        jquery: {
            exports: '$'
        },

        TweenMax: {
            exports: 'TweenMax',
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            exports: 'Backbone',
            deps: [
                'underscore', 
                'jquery'
            ]
        }
    },

    deps: [
        'boot'
    ]
});