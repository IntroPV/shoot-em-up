module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: './deploy'
                }
            }
        },
        concat: {
            dist: {
                src: [
                    "node_modules/phaser-ce/build/phaser.min.js",
                    "src/lib/**/*.js",
                    "src/game/**/*.js",
                    "src/main.js"
                ],
                dest: 'deploy/js/<%= pkg.name %>.js'
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: 'node_modules/phaser-ce/build/',
                src: 'phaser.map',
                dest: 'deploy/js/',
            },
        },
        watch: {
            files: 'src/**/*.js',
            tasks: ['concat']
        },
        open: {
            dev: {
                path: 'http://localhost:8080/index.html'
            }
        }
    });

    grunt.registerTask('default', ['concat', 'connect', 'copy', 'open', 'watch']);

}