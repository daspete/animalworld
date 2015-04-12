define([
    
], function(
    
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

            onAnimalButtonClick: function(e){
                var currentAnimal = $(e.currentTarget).data('animal');

                this.playAudio(currentAnimal);
            },

            playAudio: function(currentAnimal){
                alert(currentAnimal);
                if(this.audio !== null){
                    this.audio.pause();
                }
                this.audio = new Media('assets/audio/animals/' + currentAnimal + '.mp3');
                this.audio.play();
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