module.exports = function(grunt) {
    return {
        all: {
            files: [{
                expand: true,
                cwd: grunt.paths.src,
                src: [grunt.get_project_path(grunt.paths.images, 'any', '*.{png,jpg,gif}')],
                dest: grunt.paths.static
            }]
        }
    }
};