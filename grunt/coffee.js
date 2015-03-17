module.exports = function(grunt) {
    return {
        compile: {
            expand: true,
            cwd: grunt.get_root_path('src'),
            src: [
                grunt.get_project_path('code', 'any', '*.coffee')
            ],
            dest: grunt.get_root_path('temp'),
            ext: '.js'
        },
        options: {
            bare: true
        }
    }
};