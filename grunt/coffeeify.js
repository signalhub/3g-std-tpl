module.exports = function(grunt) {
    return {
        all: {
            expand: true,
            cwd: grunt.get_root_path('src'),
            src: [
                grunt.get_project_path('code', 'direct', 'main.js')
            ],
            dest: grunt.get_root_path('static')
        }
    }
};