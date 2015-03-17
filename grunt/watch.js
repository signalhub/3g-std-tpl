module.exports = function(grunt) {
    return {
        options: {
            spawn: false,
            livereload: true
        },

        code: {
            files: [
                grunt.paths.src + grunt.get_project_path(grunt.paths.code, 'any', '*.{js,coffee}')
            ],
            tasks: [
                'newer:jshint',
                'coffeeify:all'
            ]
        },

        styles: {
            files: [
                grunt.paths.src + grunt.get_project_path(grunt.paths.styles, 'any', '*.css'),
                grunt.paths.src + grunt.get_project_path(grunt.paths.styles, 'any', '*.styl')
            ],
            tasks: [
                'stylus:compile',
                'autoprefixer'
            ]
        },

        copy_templates: {
            files: [
                grunt.paths.src + '**/*.jade'
            ],
            tasks: [
                'newer:copy:templates'
            ]
        },

        compile_layouts: {
            files: [
                grunt.paths.src + '**/*.jade'
            ],
            tasks: [
                'jade:compile'
            ]
        },

        img: {
            files: [
                grunt.paths.src + grunt.get_project_path(grunt.paths.images, 'any', '*.{png,jpg,gif}')
            ],
            tasks: [
                'newer:imagemin'
            ]
        },

        svg: {
            files: [
                grunt.paths.src + grunt.get_project_path(grunt.paths.images, 'any', '*.svg')
            ],
            tasks: [
                'newer:svgmin'
            ]
        }
    }
};