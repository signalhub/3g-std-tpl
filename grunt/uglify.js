module.exports = function(grunt) {
    return {
        app: {
            expand: true,
            cwd: grunt.get_root_path('static'),
            src: grunt.get_project_path('code', 'any', '*.js'),
            dest: grunt.get_root_path('static'),
            ext: '.min.js'
        }
    }
};