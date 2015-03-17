module.exports = function(grunt) {
    return {
        options: {
            keepSpecialComments: 0
        },
        app: {
            expand: true,
            cwd: grunt.paths.static,
            src: grunt.get_project_path(grunt.paths.styles, 'any', '*.css'),
            dest: grunt.paths.static,
            ext: '.min.css'
        }
    }
};