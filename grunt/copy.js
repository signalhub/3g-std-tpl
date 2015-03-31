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
                        'bower/d3/d3.js',
                        'bower/REM-unit-polyfill/js/rem.js'
                    ],
                    dest: grunt.get_root_path(['static', 'code']),
                    filter: 'isFile'
                }
            ]
        },
        fonts:{
            expand: true,
            cwd: grunt.get_root_path('src'),
            src: [
                grunt.get_project_path('fonts', 'any')
            ],
            dest: grunt.get_root_path('static')
        },
        data:{
            expand: true,
            cwd: grunt.get_root_path('src'),
            src: [
                grunt.get_project_path('data', 'any'),
                grunt.get_project_path(['data', 'layouts'], 'exclude')
            ],
            dest: grunt.get_root_path('static')
        },
        all_static:{
            files: [
                {
                    expand: true,
                    cwd: grunt.get_root_path('src'),
                    src: [
                        grunt.get_project_path('fonts'),
                        grunt.get_project_path('data'),
                        grunt.get_project_path(['data', 'layouts'], 'exclude')
                    ],
                    dest: grunt.get_root_path('static')
                }
            ]
        },
        templates: {
            expand: true,
            cwd: grunt.get_root_path('src'),
            src: [
                grunt.get_project_path('', 'free', '*.jade')
            ],
            dest: grunt.get_root_path('templates')
        }
    };
};
