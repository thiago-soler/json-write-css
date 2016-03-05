'use strict';

;(function () {

	var _merge_ = require('merge'),
		_autoprefixer_ = require('autoprefixer'),
		_postcss_ = require('postcss'),
		_cssmin_ = require('cssmin'),
		$private = {},
		_fs_ = require("fs"),
  	_path_ = require("path");

  function _readDirectories (srcPath) {

    var result = _fs_.readdirSync(srcPath);

    return result;

  }

  function _concatPath (srcPath, file) {

    var result = _path_.join(srcPath, file);

    return result;

  }

  function _checkFileFormat (file) {

    var result = _fs_.statSync(file).isFile()

    if (_path_.extname(file) !== '.json') {

      console.error(' ');
      console.error("ERROR: (%s) - %s", file, 'Existem arquivos que nao sao JSON neste diretorio. Os mesmos nao serao parseados.')
      console.error(' ');

      return false;

    } else {

      return result;

    }

  }

  function _jsonMerge (file, fileMerge) {

    var json = JSON.parse(_fs_.readFileSync(file));

    fileMerge = _merge_.recursive(true, fileMerge, json);

    return fileMerge;

  }

	function _readFiles (paths) {

		var listDestPaths = Object.keys(paths);

    function iterator (listSrcPaths) {

      var files = [],
          fileMerge = {};

      listSrcPaths.map(function (srcPath) {

        files = _readDirectories(srcPath);

        files.map(function (file) {

          return _concatPath(srcPath, file);
        
        }).filter(function (file) {
            
          return _checkFileFormat(file);

        }).forEach(function (file) {

          return fileMerge = _jsonMerge(file, fileMerge);

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

      _fs_.writeFile(dest, resultFile.json);

    });

	}

	function Core (settings) {

    var readFiles = _readFiles(settings.files);

		return readFiles;

	}

	module.exports = {
		
		init: function (settings) {

			var core = new Core(settings);

			return core;

		}
	};

})();

var mock = {
    settingsA: {
      files: {
        'example/out/scene1.css': ['./example/src/exampleA/', './example/src/exampleB'],
        'example/out/scene2.css': ['./example/src/exampleB']
      }
    },
    settingsB: {
      files: {
        'example/out/scene1.css': ['./exampleError/']
      }
    }
  };


var jsonWriteCss = require('./index.js').init(mock.settingsB);

console.dir(jsonWriteCss);