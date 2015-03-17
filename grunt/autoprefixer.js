module.exports = function(grunt) {
    return {
        all:{
            expand: true,
            cwd: grunt.get_root_path('static'),
            src: [
                grunt.get_project_path('styles', 'any', '*.css')
            ],
            dest: grunt.get_root_path('static')
        }
    }
};