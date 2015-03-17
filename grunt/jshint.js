module.exports = function(grunt) {
    return {
        options: {
            reporter: require('jshint-stylish')
        },
        main: [
            grunt.get_root_path('src') + grunt.get_project_path('', 'free', '*.js')
        ]
    }
};