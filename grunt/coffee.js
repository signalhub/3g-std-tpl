module.exports = function(grunt) {
    return {
        compile: {
            expand: true,
            cwd: grunt.paths.src,
            src: [
                grunt.get_project_path(grunt.paths.code, 'any', '*.coffee')
            ],
            dest: grunt.paths.temp,
            ext: '.js'
        },
        options: {
            bare: true
        }
    }
};