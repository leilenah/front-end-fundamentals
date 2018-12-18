module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    sourcemap: 'none'
                },
                files: [{
                    expand: 'true',
                    cwd: 'front-end-languages/css',
                    src: '*.scss',
                    dest: 'front-end-languages/css/compiled',
                    ext: '.css'
                }]
            }
        },

		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		}

    });

    // load tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // register tasks
    grunt.registerTask('default', [
        'sass',
        'watch'
    ]);
};
