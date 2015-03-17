module.exports = function(grunt) {
    return {
        all: {
            files: [
                {
                    expand: true,
                    cwd: grunt.paths.src,
                    src: [
                        grunt.get_project_path(grunt.paths.images, 'any', '*.svg')
                    ],
                    dest: grunt.paths.static
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