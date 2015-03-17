module.exports = function(grunt) {
    return {
        all: {
            files: [{
                expand: true,
                cwd: grunt.get_root_path('src'),
                src: [grunt.get_project_path('images', 'any', '*.{png,jpg,gif}')],
                dest: grunt.get_root_path('static')
            }]
        }
    }
};