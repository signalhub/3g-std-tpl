module.exports = function(grunt) {
    return {
        all: {
            files: [
                {
                    expand: true,
                    cwd: grunt.get_root_path('src'),
                    src: [
                        grunt.get_project_path('images', 'any', '*.svg')
                    ],
                    dest: grunt.get_root_path('static')
                }
            ]
        },
        options: {
            plugins: [
                {removeViewBox: true},               // don't remove the viewbox atribute from the SVG
                {removeUselessStrokeAndFill: true},  // don't remove Useless Strokes and Fills
                {removeEmptyAttrs: true}             // don't remove Empty Attributes from the SVG
            ]
        }
    }
};