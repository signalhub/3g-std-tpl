var _ = require('underscore');

module.exports = function (grunt) {
    require('time-grunt')(grunt);


    grunt.paths = grunt.file.readJSON('package.json').paths;
    grunt.path_key = '$path$';
    grunt.paths_patterns = {
        any:'**/' + grunt.path_key + '**/',
        direct:'**/' + grunt.path_key + '/',
        exclude:'!**/' + grunt.path_key + '**/',
        free:'**/'
    };
    grunt.get_project_path = function(key, type, file_name) {
        type = type || 'any';
        file_name = file_name || '';

        var path = '';
        if(!_.isArray(key)) {
            key = [key];
        }
        for (var i = 0; i < key.length; i++) {
            path += grunt.paths[key];
        }
        return grunt.paths_patterns[type].replace(grunt.path_key, path) + file_name;
    };

    grunt.get_root_path = function(key) {
        var path = '';
        if(!_.isArray(key)) {
            key = [key];
        }
        for (var i = 0; i < key.length; i++) {
            path += grunt.paths[key];
        }
        return grunt.paths.root + path;
    };


    require('load-grunt-config')(grunt, {
        jitGrunt: true,
        pkg: grunt.file.readJSON('package.json')
    });
};