module.exports = function(grunt) {
    return {
        compile: {
            files: [{
                expand: true,
                cwd: grunt.get_root_path('src'),
                src: [
                    grunt.get_project_path('', 'free', '*.jade'),
                    grunt.get_project_path('templates', 'exclude', '*.jade')
                ],
                dest: grunt.get_root_path('static'),
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