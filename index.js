'use strict';

;(function () {

	var _merge_ = require('merge'),
		_autoprefixer_ = require('autoprefixer'),
		_postcss_ = require('postcss'),
		_cssmin_ = require('cssmin'),
		$private = {},
		_fs_ = require("fs"),
  	_path_ = require("path");

	function _readFiles (paths) {

		var listDestPaths = Object.keys(paths);

    function iterator (listSrcPaths) {

      var files = [],
          fileMerge = {};

      listSrcPaths.map(function (srcPath) {

        files = _fs_.readdirSync(srcPath);

        files.map(function (file) {

          var result = _path_.join(srcPath, file);

          return result;
        
        }).filter(function (file) {
            
          var result = _fs_.statSync(file).isFile()

          if (_path_.extname(file) !== '.json') {

            console.error(' ');
            console.error("ERROR: (%s) - %s", file, 'Existem arquivos que nao sao JSON neste diretorio. Os mesmos nao serao parseados.')
            console.error(' ');

            return false;

          } else {

            return result;

          }
              

        }).forEach(function (file) {

          var json = JSON.parse(_fs_.readFileSync(file));

          fileMerge = _merge_.recursive(true, fileMerge, json);

          return fileMerge;

        });

      });
      
      return fileMerge;
      
    }

    listDestPaths.map(function (dest) {

      var resultFile = {
            dest: dest,
            json: {}
          };

      resultFile.json = iterator(paths[dest]);

    });



	}

	function Core (settings) {

    var readFiles = _readFiles(settings.files);

		this.test = function (a) {
			var b = a + 1;

			return b;
		};

	}

	$private.readFiles = _readFiles;

	module.exports = {
		
		init: function (settings) {

			var core = new Core(settings);

			core.__testonly__ = $private;
			
			return core;

		}
	};

})();