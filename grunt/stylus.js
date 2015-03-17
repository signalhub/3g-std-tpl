module.exports = function(grunt) {
    return {
        compile: {
            expand: true,
            cwd: grunt.get_root_path('src'),
            src: grunt.get_project_path('styles', 'direct', 'app.styl'),
            dest: grunt.get_root_path('static'),
            ext: '.css'
        },
        options: {
            compress: false,
            'include css': true
        }
    }
};