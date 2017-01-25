module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    useminPrepare: {
      html: 'index.html',
      options: {
        flow: {
          html: {
            steps: {
              js: ['concat']
            }
          }
        }
      }
    },
    wiredep: {
      task: {
          src: ['index.html']
        }
    },
    concat: {
      html: {
        src: ['.tmp/src/templates/templates.js','dist/app.js'],
        dest: 'release/principal.js',
      }
    },
    html2js: {
      options : {
        rename : function(module){
          return 'src/' + module;
        }
      },
      main: {
        src: ['src/template/**/*.html'],
        dest: '.tmp/src/templates/templates.js'
      },
    }
  });

  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-wiredep');

  grunt.registerTask('default', ['wiredep','html2js','useminPrepare','concat:generated','concat:html']);

};