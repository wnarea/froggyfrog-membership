/**
 * Created by wilsonnarea on 12/14/16.
 */
module.exports = function(grunt) {

    grunt.initConfig({
        jshint : {
            files : ['lib/**/*js', 'models/**/*.js']
        },
        watch : {
            files: ['lib/**/*js', 'models/**/*.js'],
            tasks : ['jshint']
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
}