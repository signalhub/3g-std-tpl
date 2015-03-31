module.exports = function(grunt) {
    return {
        options: {
            spawn: false,
            livereload: true
        },

        code: {
            files: [
                grunt.get_root_path('src') + grunt.get_project_path('code', 'any', '*.{js,coffee}')
            ],
            tasks: [
                'newer:jshint',
                'coffeeify:all'
            ]
        },

        styles: {
            files: [
                grunt.get_root_path('src') + grunt.get_project_path('styles', 'any', '*.css'),
                grunt.get_root_path('src') + grunt.get_project_path('styles', 'any', '*.styl')
            ],
            tasks: [
                'stylus:compile',
                'autoprefixer'
            ]
        },

        copy_templates: {
            files: [
                grunt.get_root_path('src') + '**/*.jade'
            ],
            tasks: [
                'newer:copy:templates'
            ]
        },

        //compile_layouts: {
        //    files: [
        //        grunt.get_root_path('src') + '**/*.jade'
        //    ],
        //    tasks: [
        //        'jade:compile'
        //    ]
        //},

        img: {
            files: [
                grunt.get_root_path('src') + grunt.get_project_path('images', 'any', '*.{png,jpg,gif}')
            ],
            tasks: [
                'newer:imagemin'
            ]
        },

        svg: {
            files: [
                grunt.get_root_path('src') + grunt.get_project_path('images', 'any', '*.svg')
            ],
            tasks: [
                'newer:svgmin'
            ]
        }
    }
};