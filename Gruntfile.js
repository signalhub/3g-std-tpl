module.exports = function (grunt) {
    require('time-grunt')(grunt);


    grunt.paths = grunt.file.readJSON('package.json').paths;
    grunt.get_project_path = function(path, type, file_name) {
        type = type || 'any';
        file_name = file_name || '';

        var path_key = '$path$';
        var patterns = {
            any:'**/' + path_key + '**/',
            direct:'**/' + path_key + '/',
            exclude:'!**/' + path_key + '**/'
        };
        return patterns[type].replace(path_key, path) + file_name;
    };
    require('load-grunt-config')(grunt, {
        jitGrunt: true,
        pkg: grunt.file.readJSON('package.json')
    });
};