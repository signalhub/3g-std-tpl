module.exports = function(grunt) {
    return {
        options: {
            reporter: require('jshint-stylish')
        },
        main: [
            grunt.paths.src + '**/*.js'
        ]
    }
};