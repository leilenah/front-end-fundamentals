module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    sourcemap: 'none'
                },
                files: {
                    'core-languages/css/animations.css': 'core-languages/css/sass/animations.scss',
                    'core-languages/css/box-model.css': 'core-languages/css/sass/box-model.scss',
                    'core-languages/css/css3.css': 'core-languages/css/sass/css3.scss',
                    'core-languages/css/display.css': 'core-languages/css/sass/display.scss',
                    'core-languages/css/fonts.css': 'core-languages/css/sass/fonts.scss',
                    'core-languages/css/position.css': 'core-languages/css/sass/position.scss',
                    'core-languages/css/queries.css': 'core-languages/css/sass/queries.scss',
                    'core-languages/css/specificity.css': 'core-languages/css/sass/specificity.scss',
                    'core-languages/css/transform.css': 'core-languages/css/sass/transform.scss',
                    'core-languages/css/transitions.css': 'core-languages/css/sass/transitions.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['sass']);
};
