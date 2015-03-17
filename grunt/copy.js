module.exports = function(grunt) {
    return {
        bower: {
            files: [
                {
                    expand: true,
                    flatten: true,
                    src: [
                        'bower/modernizr/modernizr.js',
                        'bower/jquery/dist/jquery.js',
                        'bower/d3/d3.js'
                    ],
                    dest: grunt.paths.static + grunt.paths.code,
                    filter: 'isFile'
                }
            ]
        },
        fonts:{
            expand: true,
            cwd: grunt.paths.src,
            src: [
                grunt.get_project_path(grunt.paths.fonts)
            ],
            dest: grunt.paths.static
        },
        data:{
            expand: true,
            cwd: grunt.paths.src,
            src: [
                grunt.get_project_path(grunt.paths.data),
                grunt.get_project_path(grunt.paths.data + grunt.paths.layouts, 'exclude')
            ],
            dest: grunt.paths.static
        },
        all_static:{
            files: [
                {
                    expand: true,
                    cwd: grunt.paths.src,
                    src: [
                        grunt.get_project_path(grunt.paths.fonts),
                        grunt.get_project_path(grunt.paths.data),
                        grunt.get_project_path(grunt.paths.data + grunt.paths.layouts, 'exclude')
                    ],
                    dest: grunt.paths.static
                }
            ]
        },
        templates: {
            expand: true,
            cwd: grunt.paths.src,
            src: [
                '**/*.jade'
            ],
            dest: grunt.paths.templates
        }
    };
};
