module.exports=function(grunt){
    grunt.initConfig({
       
        requirejs: {
            app: {
                options: {
                    baseUrl: 'js/app', // APP BASE DIRECTORY
                    mainConfigFile: 'js/app/init.js', // THE FILE WHERE THE MODULES PATHS ARE DEFINED
                    name: 'init', // THE INITIALIZE FILE
                    out: 'js/builtapp/application.js', // THE OUTPUT FILE
                    generateSourceMaps: true,
                    preserveLicenseComments: false,
                    optimize: 'uglify2' // USE THE UGLIFY ALGO TO MINIFY THE JS
                }
            }
        }
        
    });
    
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    
    grunt.registerTask('default', [ 'requirejs' ]); //BUILD ALL

};