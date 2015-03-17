module.exports = function(grunt) {
    return {
        compile: {
            expand: true,
            cwd: grunt.paths.src,
            src: grunt.get_project_path(grunt.paths.styles, 'direct', 'app.styl'),
            dest: grunt.paths.static,
            ext: '.css'
        },
        options: {
            compress: false,
            'include css': true
        }
    }
};