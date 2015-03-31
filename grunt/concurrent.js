module.exports = {
    options: {
        limit: 5
    },

    clean_and_check:[
        'clean:all',
        'jshint'
    ],
    manage_src_pub:[
        'stylus:compile',
        'coffeeify:all',
        'imagemin',
        'svgmin'
    ],
    manage_src_dev:[
        'stylus:compile',
        'coffeeify:all',
        //'jade:compile',
        'imagemin',
        'svgmin'
    ],
    production:[
        'uglify:app',
        'cssmin:app'
    ]
};