module.exports = function(grunt) {
    return {
        compile: {
            files: [{
                expand: true,
                cwd: grunt.paths.src,
                src: [
                    '**/*.jade',
                    grunt.get_project_path(grunt.paths.templates, 'exclude', '*.jade')
                ],
                dest: grunt.paths.static,
                ext: '.html'
            }]
        },
        options: {
            client: false,
            pretty: true,
            data: function (dest, src) {
                //подключить макрдаун конвертор
                /*if(src == 'src/worker_profile.jade') {
                 return require('../src/data/worker.json');
                 } else if(src == 'src/parent_profile.jade') {
                 return require('../src/data/parent.json');
                 }*/
            }
        }
    }
};