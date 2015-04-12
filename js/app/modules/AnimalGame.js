define([
    'TweenMax'
], function(
    TweenMax
){
    function AnimalGame(settings){

        var defaults={

        };

        var animal_game={

            settings: {},

            DOM: {},

            audio: null,

            init: function(settings, defaults){
                _.bindAll.apply(_, [this].concat(_.functions(this)));
                
                $.extend(this.settings, defaults, settings);

                this.setup();
            },

            setup: function(){
                this.initDOM();
                this.initButtons();
                this.initAnimals();

                $(window).on('resize', this.onResize);
                $(window).resize();
            },

            initAnimals: function(){

            },

            initDOM: function(){
                this.DOM.$container = $(this.settings.container);
                this.DOM.$animalContainer = this.DOM.$container.find('.animals');
                this.DOM.$animalButtons = this.DOM.$animalContainer.find('.animal-button');
            },

            initButtons: function(){
                this.DOM.$animalButtons.on('click', this.onAnimalButtonClick);
            },

            onResize: function(){
                _.each(this.DOM.$animalButtons, function(button){
                    var $button = $(button);
                    var width = $button.width();
                    var headWidth = $button.find('.animal-element').find('.head').width();

                    TweenMax.set($button.find('.animal-element'), {
                        transformOrigin: '0 0',
                        scale: width / headWidth / 3
                    });
                });
            },

            onAnimalButtonClick: function(e){
                var currentAnimal = $(e.currentTarget).data('animal');

                this.playAudio(currentAnimal);
                this.animateAnimal(currentAnimal);
            },

            playAudio: function(currentAnimal){
                if(this.audio !== null){
                    this.audio.pause();
                }
                /*this.audio = new Media('/android_asset/www/assets/audio/animals/' + currentAnimal + '.mp3');
                this.audio.play();*/
            },

            animateAnimal: function(animal){
                if(animal === 'dog'){
                    var $animal = $('.animal[data-animal="dog"]');

                    var $head = $animal.find('.head');
                    var $tail = $animal.find('.tail');

                    TweenMax.set($head, {
                        rotation: 0
                    });
                    TweenMax.set($tail, {
                        rotation: 0
                    });

                    TweenMax.to($head, 1, {
                        transformOrigin: '80% 60%',
                        rotation: 20,
                        repeat: 1,
                        yoyo: true
                    });

                    TweenMax.to($tail, 0.2, {
                        transformOrigin: '0% 60%',
                        rotation: 20,
                        repeat: 11,
                        yoyo: true
                    });
                }
            }

        };

        if(typeof settings === 'undefined'){
            settings=defaults;
        }

        animal_game.init(settings, defaults);

        return animal_game;
    }

    return AnimalGame;
});