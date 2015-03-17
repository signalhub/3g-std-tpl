module.exports = function(grunt) {
    return {
        all: [
            grunt.paths.temp,
            grunt.paths.build,
            grunt.paths.static,
            grunt.paths.templates
        ]
    }
};