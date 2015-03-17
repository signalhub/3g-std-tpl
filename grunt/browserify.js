module.exports = function(grunt) {
    return {
        all: {
            expand: true,
            cwd: grunt.paths.src,
            src: [
                grunt.get_project_path(grunt.paths.code, 'direct', 'main.js')
            ],
            dest: grunt.paths.static
        }
    }
};