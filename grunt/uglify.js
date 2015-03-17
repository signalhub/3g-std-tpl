module.exports = function(grunt) {
    return {
        app: {
            expand: true,
            cwd: grunt.paths.static,
            src: grunt.get_project_path(grunt.paths.code, 'any', '*.js'),
            dest: grunt.paths.static,
            ext: '.min.js'
        }
    }
};