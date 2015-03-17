module.exports = function(grunt) {
    return {
        all: [
            grunt.get_root_path('temp'),
            grunt.get_root_path('static'),
            grunt.get_root_path('build'),
            grunt.get_root_path('templates')
        ]
    }
};