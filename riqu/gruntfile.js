module.exports = function(grunt) {
    "use strict";
  
    grunt.initConfig({
      copy: {
        build: {
          files: [
            // public html files
            {
              expand: true,
              cwd: "./public",
              src: ["**"],
              dest: "./wwwroot"
            },
            // source JS files, these come out of /client dir
            {
              expand: true,
              cwd: "./client/dist",
              src: ["**"],
              dest: "./wwwroot/js"
            }
          ]
        }
      },
      // destroy our public dist directory
      clean: {
        build: ['./wwwroot', './server/dist']
      },
      // ts build process 
      ts: {
        // server build process
        server: {
          files: [{
            src: ["./server/src/\*\*/\*.ts", "!./server/src/.baseDir.ts"],
            dest: "./server/dist"
          }],
          options: {
            module: "commonjs",
            target: "es6",
            sourceMap: false,
            rootDir: "./server/src"
          }
        },
        // client build process
        client: {
          files: [{
            src: ["./client/src/\*\*/\*.ts", "!./client/src/.baseDir.ts"],
            dest: "./client/dist"
          }],
          options: {
            module: "commonjs",
            target: "es6",
            sourceMap: true,
            rootDir: "./client/src"
          }
        }
      },
      watch: {
        ts: {
          files: ["./server/src/\*\*/\*.ts", "./client/src/\*\*/\*.ts"],
          tasks: ["ts"]
        },
        views: {
          files: ["./public/**"],
          tasks: ["copy"]
        }
      }
    });
  
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-clean");

    // fire our grunt tasks
    grunt.loadNpmTasks("grunt-ts");
  
    grunt.registerTask("default", [
      "clean",
      "copy",
      "ts"
    ]);
  
  };