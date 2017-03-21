module.exports = grunt => {
    grunt.loadNpmTasks('grunt-screeps');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    const settings = grunt.file.readJSON('settings.json');

    grunt.initConfig({
        screeps: {
            options: {
                email: settings.email,
                password: settings.password,
                branch: settings.branch,
                ptr: false
            },
            dist: {
                src: ['dist/*.js']
            }
        },

        watch: {
            scripts: {
                files: ['src/**/*.js'],
                tasks: ['clean','copy','screeps']
            },
        },

        copy: {
            screeps: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: '**',
                    dest: 'dist/',
                    filter: 'isFile',
                    rename: (dest, src) => dest + src.replace(/\//g,'.')
                }]
            },
        },

        clean: {
            'dist': ['dist']
        }
    });

    grunt.registerTask('default', ['clean','copy','screeps']);
};
